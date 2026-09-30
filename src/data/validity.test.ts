// Validez (docs/PLAN.md §10): si alguien responde "como" un perfil clave, ese perfil debe quedar en el top 3 de su
// categoría en los modos 130 y 260.
import { describe, expect, it } from 'vitest';
import { topMatches } from '../engine/matching.ts';
import { questionsForMode } from '../engine/modes.ts';
import { scoreAnswers } from '../engine/scoring.ts';
import { simulateAnswers } from '../engine/simulate.ts';
import { MATCH_CATEGORIES, PROFILES } from './profiles/index.ts';
import { QUESTIONS } from './questions/index.ts';
import { REQUIRED_PROFILE_IDS } from './validate.ts';

describe('validez', () => {
  for (const mode of [130, 260] as const) {
    const questions = questionsForMode(QUESTIONS, mode);
    for (const id of REQUIRED_PROFILE_IDS) {
      it(`modo ${mode}: ${id} queda en el top 3 de su categoría`, () => {
        const profile = PROFILES.find((p) => p.id === id)!;
        const category = MATCH_CATEGORIES.find((c) => c.kinds.includes(profile.kind))!;
        const { scores } = scoreAnswers(questions, simulateAnswers(profile, questions));
        const top = topMatches(scores, PROFILES, category.kinds, 3).map((m) => m.profile.id);
        expect(top).toContain(id);
      });
    }
  }
});
