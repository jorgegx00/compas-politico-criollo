import type { Question } from '../types.ts';

/** Eje primario `val`: −100 = conservador, +100 = progresista. Signo del efecto primario alterno (−, +, −…). */
export const valQuestions: Question[] = [
  // Tier 1
  {
    id: 'val-01',
    tier: 1,
    topic: 'aborto',
    effects: { val: -2 },
    text: 'Hizo bien el Congreso en dejar las tres causales fuera del nuevo Código Penal.',
    context:
      'Las "tres causales" permitirían abortar si peligra la vida de la mujer, si el embarazo viene de una violación o un incesto, o si el feto es inviable. El Código Penal (Ley 74-25) mantiene la prohibición total; en julio de 2026 el Senado rechazó incluirlas por 24 votos a 3.',
  },
  {
    id: 'val-02',
    tier: 1,
    topic: 'aborto',
    effects: { val: 3 },
    text: 'Una mujer debería poder abortar libremente en las primeras semanas de embarazo.',
  },
  {
    id: 'val-03',
    tier: 1,
    topic: 'lgbt',
    effects: { val: -2 },
    text: 'El matrimonio debe seguir siendo solo entre un hombre y una mujer.',
    context: 'El artículo 55 de la Constitución define el matrimonio como la unión entre un hombre y una mujer.',
  },
  // Tier 2
  {
    id: 'val-04',
    tier: 2,
    topic: 'aborto',
    effects: { val: 2 },
    text: 'Una mujer o una niña embarazada por una violación o un incesto debería poder abortar legalmente.',
  },
  {
    id: 'val-05',
    tier: 2,
    topic: 'aborto',
    effects: { val: -3, rel: -1 },
    text: 'El aborto debería estar prohibido en todos los casos, incluso cuando la vida de la mujer corre peligro.',
  },
  {
    id: 'val-06',
    tier: 2,
    topic: 'educacion',
    effects: { val: 2 },
    text: 'La educación sexual integral debería darse en todas las escuelas, públicas y privadas.',
    context:
      'La educación sexual integral incluye anatomía, anticoncepción, consentimiento y prevención del abuso. Grupos como "Con mis hijos no te metas" se oponen a ella.',
  },
  // Tier 3
  {
    id: 'val-07',
    tier: 3,
    topic: 'lgbt',
    effects: { val: -2 },
    text: 'Fue un error la sentencia del TC que anuló el castigo a policías y militares por tener relaciones homosexuales.',
    context:
      'La sentencia TC/1225/25 del Tribunal Constitucional (noviembre de 2025) anuló las sanciones penales por relaciones homosexuales en la Policía y las Fuerzas Armadas.',
  },
  {
    id: 'val-08',
    tier: 3,
    topic: 'lgbt',
    effects: { val: 2 },
    text: 'La discriminación por orientación sexual debería castigarse en el Código Penal.',
    context:
      'El artículo 173 del nuevo Código Penal (Ley 74-25) castiga la discriminación por varios motivos, pero no incluye la orientación sexual. Organizaciones LGBT lo impugnaron ante el Tribunal Constitucional en 2026.',
  },
  {
    id: 'val-09',
    tier: 3,
    topic: 'aborto',
    effects: { val: -3 },
    text: 'Las mujeres que abortan deberían ir a la cárcel.',
  },
  {
    id: 'val-10',
    tier: 3,
    topic: 'lgbt',
    effects: { val: 3 },
    text: 'Una persona trans debería poder cambiar el sexo que aparece en su cédula.',
  },
  {
    id: 'val-11',
    tier: 3,
    topic: 'genero-familia',
    effects: { val: -2 },
    text: 'El feminismo ha ido demasiado lejos en la República Dominicana.',
  },
  // Tier 4
  {
    id: 'val-12',
    tier: 4,
    topic: 'aborto',
    effects: { val: 2 },
    text: 'El aborto debería permitirse cuando el embarazo pone en peligro la vida de la mujer.',
  },
  {
    id: 'val-13',
    tier: 4,
    topic: 'lgbt',
    effects: { val: -3 },
    text: 'Las marchas del Orgullo LGBT no deberían permitirse en las calles.',
  },
  {
    id: 'val-14',
    tier: 4,
    topic: 'aborto',
    effects: { val: 2 },
    text: 'El aborto debería permitirse cuando el feto tiene malformaciones que le impedirán sobrevivir fuera del útero.',
  },
  {
    id: 'val-15',
    tier: 4,
    topic: 'genero-familia',
    effects: { val: -2 },
    text: 'Lo ideal es que la madre se quede en casa con los hijos mientras el padre trabaja.',
  },
  {
    id: 'val-16',
    tier: 4,
    topic: 'lgbt',
    effects: { val: 2 },
    text: 'Las parejas del mismo sexo deberían poder adoptar niños.',
  },
  {
    id: 'val-17',
    tier: 4,
    topic: 'aborto',
    effects: { val: -2 },
    text: 'Prefiero que el aborto siga prohibido, aunque algunas mujeres aborten en condiciones peligrosas.',
  },
  {
    id: 'val-18',
    tier: 4,
    topic: 'genero-familia',
    effects: { val: 2 },
    text: 'Los partidos deberían estar obligados a que la mitad de sus candidaturas sean de mujeres.',
  },
  {
    id: 'val-19',
    tier: 4,
    topic: 'educacion',
    effects: { val: -2 },
    text: 'Los padres, y no la escuela, deberían decidir qué aprenden sus hijos sobre sexualidad.',
  },
  {
    id: 'val-20',
    tier: 4,
    topic: 'genero-familia',
    effects: { val: 2 },
    text: 'Los centros de salud públicos deberían entregar gratis la pastilla del día después.',
    context: 'La pastilla del día después es un anticonceptivo de emergencia que se toma tras una relación sexual sin protección.',
  },
  {
    id: 'val-21',
    tier: 4,
    topic: 'libertad-expresion',
    effects: { val: -2 },
    text: 'El Estado debería prohibir las canciones y los videos con letras sexuales explícitas.',
  },
  {
    id: 'val-22',
    tier: 4,
    topic: 'genero-familia',
    effects: { val: 2 },
    text: 'La licencia de paternidad debería ser tan larga como la de maternidad.',
  },
];
