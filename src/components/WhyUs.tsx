'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ShieldCheck,
  Truck,
  CreditCard,
  UserCheck,
  CheckCircle,
  Accessibility,
  Clock,
  Sparkles,
  Zap,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function WhyUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.why-left', {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });

      gsap.from('.why-item', {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="vantagens"
      ref={containerRef}
      className="relative py-20 sm:py-28 bg-[#121214] overflow-hidden border-y border-white/5"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Atendimento Consultivo */}
          <div className="why-left lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-5">
              <Zap className="w-3.5 h-3.5" />
              <span>Diferencial Exclusivo</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
              Por que escolher a{' '}
              <span className="font-editorial italic font-normal text-emerald-400 text-glow-green">
                J.A Produtos Automotivos
              </span>
              ?
            </h2>

            <p className="text-base text-neutral-300 mt-6 leading-relaxed font-normal">
              Muito mais que uma loja: somos apaixonados por acabamento automotivo. Oferecemos uma
              consultoria técnica real na hora da compra para que você utilize o produto certo, no corte
              ideal e sem desperdício de tempo ou dinheiro.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-[#09090b]/80 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">
                  Para Profissionais & Entusiastas
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Seja para equipar o seu estúdio de estética ou para manter o seu carro impecável no
                final de semana, temos o suporte técnico e a orientação correta sobre diluições e
                métodos de aplicação.
              </p>
            </div>
          </div>

          {/* Right Column: Practical Benefits Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Benefit 1: Pronta Entrega Local */}
            <div className="why-item p-6 rounded-2xl bg-[#09090b] border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Pronta Entrega Local</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Chega de esperar semanas pelo frete de lojas online. Pegue seus produtos na hora no
                bairro Cango e não pare o seu fluxo de trabalho.
              </p>
            </div>

            {/* Benefit 2: Opção de Entrega Rápida */}
            <div className="why-item p-6 rounded-2xl bg-[#09090b] border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Entrega na Sua Oficina</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Ficou sem produto no meio do polimento? Oferecemos modalidade de entrega rápida para
                estabelecimentos e detailers de Francisco Beltrão.
              </p>
            </div>

            {/* Benefit 3: Pagamento Facilitado & NFC */}
            <div className="why-item p-6 rounded-2xl bg-[#09090b] border border-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Pagamento Facilitado</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Aceitamos cartões de crédito com parcelamento facilitado, cartões de débito, Pix e
                pagamento por aproximação (NFC) via smartphone e relógio.
              </p>
            </div>

            {/* Benefit 4: Acessibilidade Total */}
            <div className="why-item p-6 rounded-2xl bg-[#09090b] border border-white/10 hover:border-amber-500/30 transition-all duration-300">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 w-fit mb-4">
                <Accessibility className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Acessibilidade Total</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Ambiente amplo com entrada adaptada para cadeira de rodas, estacionamento fácil e
                atendimento cortês e humanizado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
