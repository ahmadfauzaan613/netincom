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
    <div className="relative h-screen  text-white ">
      <Image src={Background} alt="Background Netincom" fill priority className="object-cover -z-10" />
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      <div
        className="
      absolute top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2 px-4 
      sm:max-w-xl sm:text-left sm:left-16 sm:-translate-x-0
      md:max-w-2xl md:left-24
      lg:max-w-3xl lg:left-32
      xl:max-w-4xl xl:left-44
    "
      >
        <h1
          className="
        text-3xl font-bold leading-snug uppercase
        sm:text-4xl sm:leading-snug
        md:text-5xl md:leading-tight
        lg:text-6xl
      "
        >
          Integrated Solution for Creative Communication
        </h1>
        <p
          className="
        text-base leading-relaxed pt-4 capitalize
        sm:text-lg sm:pt-5
        md:text-xl md:pt-6
      "
        >
          Integrated Solution for Creative Communication is the key to help your businesses convey their message effectively and build strong connections with stakeholders. It’s where innovation and creativity meet to turn your vision into reality.
        </p>
        <motion.button
          onClick={scrollToAbout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
        mt-5 rounded-sm border border-orange-500 text-orange-500 
        hover:bg-orange-600 hover:text-white 
        px-6 py-2 text-sm font-semibold transition
        sm:px-7 sm:py-3 sm:text-base
      "
        >
          EXPLORE
        </motion.button>
      </div>
    </div>
  )
}
