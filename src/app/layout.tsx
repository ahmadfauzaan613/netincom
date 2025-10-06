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
  title: 'Netincom - Integrated Solution for Creative Communication',
  description:
    'PT Net Integra Komunikasi (Netincom) adalah konsultan komunikasi kreatif terintegrasi yang mengkhususkan diri dalam pembuatan Laporan Tahunan, Laporan Keberlanjutan, RJPP, Manual GCG, dan materi komunikasi korporat lainnya. Melayani perusahaan publik dan BUMN dengan tim berpengalaman, penguasaan regulasi, dan layanan end-to-end dari penulisan, desain, fotografi, hingga produksi.',
  keywords: 'laporan tahunan, laporan keberlanjutan, annual report, sustainability report, RJPP, GCG manual, desain korporat, fotografi perusahaan, videografi, PT Net Integra Komunikasi, Netincom, komunikasi kreatif',
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
          <Image src="/images/whatsapp2.png" alt="Whatsapp" width={45} height={45} className="cursor-pointer" />
        </div>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}
