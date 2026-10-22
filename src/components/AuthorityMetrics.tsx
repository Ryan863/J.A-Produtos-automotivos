'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Truck, Layers, MapPin } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AuthorityMetrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ratingRef = useRef<HTMLSpanElement>(null);
  const reviewsRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      // Counter animation for rating
      const ratingObj = { val: 4.0 };
      gsap.to(ratingObj, {
        val: 4.8,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          once: true,
        },
        onUpdate: () => {
          if (ratingRef.current) {
            ratingRef.current.innerText = ratingObj.val.toFixed(1).replace('.', ',');
          }
        },
      });

      // Counter animation for review count
      const reviewObj = { count: 20 };
      gsap.to(reviewObj, {
        count: 38,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          once: true,
        },
        onUpdate: () => {
          if (reviewsRef.current) {
            reviewsRef.current.innerText = Math.round(reviewObj.count).toString();
          }
        },
      });

      // Staggered reveal that always leaves elements visible
      gsap.fromTo(
        '.metric-item',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%',
            once: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="metricas"
      ref={containerRef}
      className="relative z-20 py-12 sm:py-16 bg-[#0c0c0e] border-y border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
          {/* Metric 1: Google Rating */}
          <div className="metric-item lg:px-8 py-2 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-semibold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                GOOGLE REVIEWS
              </span>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span ref={ratingRef} className="text-3xl sm:text-4xl font-extrabold text-white font-sans">
                  4,8
                </span>
                <span className="text-sm text-neutral-400 font-medium">/ 5.0</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 font-medium mt-1">
                Avaliação Oficial no Google Maps
              </p>
              <p className="text-[11px] text-neutral-500 mt-0.5">
                Baseada em <span ref={reviewsRef} className="text-neutral-300 font-semibold">38</span> avaliações reais
              </p>
            </div>
          </div>

          {/* Metric 2: Entrega Rápida */}
          <div className="metric-item lg:px-8 py-2 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Truck className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold px-2 py-0.5 rounded bg-emerald-400/10 border border-emerald-400/20">
                AGILIDADE
              </span>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans uppercase tracking-tight">
                Entrega Rápida
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-medium mt-1">
                Opção de entrega local
              </p>
              <p className="text-[11px] text-neutral-500 mt-0.5">
                Para estéticas, detailers e clientes de Francisco Beltrão
              </p>
            </div>
          </div>

          {/* Metric 3: Linha Completa */}
          <div className="metric-item lg:px-8 py-2 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Layers className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-semibold px-2 py-0.5 rounded bg-cyan-400/10 border border-cyan-400/20">
                ESTOQUE
              </span>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans uppercase tracking-tight">
                Linha Completa
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-medium mt-1">
                Das lavagens aos vitrificadores
              </p>
              <p className="text-[11px] text-neutral-500 mt-0.5">
                Compostos, boinas, coatings cerâmicos e maquinários
              </p>
            </div>
          </div>

          {/* Metric 4: Bairro Cango */}
          <div className="metric-item lg:px-8 py-2 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase font-semibold px-2 py-0.5 rounded bg-purple-400/10 border border-purple-400/20">
                LOCALIZAÇÃO
              </span>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans uppercase tracking-tight">
                Bairro Cango
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-medium mt-1">
                Av. Antonio Silvio Barbieri, 1832
              </p>
              <p className="text-[11px] text-neutral-500 mt-0.5">
                Ponto de fácil acesso com acessibilidade total
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
