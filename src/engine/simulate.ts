import type { AxisId, Profile, Question } from '../data/types.ts';
import type { Answer, Answers } from './scoring.ts';

/** Qué tan de acuerdo estaría el perfil con la pregunta, de −1 a 1: `Σ w·p/100 / Σ|w|`. */
export function alignment(question: Question, profile: Pick<Profile, 'scores'>): number {
  let sum = 0;
  let weights = 0;
  for (const [axis, weight] of Object.entries(question.effects) as [AxisId, number][]) {
    sum += (weight * profile.scores[axis]) / 100;
    weights += Math.abs(weight);
  }
  return weights > 0 ? sum / weights : 0;
}

/** Lleva una alineación −1..1 al valor Likert más cercano (cortes en ±0.25 y ±0.75; error máximo 0.25). */
export function toLikert(value: number): Answer {
  const abs = Math.abs(value);
  const level = abs >= 0.75 ? 1 : abs >= 0.25 ? 0.5 : 0;
  return (value < 0 && level > 0 ? -level : level) as Answer;
}

/** Respuestas sintéticas "como si" las diera el perfil (para los tests de validez). */
export function simulateAnswers(profile: Pick<Profile, 'scores'>, questions: readonly Question[]): Answers {
  return Object.fromEntries(questions.map((question) => [question.id, toLikert(alignment(question, profile))]));
}
