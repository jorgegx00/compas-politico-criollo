import { describe, expect, it } from 'vitest';
import { AXIS_IDS } from '../data/axes.ts';
import { IDENTITY_FACET_IDS } from '../data/facets.ts';
import { QUESTIONS } from '../data/questions/index.ts';
import type { Question } from '../data/types.ts';
import { scoreAnswers, scoreIdentityFacets } from './scoring.ts';
import { syntheticBank } from './testing.ts';

const q = (id: string, effects: Question['effects']): Question => ({ id, text: id, tier: 1, topic: 'estado-mercado', effects });

describe('scoreAnswers', () => {
  it('"totalmente de acuerdo" con una pregunta de un solo eje da ±100 según el signo del peso', () => {
    expect(scoreAnswers([q('a', { eco: 2 })], { a: 1 }).scores.eco).toBe(100);
    expect(scoreAnswers([q('a', { eco: 2 })], { a: -1 }).scores.eco).toBe(-100);
    expect(scoreAnswers([q('a', { mig: -3 })], { a: 1 }).scores.mig).toBe(-100);
  });

  it('"No sé" queda fuera del denominador y baja la certeza', () => {
    const bank = [q('a', { eco: 1 }), q('b', { eco: 1 })];
    const skipped = scoreAnswers(bank, { a: 1, b: null });
    expect(skipped.scores.eco).toBe(100);
    expect(skipped.certainty.eco).toBe(0.5);

    const neutral = scoreAnswers(bank, { a: 1, b: 0 });
    expect(neutral.scores.eco).toBe(50);
    expect(neutral.certainty.eco).toBe(1);
  });

  it('las preguntas sin responder cuentan igual que "No sé"', () => {
    const bank = [q('a', { eco: 1 }), q('b', { eco: 3 })];
    expect(scoreAnswers(bank, { a: -1 })).toEqual(scoreAnswers(bank, { a: -1, b: null }));
  });

  it('todo neutral da 0 en todos los ejes, con certeza completa', () => {
    const bank = syntheticBank([2, 0, 0, 0]);
    const { scores, certainty } = scoreAnswers(bank, Object.fromEntries(bank.map((x) => [x.id, 0])));
    for (const axis of AXIS_IDS) {
      expect(Object.is(scores[axis], 0)).toBe(true);
      expect(certainty[axis]).toBe(1);
    }
  });

  it('un eje sin preguntas da 0 con certeza 0', () => {
    const { scores, certainty } = scoreAnswers([q('a', { eco: 2 })], { a: 1 });
    expect(scores.des).toBe(0);
    expect(certainty.des).toBe(0);
  });

  it('pondera por |peso| y aplica efectos secundarios', () => {
    const bank = [q('a', { eco: 3, soc: 1 }), q('b', { eco: -1 })];
    const { scores } = scoreAnswers(bank, { a: 0.5, b: 1 });
    // eco: (0.5·3 + 1·−1) / (3 + 1) = 0.125
    expect(scores.eco).toBeCloseTo(12.5);
    expect(scores.soc).toBe(50);
  });
});

describe('scoreIdentityFacets', () => {
  const f = (id: string, facet: Question['facet'], effects: Question['effects']): Question => ({
    ...q(id, effects),
    facet,
  });

  it('calcula cada faceta solo con el peso en ide de sus preguntas', () => {
    const bank = [f('a', 'raza', { ide: 2 }), f('b', 'raza', { ide: -3, mig: -1 }), f('c', 'haiti', { ide: -2 })];
    const facets = scoreIdentityFacets(bank, { a: 1, b: 1, c: -0.5 });
    // raza: (1·2 + 1·−3) / (2 + 3) = −0.2
    expect(facets.raza).toEqual({ score: -20, answered: 2 });
    expect(facets.haiti).toEqual({ score: 50, answered: 1 });
  });

  it('omite las facetas sin respuestas y las preguntas sin faceta', () => {
    const bank = [f('a', 'cultura', { ide: 2 }), f('b', 'religion', { ide: -2 }), q('c', { ide: 3 })];
    const facets = scoreIdentityFacets(bank, { a: null, b: 1, c: 1 });
    expect(Object.keys(facets)).toEqual(['religion']);
    expect(facets.religion).toEqual({ score: -100, answered: 1 });
  });

  it('con el banco real, las 21 preguntas de ide cubren las cinco facetas', () => {
    const bank = QUESTIONS.filter((question) => question.facet);
    expect(bank.length).toBe(21);
    const answers = Object.fromEntries(bank.map((question) => [question.id, 1 as const]));
    const facets = scoreIdentityFacets(bank, answers);
    expect(Object.keys(facets).sort()).toEqual([...IDENTITY_FACET_IDS].sort());
  });
});
