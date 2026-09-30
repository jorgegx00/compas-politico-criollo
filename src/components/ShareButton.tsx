import { useState } from 'react';

async function copy(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Respaldo para navegadores sin API de portapapeles o sin permiso.
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    area.remove();
    return ok;
  }
}

export function ShareButton({ url }: { url: string }) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  return (
    <div className="row">
      <button
        type="button"
        className="btn btn-primary"
        onClick={async () => setStatus((await copy(url)) ? 'copied' : 'error')}
      >
        Copiar enlace de mis resultados
      </button>
      <span role="status" className="small muted">
        {status === 'copied' && 'Enlace copiado.'}
        {status === 'error' && 'No se pudo copiar; copia el enlace de la barra del navegador.'}
      </span>
    </div>
  );
}
