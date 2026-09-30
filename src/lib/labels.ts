import type { AxisId, Confidence, Profile } from '../data/types.ts';
import { AXIS_IDS } from '../data/axes.ts';
import { CONFIDENCE_WEIGHT } from '../engine/matching.ts';
import type { Mode } from '../engine/modes.ts';

export const MODE_INFO: Readonly<Record<Mode, { minutes: number; title: string; description: string }>> = {
  32: { minutes: 5, title: 'Rápido', description: 'Lo esencial de cada eje.' },
  64: { minutes: 10, title: 'Estándar', description: 'Buen equilibrio entre tiempo y precisión.' },
  128: { minutes: 20, title: 'Detallado', description: 'Más matices en cada tema.' },
  256: { minutes: 40, title: 'Completo', description: 'Todas las preguntas del banco.' },
};

/** Frase para "Países por eje": "económicamente como Chile", "en migración como Hungría"… */
export const AXIS_PHRASE: Readonly<Record<AxisId, string>> = {
  eco: 'en economía',
  soc: 'en política social',
  mig: 'en migración',
  ide: 'en identidad',
  rel: 'en religión y Estado',
  val: 'en valores',
  ord: 'en orden público',
  pod: 'en el uso del poder',
  eti: 'en ética pública',
  geo: 'en geopolítica',
  des: 'en desarrollo y ambiente',
  est: 'en estilo político',
};

export const CONFIDENCE_LABEL: Readonly<Record<Confidence, string>> = {
  alta: 'confianza alta',
  media: 'confianza media',
  baja: 'posición estimada',
};

/** Confianza global de un perfil: promedio de los pesos por eje. */
export function overallConfidence(profile: Profile): Confidence {
  const average =
    AXIS_IDS.reduce((sum, axis) => sum + CONFIDENCE_WEIGHT[profile.confidence?.[axis] ?? 'media'], 0) / AXIS_IDS.length;
  if (average >= 0.85) return 'alta';
  if (average >= 0.55) return 'media';
  return 'baja';
}

export function formatPercent(value: number): string {
  return `${Math.round(value)} %`;
}
