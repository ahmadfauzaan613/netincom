'use client'
import Image from 'next/image'
import Logo from '../../public/images/Netincom_b.png'
import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/') return
    const handleScroll = () => {
      const aboutSection = document.getElementById('about')
      if (!aboutSection) return
      setScrolled(window.scrollY >= aboutSection.offsetTop)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navbarClass = pathname === '/' && scrolled ? 'fixed top-0 bg-gradient-to-r from-[#14462C] to-[#0F2F1C] shadow-lg' : pathname === '/' ? 'absolute' : 'bg-gradient-to-r from-[#14462C] to-[#0F2F1C]'

  return (
    <nav className={`w-full text-white py-6 z-30 transition-all duration-300 ${navbarClass}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Image src={Logo} onClick={scrollToTop} alt="Logo Netincom" className="cursor-pointer" width={150} height={150} />
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-[#A2D5AB] transition-colors">
              About Us
            </a>
            <a href="#portfolio" className="hover:text-[#A2D5AB] transition-colors">
              Portfolio
            </a>
            <a href="#gallery" className="hover:text-[#A2D5AB] transition-colors">
              Gallery
            </a>
            <a href="#contact" className="hover:text-[#A2D5AB] transition-colors">
              Contact Us
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-[#0F2F1C] px-6 py-4 flex flex-col gap-4">
          <a href="#about" className="hover:text-[#A2D5AB] transition-colors">
            About Us
          </a>
          <a href="#portfolio" className="hover:text-[#A2D5AB] transition-colors">
            Portfolio
          </a>
          <a href="#gallery" className="hover:text-[#A2D5AB] transition-colors">
            Gallery
          </a>
          <a href="#contact" className="hover:text-[#A2D5AB] transition-colors">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  )
}
