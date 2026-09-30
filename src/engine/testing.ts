// Utilidades para tests: bancos y perfiles sintéticos (aún no hay contenido real).
import { AXIS_IDS } from '../data/axes.ts';
import type { Profile, Question, Scores } from '../data/types.ts';

/** 12 valores en el orden canónico de ejes. */
export function scoresFrom(values: readonly number[]): Scores {
  if (values.length !== AXIS_IDS.length) throw new Error('Se esperaban 12 valores');
  return Object.fromEntries(AXIS_IDS.map((axis, i) => [axis, values[i]])) as Scores;
}

export function uniformScores(value: number): Scores {
  return scoresFrom(AXIS_IDS.map(() => value));
}

export function makeProfile(id: string, scores: Scores, overrides: Partial<Profile> = {}): Profile {
  return { id, name: id, kind: 'partido', subtitle: '', summary: '', scores, ...overrides };
}

/**
 * Banco sintético: por cada tier y cada eje, `perTier[tier − 1]` preguntas de un solo eje con polaridad alterna
 * (+2, −2, +2…). Ids: `<eje>-<tier>-<n>`.
 */
export function syntheticBank(perTier: readonly [number, number, number, number]): Question[] {
  const bank: Question[] = [];
  perTier.forEach((count, t) => {
    const tier = (t + 1) as Question['tier'];
    for (const axis of AXIS_IDS) {
      for (let n = 0; n < count; n++) {
        bank.push({
          id: `${axis}-${tier}-${n}`,
          text: `${axis} ${tier} ${n}`,
          tier,
          topic: 'estado-mercado',
          effects: { [axis]: n % 2 ? -2 : 2 },
        });
      }
    }
  });
  return bank;
}
