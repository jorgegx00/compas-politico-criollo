import type { Question } from '../types.ts';

/**
 * Eje primario ide (−: Nación de herencia, +: Nación cívica y plural). Mide quién es dominicano y qué es lo
 * dominicano, no la política migratoria (eso es `mig`); ver docs/investigacion/22-eje-identidad.md.
 * Cada pregunta lleva su faceta para el desglose local en Resultados.
 */
export const ideQuestions: Question[] = [
  // Tier 1
  {
    id: 'ide-02',
    tier: 1,
    topic: 'identidad',
    facet: 'raza',
    effects: { ide: 2 },
    text: 'En RD hay racismo contra los haitianos y sus descendientes.',
  },
  {
    id: 'ide-08',
    tier: 1,
    topic: 'memoria-historica',
    facet: 'haiti',
    effects: { ide: 3 },
    text: 'El Estado dominicano debería pedir perdón oficialmente a Haití por la matanza del Perejil de 1937.',
    context:
      'Matanza de haitianos en la zona fronteriza ordenada por Trujillo entre el 28 de septiembre y el 8 de octubre de 1937. El consenso académico estima entre 12,000 y 15,000 muertos.',
  },
  {
    id: 'ide-03',
    tier: 1,
    topic: 'haiti',
    facet: 'pertenencia',
    effects: { ide: -3, mig: -1 },
    text: 'Un dominicano hijo de padres haitianos no debería poder ser candidato a cargos electivos.',
    context: 'En 2026 se propuso una ley para impedir que dominicanos de ascendencia haitiana aspiren a cargos electivos.',
  },
  // Tier 2
  {
    id: 'ide-05',
    tier: 2,
    topic: 'identidad',
    facet: 'haiti',
    effects: { ide: -3, mig: -1 },
    text: "La inmigración haitiana es una 'invasión pacífica' que amenaza la identidad dominicana.",
  },
  {
    id: 'ide-06',
    tier: 2,
    topic: 'haiti',
    facet: 'pertenencia',
    effects: { ide: 2, mig: 1 },
    text: 'Un dominicano de ascendencia haitiana es tan dominicano como cualquier otro.',
  },
  {
    id: 'ide-11',
    tier: 2,
    topic: 'identidad',
    facet: 'cultura',
    effects: { ide: -2 },
    text: 'La herencia española es la base de la cultura dominicana.',
  },
  // Tier 3
  {
    id: 'ide-01',
    tier: 3,
    topic: 'haiti',
    facet: 'haiti',
    effects: { ide: -2 },
    text: 'Existe un plan internacional para fusionar a RD y Haití en un solo país.',
    context:
      'La idea del "plan de fusión" circula en el debate nacionalista: sostiene que potencias u organismos extranjeros buscan unificar la isla bajo un solo Estado.',
  },
  {
    id: 'ide-04',
    tier: 3,
    topic: 'educacion',
    facet: 'cultura',
    effects: { ide: 2 },
    text: 'Las escuelas deberían enseñar que la raíz africana de la cultura dominicana es tan importante como la española.',
  },
  {
    id: 'ide-07',
    tier: 3,
    topic: 'memoria-historica',
    facet: 'haiti',
    effects: { ide: -3 },
    text: "La 'dominicanización de la frontera' que impulsó Trujillo fue necesaria para proteger la identidad nacional.",
    context:
      'Política de la Era de Trujillo (1930–1961) para afirmar la cultura hispana en la frontera y asentar allí colonos, entre ellos españoles y japoneses. Formó parte del antihaitianismo como doctrina de Estado.',
  },
  {
    id: 'ide-09',
    tier: 3,
    topic: 'identidad',
    facet: 'haiti',
    effects: { ide: -2 },
    text: 'La política de natalidad del Estado debería buscar contrarrestar la natalidad haitiana.',
    context:
      'En abril de 2024, el candidato presidencial de GenS, Carlos Peña, propuso financiar el tercer hijo de las dominicanas. Lo justificó en que las dominicanas tienen dos hijos y las extranjeras, sobre todo haitianas, entre cinco y siete.',
  },
  {
    id: 'ide-10',
    tier: 3,
    topic: 'identidad',
    facet: 'raza',
    effects: { ide: 2 },
    text: "Llamar 'indio' al color de piel de los dominicanos es una forma de negar la raíz africana.",
    context: "En RD se usa 'indio' para describir la piel morena.",
  },
  // Tier 4
  {
    id: 'ide-12',
    tier: 4,
    topic: 'identidad',
    facet: 'religion',
    effects: { ide: 2 },
    text: 'El vudú dominicano es tan parte de la cultura dominicana como la fe católica.',
    context:
      "El vudú dominicano, también llamado 21 Divisiones, rinde culto a espíritus o 'misterios' asociados a santos católicos.",
  },
  {
    id: 'ide-13',
    tier: 4,
    topic: 'identidad',
    facet: 'pertenencia',
    effects: { ide: -3, mig: -1 },
    text: 'Ser dominicano es sobre todo una cuestión de sangre y ascendencia, no de haber nacido aquí.',
  },
  {
    id: 'ide-14',
    tier: 4,
    topic: 'identidad',
    facet: 'raza',
    effects: { ide: 3 },
    text: "Exigir en escuelas o empleos que se alise el 'pelo malo' debería prohibirse como discriminación racial.",
    context: "'Pelo malo' es la expresión popular dominicana para el cabello rizado o afro.",
  },
  {
    id: 'ide-15',
    tier: 4,
    topic: 'identidad',
    facet: 'cultura',
    effects: { ide: -2 },
    text: 'Los avisos oficiales en RD deberían estar solo en español, nunca en creole.',
  },
  {
    id: 'ide-16',
    tier: 4,
    topic: 'educacion',
    facet: 'cultura',
    effects: { ide: 3 },
    text: 'Las escuelas públicas de la zona fronteriza deberían enseñar creole haitiano como asignatura a todos sus estudiantes.',
  },
  {
    id: 'ide-17',
    tier: 4,
    topic: 'religion',
    facet: 'religion',
    effects: { ide: -2 },
    text: 'La fe cristiana, simbolizada por la Biblia del escudo, ha protegido a RD de desgracias como las que sufre Haití.',
    context:
      'La Constitución (art. 32) describe el escudo con "la Biblia abierta en el Evangelio de San Juan, capítulo 8, versículo 32". Una creencia popular sostiene que esa Biblia protege al país de huracanes, terremotos y otros males.',
  },
  {
    id: 'ide-18',
    tier: 4,
    topic: 'identidad',
    facet: 'cultura',
    effects: { ide: 2 },
    text: 'RD tiene más en común culturalmente con el Caribe que con España.',
  },
  {
    id: 'ide-19',
    tier: 4,
    topic: 'identidad',
    facet: 'raza',
    effects: { ide: -2 },
    text: "Hablar de 'afrodominicanos' divide a la sociedad dominicana.",
  },
  {
    id: 'ide-20',
    tier: 4,
    topic: 'identidad',
    facet: 'haiti',
    effects: { ide: 2 },
    text: 'Dominicanos y haitianos comparten más historia y cultura de lo que se suele reconocer.',
  },
  {
    id: 'ide-21',
    tier: 4,
    topic: 'identidad',
    facet: 'raza',
    effects: { ide: -2 },
    text: 'El mestizaje de la mayoría de los dominicanos evita que haya racismo en RD.',
    context:
      'En el censo de 2022 (población de 12 años o más), el 34.2 % se identificó como india, el 26.0 % como morena, el 18.7 % como blanca, el 7.7 % como mestiza, el 7.5 % como negra y el 3.8 % como mulata.',
  },
];
