import type { Question } from '../types.ts';

/** Eje primario `des` (Desarrollo): −100 = desarrollismo / minería, +100 = ambientalismo. */
export const desQuestions: Question[] = [
  // Tier 1
  {
    id: 'des-05',
    tier: 1,
    topic: 'desarrollo',
    effects: { des: 2 },
    text: 'El desarrollo turístico de Pedernales debe hacerse sin construir hoteles en Bahía de las Águilas ni en otras zonas protegidas.',
    context:
      'En 2021 el gobierno lanzó en Cabo Rojo (Pedernales) un polo turístico de hasta 12,000 habitaciones y prometió que Bahía de las Águilas "permanecerá sin construcciones hoteleras".',
  },
  {
    id: 'des-01',
    tier: 1,
    topic: 'mineria-ambiente',
    effects: { des: 3 },
    text: 'Loma Miranda debería declararse parque nacional para que nunca se haga minería allí.',
    context:
      'En 2014 el presidente Danilo Medina vetó la ley que declaraba parque nacional a Loma Miranda, zona con interés minero. El Senado lo aprobó de nuevo en 2021 (20 de 23 votos), pero el proyecto perimió en la Cámara.',
  },
  {
    id: 'des-02',
    tier: 1,
    topic: 'mineria-ambiente',
    effects: { des: -3 },
    text: 'RD debería explotar al máximo su oro y otros minerales, aunque haya que abrir minas cerca de ríos y montañas.',
  },
  // Tier 2
  {
    id: 'des-03',
    tier: 2,
    topic: 'mineria-ambiente',
    effects: { des: 2 },
    text: 'Hizo bien el gobierno en detener el proyecto minero Romero para proteger el agua de San Juan.',
    context:
      'El 4-may-2026 el gobierno detuvo el proyecto Romero de GoldQuest en San Juan (con reservas que la empresa valora en unos US$5,000M) tras protestas por el riesgo para la presa de Sabaneta; la empresa retiró sus equipos.',
  },
  {
    id: 'des-04',
    tier: 2,
    topic: 'mineria-ambiente',
    effects: { des: -2 },
    text: 'La nueva presa de colas de Barrick en Cotuí se justifica por los ingresos y empleos que genera la mina.',
    context:
      'Barrick opera la mina de oro Pueblo Viejo, en Cotuí, y construye una nueva presa de colas (depósito de residuos mineros) en El Naranjo; en 2025 hubo protestas y reasentamientos en disputa.',
  },
  // Tier 3
  {
    id: 'des-06',
    tier: 3,
    topic: 'energia',
    effects: { des: -2 },
    text: 'Hay que seguir usando el carbón de Punta Catalina mientras sea más barato que las energías renovables.',
    context:
      'Punta Catalina es una central eléctrica a carbón propiedad del Estado, construida durante los gobiernos del PLD. Es la mayor del país (752 MW). El plan oficial de transición (2025) prevé retirar las otras centrales de carbón, Itabo y Barahona, entre 2030 y 2035, pero no Punta Catalina.',
  },
  {
    id: 'des-07',
    tier: 3,
    topic: 'energia',
    effects: { des: 3 },
    text: 'RD debería dejar de producir electricidad con carbón lo antes posible, aunque la luz salga más cara.',
    context:
      'En 2024 el carbón generó cerca del 30 % de la electricidad. En 2023 el país se unió a la alianza internacional para abandonar el carbón (Powering Past Coal Alliance).',
  },
  {
    id: 'des-08',
    tier: 3,
    topic: 'energia',
    effects: { des: -2 },
    text: 'RD debe explorar y explotar petróleo y gas propios, como en la cuenca de San Pedro de Macorís.',
    context: 'El programa de gobierno 2024-2028 incluye explorar hidrocarburos en la cuenca de San Pedro de Macorís.',
  },
  {
    id: 'des-09',
    tier: 3,
    topic: 'mineria-ambiente',
    effects: { des: 2, eco: -1 },
    text: 'Los parques nacionales, como Valle Nuevo, no deberían entregarse a empresas privadas para que los administren, ni siquiera para ecoturismo.',
    context:
      'En abril de 2026 una diputada denunció un contrato ("Jardín del Edén") que permitiría el alquiler y la administración privada del Parque Nacional Valle Nuevo.',
  },
  {
    id: 'des-10',
    tier: 3,
    topic: 'desarrollo',
    effects: { des: -3 },
    text: 'Las grandes obras, como presas, puertos y carreteras, deben hacerse aunque haya que talar bosques o reubicar comunidades.',
    context:
      'En 2026 empezó la autopista del Ámbar (Santiago–Puerto Plata), que cruza la cordillera Septentrional; sacerdotes y ambientalistas se oponen por temor a que abra paso a la minería.',
  },
  // Tier 4
  {
    id: 'des-11',
    tier: 4,
    topic: 'mineria-ambiente',
    effects: { des: 3 },
    text: 'Debería prohibirse la minería a cielo abierto en todo el país.',
    context: 'Minería a cielo abierto: extracción de minerales en la superficie, removiendo grandes cantidades de tierra y roca.',
  },
  {
    id: 'des-12',
    tier: 4,
    topic: 'mineria-ambiente',
    effects: { des: -2 },
    text: 'Si el Estado aprobó un proyecto minero, las protestas de las comunidades no deberían poder detenerlo.',
  },
  {
    id: 'des-13',
    tier: 4,
    topic: 'mineria-ambiente',
    effects: { des: 2 },
    text: 'Debería prohibirse sacar arena y grava de los ríos, aunque eso encarezca la construcción.',
  },
  {
    id: 'des-14',
    tier: 4,
    topic: 'estado-mercado',
    effects: { des: -2, eco: 1 },
    text: 'Los permisos ambientales deberían darse más rápido para no espantar la inversión.',
  },
  {
    id: 'des-15',
    tier: 4,
    topic: 'mineria-ambiente',
    effects: { des: 3 },
    text: 'Hay que prohibir la agricultura y la ganadería dentro de los parques nacionales, aunque haya que desalojar a familias campesinas.',
  },
  {
    id: 'des-16',
    tier: 4,
    topic: 'desarrollo',
    effects: { des: -3 },
    text: 'Hay que permitir más hoteles y resorts en la costa, aunque se pierdan manglares y arrecifes.',
    context:
      'La ley prohíbe construir en la franja costera de 60 metros, pero los gobiernos han autorizado excepciones por decreto, por ejemplo para marinas y clubes de playa en Punta Cana.',
  },
  {
    id: 'des-17',
    tier: 4,
    topic: 'mineria-ambiente',
    effects: { des: 2 },
    text: 'Una empresa que contamine un río debería ser cerrada, aunque se pierdan empleos.',
  },
  {
    id: 'des-18',
    tier: 4,
    topic: 'desarrollo',
    effects: { des: -2 },
    text: 'Un país en desarrollo como RD no debería frenar su crecimiento para reducir sus emisiones de carbono.',
  },
  {
    id: 'des-19',
    tier: 4,
    topic: 'mineria-ambiente',
    effects: { des: 2 },
    text: 'Todo proyecto minero debería necesitar el visto bueno de las comunidades afectadas en una consulta.',
  },
  {
    id: 'des-20',
    tier: 4,
    topic: 'mineria-ambiente',
    effects: { des: -2 },
    text: 'Las familias campesinas que viven dentro de áreas protegidas deberían poder seguir cultivando allí.',
  },
  {
    id: 'des-21',
    tier: 4,
    topic: 'desarrollo',
    effects: { des: 2 },
    text: 'Los hoteles y proyectos turísticos deberían pagar un impuesto especial para proteger costas y arrecifes.',
  },
];
