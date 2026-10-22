'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, MessageSquareQuote, CheckCircle, ExternalLink } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface Review {
  name: string;
  role: string;
  comment: string;
  rating: number;
  date: string;
}

const reviews: Review[] = [
  {
    name: 'Cleiton R.',
    role: 'Cliente Verificado Google',
    comment:
      'Excelente variedade de produtos para estética automotiva. Atendimento nota 10, tiraram todas as minhas dúvidas sobre os compostos de polimento.',
    rating: 5,
    date: 'Avaliação recente',
  },
  {
    name: 'Daniel Souza',
    role: 'Detailer Automotivo',
    comment:
      'Melhor loja de produtos automotivos de Beltrão. Sempre encontro o que preciso a pronta entrega e o preço é muito justo.',
    rating: 5,
    date: 'Avaliação recente',
  },
  {
    name: 'Juliana M.',
    role: 'Cliente Verificada Google',
    comment:
      'Atendimento impecável e produtos de primeira linha. A entrega foi super rápida, recomendo a todos da região.',
    rating: 5,
    date: 'Avaliação recente',
  },
  {
    name: 'Rodrigo P.',
    role: 'Entusiasta Automotivo',
    comment:
      'Lugar top para quem gosta de cuidar do carro com produtos de verdade. Variedade enorme e marcas conceituadas.',
    rating: 5,
    date: 'Avaliação recente',
  },
];

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.review-card', {
        y: 35,
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

  const googleMapsReviewsUrl =
    'https://www.google.com/maps/search/?api=1&query=J.A+Produtos+Automotivos+Francisco+Beltrao&query_place_id=ChIJK1j6Swdz8JQRwC-puhlozlw';

  return (
    <section
      id="avaliacoes"
      ref={containerRef}
      className="relative py-20 sm:py-28 bg-[#09090b] overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Reputação Comprovada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
            Avaliação{' '}
            <span className="font-editorial italic font-normal text-amber-400">
              4,8 ★★★★★
            </span>{' '}
            no Google Maps
          </h2>

          <p className="text-base text-neutral-400 mt-4 leading-relaxed font-normal">
            A opinião de quem confia na J.A Produtos Automotivos para cuidar dos veículos mais
            exigentes de Francisco Beltrão e região.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="review-card p-6 sm:p-8 rounded-3xl bg-[#121214] border border-white/10 hover:border-amber-400/30 transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-neutral-600" />
                </div>

                <p className="text-sm sm:text-base text-neutral-200 italic leading-relaxed mb-6 font-normal">
                  &ldquo;{r.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">{r.name}</h4>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{r.role}</span>
                  </div>
                </div>
                <span className="text-[11px] text-neutral-500 font-mono">{r.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Central Official Social Proof CTA Button */}
        <div className="mt-12 text-center">
          <a
            href={googleMapsReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="google-maps-all-reviews-btn"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-amber-400/50 backdrop-blur-md shadow-lg hover:shadow-amber-400/10 transition-all duration-300 active:scale-95 group"
          >
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>Ver todas as 38 avaliações no Google Maps (4.8 ★)</span>
            <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-amber-400 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
