export function ProgressBar({ value, max }: { value: number; max: number }) {
  const percent = max > 0 ? (100 * value) / max : 0;
  return (
    <div
      className="progress"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-label="Progreso del test"
    >
      <div style={{ width: `${percent}%` }} />
    </div>
  );
}
