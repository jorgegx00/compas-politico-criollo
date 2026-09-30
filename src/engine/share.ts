import { AXIS_IDS } from '../data/axes.ts';
import type { Scores } from '../data/types.ts';
import { isMode, type Mode } from './modes.ts';

export const SHARE_VERSION = 2;

/**
 * Enlaces v=1 (modos de 32/64/128/256 preguntas, hasta el 2026-09-30): los puntajes siguen siendo válidos y el modo se
 * lleva a su equivalente actual, así que un resultado viejo de 64 preguntas se muestra como "test de 70 preguntas".
 */
const LEGACY_V1_MODES: ReadonlyMap<number, Mode> = new Map([
  [32, 40],
  [64, 70],
  [128, 130],
  [256, 260],
]);

/** 12 bytes → 16 caracteres base64url sin relleno. */
const PAYLOAD_PATTERN = /^[A-Za-z0-9_-]{16}$/;

export type DecodedResult = { ok: true; scores: Scores; mode: Mode } | { ok: false; error: string };

function toBase64Url(bytes: Uint8Array): string {
  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function fromBase64Url(text: string): Uint8Array {
  const binary = atob(text.replace(/-/g, '+').replace(/_/g, '/'));
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}

/** Query del enlace compartible: `v=2&m=70&r=<base64url de 12 bytes (puntaje redondeado + 100)>`. */
export function encodeResult(scores: Scores, mode: Mode): string {
  const bytes = Uint8Array.from(AXIS_IDS, (axis) => Math.min(100, Math.max(-100, Math.round(scores[axis]))) + 100);
  return `v=${SHARE_VERSION}&m=${mode}&r=${toBase64Url(bytes)}`;
}

export function decodeResult(query: string | URLSearchParams): DecodedResult {
  const params = typeof query === 'string' ? new URLSearchParams(query.replace(/^\?/, '')) : query;

  const version = params.get('v');
  if (version !== String(SHARE_VERSION) && version !== '1') {
    return { ok: false, error: 'Este enlace es de una versión del test que no reconocemos.' };
  }

  const rawMode = Number(params.get('m'));
  const mode = version === '1' ? LEGACY_V1_MODES.get(rawMode) : isMode(rawMode) ? rawMode : undefined;
  if (mode === undefined) {
    return { ok: false, error: 'El modo del test indicado en el enlace no es válido.' };
  }

  const payload = params.get('r') ?? '';
  if (!PAYLOAD_PATTERN.test(payload)) {
    return { ok: false, error: 'El enlace está incompleto o dañado.' };
  }

  const bytes = fromBase64Url(payload);
  if (bytes.length !== AXIS_IDS.length) {
    return { ok: false, error: 'El enlace está incompleto o dañado.' };
  }
  if (bytes.some((byte) => byte > 200)) {
    return { ok: false, error: 'El enlace contiene puntajes fuera de rango.' };
  }

  const scores = Object.fromEntries(AXIS_IDS.map((axis, i) => [axis, bytes[i]! - 100])) as Scores;
  return { ok: true, scores, mode };
}
