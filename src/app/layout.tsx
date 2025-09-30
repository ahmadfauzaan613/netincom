import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { Roboto, Open_Sans } from 'next/font/google'
import ScrollToTop from '@/components/ScrollToTop'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Netincom',
  description: 'Integrated Solution for Creative Communication',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${openSans.variable} antialiased`}>
        <Navbar />
        {children}
        <div className="fixed bottom-8 right-8 z-50">
          <Image src="/images/whatsapp.png" alt="Whatsapp" width={48} height={48} className="cursor-pointer" />
        </div>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}
