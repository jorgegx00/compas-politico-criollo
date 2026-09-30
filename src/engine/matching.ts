import { AXIS_IDS } from '../data/axes.ts';
import type { AxisId, Confidence, Profile, ProfileKind, Scores } from '../data/types.ts';

export const CONFIDENCE_WEIGHT: Readonly<Record<Confidence, number>> = { alta: 1, media: 0.7, baja: 0.35 };

function axisWeight(profile: Profile, axis: AxisId): number {
  return CONFIDENCE_WEIGHT[profile.confidence?.[axis] ?? 'media'];
}

/** Distancia euclídea ponderada por confianza: `√(Σ wₖ(uₖ−pₖ)² / Σ wₖ)`, entre 0 y 200. */
export function distance(user: Scores, profile: Profile): number {
  let sum = 0;
  let weights = 0;
  for (const axis of AXIS_IDS) {
    const weight = axisWeight(profile, axis);
    sum += weight * (user[axis] - profile.scores[axis]) ** 2;
    weights += weight;
  }
  return Math.sqrt(sum / weights);
}

/** Similitud en %: `100 · (1 − d/200)`. */
export function similarity(user: Scores, profile: Profile): number {
  return 100 * (1 - distance(user, profile) / 200);
}

/**
 * Un perfil entra en los rankings de afinidad si tiene al menos 3 ejes con confianza media o alta (regla de inclusión
 * de docs/PLAN.md §7). Los demás solo aparecen en "Explorar perfiles". Países y arquetipos siempre entran.
 */
export function isRankable(profile: Profile): boolean {
  if (profile.kind === 'pais' || profile.kind === 'arquetipo') return true;
  return AXIS_IDS.filter((axis) => profile.confidence?.[axis] !== 'baja').length >= 3;
}

export interface Match {
  profile: Profile;
  similarity: number;
}

/** Perfiles ordenados de más a menos parecido (empates: por id, para que el orden sea estable). */
export function rankProfiles(user: Scores, profiles: readonly Profile[]): Match[] {
  return profiles
    .map((profile) => ({ profile, similarity: similarity(user, profile) }))
    .sort((a, b) => b.similarity - a.similarity || a.profile.id.localeCompare(b.profile.id));
}

/** Los `n` perfiles rankeables más parecidos entre los de los tipos dados. */
export function topMatches(
  user: Scores,
  profiles: readonly Profile[],
  kinds: ProfileKind | readonly ProfileKind[],
  n = 3,
): Match[] {
  const wanted: readonly ProfileKind[] = typeof kinds === 'string' ? [kinds] : kinds;
  return rankProfiles(
    user,
    profiles.filter((profile) => wanted.includes(profile.kind) && isRankable(profile)),
  ).slice(0, n);
}

/** Etiqueta principal: el arquetipo más cercano. */
export function archetype(user: Scores, profiles: readonly Profile[]): Match | undefined {
  return topMatches(user, profiles, 'arquetipo', 1)[0];
}

export interface CountryMatch {
  profile: Profile;
  /** |uₖ − cₖ| en ese eje. */
  distance: number;
}

/**
 * Para cada eje, los `n` países (perfiles `pais`) con puntaje más cercano al del usuario. Las celdas con confianza
 * `baja` (estimadas en países con pocos datos, o que no reflejan una política, como Haití en `soc`) no participan.
 * Empates: primero el de mayor confianza en ese eje, luego por id.
 */
export function countriesByAxis(
  user: Scores,
  profiles: readonly Profile[],
  n = 3,
): Record<AxisId, CountryMatch[]> {
  const countries = profiles.filter((profile) => profile.kind === 'pais');
  return Object.fromEntries(
    AXIS_IDS.map((axis) => [
      axis,
      countries
        .filter((profile) => profile.confidence?.[axis] !== 'baja')
        .map((profile) => ({ profile, distance: Math.abs(user[axis] - profile.scores[axis]) }))
        .sort(
          (a, b) =>
            a.distance - b.distance ||
            axisWeight(b.profile, axis) - axisWeight(a.profile, axis) ||
            a.profile.id.localeCompare(b.profile.id),
        )
        .slice(0, n),
    ]),
  ) as Record<AxisId, CountryMatch[]>;
}
