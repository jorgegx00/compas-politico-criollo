/** Temas para etiquetar preguntas: sirven para verificar cobertura y balance (docs/PLAN.md §6 y §10). */
export const TOPICS = {
  'mano-dura': 'Delincuencia, Policía y mano dura',
  haiti: 'Inmigración haitiana, frontera y nacionalidad',
  religion: 'Religión, Biblia en las escuelas e iglesias',
  aborto: 'Aborto y las tres causales',
  impuestos: 'Impuestos',
  lgbt: 'Derechos LGBT',
  corrupcion: 'Corrupción y clientelismo',
  reeleccion: 'Reelección, caudillismo y separación de poderes',
  'memoria-historica': 'Trujillo, Balaguer y memoria histórica',
  'eeuu-china': 'EE.UU., China y política exterior',
  'mineria-ambiente': 'Minería y medio ambiente',
  'pensiones-salud': 'AFP, pensiones y salud',
  energia: 'Electricidad, EDEs y subsidios',
  'drogas-armas-alcohol': 'Drogas, armas y alcohol',
  'libertad-expresion': 'Libertad de expresión y "ley mordaza"',
  'sistema-partidos': 'Partidos, elecciones y outsiders',
  'estado-mercado': 'Estado, empresas públicas y mercado',
  trabajo: 'Trabajo, salarios y Código de Trabajo',
  educacion: 'Educación',
  identidad: 'Identidad nacional, raza y cultura',
  'genero-familia': 'Género, familia y feminismo',
  'migracion-general': 'Otras migraciones, refugiados y diáspora',
  desarrollo: 'Turismo, obras y desarrollo',
} as const;

export type TopicId = keyof typeof TOPICS;

/** Temas candentes obligatorios: ≥6 preguntas con ambas polaridades. */
export const MANDATORY_TOPICS: readonly TopicId[] = ['mano-dura', 'haiti', 'religion', 'aborto', 'impuestos'];

/** Temas candentes secundarios: ≥2 preguntas con ambas polaridades. */
export const SECONDARY_TOPICS: readonly TopicId[] = [
  'lgbt',
  'corrupcion',
  'reeleccion',
  'memoria-historica',
  'eeuu-china',
  'mineria-ambiente',
  'pensiones-salud',
  'energia',
  'drogas-armas-alcohol',
  'libertad-expresion',
  'sistema-partidos',
];
