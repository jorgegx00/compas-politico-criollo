import { describe, expect, it } from 'vitest';
import { AXIS_IDS } from '../data/axes.ts';
import { rankProfiles } from './matching.ts';
import { questionsForMode } from './modes.ts';
import { scoreAnswers } from './scoring.ts';
import { alignment, simulateAnswers, toLikert } from './simulate.ts';
import { makeProfile, scoresFrom, syntheticBank, uniformScores } from './testing.ts';

describe('simulate', () => {
  it('toLikert elige el valor Likert más cercano', () => {
    expect([0.9, 0.75, 0.6, 0.25, 0.2, 0, -0.2, -0.25, -0.6, -0.75, -0.9].map(toLikert)).toEqual([
      1, 1, 0.5, 0.5, 0, 0, 0, -0.5, -0.5, -1, -1,
    ]);
    expect(Object.is(toLikert(-0.1), 0)).toBe(true);
  });

  it('la alineación respeta el signo y el peso de cada efecto', () => {
    const profile = makeProfile('p', { ...uniformScores(0), eco: 80, soc: -40 });
    const q = { id: 'q', text: 'q', tier: 1 as const, topic: 'estado-mercado' as const, effects: { eco: 3, soc: 1 } };
    // (3·0.8 + 1·−0.4) / 4 = 0.5
    expect(alignment(q, profile)).toBeCloseTo(0.5);
  });

  it('un perfil simulado queda primero entre varios candidatos', () => {
    const bank = questionsForMode(syntheticBank([1, 1, 2, 4]), 130);
    const candidates = [
      makeProfile('prm', scoresFrom([25, -15, -55, -20, -25, -10, -15, 40, 25, -70, -5, -60])),
      makeProfile('op-dem', scoresFrom([-35, -55, 45, 50, 65, 85, 55, 60, 70, 25, 75, 35])),
      makeProfile('gens', scoresFrom([60, 45, -75, -65, -85, -90, -40, 5, 20, -25, -10, 55])),
      makeProfile('frente-amplio', scoresFrom([-80, -75, 30, 45, 60, 65, 50, 55, 55, 80, 55, 55])),
      makeProfile('centro', uniformScores(0)),
    ];
    for (const candidate of candidates) {
      const { scores } = scoreAnswers(bank, simulateAnswers(candidate, bank));
      for (const axis of AXIS_IDS) expect(Math.abs(scores[axis] - candidate.scores[axis])).toBeLessThanOrEqual(25);
      expect(rankProfiles(scores, candidates)[0]!.profile.id).toBe(candidate.id);
    }
  });
});
