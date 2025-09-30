'use client'
import Image from 'next/image'
import Logo from '../../public/images/Netincom_b.png'
import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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
        setScrolled(false)
      } else {
        setScrolled(window.scrollY >= targetSection.offsetTop)
      }

      if (open) setOpen(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname, open])

  const links =
    pathname === '/'
      ? [
          { href: '#about', label: 'About Us', isAnchor: true },
          { href: '#portfolio', label: 'Portfolio', isAnchor: true },
          { href: '#gallery', label: 'Gallery', isAnchor: true },
          { href: '/contact', label: 'Contact Us', isAnchor: true },
        ]
      : [
          { href: '/about', label: 'About Us', isAnchor: false },
          { href: '/portofolio', label: 'Portfolio', isAnchor: false },
          { href: '/gallery', label: 'Gallery', isAnchor: false },
          { href: '/contact', label: 'Contact Us', isAnchor: false },
        ]

  return (
    <motion.nav
      initial={false}
      animate={scrolled ? 'scrolled' : 'top'}
      variants={{
        top: {
          background: 'rgba(0,0,0,0)',
          boxShadow: '0 0 0 rgba(0,0,0,0)',
          transition: { duration: 0.5, ease: 'easeInOut' },
        },
        scrolled: {
          background: 'linear-gradient(to right, #14462C, #0F2F1C)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          transition: { duration: 0.5, ease: 'easeInOut' },
        },
      }}
      className="w-full z-30 py-6 px-6 fixed top-0"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="cursor-pointer">
            <Image src={Logo} alt="Logo Netincom" width={150} height={150} priority />
          </Link>

          <div className="hidden md:flex items-center gap-8 text-white">
            {links.map((link) =>
              link.isAnchor ? (
                <a key={link.href} href={link.href} className="hover:text-[#fff] bodyCustom transition-colors">
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} className="hover:text-[#fff] transition-colors">
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 mt-4 py-4 flex text-white flex-col gap-4">
          {links.map((link) =>
            link.isAnchor ? (
              <a key={link.href} href={link.href} className="hover:text-[#fff] bodyCustom transition-colors" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="hover:text-[#fff] bodyCustom transition-colors" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </motion.nav>
  )
}
