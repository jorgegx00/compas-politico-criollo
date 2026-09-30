import { AXIS_IDS } from '../data/axes.ts';
import type { AxisId, Question } from '../data/types.ts';

export type Mode = 32 | 64 | 128 | 256;

export const MODES: readonly Mode[] = [32, 64, 128, 256];

/** Cada modo incluye los tiers ≤ al suyo, así que cada modo corto está contenido en el siguiente. */
export const MODE_TIER: Readonly<Record<Mode, Question['tier']>> = { 32: 1, 64: 2, 128: 3, 256: 4 };

export function isMode(value: number): value is Mode {
  return (MODES as readonly number[]).includes(value);
}

/** Eje con mayor |peso|; si empatan, el primero en el orden canónico. */
export function primaryAxis(question: Question): AxisId {
  let best: AxisId | undefined;
  let bestWeight = 0;
  for (const axis of AXIS_IDS) {
    const weight = Math.abs(question.effects[axis] ?? 0);
    if (weight > bestWeight) {
      best = axis;
      bestWeight = weight;
    }
  }
  if (!best) throw new Error(`La pregunta ${question.id} no tiene efectos`);
  return best;
}

/**
 * Preguntas del modo en orden determinista: se agrupan por eje primario (dentro de cada grupo, por tier y luego por
 * orden en el banco) y se intercalan por turnos en el orden canónico de ejes, para evitar rachas de un mismo tema.
 */
export function questionsForMode(bank: readonly Question[], mode: Mode): Question[] {
  const maxTier = MODE_TIER[mode];
  const groups = new Map<AxisId, Question[]>(AXIS_IDS.map((axis) => [axis, []]));
  const selected = bank
    .map((question, index) => ({ question, index }))
    .filter(({ question }) => question.tier <= maxTier)
    .sort((a, b) => a.question.tier - b.question.tier || a.index - b.index);
  for (const { question } of selected) groups.get(primaryAxis(question))!.push(question);

  const ordered: Question[] = [];
  for (let round = 0; ordered.length < selected.length; round++) {
    for (const axis of AXIS_IDS) {
      const question = groups.get(axis)![round];
      if (question) ordered.push(question);
    }
  }
  return ordered;
}
