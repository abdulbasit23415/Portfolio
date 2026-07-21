import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Schema } from '@/components/seo/Schema'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://abdulbasit23415.vercel.app'),
  title: 'Abdul Basit | AI Engineer & Full-Stack Developer',
  description: 'AI Engineer and Full-Stack Developer specializing in LLMs, RAG pipelines, machine learning, and modern web applications. Explore my portfolio of AI-powered projects.',
  keywords: ['AI Engineer', 'Full-Stack Developer', 'Data Scientist', 'Machine Learning', 'Next.js', 'Python', 'Abdul Basit'],
  authors: [{ name: 'Abdul Basit', url: 'https://abdulbasit23415.vercel.app' }],
  creator: 'Abdul Basit',
  generator: 'Next.js',
  openGraph: {
    title: 'Abdul Basit | AI Engineer & Full-Stack Developer',
    description: 'AI Engineer and Full-Stack Developer specializing in LLMs, RAG pipelines, machine learning, and modern web applications.',
    url: 'https://abdulbasit23415.vercel.app',
    siteName: 'Abdul Basit Portfolio',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#050816' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <Schema />
      </head>
      <body className="antialiased bg-background text-foreground font-sans noise-overlay">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
