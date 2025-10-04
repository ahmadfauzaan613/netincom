'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Town from '../../../public/images/town.svg'

export default function QuoteSection() {
  return (
    <div className="relative w-full h-[25vh]">
      <Image src={Town} alt="Background Netincom" fill priority className="object-cover -z-10" />
      <div className="absolute inset-0 bg-black/50 -z-10" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }} className="bodyCustom text-lg sm:text-xl md:text-2xl font-medium text-white leading-relaxed max-w-3xl">
          Effective communication is the secret sauce that can transform a good business into a great one.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }} viewport={{ once: true }} className="mt-4 bodyCustom text-sm sm:text-lg md:text-lg text-white italic tracking-wide">
          — Tony Robbins
        </motion.p>
      </div>
    </div>
  )
}
