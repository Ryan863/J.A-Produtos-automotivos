import React from 'react';
import JaLogo from './JaLogo';
import { MapPin, Phone, MessageCircle, Heart } from 'lucide-react';

export default function Footer() {
  const waUrl =
    'https://wa.me/5546999049889?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20a%20disponibilidade%20de%20produtos%20na%20J.A%20Produtos%20Automotivos.';

  return (
    <footer className="relative bg-[#09090b] text-neutral-400 text-xs border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Col 1: Brand & Description */}
          <div className="md:col-span-5">
            <JaLogo size="md" />
            <p className="mt-4 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Loja especializada em produtos e equipamentos para estética automotiva. Linha completa
              para lavagem detalhada, correção de pintura e proteção de alta performance em Francisco
              Beltrão - PR.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span>Atendimento Consultivo Especializado</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-sans">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#catalogo" className="hover:text-emerald-400 transition-colors">
                  Catálogo de Produtos
                </a>
              </li>
              <li>
                <a href="#vantagens" className="hover:text-emerald-400 transition-colors">
                  Vantagens & Diferenciais
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-emerald-400 transition-colors">
                  Avaliações Google (4.8 ★)
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-emerald-400 transition-colors">
                  Localização & Horários
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Summary */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-sans">
              Contato & Local
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Av. Antonio Silvio Barbieri, 1832 - Cango, Francisco Beltrão - PR, 85603-000
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>(46) 99904-9889</span>
              </li>
              <li>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors mt-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <p>© 2026 J.A Produtos Automotivos. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Francisco Beltrão - Paraná</span>
            <span>•</span>
            <span>Estética Automotiva de Alta Performance</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
