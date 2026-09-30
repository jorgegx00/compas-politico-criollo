import type { Question } from '../types.ts';

/** Eje primario `est` (Estilo): −100 = partidocracia / establishment, +100 = antisistema / outsider. */
export const estQuestions: Question[] = [
  // Tier 1
  {
    id: 'est-02',
    tier: 1,
    topic: 'sistema-partidos',
    effects: { est: 2 },
    text: 'Una figura mediática sin experiencia de gobierno, como un comunicador o un streamer, podría ser un buen presidente.',
  },
  {
    id: 'est-01',
    tier: 1,
    topic: 'sistema-partidos',
    effects: { est: -2 },
    text: 'Prefiero un presidente con experiencia de Estado, aunque venga de un partido tradicional.',
  },
  {
    id: 'est-03',
    tier: 1,
    topic: 'sistema-partidos',
    effects: { est: -2 },
    text: 'Los partidos políticos, con todos sus defectos, son indispensables para la democracia.',
  },
  // Tier 2
  {
    id: 'est-04',
    tier: 2,
    topic: 'sistema-partidos',
    effects: { est: 3 },
    text: 'El próximo presidente debería ser alguien de fuera de los partidos tradicionales.',
  },
  {
    id: 'est-05',
    tier: 2,
    topic: 'sistema-partidos',
    effects: { est: -3 },
    text: 'Solo los partidos tradicionales están preparados para gobernar el país.',
  },
  // Tier 3
  {
    id: 'est-06',
    tier: 3,
    topic: 'sistema-partidos',
    effects: { est: 2, pod: 1 },
    text: 'Deberían permitirse candidaturas independientes, sin partido, a todos los cargos, incluida la presidencia.',
    context:
      'Candidatura independiente: postularse a un cargo sin ser propuesto por un partido. En 2026 Somos Pueblo presentó recursos de inconstitucionalidad para permitirlas.',
  },
  {
    id: 'est-07',
    tier: 3,
    topic: 'sistema-partidos',
    effects: { est: -2 },
    text: 'El Estado debe seguir financiando a los partidos para que no dependan de donantes privados.',
    context:
      'Los partidos reconocidos por la Junta Central Electoral (JCE) reciben dinero del presupuesto público; algunos aspirantes proponen reducirlo o eliminarlo.',
  },
  {
    id: 'est-09',
    tier: 3,
    topic: 'libertad-expresion',
    effects: { est: -2 },
    text: 'El gobierno no debió negociar los cambios a la "ley mordaza" con comunicadores e influencers, porque nadie los eligió.',
    context:
      'En julio de 2026 comunicadores e influencers protestaron contra artículos del nuevo Código Penal (Ley 74-25) que llamaron "ley mordaza"; negociaron cambios con el gobierno y la Ley 44-26 modificó el código.',
  },
  {
    id: 'est-10',
    tier: 3,
    topic: 'corrupcion',
    effects: { est: 2 },
    text: 'Todos los partidos tradicionales son igual de corruptos.',
  },
  {
    id: 'est-20',
    tier: 3,
    topic: 'sistema-partidos',
    effects: { est: 3, pod: -1 },
    text: 'Los cambios de fondo en RD no llegarán por las elecciones, sino por la lucha popular en las calles y las huelgas.',
  },
  // Tier 4
  {
    id: 'est-08',
    tier: 4,
    topic: 'libertad-expresion',
    effects: { est: 2 },
    text: 'Los streamers y las redes sociales informan mejor al pueblo que los periódicos y noticieros tradicionales.',
  },
  {
    id: 'est-11',
    tier: 4,
    topic: 'educacion',
    effects: { est: -2 },
    text: 'Para ser presidente debería exigirse un título universitario.',
  },
  {
    id: 'est-12',
    tier: 4,
    topic: 'sistema-partidos',
    effects: { est: 3 },
    text: 'Hay que eliminar el financiamiento público a los partidos políticos.',
  },
  {
    id: 'est-13',
    tier: 4,
    topic: 'estado-mercado',
    effects: { est: -2 },
    text: 'Las grandes reformas del país deben salir de acuerdos entre los partidos, los empresarios y los sindicatos.',
  },
  {
    id: 'est-14',
    tier: 4,
    topic: 'sistema-partidos',
    effects: { est: 2 },
    text: 'Votaría por un candidato sin partido aunque no tenga legisladores que lo apoyen en el Congreso.',
  },
  {
    id: 'est-15',
    tier: 4,
    topic: 'libertad-expresion',
    effects: { est: -2 },
    text: 'Un comunicador que se lanza como candidato debería dejar su programa mientras dure la campaña.',
  },
  {
    id: 'est-16',
    tier: 4,
    topic: 'estado-mercado',
    effects: { est: 2 },
    text: 'Me gustaría que un empresario exitoso, sin carrera política, fuera presidente del país.',
  },
  {
    id: 'est-17',
    tier: 4,
    topic: 'estado-mercado',
    effects: { est: -2 },
    text: 'Instituciones como el Banco Central o el Ministerio de Hacienda deberían dirigirlas técnicos de carrera, no figuras populares.',
  },
  {
    id: 'est-18',
    tier: 4,
    topic: 'libertad-expresion',
    effects: { est: 2 },
    text: 'Los medios tradicionales defienden más los intereses de los partidos que los del pueblo.',
  },
  {
    id: 'est-19',
    tier: 4,
    topic: 'sistema-partidos',
    effects: { est: -2 },
    text: 'Habría que endurecer los requisitos para inscribir partidos nuevos, para evitar partidos de un solo líder.',
    context:
      'Para que la JCE reconozca un partido nuevo hay que reunir decenas de miles de firmas; en 2026 se exigían unas 82,000–90,000.',
  },
  {
    id: 'est-21',
    tier: 4,
    topic: 'libertad-expresion',
    effects: { est: -2 },
    text: 'Tener millones de seguidores en las redes no prepara a nadie para gobernar un país.',
  },
];
