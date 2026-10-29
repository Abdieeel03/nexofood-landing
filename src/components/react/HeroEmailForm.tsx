import React, { useState, useRef, useEffect } from 'react';

export const HeroEmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('Ingresa un correo corporativo o de tu negocio válido.');

  const wrapRef = useRef<HTMLDivElement>(null);
  const inputBoxRef = useRef<HTMLDivElement>(null);
  const revertTimerRef = useRef<number | null>(null);

  const clearErrorState = () => {
    if (revertTimerRef.current) {
      window.clearTimeout(revertTimerRef.current);
      revertTimerRef.current = null;
    }
    wrapRef.current?.classList.remove('is-error');
    inputBoxRef.current?.classList.remove('is-error');
  };

  const triggerError = (msg: string) => {
    setErrorMsg(msg);
    const wrap = wrapRef.current;
    const input = inputBoxRef.current;
    if (!wrap || !input) return;

    wrap.classList.add('is-error');
    input.classList.add('is-error');

    input.classList.remove('is-shaking');
    void input.offsetWidth;
    input.classList.add('is-shaking');

    const shakeMs = 280;
    window.setTimeout(() => {
      input.classList.remove('is-shaking');
    }, shakeMs + 20);

    if (revertTimerRef.current) window.clearTimeout(revertTimerRef.current);
    revertTimerRef.current = window.setTimeout(() => {
      revertTimerRef.current = null;
      wrap.classList.remove('is-error');
      input.classList.remove('is-error');
    }, shakeMs + 3400);
  };

  useEffect(() => {
    return () => {
      if (revertTimerRef.current) window.clearTimeout(revertTimerRef.current);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!trimmed) {
      triggerError('Escribe el correo donde enviaremos el acceso a tu panel.');
      return;
    }
    if (!emailRegex.test(trimmed)) {
      triggerError('Formato de correo incompleto (ejemplo: cocina@turestaurante.com).');
      return;
    }

    clearErrorState();
    setStatus('loading');
    window.setTimeout(() => {
      setSubmittedEmail(trimmed);
      setStatus('success');
      setEmail('');
    }, 380);
  };

  return (
    <div ref={wrapRef} className="t-input-wrap w-full max-w-[34.5rem] mt-1">
      {/* Mobile-first concentric shell: rounded-2xl (16px) with p-1.5 (6px) -> inner rounded-[10px] */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="t-input flex flex-col sm:flex-row gap-1.5 w-full bg-white/95 backdrop-blur-md p-1.5 rounded-2xl border border-white/25 shadow-[0_16px_36px_-8px_rgba(0,0,0,0.4)]"
        ref={inputBoxRef}
      >
        <div className="relative flex-1 flex items-center">
          <span
            className="absolute left-3.5 text-on-surface-variant/75 pointer-events-none flex items-center"
            aria-hidden="true"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
              storefront
            </span>
          </span>
          {/* text-base (16px) on mobile prevents iOS Safari auto-zoom on focus */}
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearErrorState();
              if (status === 'success') setStatus('idle');
            }}
            placeholder="correo@turestaurante.com"
            aria-label="Correo electrónico de tu restaurante"
            className="w-full min-h-[46px] sm:min-h-[44px] bg-transparent text-on-surface rounded-[10px] py-2.5 pl-10 pr-3 text-base outline-none placeholder:text-on-surface-variant/65 focus:bg-surface-container-low/60 transition-[background-color] duration-150"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center gap-2 font-bold cursor-pointer whitespace-nowrap leading-none relative overflow-hidden min-h-[46px] sm:min-h-[44px] py-3 sm:py-2.5 pl-5 pr-4 text-sm sm:text-sm rounded-[10px] w-full sm:w-auto bg-secondary-container text-on-secondary shadow-[0_2px_6px_rgba(254,106,52,0.28)] hover:bg-secondary-accent hover:shadow-cta transition-[transform,background-color,box-shadow,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span>
            {status === 'loading'
              ? 'Creando entorno...'
              : status === 'success'
                ? 'Acceso enviado'
                : 'Crear mi tienda gratis'}
          </span>
          {status === 'success' ? (
            <span
              className="t-success-check w-4 h-4 text-white"
              data-state="in"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path
                  d="M4.5 12.5L9.5 17.5L19.5 6.5"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          ) : (
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }} aria-hidden="true">
              arrow_forward
            </span>
          )}
        </button>
      </form>

      {/* Error Message (transitions/error-state-shake.md) */}
      <p
        role="alert"
        className="t-error-msg text-xs font-semibold text-[#ffb4ab] mt-1.5 pl-1.5 flex items-start sm:items-center gap-1.5"
      >
        <span className="material-symbols-outlined shrink-0 mt-0.5 sm:mt-0" style={{ fontSize: '15px' }} aria-hidden="true">
          error
        </span>
        <span>{errorMsg}</span>
      </p>

      {/* Toast Confirmation (transitions/toast.md + transitions/success-check.md) */}
      <div
        className={`t-toast ${status === 'success' ? 'is-open mt-2' : 'h-0 overflow-hidden'}`}
        role="status"
        aria-live="polite"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 rounded-xl bg-[#003925]/95 border border-primary-fixed/30 p-3 sm:px-3.5 sm:py-2.5 text-xs sm:text-sm text-inverse-on-surface shadow-level-2">
          <div className="flex items-start sm:items-center gap-2.5">
            <span
              className="t-success-check w-5 h-5 text-primary-fixed shrink-0 mt-0.5 sm:mt-0"
              data-state={status === 'success' ? 'in' : 'out'}
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path
                  d="M4.5 12.5L9.5 17.5L19.5 6.5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="leading-snug">
              Enviamos el enlace de activación (14 días sin costo) a{' '}
              <strong className="text-primary-fixed font-bold break-all">{submittedEmail}</strong>.
            </span>
          </div>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="self-end sm:self-auto min-h-[36px] text-inverse-on-surface/80 hover:text-white bg-white/8 hover:bg-white/15 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
          >
            Listo
          </button>
        </div>
      </div>
    </div>
  );
};
