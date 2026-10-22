'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  Calendar,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function LocationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpenNow, setIsOpenNow] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if open in Francisco Beltrão (America/Sao_Paulo / UTC-3)
    const checkOpenStatus = () => {
      try {
        const now = new Date();
        // Convert to Brazil/Sao Paulo time
        const spTime = new Date(
          now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' })
        );
        const day = spTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        const hour = spTime.getHours();
        const min = spTime.getMinutes();
        const currentMinutes = hour * 60 + min;

        // Sunday: Closed
        if (day === 0) {
          setIsOpenNow(false);
          return;
        }

        // Saturday: 08:00 to 12:30 (480 to 750 min)
        if (day === 6) {
          if (currentMinutes >= 480 && currentMinutes <= 750) {
            setIsOpenNow(true);
          } else {
            setIsOpenNow(false);
          }
          return;
        }

        // Monday to Friday: 08:00 to 12:00 (480-720) & 13:30 to 18:30 (810-1110)
        const isMorning = currentMinutes >= 480 && currentMinutes <= 720;
        const isAfternoon = currentMinutes >= 810 && currentMinutes <= 1110;

        setIsOpenNow(isMorning || isAfternoon);
      } catch (e) {
        setIsOpenNow(null);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      gsap.from('.location-card', {
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

  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=J.A+Produtos+Automotivos+Francisco+Beltrao&query_place_id=ChIJK1j6Swdz8JQRwC-puhlozlw';
  const waUrl =
    'https://wa.me/5546999049889?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20a%20disponibilidade%20de%20produtos%20na%20J.A%20Produtos%20Automotivos.';

  return (
    <section
      id="localizacao"
      ref={containerRef}
      className="relative py-20 sm:py-28 bg-[#121214] overflow-hidden border-t border-white/5"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Atendimento Presencial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
            Visite a nossa loja no{' '}
            <span className="font-editorial italic font-normal text-emerald-400">
              Bairro Cango
            </span>
            .
          </h2>
          <p className="text-base text-neutral-400 mt-4 leading-relaxed font-normal">
            Localização privilegiada na principal avenida do bairro, com fácil estacionamento e
            acessibilidade total para o seu conforto.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: Horários & Contatos */}
          <div className="location-card lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#09090b] border border-white/10 shadow-2xl">
            <div>
              {/* Live Status Pill */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Horário de Funcionamento</h3>
                    <p className="text-xs text-neutral-400">Atendimento presencial e online</p>
                  </div>
                </div>

                {isOpenNow !== null && (
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                      isOpenNow
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        : 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'
                      }`}
                    />
                    {isOpenNow ? 'Aberto Agora' : 'Fechado no Momento'}
                  </span>
                )}
              </div>

              {/* Hours Table */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm">
                  <span className="font-medium text-neutral-300 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    Segunda a Sexta-feira
                  </span>
                  <div className="text-right">
                    <div className="text-white font-semibold">08:00 às 12:00</div>
                    <div className="text-neutral-400 text-[11px]">13:30 às 18:30</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm">
                  <span className="font-medium text-neutral-300 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    Sábado
                  </span>
                  <span className="text-white font-semibold">08:00 às 12:30</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm">
                  <span className="font-medium text-neutral-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-neutral-500" />
                    Domingo
                  </span>
                  <span className="text-neutral-500 font-medium">Fechado</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: (46) 99904-9889</span>
              </a>
              <a
                href="tel:+5546999049889"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-medium text-sm border border-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Ligar Agora</span>
              </a>
            </div>
          </div>

          {/* Column 2: Endereço & Mapa / Rota GPS */}
          <div className="location-card lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#09090b] border border-white/10 shadow-2xl">
            <div>
              {/* Address Header */}
              <div className="flex items-start gap-4 pb-6 border-b border-white/10 mb-6">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Endereço Completo</h3>
                  <p className="text-sm text-neutral-300 mt-1 leading-relaxed">
                    Av. Antonio Silvio Barbieri, 1832
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Bairro Cango • Francisco Beltrão - PR • CEP 85603-000
                  </p>
                </div>
              </div>

              {/* Styled Interactive Directions Preview Box */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#121214] p-6 mb-6">
                <div className="absolute top-0 right-0 p-8 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Ponto de Fácil Acesso</span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Próximo aos principais acessos e comércios do Cango
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Avenida com pista ampla, fácil estacionamento para carros e utilitários, entrada
                    plana com acessibilidade para cadeirantes.
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Route Button */}
            <div className="pt-4 border-t border-white/10">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="google-maps-route-btn"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all duration-300 active:scale-95 group"
              >
                <Navigation className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Como Chegar (Abrir Rota no Google Maps)</span>
                <ExternalLink className="w-4 h-4 text-cyan-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
