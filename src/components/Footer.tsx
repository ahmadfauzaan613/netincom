'use client'

import * as React from 'react'
import { Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const [year, setYear] = React.useState<number | null>(null)

  React.useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  const socials = [
    {
      icon: <Instagram size={18} />,
      link: 'https://www.instagram.com/netincom.id',
    },
    {
      icon: <Mail size={18} />,
      link: 'mailto:netintegrakomunikasi@gmail.com',
    },
    {
      icon: <MessageCircle size={18} />,
      link: 'https://wa.me/6285176765995?text=Halo%20Netincom%2C%20saya%20ingin%20bertanya',
    },
    {
      icon: <Linkedin size={18} />,
      link: 'https://www.linkedin.com/company/netintegrakomunikasi/',
    },
  ]

  return (
    <footer className="bg-gradient-to-r from-[#14462C] to-[#0F2F1C] text-white">
      <div className="container mx-auto flex flex-col lg:flex-row px-6  items-start justify-between pt-10 gap-0">
        <div className="flex flex-col items-start gap-6">
          <Image src="/images/Links/Netincom_white.webp" alt="Logo PT Net Integra Komunikasi" width={180} height={180} className="hover:scale-105 transition-transform duration-300" />
          <h1 className="font-semibold titleCustom text-md tracking-wide text-left">PT Net Integra Komunikasi</h1>
        </div>

        <div className="flex flex-col gap-6  w-full lg:w-auto">
          <div className="flex gap-4 items-end sm:items-center pt-10 flex-wrap">
            {socials.map((item, idx) => (
              <Link key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="p-3 bodyCustom rounded-full bg-white/10 hover:bg-green-400/20 transition-all transform hover:scale-110 shadow-sm">
                {item.icon}
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-10 mt-10">
            <div>
              <Link href="https://www.google.com/maps/place/Wijaya+Grand+Centre,+Jl.+Wijaya+II+Blok+G+No.15,+Kebayoran+Baru,+Jakarta+Selatan" target="_blank" rel="noopener noreferrer" className="flex flex-col hover:text-[#0F713B] transition">
                <h3 className="font-semibold text-white">Marketing Office</h3>
                <p className="bodyCustom text-sm sm:text-base">
                  Wijaya Grand Centre <br />
                  Jl. Wijaya II, Blok G No.15 <br />
                  Kebayoran Baru, Jakarta Selatan
                </p>
              </Link>
            </div>
            <div>
              <Link href="https://www.google.com/maps/place/Jl.+Besakih+V+Blok+G6+No.26,+Limo,+Depok,+Jawa+Barat" target="_blank" rel="noopener noreferrer" className="flex flex-col hover:text-[#0F713B] transition">
                <h3 className="font-semibold text-white">Workshop</h3>
                <p className="bodyCustom text-sm sm:text-base">
                  Jl. Besakih V Blok G6 No. 26 <br />
                  Limo, Depok, Jawa Barat
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mb-4"></div>

      <p className="text-center text-white bodyCustom text-sm pb-4">&copy; {year ?? ''} PT Net Integra Komunikasi. All rights reserved.</p>
    </footer>
  )
}
