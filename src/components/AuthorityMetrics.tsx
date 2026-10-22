'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Truck, Layers, MapPin, CheckCircle2 } from 'lucide-react';

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
      const ratingObj = { val: 0.0 };
      gsap.to(ratingObj, {
        val: 4.8,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        onUpdate: () => {
          if (ratingRef.current) {
            ratingRef.current.innerText = ratingObj.val.toFixed(1).replace('.', ',');
          }
        },
      });

      // Counter animation for review count
      const reviewObj = { count: 0 };
      gsap.to(reviewObj, {
        count: 38,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        onUpdate: () => {
          if (reviewsRef.current) {
            reviewsRef.current.innerText = Math.floor(reviewObj.count).toString();
          }
        },
      });

      // Stagger fade-in for metric cards
      gsap.from('.metric-card', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="metricas"
      ref={containerRef}
      className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-6 rounded-3xl bg-[#121214]/90 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
        {/* Metric 1: Avaliação Google */}
        <div className="metric-card p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-all duration-300 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div className="flex items-center text-xs text-amber-400 font-semibold gap-1">
              ★★★★★
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-1.5">
              <span ref={ratingRef} className="text-3xl sm:text-4xl font-extrabold text-white font-sans">
                4,8
              </span>
              <span className="text-sm text-neutral-400 font-medium">/ 5.0</span>
            </div>
            <p className="text-xs text-neutral-300 font-medium mt-1">
              Avaliação Oficial no Google
            </p>
            <p className="text-[11px] text-neutral-500 mt-0.5">
              Baseada em <span ref={reviewsRef}>38</span> avaliações verificadas
            </p>
          </div>
        </div>

        {/* Metric 2: Entrega Rápida */}
        <div className="metric-card p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-all duration-300 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Truck className="w-5 h-5" />
            </div>
            <span className="text-[10px] tracking-wider uppercase font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Agilidade
            </span>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-sans uppercase tracking-tight">
              Entrega Rápida
            </h3>
            <p className="text-xs text-neutral-300 font-medium mt-1">
              Opção de entrega direta
            </p>
            <p className="text-[11px] text-neutral-500 mt-0.5">
              Para estéticas, detailers e entusiastas de Francisco Beltrão
            </p>
          </div>
        </div>

        {/* Metric 3: Linha Completa */}
        <div className="metric-card p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-all duration-300 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-[10px] tracking-wider uppercase font-semibold px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Catálogo
            </span>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-sans uppercase tracking-tight">
              Linha Completa
            </h3>
            <p className="text-xs text-neutral-300 font-medium mt-1">
              Das lavagens aos vitrificadores
            </p>
            <p className="text-[11px] text-neutral-500 mt-0.5">
              Compostos, boinas, coatings cerâmicos e maquinários
            </p>
          </div>
        </div>

        {/* Metric 4: Bairro Cango */}
        <div className="metric-card p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-all duration-300 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-[10px] tracking-wider uppercase font-semibold px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20">
              Localização
            </span>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-sans uppercase tracking-tight">
              Bairro Cango
            </h3>
            <p className="text-xs text-neutral-300 font-medium mt-1">
              Av. Antonio Silvio Barbieri, 1832
            </p>
            <p className="text-[11px] text-neutral-500 mt-0.5">
              Ponto de fácil acesso com acessibilidade total
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
