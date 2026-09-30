import type { Question } from '../types.ts';
import { ecoQuestions } from './eco.ts';
import { socQuestions } from './soc.ts';
import { migQuestions } from './mig.ts';
import { ideQuestions } from './ide.ts';
import { relQuestions } from './rel.ts';
import { valQuestions } from './val.ts';
import { ordQuestions } from './ord.ts';
import { podQuestions } from './pod.ts';
import { etiQuestions } from './eti.ts';
import { geoQuestions } from './geo.ts';
import { desQuestions } from './des.ts';
import { estQuestions } from './est.ts';

/** Banco completo de 256 preguntas (un archivo por eje primario). */
export const QUESTIONS: readonly Question[] = [
  ...ecoQuestions,
  ...socQuestions,
  ...migQuestions,
  ...ideQuestions,
  ...relQuestions,
  ...valQuestions,
  ...ordQuestions,
  ...podQuestions,
  ...etiQuestions,
  ...geoQuestions,
  ...desQuestions,
  ...estQuestions,
];
