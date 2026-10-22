'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MessageCircle, ArrowDown, Sparkles, ShieldCheck, ArrowUpRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
      })
        .from(
          '.hero-title',
          {
            y: 40,
            opacity: 0,
            duration: 1.1,
          },
          '-=0.5'
        )
        .from(
          '.hero-sub',
          {
            y: 30,
            opacity: 0,
            duration: 0.9,
          },
          '-=0.7'
        )
        .from(
          '.hero-cta',
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
          },
          '-=0.5'
        )
        .from(
          '.hero-footer-hint',
          {
            opacity: 0,
            y: 10,
            duration: 0.6,
          },
          '-=0.3'
        );
    },
    { scope: containerRef }
  );

  const waUrl =
    'https://wa.me/5546999049889?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20a%20disponibilidade%20de%20produtos%20na%20J.A%20Produtos%20Automotivos.';

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#09090b] pt-24 pb-8 sm:pb-12"
    >
      {/* Background Image with Dark Masking Gradients */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <div className="hidden sm:block absolute inset-0">
          <Image
            src="/images/hero-desktop.png"
            alt="Porsche em estúdio automotivo escuro com iluminação técnica em LED"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-100"
          />
        </div>

        {/* Mobile Image */}
        <div className="block sm:hidden absolute inset-0">
          <Image
            src="/images/hero-mobile.png"
            alt="Porsche em estúdio automotivo escuro vertical"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-100"
          />
        </div>

        {/* Dark Editorial Mask: Multi-layer gradients ensuring crystal clear typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/65 to-[#09090b]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/95 via-[#09090b]/75 to-transparent sm:w-3/4" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(6,182,212,0.08),transparent_55%)] pointer-events-none" />
      </div>

      {/* Main Content (Center aligned vertically) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full my-auto py-12">
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <div className="hero-badge inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-neutral-300">
              FRANCISCO BELTRÃO - PR <span className="text-neutral-500">|</span> CANGO
            </span>
          </div>

          {/* Editorial H1 Title */}
          <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 font-sans">
            Os melhores produtos e equipamentos para o{' '}
            <span className="font-editorial italic font-normal text-emerald-400 text-glow-green">
              cuidado
            </span>{' '}
            do seu veículo.
          </h1>

          {/* Subtitle */}
          <p className="hero-sub text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl font-normal mb-8">
            Linha completa para lavagem detalhada, polimento e vitrificação. As marcas mais renomadas
            do mercado mundial com atendimento consultivo especializado na Av. Antonio Silvio Barbieri.
          </p>

          {/* CTAs */}
          <div className="hero-cta flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-primary-cta"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(16,185,129,0.55)] transition-all duration-300 active:scale-95 border border-emerald-300/30 group"
            >
              <MessageCircle className="w-5 h-5 stroke-[2.2] group-hover:scale-110 transition-transform" />
              <span>Consultar Produtos no WhatsApp</span>
            </a>

            <a
              href="#catalogo"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-medium text-neutral-200 bg-white/[0.05] hover:bg-white/[0.10] border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-200 active:scale-95 group"
            >
              <span>Ver Linhas de Produtos</span>
              <ArrowDown className="w-4 h-4 text-neutral-400 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Quick micro trust features */}
          <div className="hero-cta mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Pronta Entrega Local</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Produtos 100% Originais</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-bold">4.8 ★★★★★</span>
              <span>38 Avaliações no Google</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt at Bottom */}
      <div className="hero-footer-hint relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full flex items-center justify-between text-xs text-neutral-500 pt-2">
        <span className="tracking-widest uppercase text-[10px]">J.A PRODUTOS AUTOMOTIVOS • ESTÚDIO EDITORIAL</span>
        <a
          href="#metricas"
          className="inline-flex items-center gap-1.5 hover:text-neutral-300 transition-colors"
        >
          <span>Explorar</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
