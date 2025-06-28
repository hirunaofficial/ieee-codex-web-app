import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'IEEE CodeX Sri Lanka - Competitive Programming Excellence',
    template: '%s | IEEE CodeX Sri Lanka'
  },
  description: 'IEEE CodeX Sri Lanka promotes competitive programming through NOI, IEEEXtreme, and ICPC competitions. Join our training sessions and represent Sri Lanka globally.',
  keywords: ['IEEE CodeX Sri Lanka', 'competitive programming', 'NOI', 'IEEEXtreme', 'ICPC', 'programming contests', 'coding training'],
  
  // Open Graph
  openGraph: {
    title: 'IEEE CodeX Sri Lanka - Competitive Programming Excellence',
    description: 'Join IEEE CodeX Sri Lanka for competitive programming training and competitions.',
    url: 'https://codex.ieee.lk',
    siteName: 'IEEE CodeX Sri Lanka',
    images: ['/images/og-image.jpg'],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'IEEE CodeX Sri Lanka - Competitive Programming Excellence',
    description: 'Join IEEE CodeX Sri Lanka for competitive programming training and competitions.',
    images: ['/images/twitter-card.jpg'],
  },
  
  // Basic SEO
  robots: {
    index: true,
    follow: true,
  },
  
  alternates: {
    canonical: 'https://codex.ieee.lk',
  },
  
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Essential structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "IEEE CodeX Sri Lanka",
              "url": "https://codex.ieee.lk",
              "logo": "https://codex.ieee.lk/images/codex-logo.png",
              "description": "IEEE CodeX Sri Lanka promotes competitive programming through training and competitions",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@codex.ieee.lk",
                "contactType": "General Inquiries"
              },
              "sameAs": [
                "https://www.facebook.com/IEEECodeXSriLanka",
                "https://www.linkedin.com/company/ieee-codex-sri-lanka",
                "https://www.instagram.com/ieeecodexsrilanka"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-darkBlue-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}