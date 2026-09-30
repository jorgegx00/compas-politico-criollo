import type { Question } from '../types.ts';

/** Eje primario eco (−: Estatismo, +: Libre mercado). Signo del efecto primario alternado desde +. */
export const ecoQuestions: Question[] = [
  // Tier 1
  {
    id: 'eco-01',
    tier: 1,
    topic: 'energia',
    effects: { eco: 2 },
    text: 'Las distribuidoras eléctricas del Estado (EDEs) deberían pasar a manos privadas.',
    context:
      'Las EDEs (Edenorte, Edesur y Edeeste) distribuyen la electricidad y son del Estado. Su déficit pasó de US$578 millones en 2020 a US$1,659 millones en 2025.',
  },
  {
    id: 'eco-02',
    tier: 1,
    topic: 'impuestos',
    effects: { eco: -2, soc: -1 },
    text: 'Los ricos y las grandes empresas deberían pagar más impuestos.',
  },
  {
    id: 'eco-03',
    tier: 1,
    topic: 'impuestos',
    effects: { eco: 2, soc: 1 },
    text: 'Es preferible cobrar ITBIS a los alimentos básicos que subir el impuesto sobre la renta.',
    context:
      'El ITBIS es el impuesto al valor agregado dominicano. La reforma fiscal de octubre de 2024 proponía cobrarlo a alimentos básicos y se retiró por falta de consenso.',
  },
  // Tier 2
  {
    id: 'eco-04',
    tier: 2,
    topic: 'impuestos',
    effects: { eco: -2, soc: -1 },
    text: 'Hizo bien la Ley 30-26 en subir el impuesto sobre la renta a las grandes empresas.',
    context:
      'La Ley 30-26 (junio de 2026) subió el ISR de las empresas al 27 %, con un 30 % transitorio hasta 2028 para las que facturan más de RD$1,000 millones, y creó un tramo de 27 % para personas con ingresos de más de RD$4.8 millones.',
  },
  {
    id: 'eco-05',
    tier: 2,
    topic: 'energia',
    effects: { eco: 3, soc: 1 },
    text: 'Los subsidios a la luz y a los combustibles deberían eliminarse.',
  },
  {
    id: 'eco-06',
    tier: 2,
    topic: 'impuestos',
    effects: { eco: -2 },
    text: 'Hay que eliminar las exenciones de impuestos a las zonas francas y al turismo.',
    context:
      'Las zonas francas y los proyectos turísticos pagan menos impuestos gracias a leyes de incentivo. La reforma fiscal retirada en octubre de 2024 proponía eliminar los incentivos al turismo.',
  },
  // Tier 3
  {
    id: 'eco-07',
    tier: 3,
    topic: 'impuestos',
    effects: { eco: 3, soc: 1 },
    text: 'El impuesto sobre la renta debería eliminarse por completo.',
    context: 'El impuesto sobre la renta (ISR) grava los ingresos de las personas y las ganancias de las empresas.',
  },
  {
    id: 'eco-08',
    tier: 3,
    topic: 'energia',
    effects: { eco: -2 },
    text: 'La central Punta Catalina nunca debería venderse a inversionistas privados.',
    context:
      'Punta Catalina es una central eléctrica a carbón construida por el Estado. El Gobierno defiende gestionarla mediante un fideicomiso y afirma que eso no es una privatización.',
  },
  {
    id: 'eco-09',
    tier: 3,
    topic: 'impuestos',
    effects: { eco: 2, eti: 1 },
    text: "Antes de subir cualquier impuesto, el Gobierno debe recortar su gasto, empezando por las 'botellas'.",
    context: "Una 'botella' es un cargo público por el que se cobra un sueldo sin trabajar.",
  },
  {
    id: 'eco-10',
    tier: 3,
    topic: 'trabajo',
    effects: { eco: -2, soc: -1 },
    text: 'La cesantía debe mantenerse intacta en cualquier reforma del Código de Trabajo.',
    context:
      'La cesantía es la indemnización que paga el empleador al despedir sin causa. La reforma del Código de Trabajo perimió en julio de 2026; sigue vigente la Ley 16-92.',
  },
  {
    id: 'eco-11',
    tier: 3,
    topic: 'estado-mercado',
    effects: { eco: 3 },
    text: 'El Estado no debería ser dueño de empresas en ningún sector de la economía.',
  },
  // Tier 4
  {
    id: 'eco-12',
    tier: 4,
    topic: 'pensiones-salud',
    effects: { eco: -3, soc: -1 },
    text: 'Las AFP deberían sustituirse por un sistema público de pensiones.',
    context:
      'Las AFP (administradoras de fondos de pensiones) manejan las cuentas individuales de retiro creadas por la Ley 87-01. Los fondos superan RD$1.3 billones, un 16 % del PIB.',
  },
  {
    id: 'eco-13',
    tier: 4,
    topic: 'impuestos',
    effects: { eco: 2 },
    text: 'El anticipo del impuesto sobre la renta debería eliminarse.',
    context:
      'El anticipo es un pago adelantado del impuesto sobre la renta que las empresas hacen cada mes, calculado con base en el año anterior.',
  },
  {
    id: 'eco-14',
    tier: 4,
    topic: 'estado-mercado',
    effects: { eco: -3 },
    text: 'El Estado debería recuperar las empresas públicas que se privatizaron.',
    context:
      'La Ley 141-97 de Reforma de la Empresa Pública "capitalizó" (privatizó en parte) la CDE (electricidad), el CEA (azúcar) y CORDE.',
  },
  {
    id: 'eco-15',
    tier: 4,
    topic: 'trabajo',
    effects: { eco: 3 },
    text: 'El salario mínimo debería eliminarse para que empresas y trabajadores negocien libremente.',
  },
  {
    id: 'eco-16',
    tier: 4,
    topic: 'estado-mercado',
    effects: { eco: -2 },
    text: 'Debería haber un tope legal a las tasas de interés de los préstamos y las tarjetas de crédito.',
  },
  {
    id: 'eco-17',
    tier: 4,
    topic: 'estado-mercado',
    effects: { eco: 2 },
    text: 'RD debería firmar más tratados de libre comercio, aunque algunos productores locales salgan perdiendo.',
  },
  {
    id: 'eco-18',
    tier: 4,
    topic: 'energia',
    effects: { eco: -2 },
    text: 'El Estado debería renegociar los contratos con las generadoras eléctricas privadas, aunque eso asuste a los inversionistas.',
  },
  {
    id: 'eco-19',
    tier: 4,
    topic: 'estado-mercado',
    effects: { eco: 2 },
    text: 'RD debería eliminar o fusionar varios ministerios para reducir el tamaño del Estado.',
  },
  {
    id: 'eco-20',
    tier: 4,
    topic: 'estado-mercado',
    effects: { eco: -2 },
    text: 'El Estado debería fijar precios máximos a los productos de la canasta básica cuando suben mucho.',
  },
  {
    id: 'eco-21',
    tier: 4,
    topic: 'estado-mercado',
    effects: { eco: 2, soc: 1 },
    text: 'La mejor manera de reducir la pobreza es facilitar que las empresas privadas crezcan y contraten.',
  },
  {
    id: 'eco-22',
    tier: 4,
    topic: 'estado-mercado',
    effects: { eco: -2 },
    text: 'El Estado debería proteger a los agricultores dominicanos con aranceles altos a los alimentos importados.',
  },
];
