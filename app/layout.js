import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Improves font loading performance
})

export const metadata = {
  // Basic SEO
  title: {
    default: 'IEEE CodeX Sri Lanka - Competitive Programming Excellence',
    template: '%s | IEEE CodeX Sri Lanka'
  },
  description: 'IEEE CodeX Sri Lanka promotes competitive programming through NOI, IEEEXtreme, and ICPC competitions. Join our comprehensive training sessions and represent Sri Lanka globally.',
  
  // Keywords
  keywords: [
    'IEEE CodeX Sri Lanka',
    'competitive programming Sri Lanka',
    'NOI Sri Lanka',
    'IEEEXtreme',
    'ICPC Sri Lanka',
    'programming competitions',
    'coding contests',
    'algorithm training',
    'computer science education',
    'IEEE Sri Lanka Section',
    'National Olympiad Informatics',
    'International Collegiate Programming Contest',
    'programming training sessions',
    'tech community Sri Lanka'
  ],
  
  // Authors and creators
  authors: [{ name: 'IEEE CodeX Sri Lanka' }],
  creator: 'IEEE CodeX Sri Lanka',
  publisher: 'IEEE Sri Lanka Section',
  
  // Open Graph (Social Media)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://codex.ieee.lk',
    siteName: 'IEEE CodeX Sri Lanka',
    title: 'IEEE CodeX Sri Lanka - Competitive Programming Excellence',
    description: 'Join IEEE CodeX Sri Lanka for world-class competitive programming training and competitions. Participate in NOI, IEEEXtreme, and ICPC to represent Sri Lanka globally.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IEEE CodeX Sri Lanka - Competitive Programming Hub',
      },
      {
        url: '/images/codex-logo.png',
        width: 400,
        height: 400,
        alt: 'IEEE CodeX Sri Lanka Logo',
      }
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    site: '@IEEECodeXLK', // Add your Twitter handle
    creator: '@IEEECodeXLK',
    title: 'IEEE CodeX Sri Lanka - Competitive Programming Excellence',
    description: 'Join IEEE CodeX Sri Lanka for world-class competitive programming training and competitions.',
    images: ['/images/twitter-card.jpg'],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification (add your actual verification codes)
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  
  // Canonical URL
  alternates: {
    canonical: 'https://codex.ieee.lk',
    languages: {
      'en-US': 'https://codex.ieee.lk',
      'si-LK': 'https://codex.ieee.lk/si', // If you have Sinhala version
      'ta-LK': 'https://codex.ieee.lk/ta', // If you have Tamil version
    },
  },
  
  // Category
  category: 'technology',
  
  // Additional metadata
  applicationName: 'IEEE CodeX Sri Lanka',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1e3a8a' }
  ],
  
  // App-specific
  appleWebApp: {
    capable: true,
    title: 'IEEE CodeX Sri Lanka',
    statusBarStyle: 'default',
  },
  
  // Format detection
  formatDetection: {
    telephone: false,
  },
  
  // Manifest
  manifest: '/manifest.json',
  
  // Icons
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        {/* Additional SEO tags that can't be handled by metadata */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "IEEE CodeX Sri Lanka",
              "description": "IEEE CodeX Sri Lanka promotes competitive programming through training sessions and international competitions like NOI, IEEEXtreme, and ICPC.",
              "url": "https://codex.ieee.lk",
              "logo": "https://codex.ieee.lk/images/codex-logo.png",
              "foundingDate": "2024",
              "parentOrganization": {
                "@type": "Organization",
                "name": "IEEE Sri Lanka Section",
                "url": "https://ieee.lk"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "LK",
                "addressRegion": "Western Province",
                "addressLocality": "Colombo"
              },
              "sameAs": [
                "https://www.facebook.com/IEEECodeXSriLanka",
                "https://www.linkedin.com/company/ieee-codex-sri-lanka",
                "https://twitter.com/IEEECodeXLK",
                "https://www.instagram.com/ieeecodexsrilanka"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "General Inquiries",
                "email": "info@codex.ieee.lk"
              }
            })
          }}
        />
        
        {/* Structured Data - Educational Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "IEEE CodeX Sri Lanka",
              "description": "Comprehensive competitive programming training and competitions for students in Sri Lanka",
              "url": "https://codex.ieee.lk",
              "logo": "https://codex.ieee.lk/images/codex-logo.png",
              "educationalCredentialAwarded": "Competitive Programming Certification",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Competitive Programming Training",
                "itemListElement": [
                  {
                    "@type": "Course",
                    "name": "12-Session Technical Training Series",
                    "description": "Comprehensive competitive programming training from basics to advanced algorithms",
                    "provider": {
                      "@type": "Organization",
                      "name": "IEEE CodeX Sri Lanka"
                    }
                  },
                  {
                    "@type": "Course",
                    "name": "Competency Building Series",
                    "description": "Soft skills development including time management, team management, and strategic planning",
                    "provider": {
                      "@type": "Organization",
                      "name": "IEEE CodeX Sri Lanka"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Structured Data - Events */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventSeries",
              "name": "IEEE CodeX Sri Lanka Competitions",
              "description": "Major competitive programming events including NOI, IEEEXtreme, and ICPC",
              "organizer": {
                "@type": "Organization",
                "name": "IEEE CodeX Sri Lanka",
                "url": "https://codex.ieee.lk"
              },
              "location": {
                "@type": "Country",
                "name": "Sri Lanka"
              },
              "subEvent": [
                {
                  "@type": "Event",
                  "name": "National Olympiad in Informatics (NOI) 2025",
                  "description": "National programming competition for secondary school students",
                  "organizer": {
                    "@type": "Organization",
                    "name": "IEEE CodeX Sri Lanka"
                  }
                },
                {
                  "@type": "Event",
                  "name": "IEEEXtreme 19.0",
                  "description": "24-hour global programming competition for IEEE student members",
                  "organizer": {
                    "@type": "Organization",
                    "name": "IEEE CodeX Sri Lanka"
                  }
                },
                {
                  "@type": "Event",
                  "name": "International Collegiate Programming Contest (ICPC) 2025",
                  "description": "Team-based programming contest for university students",
                  "organizer": {
                    "@type": "Organization",
                    "name": "IEEE CodeX Sri Lanka"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body 
        className={`${inter.className} bg-darkBlue-900 text-white antialiased`}
        suppressHydrationWarning
      >
        {children}
        
        {/* Google Analytics - Replace with your tracking ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_TRACKING_ID');
            `,
          }}
        />
      </body>
    </html>
  )
}