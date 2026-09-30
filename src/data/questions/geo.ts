import type { Question } from '../types.ts';

/** Eje primario `geo` (Geopolítica): −100 = alineado con EE.UU., +100 = soberanismo / multipolar. */
export const geoQuestions: Question[] = [
  // Tier 1
  {
    id: 'geo-01',
    tier: 1,
    topic: 'eeuu-china',
    effects: { geo: -2 },
    text: 'Estuvo bien permitir que EE.UU. use la base aérea de San Isidro y el aeropuerto de Las Américas en sus operaciones antidrogas en el Caribe.',
    context:
      'El 26-nov-2025 el gobierno dio a EE.UU. un permiso temporal para usar ambas instalaciones en su despliegue antidrogas en el Caribe; luego lo extendió hasta el 31-oct-2026.',
  },
  {
    id: 'geo-02',
    tier: 1,
    topic: 'eeuu-china',
    effects: { geo: 3 },
    text: 'Tras el arancel de 12.5 % de EE.UU., RD debería acercarse más a China aunque a Washington no le guste.',
    context:
      'El 24-jul-2026 EE.UU. impuso un arancel adicional de 12.5 % a productos dominicanos (Sección 301, por trabajo forzoso en cadenas de suministro).',
  },
  {
    id: 'geo-03',
    tier: 1,
    topic: 'eeuu-china',
    effects: { geo: -3 },
    text: 'La captura de Maduro por EE.UU. fue positiva para América Latina.',
    context: 'EE.UU. capturó el 3-ene-2026 a Nicolás Maduro, que gobernaba Venezuela.',
  },
  // Tier 2
  {
    id: 'geo-04',
    tier: 2,
    topic: 'memoria-historica',
    effects: { geo: 2 },
    text: 'RD debería exigir a EE.UU. una disculpa oficial por la intervención militar de 1965.',
    context:
      'Desde el 28-abr-1965, en plena guerra civil entre los constitucionalistas de Caamaño (que pedían el regreso de Bosch) y el bando militar "leal", EE.UU. desembarcó miles de soldados.',
  },
  {
    id: 'geo-05',
    tier: 2,
    topic: 'eeuu-china',
    effects: { geo: -2 },
    text: 'Fue correcto excluir a Cuba, Venezuela y Nicaragua de la Cumbre de las Américas de Punta Cana.',
    context:
      'A finales de septiembre de 2025 RD, como anfitriona, dejó fuera a esos tres gobiernos. En noviembre aplazó la Cumbre a 2026.',
  },
  {
    id: 'geo-08',
    tier: 2,
    topic: 'eeuu-china',
    effects: { geo: 2 },
    text: 'Los dominicanos acusados de narcotráfico deberían ser juzgados en RD, no extraditados a EE.UU.',
  },
  // Tier 3
  {
    id: 'geo-06',
    tier: 3,
    topic: 'eeuu-china',
    effects: { geo: 2 },
    text: 'Hizo bien RD en romper con Taiwán para establecer relaciones con China en 2018.',
    context:
      'El 1-may-2018 RD estableció relaciones con la República Popular China y rompió con Taiwán; en septiembre EE.UU. llamó a consultas a sus jefes de misión en el país.',
  },
  {
    id: 'geo-07',
    tier: 3,
    topic: 'eeuu-china',
    effects: { geo: -2 },
    text: 'Hizo bien RD en aceptar recibir en tránsito a deportados de otros países enviados por EE.UU.',
    context:
      'Memorando no vinculante del 12-may-2026 ("Escudo de las Américas"): RD recibe en tránsito a deportados de terceros países, salvo haitianos y menores no acompañados.',
  },
  {
    id: 'geo-09',
    tier: 3,
    topic: 'eeuu-china',
    effects: { geo: -3 },
    text: 'RD debería permitir que EE.UU. instale una base militar permanente en el país.',
  },
  {
    id: 'geo-10',
    tier: 3,
    topic: 'eeuu-china',
    effects: { geo: 2 },
    text: 'RD no debería apoyar intervenciones militares extranjeras en Haití, aunque las apruebe la ONU.',
    context:
      'La ONU creó en 2025 la Fuerza de Supresión de Pandillas para Haití (Resolución 2793). RD no envía tropas, pero da apoyo logístico, de inteligencia y humanitario.',
  },
  {
    id: 'geo-12',
    tier: 3,
    topic: 'estado-mercado',
    effects: { geo: 3, eco: -1 },
    text: 'RD debería salirse del DR-CAFTA si EE.UU. mantiene aranceles contra los productos dominicanos.',
    context: 'DR-CAFTA: tratado de libre comercio entre EE.UU., Centroamérica y RD, vigente para RD desde 2007.',
  },
  // Tier 4
  {
    id: 'geo-11',
    tier: 4,
    topic: 'memoria-historica',
    effects: { geo: -2 },
    text: 'La intervención de EE.UU. en 1965 evitó que RD se convirtiera en otra Cuba.',
    context:
      'En abril de 1965 EE.UU. envió tropas durante la guerra civil entre constitucionalistas y "leales"; se retiraron en septiembre de 1966, tras las elecciones que ganó Balaguer.',
  },
  {
    id: 'geo-13',
    tier: 4,
    topic: 'eeuu-china',
    effects: { geo: -2 },
    text: 'RD debería limitar las inversiones chinas en puertos, energía y telecomunicaciones por razones de seguridad.',
  },
  {
    id: 'geo-14',
    tier: 4,
    topic: 'desarrollo',
    effects: { geo: 2 },
    text: 'RD debería aceptar préstamos de China para construir grandes obras, aunque a EE.UU. le preocupe.',
  },
  {
    id: 'geo-15',
    tier: 4,
    topic: 'memoria-historica',
    effects: { geo: -2 },
    text: 'La ocupación estadounidense de 1916 a 1924 fue, en balance, más positiva que negativa para el país.',
    context:
      'Los marines gobernaron RD de 1916 a 1924: hicieron carreteras y crearon la Guardia Nacional, pero impusieron censura y reprimieron a los gavilleros; unos 950 dominicanos murieron o resultaron heridos.',
  },
  {
    id: 'geo-16',
    tier: 4,
    topic: 'eeuu-china',
    effects: { geo: 2 },
    text: 'RD debería exigir públicamente el fin del embargo de EE.UU. contra Cuba.',
  },
  {
    id: 'geo-17',
    tier: 4,
    topic: 'eeuu-china',
    effects: { geo: -3 },
    text: 'Si EE.UU. lo pide, RD debería enviar soldados a misiones internacionales, como hizo en Irak en 2003.',
    context: 'RD envió a Irak unos 300 soldados por rotación desde agosto de 2003; el gobierno ordenó su retiro el 21-abr-2004.',
  },
  {
    id: 'geo-18',
    tier: 4,
    topic: 'eeuu-china',
    effects: { geo: 3 },
    text: 'RD debería acercarse a los BRICS para depender menos de EE.UU.',
    context: 'BRICS: bloque de economías emergentes encabezado por Brasil, Rusia, India, China y Sudáfrica.',
  },
  {
    id: 'geo-19',
    tier: 4,
    topic: 'eeuu-china',
    effects: { geo: -2 },
    text: 'La embajada de EE.UU. hace bien en opinar sobre asuntos internos dominicanos, como la corrupción o las elecciones.',
  },
  {
    id: 'geo-20',
    tier: 4,
    topic: 'eeuu-china',
    effects: { geo: 2 },
    text: 'La DEA y los militares de EE.UU. tienen demasiada influencia en la seguridad dominicana.',
    context: 'DEA: agencia antidrogas del gobierno de EE.UU.',
  },
  {
    id: 'geo-21',
    tier: 4,
    topic: 'eeuu-china',
    effects: { geo: -2 },
    text: 'Por la diáspora y las remesas, a RD le conviene alinearse con EE.UU. antes que con cualquier otra potencia.',
  },
];
