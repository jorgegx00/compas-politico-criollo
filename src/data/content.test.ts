// Valida el contenido archivo por archivo, así cada parte se puede probar aunque falten las demás:
//   npx vitest run src/data/content.test.ts -t "preguntas eco"
//   npx vitest run src/data/content.test.ts -t "perfiles gobiernos"
import { describe, expect, it } from 'vitest';
import { AXIS_IDS } from './axes.ts';
import { MANDATORY_TOPICS, SECONDARY_TOPICS } from './topics.ts';
import type { AxisId, Profile, ProfileKind, Question } from './types.ts';
import { REQUIRED_PROFILE_IDS, validateAxisQuestions, validateBank, validateProfiles } from './validate.ts';

const questionModules = import.meta.glob<Record<string, Question[]>>(
  ['./questions/*.ts', '!./questions/index.ts'],
  { eager: true },
);
const profileModules = import.meta.glob<Record<string, unknown>>(['./profiles/*.ts', '!./profiles/index.ts'], {
  eager: true,
});

const axisQuestions = (axis: AxisId) => questionModules[`./questions/${axis}.ts`]?.[`${axis}Questions`];

const PROFILE_FILES: readonly { file: string; kinds: readonly ProfileKind[]; min: number }[] = [
  { file: 'gobiernos', kinds: ['gobierno'], min: 20 },
  { file: 'historicosRD', kinds: ['historicoRD'], min: 10 },
  { file: 'partidos', kinds: ['partido'], min: 20 },
  { file: 'politicos', kinds: ['politico'], min: 20 },
  { file: 'mediaticos', kinds: ['mediatico', 'movimiento'], min: 45 },
  { file: 'paises', kinds: ['pais'], min: 45 },
  { file: 'figurasExtranjeras', kinds: ['figuraExtranjera'], min: 40 },
  { file: 'arquetipos', kinds: ['arquetipo'], min: 14 },
];

const fileProfiles = (file: string) => profileModules[`./profiles/${file}.ts`]?.[file] as Profile[] | undefined;

describe('preguntas', () => {
  for (const axis of AXIS_IDS) {
    it(`preguntas ${axis}`, () => {
      const questions = axisQuestions(axis);
      expect(questions, `falta src/data/questions/${axis}.ts (export ${axis}Questions)`).toBeDefined();
      expect(validateAxisQuestions(axis, questions!)).toEqual([]);
    });
  }

  it('preguntas: banco completo', () => {
    const bank = AXIS_IDS.flatMap((axis) => axisQuestions(axis) ?? []);
    expect(validateBank(bank, MANDATORY_TOPICS, SECONDARY_TOPICS)).toEqual([]);
  });
});

describe('perfiles', () => {
  for (const { file, kinds, min } of PROFILE_FILES) {
    it(`perfiles ${file}`, () => {
      const profiles = fileProfiles(file);
      expect(profiles, `falta src/data/profiles/${file}.ts (export ${file})`).toBeDefined();
      expect(profiles!.length).toBeGreaterThanOrEqual(min);
      expect(validateProfiles(profiles!, kinds)).toEqual([]);
    });
  }

  it('perfiles paises: fila de control del Estado dominicano aparte', () => {
    const control = profileModules['./profiles/paises.ts']?.estadoDominicano as Profile | undefined;
    expect(control, 'falta export estadoDominicano en paises.ts').toBeDefined();
    expect(validateProfiles([control!], ['pais'])).toEqual([]);
    expect(fileProfiles('paises')?.some((profile) => profile.id === control!.id)).toBe(false);
  });

  it('perfiles arquetipos: bien separados entre sí', () => {
    const archetypes = fileProfiles('arquetipos') ?? [];
    for (const a of archetypes) {
      for (const b of archetypes) {
        if (a.id >= b.id) continue;
        const rms = Math.sqrt(AXIS_IDS.reduce((sum, axis) => sum + (a.scores[axis] - b.scores[axis]) ** 2, 0) / 12);
        expect(rms, `${a.id} y ${b.id} están demasiado cerca`).toBeGreaterThanOrEqual(25);
      }
    }
  });

  it('perfiles: ids únicos entre archivos y perfiles requeridos presentes', () => {
    const all = PROFILE_FILES.flatMap(({ file }) => fileProfiles(file) ?? []);
    const ids = all.map((profile) => profile.id);
    expect(ids.filter((id, i) => ids.indexOf(id) !== i)).toEqual([]);
    for (const id of REQUIRED_PROFILE_IDS) expect(ids, `falta el perfil ${id}`).toContain(id);
  });
});
