'use client';

import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const waUrl =
    'https://wa.me/5546999049889?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20a%20disponibilidade%20de%20produtos%20na%20J.A%20Produtos%20Automotivos.';

  return (
    <aside
      aria-label="Atendimento WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center group"
    >
      {/* Tooltip on Desktop hover */}
      <div className="hidden lg:flex items-center mr-3 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-white/10 text-neutral-200 text-xs font-medium shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none backdrop-blur-md">
        <span>Atendimento Online • J.A Auto</span>
      </div>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="relative flex items-center justify-center w-14 h-14 sm:w-auto sm:px-5 sm:h-13 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white rounded-full shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_35px_rgba(16,185,129,0.65)] transition-all duration-300 active:scale-95 border border-emerald-300/30"
      >
        {/* Pulsing online status indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300 border-2 border-[#09090b]" />
        </span>

        <MessageCircle className="w-6 h-6 sm:mr-2.5 stroke-[2.2]" />
        <span className="hidden sm:inline font-bold text-xs lg:text-sm tracking-wide">
          Falar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
