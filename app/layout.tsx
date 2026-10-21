import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://babahashimbangali.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Baba Hashim Bangali | Online Marriage & Spiritual Guidance',
  description:
    'Contact Baba Hashim Bangali for online guidance about love marriage, manpasand shadi, relationship concerns, husband wife disputes, and spiritual questions.',
  keywords: [
    'Baba Hashim Bangali',
    'amil baba online',
    'amil baba for love marriage',
    'manpasand shadi',
    'pasand ki shadi',
    'amliyat for love marriage',
    'istikhara for love marriage',
    'kala jadu ka tor taweez',
    'black magic removal specialist',
    'kala ilam ka tor',
    'kala ilm ka tor',
    'bandish ka tor',
    'talaq ka masla',
    'divorce problem solution',
    'husband wife dispute',
    'love marriage problem solution',
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Baba Hashim Bangali | Online Marriage & Spiritual Guidance',
    description:
      'Contact Baba Hashim Bangali for online guidance about love marriage, manpasand shadi, relationship concerns, husband wife disputes, and spiritual questions.',
    url: siteUrl,
    siteName: 'Baba Hashim Bangali',
    images: [
      {
        url: '/imgs/1001.webp',
        width: 800,
        height: 800,
        alt: 'Baba Hashim Bangali Spiritual Guidance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baba Hashim Bangali | Online Marriage & Spiritual Guidance',
    description:
      'Contact Baba Hashim Bangali for online guidance about love marriage, manpasand shadi, relationship concerns, husband wife disputes, and spiritual questions.',
    images: ['/imgs/1001.webp'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Baba Hashim Bangali',
    description:
      'Online spiritual guidance and relationship consultation for love marriage, family reconciliation, and traditional spiritual concerns.',
    url: siteUrl,
    telephone: '+923270855972',
    image: `${siteUrl}/imgs/1001.webp`,
    priceRange: 'Contact for Consultation',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    sameAs: ['https://wa.me/923270855972'],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WPDHCCTP');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-[#08080a] text-zinc-100 antialiased selection:bg-spiritual-burgundy selection:text-white">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WPDHCCTP"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
