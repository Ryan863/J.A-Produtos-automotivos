import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AuthorityMetrics from '@/components/AuthorityMetrics';
import ProductLines from '@/components/ProductLines';
import WhyUs from '@/components/WhyUs';
import Reviews from '@/components/Reviews';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#09090b] text-[#f8fafc] overflow-x-hidden selection:bg-emerald-500 selection:text-neutral-950">
      {/* 100% Transparent to Frosted Glass Navbar */}
      <Navbar />

      {/* Dobra 1: Hero Section (100vh Full-Bleed Dark Studio Porsche) */}
      <Hero />

      {/* Dobra 2: Faixa de Autoridade & Métricas */}
      <AuthorityMetrics />

      {/* Dobra 3: Linhas de Produtos Especializados */}
      <ProductLines />

      {/* Dobra 4: Por Que Comprar na J.A Produtos Automotivos? (Diferenciais) */}
      <WhyUs />

      {/* Dobra 5: Prova Social (Avaliações Reais do Google Maps 4.8 ★) */}
      <Reviews />

      {/* Dobra 6: Localização, Horários e Atendimento */}
      <LocationSection />

      {/* Dobra 7: Rodapé Minimalista */}
      <Footer />

      {/* Floating Mobile WhatsApp CTA */}
      <FloatingWhatsApp />
    </main>
  );
}
