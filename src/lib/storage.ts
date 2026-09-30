import type { Answers } from '../engine/scoring.ts';
import { isMode, type Mode } from '../engine/modes.ts';

const PROGRESS_KEY = 'cpc-progreso-v1';

export interface SavedProgress {
  mode: Mode;
  answers: Answers;
  index: number;
  updatedAt: string;
}

// localStorage puede no existir o lanzar (modo privado, cookies bloqueadas): todo va en try/catch.

export function loadProgress(): SavedProgress | undefined {
  try {
    const raw = window.localStorage.getItem(PROGRESS_KEY);
    if (!raw) return undefined;
    const data = JSON.parse(raw) as Partial<SavedProgress>;
    if (typeof data.mode !== 'number' || !isMode(data.mode)) return undefined;
    if (typeof data.index !== 'number' || typeof data.answers !== 'object' || data.answers === null) return undefined;
    return { mode: data.mode, answers: data.answers, index: data.index, updatedAt: String(data.updatedAt ?? '') };
  } catch {
    return undefined;
  }
}

export function saveProgress(progress: Omit<SavedProgress, 'updatedAt'>): void {
  try {
    window.localStorage.setItem(PROGRESS_KEY, JSON.stringify({ ...progress, updatedAt: new Date().toISOString() }));
  } catch {
    // Sin almacenamiento: el test funciona igual, solo que no se puede reanudar.
  }
}

export function clearProgress(): void {
  try {
    window.localStorage.removeItem(PROGRESS_KEY);
  } catch {
    // Nada que limpiar.
  }
}
