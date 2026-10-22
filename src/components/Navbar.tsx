'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MessageCircle, Menu, X, MapPin, ChevronRight, Phone } from 'lucide-react';
import JaLogo from './JaLogo';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(
    () => {
      if (isScrolled) {
        gsap.to(navRef.current, {
          backgroundColor: 'rgba(9, 9, 11, 0.90)',
          backdropFilter: 'blur(16px)',
          borderColor: 'rgba(255, 255, 255, 0.12)',
          boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.8)',
          duration: 0.35,
          ease: 'power2.out',
        });
      } else {
        gsap.to(navRef.current, {
          backgroundColor: 'rgba(9, 9, 11, 0.0)',
          backdropFilter: 'blur(0px)',
          borderColor: 'rgba(255, 255, 255, 0.0)',
          boxShadow: 'none',
          duration: 0.35,
          ease: 'power2.out',
        });
      }
    },
    { dependencies: [isScrolled], scope: navRef }
  );

  const waUrl =
    'https://wa.me/5546999049889?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20a%20disponibilidade%20de%20produtos%20na%20J.A%20Produtos%20Automotivos.';

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all border-b border-transparent bg-transparent py-3.5 sm:py-4 px-4 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 transition-transform duration-200 active:scale-95"
          aria-label="J.A Produtos Automotivos - Página Inicial"
        >
          <JaLogo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <a
            href="#catalogo"
            className="hover:text-emerald-400 transition-colors duration-200 relative group py-1"
          >
            <span>Catálogo</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="#vantagens"
            className="hover:text-emerald-400 transition-colors duration-200 relative group py-1"
          >
            <span>Vantagens</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="#avaliacoes"
            className="hover:text-emerald-400 transition-colors duration-200 relative group py-1"
          >
            <span>Avaliações</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="#localizacao"
            className="hover:text-emerald-400 transition-colors duration-200 relative group py-1"
          >
            <span>Localização</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-btn"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs lg:text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_25px_rgba(16,185,129,0.55)] transition-all duration-300 active:scale-95 border border-emerald-300/30"
          >
            <MessageCircle className="w-4 h-4 stroke-[2.2]" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          aria-label="Abrir menu principal"
          className="md:hidden p-2 rounded-xl text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-4 pb-6 px-4 rounded-2xl bg-neutral-950/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-2">
            <a
              href="#catalogo"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-neutral-200 hover:text-white hover:bg-white/5 font-medium transition-colors"
            >
              <span>Catálogo de Produtos</span>
              <ChevronRight className="w-4 h-4 text-neutral-500" />
            </a>
            <a
              href="#vantagens"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-neutral-200 hover:text-white hover:bg-white/5 font-medium transition-colors"
            >
              <span>Vantagens & Diferenciais</span>
              <ChevronRight className="w-4 h-4 text-neutral-500" />
            </a>
            <a
              href="#avaliacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-neutral-200 hover:text-white hover:bg-white/5 font-medium transition-colors"
            >
              <span>Avaliações Google (4.8 ★)</span>
              <ChevronRight className="w-4 h-4 text-neutral-500" />
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-neutral-200 hover:text-white hover:bg-white/5 font-medium transition-colors"
            >
              <span>Localização & Horários</span>
              <ChevronRight className="w-4 h-4 text-neutral-500" />
            </a>
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-sm shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp Oficial</span>
            </a>
            <a
              href="tel:+5546999049889"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 font-medium text-xs border border-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Ligar: (46) 99904-9889</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
