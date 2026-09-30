import { AXIS_IDS } from '../data/axes.ts';
import type { IdentityFacet } from '../data/facets.ts';
import type { AxisId, Question, Scores } from '../data/types.ts';

/** Totalmente de acuerdo +1 · De acuerdo +0.5 · Neutral 0 · En desacuerdo −0.5 · Totalmente en desacuerdo −1. */
export type Answer = 1 | 0.5 | 0 | -0.5 | -1;

/** Respuestas por id de pregunta; `null` = "No sé / Saltar" (igual que no responder: fuera del denominador). */
export type Answers = Readonly<Record<string, Answer | null | undefined>>;

export const ANSWER_OPTIONS: readonly { value: Answer | null; label: string }[] = [
  { value: 1, label: 'Totalmente de acuerdo' },
  { value: 0.5, label: 'De acuerdo' },
  { value: 0, label: 'Neutral' },
  { value: -0.5, label: 'En desacuerdo' },
  { value: -1, label: 'Totalmente en desacuerdo' },
  { value: null, label: 'No sé' },
];

export interface ScoreResult {
  /** −100..100 por eje: `100 · Σ(a·w) / Σ|w|` sobre las preguntas respondidas. */
  scores: Scores;
  /** 0..1 por eje: `Σ|w|` respondido / `Σ|w|` de todas las preguntas del modo. */
  certainty: Record<AxisId, number>;
}

export function emptyScores(): Scores {
  return Object.fromEntries(AXIS_IDS.map((id) => [id, 0])) as Scores;
}

export function scoreAnswers(questions: readonly Question[], answers: Answers): ScoreResult {
  const weighted = emptyScores();
  const answeredWeight = emptyScores();
  const totalWeight = emptyScores();

  for (const question of questions) {
    const answer = answers[question.id];
    for (const [axis, weight] of Object.entries(question.effects) as [AxisId, number][]) {
      totalWeight[axis] += Math.abs(weight);
      if (answer == null) continue;
      weighted[axis] += answer * weight;
      answeredWeight[axis] += Math.abs(weight);
    }
  }

  const scores = emptyScores();
  const certainty = emptyScores();
  for (const axis of AXIS_IDS) {
    // `|| 0` normaliza −0 a 0.
    scores[axis] = answeredWeight[axis] > 0 ? (100 * weighted[axis]) / answeredWeight[axis] || 0 : 0;
    certainty[axis] = totalWeight[axis] > 0 ? answeredWeight[axis] / totalWeight[axis] : 0;
  }
  return { scores, certainty };
}

export interface FacetScore {
  /** −100..100 con la misma fórmula que el eje, usando solo el peso en `ide` de las preguntas de la faceta. */
  score: number;
  /** Preguntas de la faceta respondidas (sin contar "No sé"). */
  answered: number;
}

/** Desglose del eje Identidad por faceta; solo aparecen las facetas con alguna respuesta. */
export function scoreIdentityFacets(
  questions: readonly Question[],
  answers: Answers,
): Partial<Record<IdentityFacet, FacetScore>> {
  const sums: Partial<Record<IdentityFacet, { weighted: number; weight: number; answered: number }>> = {};
  for (const question of questions) {
    const answer = answers[question.id];
    const weight = question.effects.ide;
    if (!question.facet || weight === undefined || answer == null) continue;
    const sum = (sums[question.facet] ??= { weighted: 0, weight: 0, answered: 0 });
    sum.weighted += answer * weight;
    sum.weight += Math.abs(weight);
    sum.answered += 1;
  }
  const result: Partial<Record<IdentityFacet, FacetScore>> = {};
  for (const [facet, sum] of Object.entries(sums) as [IdentityFacet, { weighted: number; weight: number; answered: number }][]) {
    result[facet] = { score: (100 * sum.weighted) / sum.weight || 0, answered: sum.answered };
  }
  return result;
}
