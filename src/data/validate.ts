// Reglas de validación del contenido (docs/PLAN.md §6, §7 y §10). Devuelven listas de errores legibles.
import { primaryAxis, type Mode } from '../engine/modes.ts';
import { AXIS_IDS } from './axes.ts';
import { IDENTITY_FACETS } from './facets.ts';
import { TOPICS, type TopicId } from './topics.ts';
import type { AxisId, Profile, ProfileKind, Question } from './types.ts';

/** Preguntas con eje primario en cada eje, por tier (1, 2, 3, 4). Acumulado: 32 / 64 / 128 / 256 en total. */
export const AXIS_TIER_PLAN: Readonly<Record<AxisId, readonly [number, number, number, number]>> = {
  eco: [3, 3, 5, 11],
  soc: [3, 2, 6, 10],
  mig: [3, 3, 5, 11],
  ide: [2, 3, 6, 10],
  rel: [3, 2, 6, 10],
  val: [3, 3, 5, 11],
  ord: [3, 3, 5, 11],
  pod: [2, 3, 5, 11],
  eti: [3, 2, 6, 10],
  geo: [3, 2, 5, 11],
  des: [2, 3, 5, 11],
  est: [2, 3, 5, 11],
};

/** Diferencia máxima entre afirmaciones "de acuerdo = polo +" y "= polo −" por eje, según el tier máximo del modo. */
export const MAX_POLARITY_GAP: Readonly<Record<Question['tier'], number>> = { 1: 1, 2: 1, 3: 2, 4: 2 };

export const TIER_OF_MODE: Readonly<Record<Mode, Question['tier']>> = { 32: 1, 64: 2, 128: 3, 256: 4 };

export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9ñ ]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Signo del efecto primario: +1 si "de acuerdo" empuja al polo +, −1 si al polo −. */
export function primarySign(question: Question): 1 | -1 {
  return (question.effects[primaryAxis(question)] ?? 0) > 0 ? 1 : -1;
}

function questionErrors(question: Question): string[] {
  const errors: string[] = [];
  const where = `pregunta ${question.id}`;
  const entries = Object.entries(question.effects) as [string, number][];
  if (entries.length < 1 || entries.length > 3) errors.push(`${where}: debe afectar de 1 a 3 ejes`);
  for (const [axis, weight] of entries) {
    if (!(AXIS_IDS as readonly string[]).includes(axis)) errors.push(`${where}: eje inválido "${axis}"`);
    if (!Number.isInteger(weight) || weight === 0 || Math.abs(weight) > 3) {
      errors.push(`${where}: peso inválido ${axis}=${weight} (entero, distinto de 0, |peso| ≤ 3)`);
    }
  }
  const weights = entries.map(([, weight]) => Math.abs(weight)).sort((a, b) => b - a);
  if ((weights[0] ?? 0) < 2) errors.push(`${where}: el efecto primario debe tener |peso| ≥ 2`);
  if (weights.length > 1 && weights[0] === weights[1]) {
    errors.push(`${where}: el efecto primario debe ser estrictamente mayor que los secundarios`);
  }
  if (!(question.topic in TOPICS)) errors.push(`${where}: tema inválido "${question.topic}"`);
  if (![1, 2, 3, 4].includes(question.tier)) errors.push(`${where}: tier inválido`);
  const text = question.text.trim();
  if (text.length < 20 || text.length > 240) errors.push(`${where}: el texto debe tener entre 20 y 240 caracteres`);
  if (!/[.!?]$/.test(text)) errors.push(`${where}: el texto debe terminar en punto`);
  if (text.includes('?')) errors.push(`${where}: debe ser una afirmación, no una pregunta`);
  if (question.context !== undefined && (question.context.trim().length < 10 || question.context.length > 320)) {
    errors.push(`${where}: el contexto debe tener entre 10 y 320 caracteres`);
  }
  return errors;
}

/** Valida las preguntas de un eje primario: forma, cantidades por tier y balance de polaridad acumulado. */
export function validateAxisQuestions(axis: AxisId, questions: readonly Question[]): string[] {
  const errors = questions.flatMap(questionErrors);
  const idPattern = new RegExp(`^${axis}-\\d{2}$`);
  for (const question of questions) {
    if (!idPattern.test(question.id)) errors.push(`pregunta ${question.id}: el id debe tener la forma ${axis}-NN`);
    try {
      const primary = primaryAxis(question);
      if (primary !== axis) errors.push(`pregunta ${question.id}: su eje primario es ${primary}, no ${axis}`);
    } catch {
      // Ya reportado por questionErrors.
    }
    if (axis === 'ide' && !(question.facet && question.facet in IDENTITY_FACETS)) {
      errors.push(`pregunta ${question.id}: las preguntas de ide deben llevar una faceta válida`);
    }
    if (axis !== 'ide' && question.facet !== undefined) {
      errors.push(`pregunta ${question.id}: solo las preguntas de ide llevan faceta`);
    }
  }
  const plan = AXIS_TIER_PLAN[axis];
  for (const tier of [1, 2, 3, 4] as const) {
    const count = questions.filter((question) => question.tier === tier).length;
    if (count !== plan[tier - 1]) errors.push(`${axis}: tier ${tier} tiene ${count} preguntas; deben ser ${plan[tier - 1]}`);
  }
  for (const tier of [1, 2, 3, 4] as const) {
    const upTo = questions.filter((question) => question.tier <= tier);
    const positive = upTo.filter((question) => primarySign(question) > 0).length;
    const negative = upTo.length - positive;
    if (Math.abs(positive - negative) > MAX_POLARITY_GAP[tier]) {
      errors.push(`${axis}: polaridad desbalanceada hasta el tier ${tier} (${positive} a favor del polo +, ${negative} del −)`);
    }
  }
  const seen = new Map<string, string>();
  for (const question of questions) {
    const key = normalizeText(question.text);
    const other = seen.get(key);
    if (other) errors.push(`pregunta ${question.id}: texto duplicado de ${other}`);
    seen.set(key, question.id);
  }
  return errors;
}

/** Valida el banco completo: tamaños por modo, ids y textos únicos, temas candentes con ambas polaridades. */
export function validateBank(
  bank: readonly Question[],
  mandatory: readonly TopicId[],
  secondary: readonly TopicId[],
): string[] {
  const errors: string[] = [];
  const expected = { 1: 32, 2: 32, 3: 64, 4: 128 } as const;
  for (const tier of [1, 2, 3, 4] as const) {
    const count = bank.filter((question) => question.tier === tier).length;
    if (count !== expected[tier]) errors.push(`tier ${tier}: ${count} preguntas; deben ser ${expected[tier]}`);
  }
  const ids = new Set<string>();
  const texts = new Map<string, string>();
  for (const question of bank) {
    if (ids.has(question.id)) errors.push(`id duplicado: ${question.id}`);
    ids.add(question.id);
    const key = normalizeText(question.text);
    const other = texts.get(key);
    if (other) errors.push(`texto duplicado: ${question.id} y ${other}`);
    texts.set(key, question.id);
  }
  const checkTopic = (topic: TopicId, minimum: number) => {
    const questions = bank.filter((question) => question.topic === topic);
    const signs = new Set(questions.map(primarySign));
    if (questions.length < minimum) errors.push(`tema ${topic}: ${questions.length} preguntas; mínimo ${minimum}`);
    if (signs.size < 2) errors.push(`tema ${topic}: necesita afirmaciones en ambas direcciones`);
  };
  for (const topic of mandatory) checkTopic(topic, 6);
  for (const topic of secondary) checkTopic(topic, 2);
  return errors;
}

export const ID_PREFIX: Readonly<Record<ProfileKind, string>> = {
  gobierno: 'gob-',
  partido: 'par-',
  politico: 'pol-',
  mediatico: 'med-',
  movimiento: 'mov-',
  historicoRD: 'his-',
  figuraExtranjera: 'ext-',
  pais: 'pais-',
  arquetipo: 'arq-',
};

/** Perfiles clave de los tests de validez (docs/PLAN.md §10). */
export const REQUIRED_PROFILE_IDS = [
  'par-prm',
  'par-fp',
  'par-pld',
  'par-od',
  'par-fnp',
  'par-gens',
  'med-alofoke',
  'gob-trujillo',
  'gob-bosch-1963',
] as const;

const CURRENT_KINDS: readonly ProfileKind[] = ['politico', 'partido', 'mediatico', 'movimiento'];

/** Valida perfiles: ids, 12 puntajes enteros en rango, confianza, fuentes y fecha de estimación. */
export function validateProfiles(profiles: readonly Profile[], allowedKinds: readonly ProfileKind[]): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  for (const profile of profiles) {
    const where = `perfil ${profile.id}`;
    if (ids.has(profile.id)) errors.push(`${where}: id duplicado`);
    ids.add(profile.id);
    if (!allowedKinds.includes(profile.kind)) errors.push(`${where}: tipo ${profile.kind} no permitido en este archivo`);
    const prefix = ID_PREFIX[profile.kind];
    if (!profile.id.startsWith(prefix) || !/^[a-z0-9-]+$/.test(profile.id)) {
      errors.push(`${where}: el id debe empezar con "${prefix}" y usar solo a-z, 0-9 y guiones`);
    }
    if (!profile.name.trim()) errors.push(`${where}: falta el nombre`);
    if (!profile.subtitle.trim() || profile.subtitle.length > 110) errors.push(`${where}: subtítulo vacío o de más de 110 caracteres`);
    if (profile.summary.trim().length < 20 || profile.summary.length > 420) {
      errors.push(`${where}: el resumen debe tener entre 20 y 420 caracteres`);
    }
    const scoreKeys = Object.keys(profile.scores);
    if (scoreKeys.length !== 12 || !AXIS_IDS.every((axis) => axis in profile.scores)) {
      errors.push(`${where}: debe tener exactamente los 12 puntajes`);
    }
    for (const axis of AXIS_IDS) {
      const score = profile.scores[axis];
      if (!Number.isInteger(score) || score < -100 || score > 100) errors.push(`${where}: puntaje ${axis}=${score} fuera de rango`);
    }
    for (const [axis, value] of Object.entries(profile.confidence ?? {})) {
      if (!(AXIS_IDS as readonly string[]).includes(axis)) errors.push(`${where}: confianza en eje inválido "${axis}"`);
      if (!['alta', 'media', 'baja'].includes(value as string)) errors.push(`${where}: confianza inválida "${value}"`);
    }
    if (profile.kind !== 'arquetipo') {
      if (!profile.sources?.length) errors.push(`${where}: faltan fuentes`);
      for (const source of profile.sources ?? []) {
        if (!source.title.trim() || !/^https?:\/\/\S+$/.test(source.url)) errors.push(`${where}: fuente inválida ${source.url}`);
      }
    }
    if (profile.asOf !== undefined && !/^\d{4}(-\d{2})?$/.test(profile.asOf)) errors.push(`${where}: asOf debe ser AAAA o AAAA-MM`);
    if (CURRENT_KINDS.includes(profile.kind) && !profile.asOf && !profile.relativeToEra) {
      errors.push(`${where}: las figuras vigentes necesitan asOf; las históricas, relativeToEra`);
    }
    if (profile.kind === 'pais' && !profile.flag) errors.push(`${where}: falta la bandera`);
  }
  return errors;
}
