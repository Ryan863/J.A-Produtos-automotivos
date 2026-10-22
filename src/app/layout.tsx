import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-editorial',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'J.A Produtos Automotivos | Produtos para Estética Automotiva em Francisco Beltrão - PR',
  description:
    'Loja especializada em produtos para estética automotiva no bairro Cango em Francisco Beltrão - PR. Linha completa para lavagem detalhada, snow foam, polimento técnico, vitrificadores cerâmicos e politrizes. Pronta entrega e entrega rápida. Avaliação 4.8 ★ no Google.',
  keywords: [
    'J.A Produtos Automotivos',
    'produtos automotivos francisco beltrao',
    'estética automotiva francisco beltrão',
    'polimento automotivo francisco beltrão',
    'vitrificador de pintura francisco beltrão',
    'loja produtos detalhamento automotivo cango',
    'snow foam shampoo neutro',
    'politriz e boinas francisco beltrão',
    'coating cerâmico paraná',
  ],
  authors: [{ name: 'J.A Produtos Automotivos' }],
  creator: 'J.A Produtos Automotivos',
  publisher: 'J.A Produtos Automotivos',
  metadataBase: new URL('https://ja-produtos-automotivos.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ja-produtos-automotivos.vercel.app',
    title: 'J.A Produtos Automotivos | Estética Automotiva em Francisco Beltrão - PR',
    description:
      'Os melhores produtos e equipamentos para o cuidado do seu veículo. Shampoos, boinas, compostos e vitrificadores a pronta entrega na Av. Antonio Silvio Barbieri, Cango. Avaliação 4.8 ★★★★★ no Google.',
    siteName: 'J.A Produtos Automotivos',
    images: [
      {
        url: '/images/hero-desktop.png',
        width: 1920,
        height: 1080,
        alt: 'J.A Produtos Automotivos - Loja Especializada em Francisco Beltrão',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'J.A Produtos Automotivos | Francisco Beltrão - PR',
    description:
      'Linha completa para lavagem detalhada, polimento e vitrificação automotiva no Bairro Cango.',
    images: ['/images/hero-desktop.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoPartsStore',
    name: 'J.A Produtos Automotivos',
    image: 'https://ja-produtos-automotivos.vercel.app/images/hero-desktop.png',
    telephone: '+5546999049889',
    url: 'https://ja-produtos-automotivos.vercel.app',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Antonio Silvio Barbieri, 1832',
      addressLocality: 'Francisco Beltrão',
      addressRegion: 'PR',
      postalCode: '85603-000',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -26.0792,
      longitude: -53.0564,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '38',
      bestRating: '5',
      worstRating: '1',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '12:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '13:30',
        closes: '18:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '12:30',
      },
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${plusJakartaSans.variable} ${cormorantGaramond.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#09090b] text-[#f8fafc] font-sans antialiased selection:bg-emerald-500 selection:text-neutral-950 min-h-screen">
        {children}
      </body>
    </html>
  );
}
