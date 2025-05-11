import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'IEEE CodeX Sri Lanka',
  description: 'Building a thriving tech community through competitive programming',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-darkBlue-900 text-white`}>
        {children}
      </body>
    </html>
  )
}