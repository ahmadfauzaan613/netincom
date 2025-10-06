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
      <div className="container mx-auto px-4 sm:px-6">
        {/* 🏷️ Title */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true }} className="titleCustom text-3xl sm:text-4xl md:text-5xl font-bold text-[#14462C] text-center">
          OUR CLIENTS
        </motion.h1>

        {/* 🧩 Grid */}
        <motion.div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            lg:grid-cols-5 
            xl:grid-cols-6 
            gap-4 sm:gap-6 lg:gap-8 
            mt-10 sm:mt-12
          "
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.12 },
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
              transition={{ duration: 0.4, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }}
              className=" relative w-full h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center rounded-xl transition-all duration-300 "
            >
              <Image src={item.src} alt={item.alt} fill className="object-contain p-4 opacity-80 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
