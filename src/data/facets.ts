/**
 * Facetas del eje Identidad (docs/investigacion/22-eje-identidad.md): sirven para desglosar el eje en Resultados.
 * El desglose es local; el enlace compartido sigue llevando solo los 12 puntajes.
 */
export const IDENTITY_FACETS = {
  pertenencia: 'Pertenencia',
  raza: 'Raza y racismo',
  cultura: 'Herencia cultural',
  religion: 'Religión',
  haiti: 'Haití',
} as const;

export type IdentityFacet = keyof typeof IDENTITY_FACETS;

export const IDENTITY_FACET_IDS = Object.keys(IDENTITY_FACETS) as IdentityFacet[];
