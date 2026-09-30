import { describe, expect, it } from 'vitest';
import { decodeResult, encodeResult } from './share.ts';
import { scoresFrom } from './testing.ts';

const bytesToPayload = (bytes: number[]) =>
  btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

describe('share', () => {
  it('ida y vuelta de los 12 puntajes, incluidos −100, 0 y 100', () => {
    const scores = scoresFrom([-100, 0, 100, 37, -63, 99, -1, 1, 50, -50, 12, -88]);
    const query = encodeResult(scores, 64);
    expect(query).toMatch(/^v=1&m=64&r=[A-Za-z0-9_-]{16}$/);
    expect(decodeResult(query)).toEqual({ ok: true, scores, mode: 64 });
  });

  it('redondea y recorta los puntajes al codificar', () => {
    const decoded = decodeResult(encodeResult(scoresFrom([33.4, -33.6, 150, -150, 0, 0, 0, 0, 0, 0, 0, 0]), 32));
    expect(decoded.ok && [decoded.scores.eco, decoded.scores.soc, decoded.scores.mig, decoded.scores.ide]).toEqual([
      33, -34, 100, -100,
    ]);
  });

  it('acepta "?" inicial y URLSearchParams', () => {
    const query = encodeResult(scoresFrom(Array(12).fill(10)), 256);
    expect(decodeResult(`?${query}`).ok).toBe(true);
    expect(decodeResult(new URLSearchParams(query)).ok).toBe(true);
  });

  it('rechaza enlaces corruptos', () => {
    const good = bytesToPayload(Array(12).fill(100));
    const cases = [
      `v=2&m=64&r=${good}`, // versión desconocida
      `m=64&r=${good}`, // sin versión
      `v=1&m=48&r=${good}`, // modo inválido
      `v=1&r=${good}`, // sin modo
      'v=1&m=64', // sin puntajes
      `v=1&m=64&r=${good.slice(0, 12)}`, // longitud incorrecta
      `v=1&m=64&r=${good.slice(0, 15)}*`, // carácter inválido
      `v=1&m=64&r=${bytesToPayload([201, ...Array(11).fill(100)])}`, // fuera de rango
    ];
    for (const query of cases) {
      const result = decodeResult(query);
      expect(result.ok, query).toBe(false);
      expect(!result.ok && result.error.length > 0).toBe(true);
    }
  });
});
