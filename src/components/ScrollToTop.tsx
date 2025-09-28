'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about')
      if (!aboutSection) return
      setShow(window.scrollY > aboutSection.offsetTop)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
