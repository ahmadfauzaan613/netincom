'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      let targetSection: HTMLElement | null = null

      if (pathname === '/') {
        targetSection = document.getElementById('about')
      } else {
        targetSection = document.getElementById('hero')
      }

      if (!targetSection) return

      if (window.scrollY === 0) {
        setShow(false) // balik ke paling atas → tombol hilang
      } else {
        setShow(window.scrollY >= targetSection.offsetTop)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!show) return null

  return (
    <button onClick={scrollToTop} className="fixed bottom-24 right-8 z-50 bg-[#14462C] text-white p-4 rounded-full shadow-lg hover:bg-[#0F2F1C] transition-colors">
      <ChevronUp className="w-4 h-4" />
    </button>
  )
}
