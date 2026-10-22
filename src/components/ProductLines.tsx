'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sparkles,
  ArrowUpRight,
  Shield,
  Layers,
  Wrench,
  CheckCircle2,
  Droplets,
  Disc,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ProductLineItem {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  highlights: string[];
  image: string;
  waParam: string;
  badgeColor: string;
  gridSpan?: string;
}

const productLines: ProductLineItem[] = [
  {
    id: 'snow-foam',
    title: 'Lavagem Detalhada & Snow Foam',
    eyebrow: 'PRÉ-LAVAGEM & DESCONTAMINAÇÃO',
    description:
      'Shampoos automotivos neutros e desincrustantes, desengraxantes alcalinos e ácidos, luvas de microfibra premium e canhões de espuma Snow Foam de alta densidade.',
    highlights: [
      'Shampoos pH Neutro e Desengraxantes',
      'Canhões Snow Foam com regulagem',
      'Luvas de microfibra e descontaminantes',
    ],
    image: '/images/cat-snowfoam.jpg',
    waParam: 'Lavagem Detalhada e Snow Foam',
    badgeColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
    gridSpan: 'lg:col-span-7',
  },
  {
    id: 'polimento',
    title: 'Polimento & Correção de Pintura',
    eyebrow: 'CORTE, REFINO E LUSTRO',
    description:
      'Boinas técnicas de lã híbrida, espuma alemã e microfibra, com compostos polidores de alto rendimento para eliminação de swirls, riscos e acabamento espelhado.',
    highlights: [
      'Compostos Heavy Cut, Medium Cut e Finish',
      'Boinas de corte agressivo ao lustro final',
      'Fitas de mascaramento e reveladores de hologramas',
    ],
    image: '/images/cat-polimento.jpg',
    waParam: 'Polimento e Correcao de Pintura',
    badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    gridSpan: 'lg:col-span-5',
  },
  {
    id: 'vitrificacao',
    title: 'Proteção de Pintura & Vitrificadores',
    eyebrow: 'COATINGS CERÂMICOS & SELANTES',
    description:
      'Coatings cerâmicos de 1 a 5 anos de proteção, selantes sintéticos de alto brilho e ceras nobres de carnaúba pura com máxima repelência hidrofóbica e proteção UV.',
    highlights: [
      'Vitrificadores 9H e Coatings Cerâmicos',
      'Ceras nobres de carnaúba especial',
      'Selantes hidrofóbicos com proteção UV',
    ],
    image: '/images/cat-vitrificacao.jpg',
    waParam: 'Protecao de Pintura e Vitrificadores',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    gridSpan: 'lg:col-span-4',
  },
  {
    id: 'interior',
    title: 'Higienização Interna & Condicionadores',
    eyebrow: 'CUIDADO COM COURO & PLÁSTICOS',
    description:
      'Limpadores multiuso (APCs), hidratantes e restauradores para couros nobres, neutralizadores de odores e renovadores de plásticos foscos com toque seco original.',
    highlights: [
      'APCs concentrados e bactericidas',
      'Higienizadores e protetores de couro',
      'Restauradores de plásticos com proteção UV',
    ],
    image: '/images/cat-interior.jpg',
    waParam: 'Higienizacao Interna e Condicionadores',
    badgeColor: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
    gridSpan: 'lg:col-span-4',
  },
  {
    id: 'acessorios',
    title: 'Acessórios & Equipamentos Profissionais',
    eyebrow: 'MAQUINÁRIOS & PRECISÃO TÉCNICA',
    description:
      'Politrizes roto-orbitais e rotativas, borrifadores de precisão pressurizados, pincéis de cerdas naturais e toalhas de secagem twisted loop de altíssima gramatura.',
    highlights: [
      'Politrizes Roto-Orbitais de alto torque',
      'Pincéis de detalhamento ultra macios',
      'Toalhas de secagem rápida 600 a 1200 GSM',
    ],
    image: '/images/cat-acessorios.jpg',
    waParam: 'Acessorios e Equipamentos Profissionais',
    badgeColor: 'border-sky-500/30 text-sky-400 bg-sky-500/10',
    gridSpan: 'lg:col-span-4',
  },
];

export default function ProductLines() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.product-card', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    },
    { scope: containerRef }
  );

  const getWaLink = (itemParam: string) =>
    `https://wa.me/5546999049889?text=${encodeURIComponent(
      `Olá! Gostaria de consultar preços e marcas disponíveis da linha de ${itemParam} na J.A Produtos Automotivos.`
    )}`;

  return (
    <section
      id="catalogo"
      ref={containerRef}
      className="relative py-20 sm:py-28 bg-[#09090b] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Catálogo Especializado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
            Soluções completas para cada{' '}
            <span className="font-editorial italic font-normal text-cyan-400 text-glow-cyan">
              etapa do detalhamento
            </span>
            .
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 mt-4 leading-relaxed font-normal">
            Trabalhamos com os produtos mais desejados por profissionais de estética e apaixonados
            por carros. Pronta entrega imediata no bairro Cango em Francisco Beltrão.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {productLines.map((item) => (
            <div
              key={item.id}
              className={`product-card group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#121214] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_45px_rgba(16,185,129,0.15)] hover:-translate-y-1.5 ${
                item.gridSpan || 'lg:col-span-6'
              }`}
            >
              {/* Card Image */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-black/40">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/40 to-transparent" />

                {/* Eyebrow badge over image */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase backdrop-blur-md border ${item.badgeColor}`}
                  >
                    {item.eyebrow}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 font-sans group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed font-normal mb-5">
                    {item.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-2 mb-6">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={getWaLink(item.waParam)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group/btn"
                  >
                    <span>Consultar Marcas & Estoque</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                  <span className="text-[11px] text-neutral-500 uppercase tracking-widest font-mono">
                    J.A AUTO
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with general query */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-neutral-900 to-teal-950/40 border border-emerald-500/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Procurando algum produto específico ou marca importada?
            </h4>
            <p className="text-sm text-neutral-300 mt-1">
              Consulte nosso catálogo atualizado via WhatsApp. Recebemos novidades constantemente.
            </p>
          </div>
          <a
            href="https://wa.me/5546999049889?text=Ol%C3%A1%2C%20procuro%20um%20produto%20espec%C3%ADfico%20na%20J.A%20Produtos%20Automotivos."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95"
          >
            Consultar Produto Específico
          </a>
        </div>
      </div>
    </section>
  );
}
