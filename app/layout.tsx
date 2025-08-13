import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Delicious Shepherd&apos;s Pie Recipes',
  description: 'Discover three amazing shepherd&apos;s pie recipes - Classic, Vegetarian, and Gourmet variations with detailed instructions.',
  keywords: 'shepherd\'s pie, recipes, cooking, comfort food',
  authors: [{ name: 'Shepherd\'s Pie Recipes' }],
  openGraph: {
    title: 'Shepherd&apos;s Pie Recipes',
    description: 'Classic, Vegetarian, and Gourmet shepherd&apos;s pie recipes with step-by-step instructions.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#f59e0b',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-3 md:p-4 z-50 rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 text-sm md:text-base font-medium"
        >
          Skip to content
        </a>
        
        <div className="min-h-screen flex flex-col">
          <main id="main-content" className="flex-1 bg-gray-50">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  )
} 