'use client'

import * as React from 'react'
import { Instagram, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#14462C] to-[#0F2F1C] text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between pt-10 gap-10 md:gap-0">
        <div className="flex flex-col items-center md:items-start gap-6">
          <Image src="/images/Netincom_white.png" alt="Logo PT. Net Integra Komunikasi" width={180} height={180} className="hover:scale-105 transition-transform duration-300" />
          <h1 className="font-semibold text-md tracking-wide text-center md:text-left">PT. Net Integra Komunikasi</h1>
        </div>

        <div className="flex gap-4 items-center md:items-end pt-10">
          {[
            { icon: <Instagram size={18} />, link: '#' },
            { icon: <Mail size={18} />, link: 'mailto:info@netintegra.com' },
            { icon: <Phone size={18} />, link: 'https://wa.me/6281234567890' },
          ].map((item, idx) => (
            <a key={idx} href={item.link} className="p-3 rounded-full bg-white/10 hover:bg-green-400/20 transition-all transform hover:scale-110 shadow-sm">
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 mb-4"></div>

      <p className="text-center text-white text-sm pb-4">&copy; {new Date().getFullYear()} PT. Net Integra Komunikasi. All rights reserved.</p>
    </footer>
  )
}
