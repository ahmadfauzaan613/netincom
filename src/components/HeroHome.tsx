'use client'
import Image from 'next/image'
import Background from '../../public/images/background.svg'
import { motion } from 'framer-motion'

export default function HeroHome() {
  const scrollToAbout = () => {
    const el = document.getElementById('about')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative h-screen text-white">
      <Image src={Background} alt="Background Netincom" fill priority className="object-cover -z-10" />
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      <div
        className="
          absolute top-1/2 -translate-y-1/2
          left-4 sm:left-20
          max-w-4xl px-4 text-left
        "
      >
        <h1
          className="
            font-bold leading-tight uppercase titleCustom
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          "
        >
          Integrated Solution for Creative Communication
        </h1>
        <p
          className="
            bodyCustom pt-4 sm:pt-6
            text-sm sm:text-base md:text-lg leading-relaxed capitalize
          "
        >
          Integrated Solution for Creative Communication is the key to help your businesses convey their message effectively and build strong connections with stakeholders. It’s where innovation and creativity meet to turn your vision into reality.
        </p>
        <motion.button
          onClick={scrollToAbout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            mt-6 sm:mt-8
            bodyCustom rounded-sm border border-orange-500 text-orange-500
            hover:bg-orange-600 hover:text-white
            px-5 py-2 sm:px-7 sm:py-3
            text-sm sm:text-base font-semibold transition
          "
        >
          EXPLORE
        </motion.button>
      </div>
    </div>
  )
}
