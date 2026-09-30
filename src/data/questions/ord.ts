import type { Question } from '../types.ts';

/** Eje primario `ord`: −100 = mano dura, +100 = garantismo / DD.HH. Signo del efecto primario alterno (+, −, +…). */
export const ordQuestions: Question[] = [
  // Tier 1
  {
    id: 'ord-01',
    tier: 1,
    topic: 'mano-dura',
    effects: { ord: 3 },
    text: 'Todo agente que mate a una persona en un "intercambio de disparos" debería ser llevado a juicio.',
    context:
      'La Comisión Nacional de los Derechos Humanos (CNDH), una ONG, contó 189 muertes en "intercambios de disparos" en 2025 y estima que entre el 65 % y el 70 % fueron ejecuciones extrajudiciales.',
  },
  {
    id: 'ord-02',
    tier: 1,
    topic: 'mano-dura',
    effects: { ord: -3 },
    text: 'Debería restablecerse la pena de muerte para asesinos y violadores.',
    context: 'La Constitución dominicana (art. 37) prohíbe la pena de muerte.',
  },
  {
    id: 'ord-03',
    tier: 1,
    topic: 'mano-dura',
    effects: { ord: 2 },
    text: 'Invertir en empleo y deporte en los barrios reduce más el crimen que poner más policías.',
  },
  // Tier 2
  {
    id: 'ord-04',
    tier: 2,
    topic: 'mano-dura',
    effects: { ord: -3 },
    text: 'La Policía debería tener más libertad para disparar contra delincuentes armados, aunque a veces se equivoque.',
  },
  {
    id: 'ord-05',
    tier: 2,
    topic: 'mano-dura',
    effects: { ord: 2 },
    text: 'Es preferible que un culpable quede libre a que un inocente vaya preso.',
  },
  {
    id: 'ord-06',
    tier: 2,
    topic: 'mano-dura',
    effects: { ord: -3, pod: -1 },
    text: 'La República Dominicana necesita un modelo de seguridad como el de Bukele en El Salvador.',
    context:
      'En El Salvador, el gobierno de Nayib Bukele mantiene un régimen de excepción contra las pandillas que suspende garantías constitucionales.',
  },
  // Tier 3
  {
    id: 'ord-07',
    tier: 3,
    topic: 'mano-dura',
    effects: { ord: 2 },
    text: 'La prisión preventiva se usa en exceso y debería ser la excepción.',
    context: 'La prisión preventiva es encarcelar a un acusado mientras espera el juicio.',
  },
  {
    id: 'ord-08',
    tier: 3,
    topic: 'mano-dura',
    effects: { ord: -3 },
    text: 'Las redadas en los barrios son aceptables aunque se detenga a inocentes.',
  },
  {
    id: 'ord-09',
    tier: 3,
    topic: 'drogas-armas-alcohol',
    effects: { ord: 2 },
    text: 'Debería legalizarse la marihuana.',
  },
  {
    id: 'ord-10',
    tier: 3,
    topic: 'mano-dura',
    effects: { ord: -2 },
    text: 'El Código del Menor protege demasiado a los menores que cometen crímenes graves.',
    context:
      'Así se conoce popularmente la ley que regula cómo se juzga a los menores de 18 años, con sanciones más bajas que las de los adultos.',
  },
  {
    id: 'ord-11',
    tier: 3,
    topic: 'mano-dura',
    effects: { ord: 2 },
    text: 'Una entidad independiente de la Policía debería investigar los abusos de los agentes.',
  },
  // Tier 4
  {
    id: 'ord-12',
    tier: 4,
    topic: 'mano-dura',
    effects: { ord: -2 },
    text: 'Los militares deberían patrullar las calles junto a la Policía.',
  },
  {
    id: 'ord-13',
    tier: 4,
    topic: 'libertad-expresion',
    effects: { ord: 2 },
    text: 'Cualquier persona debería poder grabar a los policías durante un operativo.',
    context:
      'Entre los artículos del nuevo Código Penal (Ley 74-25) que sus críticos llamaron "ley mordaza" había uno sobre grabar a personas en espacios públicos.',
  },
  {
    id: 'ord-14',
    tier: 4,
    topic: 'drogas-armas-alcohol',
    effects: { ord: -2 },
    text: 'Los ciudadanos deberían poder comprar y portar armas con más facilidad.',
  },
  {
    id: 'ord-15',
    tier: 4,
    topic: 'mano-dura',
    effects: { ord: 2 },
    text: 'Las cárceles deberían centrarse en rehabilitar a los presos más que en castigarlos.',
  },
  {
    id: 'ord-16',
    tier: 4,
    topic: 'mano-dura',
    effects: { ord: -2 },
    text: 'Los derechos humanos se han convertido en un obstáculo para combatir la delincuencia.',
  },
  {
    id: 'ord-17',
    tier: 4,
    topic: 'memoria-historica',
    effects: { ord: 2 },
    text: 'Los militares y policías que torturaron o mataron opositores en los 12 años de Balaguer deberían ser juzgados, aunque haya pasado mucho tiempo.',
    context:
      'Los "12 años" son los gobiernos de Joaquín Balaguer de 1966 a 1978. Según distintas fuentes, hubo entre 1,200 y 3,000 asesinatos políticos.',
  },
  {
    id: 'ord-18',
    tier: 4,
    topic: 'drogas-armas-alcohol',
    effects: { ord: -3 },
    text: 'Quien consuma drogas debería ir a la cárcel, aunque sea en pequeñas cantidades.',
  },
  {
    id: 'ord-19',
    tier: 4,
    topic: 'mano-dura',
    effects: { ord: 2 },
    text: 'Subir las penas de cárcel no reduce la delincuencia.',
  },
  {
    id: 'ord-20',
    tier: 4,
    topic: 'mano-dura',
    effects: { ord: -3 },
    text: 'Los menores que cometen asesinatos deberían ser juzgados como adultos.',
  },
  {
    id: 'ord-21',
    tier: 4,
    topic: 'drogas-armas-alcohol',
    effects: { ord: 2 },
    text: 'Los permisos para portar armas deberían ser mucho más difíciles de conseguir.',
  },
  {
    id: 'ord-22',
    tier: 4,
    topic: 'drogas-armas-alcohol',
    effects: { ord: -2 },
    text: 'Deben mantenerse los horarios que limitan la venta de alcohol para prevenir la violencia.',
    context: 'El Decreto 308-06 limita los horarios de venta de bebidas alcohólicas. Hay propuestas para derogarlo.',
  },
];
