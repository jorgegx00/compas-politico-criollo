import { describe, expect, it } from 'vitest';
import type { Question } from '../data/types.ts';
import { MODES, isMode, primaryAxis, questionsForMode } from './modes.ts';
import { syntheticBank } from './testing.ts';

// 12 ejes × (1, 1, 2, 4) = 12 / 24 / 48 / 96 preguntas por modo.
const bank = syntheticBank([1, 1, 2, 4]);

describe('modes', () => {
  it('reconoce solo 32, 64, 128 y 256', () => {
    expect(MODES.every(isMode)).toBe(true);
    expect(isMode(48)).toBe(false);
    expect(isMode(248)).toBe(false);
  });

  it('cada modo incluye los tiers ≤ al suyo', () => {
    expect(questionsForMode(bank, 32)).toHaveLength(12);
    expect(questionsForMode(bank, 64)).toHaveLength(24);
    expect(questionsForMode(bank, 128)).toHaveLength(48);
    expect(questionsForMode(bank, 256)).toHaveLength(96);
    expect(questionsForMode(bank, 64).every((x) => x.tier <= 2)).toBe(true);
  });

  it('cada modo corto está contenido en el siguiente', () => {
    for (let i = 0; i < MODES.length - 1; i++) {
      const longer = new Set(questionsForMode(bank, MODES[i + 1]!).map((x) => x.id));
      expect(questionsForMode(bank, MODES[i]!).every((x) => longer.has(x.id))).toBe(true);
    }
  });

  it('el orden es determinista e intercala ejes', () => {
    const order = questionsForMode(bank, 256);
    expect(questionsForMode(bank, 256).map((x) => x.id)).toEqual(order.map((x) => x.id));
    expect(questionsForMode([...bank].reverse(), 256).map((x) => primaryAxis(x))).toEqual(
      order.map((x) => primaryAxis(x)),
    );
    // Con ejes de igual tamaño, nunca salen dos preguntas seguidas del mismo eje.
    for (let i = 1; i < order.length; i++) {
      expect(primaryAxis(order[i]!)).not.toBe(primaryAxis(order[i - 1]!));
    }
  });

  it('el eje primario es el de mayor |peso|; si empatan, el primero en el orden canónico', () => {
    const q = (effects: Question['effects']): Question => ({ id: 'x', text: 'x', tier: 1, topic: 'estado-mercado', effects });
    expect(primaryAxis(q({ soc: 1, geo: -3 }))).toBe('geo');
    expect(primaryAxis(q({ val: 2, rel: -2 }))).toBe('rel');
    expect(() => primaryAxis(q({}))).toThrow();
  });
});
