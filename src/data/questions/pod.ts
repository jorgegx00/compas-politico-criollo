import type { Question } from '../types.ts';

/** Eje primario `pod`: −100 = caudillismo / reelección, +100 = institucionalidad. */
export const podQuestions: Question[] = [
  // Tier 1
  {
    id: 'pod-02',
    tier: 1,
    topic: 'reeleccion',
    effects: { pod: 2 },
    text: 'Hizo bien la reforma constitucional de 2024 en hacer imposible cambiar el límite a la reelección presidencial.',
    context:
      'La reforma de octubre de 2024 limita al presidente a dos periodos consecutivos, sin poder volver a optar nunca, y convierte esa regla en cláusula pétrea: ya no se puede reformar.',
  },
  {
    id: 'pod-06',
    tier: 1,
    topic: 'reeleccion',
    effects: { pod: 3 },
    text: 'El presidente debería gobernar un solo periodo, sin posibilidad de reelección.',
    context: 'Desde la reforma de 2024, la Constitución permite dos periodos presidenciales consecutivos y nunca más.',
  },
  {
    id: 'pod-01',
    tier: 1,
    topic: 'reeleccion',
    effects: { pod: -3 },
    text: 'Un presidente que gobierna bien debería poder reelegirse todas las veces que el pueblo quiera.',
  },
  // Tier 2
  {
    id: 'pod-03',
    tier: 2,
    topic: 'memoria-historica',
    effects: { pod: -3, ord: -1 },
    text: 'Con Trujillo había más orden que ahora.',
    context: 'Rafael Leónidas Trujillo gobernó como dictador de 1930 a 1961.',
  },
  {
    id: 'pod-04',
    tier: 2,
    topic: 'memoria-historica',
    effects: { pod: 2 },
    text: 'Debería prohibirse por ley la apología del trujillismo.',
    context:
      '"Apología del trujillismo" es exaltar públicamente a Trujillo o a su dictadura (1930–1961). Algunos grupos actuales lo reivindican.',
  },
  {
    id: 'pod-05',
    tier: 2,
    topic: 'memoria-historica',
    effects: { pod: -2 },
    text: 'Joaquín Balaguer fue el mejor presidente que ha tenido el país.',
    context: 'Balaguer gobernó en 1960–1962, al final de la Era de Trujillo, y luego en 1966–1978 y 1986–1996.',
  },
  // Tier 3
  {
    id: 'pod-07',
    tier: 3,
    topic: 'reeleccion',
    effects: { pod: -2 },
    text: 'Está bien que un partido con mayoría en el Congreso apruebe leyes urgentes sin buscar el consenso de la oposición.',
  },
  {
    id: 'pod-08',
    tier: 3,
    topic: 'reeleccion',
    effects: { pod: 2 },
    text: 'El Procurador General debería escogerse sin ninguna intervención del presidente de la República.',
    context:
      'Desde la reforma de 2024, el Consejo Nacional de la Magistratura designa al Procurador General a propuesta del presidente.',
  },
  {
    id: 'pod-09',
    tier: 3,
    topic: 'libertad-expresion',
    effects: { pod: -2 },
    text: 'Debería existir un organismo del Estado que regule los contenidos de las redes sociales.',
    context:
      'En 2025 se propuso crear el INACOM, un regulador de medios, plataformas y espectáculos que sus críticos llamaron "ley mordaza". El proyecto perimió en julio de 2026.',
  },
  {
    id: 'pod-10',
    tier: 3,
    topic: 'libertad-expresion',
    effects: { pod: 2 },
    text: 'Insultar o difamar a un funcionario público no debería castigarse con cárcel, aunque pueda tener otras sanciones.',
    context:
      'Los artículos de difamación e injuria del Código Penal (Ley 74-25) se llamaron "ley mordaza". La Ley 44-26 (julio de 2026) excluyó de la difamación las opiniones verificables sobre corrupción, pero el Senado rechazó, por 24 votos a 3, cambiar la cárcel por multas en la difamación simple.',
  },
  {
    id: 'pod-13',
    tier: 3,
    topic: 'reeleccion',
    effects: { pod: -2 },
    text: 'Un expresidente debería poder volver a ser candidato después de pasar un periodo fuera del poder.',
  },
  // Tier 4
  {
    id: 'pod-11',
    tier: 4,
    topic: 'sistema-partidos',
    effects: { pod: -3 },
    text: 'Un sistema de partido único, como el de Cuba, puede representar al pueblo mejor que la competencia entre varios partidos.',
  },
  {
    id: 'pod-12',
    tier: 4,
    topic: 'reeleccion',
    effects: { pod: 2 },
    text: 'Los jueces de las altas cortes deberían escogerse por concurso de méritos, no por acuerdos entre partidos.',
    context:
      'Las altas cortes son la Suprema Corte de Justicia, el Tribunal Constitucional y el Tribunal Superior Electoral. Sus jueces los designa el Consejo Nacional de la Magistratura.',
  },
  {
    id: 'pod-14',
    tier: 4,
    topic: 'memoria-historica',
    effects: { pod: 2 },
    text: 'Las escuelas deberían enseñar en detalle la represión de los 12 años de Balaguer.',
    context: 'Los "12 años" son los gobiernos de Joaquín Balaguer de 1966 a 1978.',
  },
  {
    id: 'pod-15',
    tier: 4,
    topic: 'reeleccion',
    effects: { pod: -3 },
    text: 'El Congreso debería poder destituir a los jueces del Tribunal Constitucional cuando dicten sentencias que la mayoría rechaza.',
    context:
      'Tras la sentencia TC/1225/25 (noviembre de 2025), que anuló las sanciones por relaciones homosexuales en la Policía y las Fuerzas Armadas, un dirigente político pidió juicio político contra los jueces.',
  },
  {
    id: 'pod-16',
    tier: 4,
    topic: 'reeleccion',
    effects: { pod: 2 },
    text: 'Los diputados, senadores y alcaldes deberían tener un límite de reelecciones, como el presidente.',
  },
  {
    id: 'pod-17',
    tier: 4,
    topic: 'memoria-historica',
    effects: { pod: -2 },
    text: 'El golpe militar contra Juan Bosch en 1963 se justificaba para frenar el comunismo.',
    context:
      'Juan Bosch (PRD) ganó las elecciones de 1962, asumió el 27 de febrero de 1963 y fue derrocado por un golpe militar el 25 de septiembre de ese año.',
  },
  {
    id: 'pod-18',
    tier: 4,
    topic: 'sistema-partidos',
    effects: { pod: 2 },
    text: 'Los partidos deberían escoger siempre a sus candidatos en primarias, no por acuerdos entre sus dirigentes.',
  },
  {
    id: 'pod-19',
    tier: 4,
    topic: 'sistema-partidos',
    effects: { pod: -2 },
    text: 'Está bien que un mismo líder dirija su partido durante décadas si los militantes lo siguen apoyando.',
  },
  {
    id: 'pod-20',
    tier: 4,
    topic: 'sistema-partidos',
    effects: { pod: 2 },
    text: 'Los miembros de la Junta Central Electoral deberían ser personas sin militancia en ningún partido.',
    context: 'La Junta Central Electoral (JCE) organiza las elecciones y supervisa a los partidos políticos.',
  },
  {
    id: 'pod-21',
    tier: 4,
    topic: 'sistema-partidos',
    effects: { pod: -2 },
    text: 'Es normal que el partido que gana ponga a gente de su confianza al frente de la Cámara de Cuentas y otros órganos de control.',
    context: 'La Cámara de Cuentas es el órgano que audita el uso de los fondos públicos.',
  },
];
