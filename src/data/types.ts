import type { IdentityFacet } from './facets.ts';
import type { TopicId } from './topics.ts';

export type AxisId =
  | 'eco'
  | 'soc'
  | 'mig'
  | 'ide'
  | 'rel'
  | 'val'
  | 'ord'
  | 'pod'
  | 'eti'
  | 'geo'
  | 'des'
  | 'est';

/** Un eje bipolar: −100 = polo `negative`, +100 = polo `positive`. */
export interface Axis {
  id: AxisId;
  name: string;
  negative: string;
  positive: string;
  negativeDescription: string;
  positiveDescription: string;
  negativeColor: string;
  positiveColor: string;
}

export interface Question {
  id: string;
  /** Afirmación explícita (docs/PLAN.md §6). */
  text: string;
  /** Aclaración breve: qué son las "3 causales", la TC 168-13, etc. */
  context?: string;
  /** Peso −3..+3; "de acuerdo" mueve hacia el signo del peso. */
  effects: Partial<Record<AxisId, number>>;
  /** 32 = tier 1; 64 = 1–2; 128 = 1–3; 256 = 1–4. */
  tier: 1 | 2 | 3 | 4;
  /** Tema, para verificar cobertura y balance de los temas candentes. */
  topic: TopicId;
  /** Solo en preguntas con eje primario `ide`: faceta para el desglose del eje en Resultados. */
  facet?: IdentityFacet;
}

export type Confidence = 'alta' | 'media' | 'baja';

export type ProfileKind =
  | 'gobierno'
  | 'partido'
  | 'politico'
  | 'mediatico'
  | 'movimiento'
  | 'historicoRD'
  | 'figuraExtranjera'
  | 'pais'
  | 'arquetipo';

export type Scores = Record<AxisId, number>;

export interface Profile {
  id: string;
  name: string;
  kind: ProfileKind;
  /** Años / rol / partido. */
  subtitle: string;
  /** 1–3 frases neutrales. */
  summary: string;
  /** −100..100 por eje. */
  scores: Scores;
  /** Por defecto 'media'; los valores inferidos son 'baja'. */
  confidence?: Partial<Record<AxisId, Confidence>>;
  /** Periodos históricos: rel/val/est relativos a su época. */
  relativeToEra?: boolean;
  sources?: { title: string; url: string }[];
  /** Fecha de la estimación (figuras vivas), p. ej. '2026-09'. */
  asOf?: string;
  /** Emoji de bandera (países). */
  flag?: string;
}
