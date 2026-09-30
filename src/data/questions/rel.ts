import type { Question } from '../types.ts';

/** Eje primario `rel`: −100 = Estado confesional, +100 = laicidad. */
export const relQuestions: Question[] = [
  // Tier 1
  {
    id: 'rel-03',
    tier: 1,
    topic: 'religion',
    effects: { rel: 2 },
    text: 'Las iglesias deberían pagar impuestos sobre sus ingresos, igual que una empresa.',
  },
  {
    id: 'rel-01',
    tier: 1,
    topic: 'religion',
    effects: { rel: 3 },
    text: 'La República Dominicana debería poner fin al Concordato de 1954 con el Vaticano.',
    context:
      'El Concordato de 1954 con la Santa Sede reconoce el catolicismo como religión de la nación y da a la Iglesia efectos civiles en el matrimonio, enseñanza religiosa y exenciones.',
  },
  {
    id: 'rel-02',
    tier: 1,
    topic: 'religion',
    effects: { rel: -3 },
    text: 'La lectura de la Biblia debería ser obligatoria en las escuelas públicas, como manda la Ley 44-00.',
    context: 'La Ley 44-00 ordena la lectura e instrucción bíblica en las escuelas públicas, pero nunca se ha aplicado.',
  },
  // Tier 2
  {
    id: 'rel-04',
    tier: 2,
    topic: 'religion',
    effects: { rel: -2 },
    text: 'El Congreso debería consultar formalmente a las iglesias antes de aprobar leyes como el Código Penal.',
    context:
      'El nuevo Código Penal es la Ley 74-25. En agosto de 2026, el bloque evangélico y sectores católicos se opusieron ante el Tribunal Constitucional a incluir en él la orientación sexual.',
  },
  {
    id: 'rel-05',
    tier: 2,
    topic: 'religion',
    effects: { rel: 2 },
    text: 'El presupuesto del Estado no debería incluir aportes a las iglesias para sus actividades religiosas.',
    context:
      'Por el Concordato de 1954 (art. VII), el Estado construye las sedes de las diócesis y da una subvención mensual a la Iglesia católica. El Gobierno también hace aportes a iglesias evangélicas, por ejemplo para construir templos.',
  },
  {
    id: 'rel-06',
    tier: 2,
    topic: 'religion',
    effects: { rel: -2 },
    text: 'Un presidente debería gobernar según principios cristianos.',
  },
  // Tier 3
  {
    id: 'rel-07',
    tier: 3,
    topic: 'aborto',
    effects: { rel: 2, val: 1 },
    text: 'Las creencias religiosas no deberían pesar en la ley sobre el aborto.',
  },
  {
    id: 'rel-08',
    tier: 3,
    topic: 'educacion',
    effects: { rel: -2 },
    text: 'Las escuelas públicas deberían enseñar la fe cristiana dentro del horario escolar.',
  },
  {
    id: 'rel-09',
    tier: 3,
    topic: 'religion',
    effects: { rel: 2 },
    text: 'Los pastores y sacerdotes no deberían pedir el voto para ningún candidato desde el púlpito.',
  },
  {
    id: 'rel-10',
    tier: 3,
    topic: 'lgbt',
    effects: { rel: -2, val: -1 },
    text: 'Las leyes sobre la homosexualidad deberían basarse en lo que dice la Biblia.',
  },
  {
    id: 'rel-11',
    tier: 3,
    topic: 'religion',
    effects: { rel: 3 },
    text: 'Habría que quitar la palabra "Dios" del lema nacional "Dios, Patria y Libertad".',
  },
  // Tier 4
  {
    id: 'rel-12',
    tier: 4,
    topic: 'religion',
    effects: { rel: -3, val: -1 },
    text: 'En temas morales, las leyes deberían seguir lo que enseñan las iglesias.',
  },
  {
    id: 'rel-13',
    tier: 4,
    topic: 'religion',
    effects: { rel: 2 },
    text: 'Solo el matrimonio ante un oficial civil debería tener validez legal, no el celebrado en una iglesia.',
    context: 'Por el Concordato de 1954, el matrimonio celebrado por la Iglesia católica tiene efectos civiles.',
  },
  {
    id: 'rel-14',
    tier: 4,
    topic: 'religion',
    effects: { rel: -3, ide: -1 },
    text: 'El Estado no debería permitir que religiones no cristianas, como el islam, abran templos en el país.',
  },
  {
    id: 'rel-15',
    tier: 4,
    topic: 'religion',
    effects: { rel: 2 },
    text: 'La religión debería mantenerse fuera de la política.',
  },
  {
    id: 'rel-16',
    tier: 4,
    topic: 'religion',
    effects: { rel: -2 },
    text: 'Está bien que los actos oficiales del Estado incluyan misas, oraciones o tedeums.',
    context: 'El tedeum es una ceremonia católica de acción de gracias; en fechas patrias suele celebrarse con asistencia de las autoridades.',
  },
  {
    id: 'rel-17',
    tier: 4,
    topic: 'educacion',
    effects: { rel: 2 },
    text: 'Las escuelas públicas no deberían empezar la jornada con oraciones.',
  },
  {
    id: 'rel-18',
    tier: 4,
    topic: 'religion',
    effects: { rel: -2 },
    text: 'Las ofensas públicas contra Dios o contra los símbolos religiosos deberían castigarse por ley.',
  },
  {
    id: 'rel-19',
    tier: 4,
    topic: 'religion',
    effects: { rel: 2 },
    text: 'Un pastor o sacerdote que aspire a un cargo público debería dejar antes su ministerio religioso.',
  },
  {
    id: 'rel-20',
    tier: 4,
    topic: 'religion',
    effects: { rel: -3 },
    text: 'Solo una persona que crea en Dios debería llegar a ser presidente de la República.',
  },
  {
    id: 'rel-21',
    tier: 4,
    topic: 'religion',
    effects: { rel: 2 },
    text: 'Los templos deberían cumplir las mismas normas contra el ruido que los bares y los colmados.',
  },
];
