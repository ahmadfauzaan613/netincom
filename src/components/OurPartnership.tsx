'use client'

import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface PartnerItem {
  src: string | StaticImageData
  alt: string
}

interface OurPartnershipProps {
  data: PartnerItem[]
}

export default function OurPartnership({ data }: OurPartnershipProps) {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true }} className="titleCustom text-3xl sm:text-4xl md:text-5xl font-bold text-[#14462C] text-center">
          OUR CLIENTS
        </motion.h1>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          viewport={{ once: true }}
        >
          {data.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }}
              className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36 rounded-xl overflow-hidden shadow-sm flex items-center justify-center"
            >
              <Image src={item.src} alt={item.alt} fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-110" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
