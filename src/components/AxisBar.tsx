import { intensity } from '../data/axes.ts';
import type { Axis } from '../data/types.ts';
import { formatPercent } from '../lib/labels.ts';

interface Props {
  axis: Axis;
  score: number;
  /** 0..1; se omite cuando el resultado viene de un enlace compartido. */
  certainty?: number;
}

/** Barra bipolar estilo 8values: % hacia cada polo, etiqueta de intensidad y certeza. */
export function AxisBar({ axis, score, certainty }: Props) {
  // Se redondea un lado y el otro es el complemento, para que siempre sumen 100 %.
  const negative = Math.round((100 - score) / 2);
  const positive = 100 - negative;
  const level = intensity(score);
  const leaning = score < 0 ? axis.negative : axis.positive;
  const label = level === 'centro' ? 'Centro' : `${level[0]!.toUpperCase()}${level.slice(1)}: ${leaning}`;
  return (
    <div className="axis-bar">
      <div className="head">
        <strong>{axis.name}</strong>
        <span>{label}</span>
      </div>
      <div
        className="track"
        role="img"
        aria-label={`${axis.name}: ${formatPercent(negative)} ${axis.negative}, ${formatPercent(positive)} ${axis.positive}`}
      >
        <div style={{ width: `${negative}%`, background: axis.negativeColor }}>{negative >= 12 && formatPercent(negative)}</div>
        <div style={{ width: `${positive}%`, background: axis.positiveColor }}>{positive >= 12 && formatPercent(positive)}</div>
      </div>
      <div className="foot">
        <span>{axis.negative}</span>
        {certainty !== undefined && <span>certeza {formatPercent(certainty * 100)}</span>}
        <span>{axis.positive}</span>
      </div>
    </div>
  );
}
