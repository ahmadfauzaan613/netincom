'use client'

import * as React from 'react'
import { Instagram, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const [year, setYear] = React.useState<number | null>(null)

  React.useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])
  return (
    <footer className="bg-gradient-to-r from-[#14462C] to-[#0F2F1C] text-white">
      <div className="container mx-auto flex flex-row items-start justify-between pt-10 gap-0">
        <div className="flex flex-col items-start gap-6">
          <Image src="/images/Netincom_white.png" alt="Logo PT. Net Integra Komunikasi" width={180} height={180} className="hover:scale-105 transition-transform duration-300" />
          <h1 className="font-semibold titleCustom text-md tracking-wide text-left">PT. Net Integra Komunikasi</h1>
        </div>

        <div>
          <div className="flex gap-4 items-end pt-10">
            {[
              { icon: <Phone size={18} />, link: 'https://wa.me/6281234567890' },
              { icon: <Instagram size={18} />, link: '#' },
              { icon: <Mail size={18} />, link: 'mailto:info@netintegra.com' },
              { icon: <MessageCircle size={18} />, link: '#' },
              { icon: <Linkedin size={18} />, link: '#' },
            ].map((item, idx) => (
              <a key={idx} href={item.link} className="p-3 bodyCustom rounded-full bg-white/10 hover:bg-green-400/20 transition-all transform hover:scale-110 shadow-sm">
                {item.icon}
              </a>
            ))}
          </div>
          <div className="flex items-start gap-10 mt-10">
            <div>
              <h3 className="font-semibold text-white">Marketing Office</h3>
              <p className="bodyCustom pt-3 text-sm leading-relaxed">
                Wijaya Grand Centre <br />
                Jl. Wijaya II, Blok G No.15 <br />
                Kebayoran Baru, Jakarta Selatan
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Workshop</h3>
              <p className="bodyCustom pt-3 text-sm leading-relaxed">
                Jl. Besakih V Blok G6 No. 26 <br />
                Limo, Depok, Jawa Barat
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mb-4"></div>

      <p className="text-center text-white bodyCustom text-sm pb-4">&copy; {year ?? ''} PT. Net Integra Komunikasi. All rights reserved.</p>
    </footer>
  )
}
