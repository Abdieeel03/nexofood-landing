import React, { useState } from 'react';

export const HeroEmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'loading'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      alert(`¡Gracias por tu interés! Te contactaremos pronto a ${email}`);
      setEmail('');
      setTimeout(() => setStatus('idle'), 4000);
    }, 400);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-2.5 w-full max-w-[26.25rem] sm:max-w-[33.75rem] mt-1"
    >
      <div className="relative flex-1">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none flex items-center">
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
            mail
          </span>
        </span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu correo electrónico"
          className="w-full bg-surface text-on-surface border border-transparent rounded-xl py-3 pl-11 pr-3.5 text-sm sm:text-base transition-all outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/25 placeholder:text-outline"
          required
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center justify-center gap-2 font-semibold border border-transparent no-underline cursor-pointer whitespace-nowrap transition-all duration-200 leading-none relative overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed bg-secondary-container text-on-secondary shadow-[0_2px_4px_rgba(254,106,52,0.2)] hover:bg-secondary-accent hover:shadow-cta hover:-translate-y-0.5 active:translate-y-0 py-3 px-5 text-sm rounded-xl w-full sm:w-auto"
      >
        <span>{status === 'loading' ? 'Enviando...' : 'Empieza tu prueba gratis'}</span>
        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
          arrow_forward
        </span>
      </button>
    </form>
  );
};
