import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingActionButton from '@/components/FloatingActionButton'

export const metadata: Metadata = {
  title: 'Takumi – Asian Kitchen | Authentic Asian Flavors',
  description: 'Experience authentic Asian cuisine - Sushi, Fried Rice, Noodles, and Bao in Sonipat, Haryana',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <FloatingActionButton />
        <Footer />
      </body>
    </html>
  )
}

