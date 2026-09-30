import type { Confidence } from '../data/types.ts';
import { CONFIDENCE_LABEL } from '../lib/labels.ts';

export function ConfidenceBadge({ level }: { level: Confidence }) {
  return <span className={`badge ${level}`}>{CONFIDENCE_LABEL[level]}</span>;
}
