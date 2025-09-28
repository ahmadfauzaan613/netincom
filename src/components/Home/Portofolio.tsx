'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link'

interface GalleryProps {
  src: string
  alt: string
}

interface PortoProps {
  data: {
    id: number
    image: string
    title: string
    desc: string
    text: string
    gallery: GalleryProps[]
    link: string
  }[]
  hidden: boolean
  className: string
}

export default function Portofolio({ data, hidden, className }: PortoProps) {
  return (
    <React.Fragment>
      {hidden && (
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-[#14462C]">PORTFOLIO</h1>
          <p className="text-md leading-relaxed pt-5 text-gray-600">
            Netincom stands as a visionary force in the realm of creative communication consultancy, offering fully integrated services. Our journey is driven by an unwavering commitment to excellence, a passion for innovation, and an unrelenting focus on client satisfaction.
          </p>
        </div>
      )}

      <div className={className}>
        {data.map((item, index) => (
          <motion.div key={item.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
            <div className="relative w-full h-[30vh] overflow-hidden group">
              <Image src={item.image} alt={item.title} fill className="object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
            </div>

            <div className="p-5">
              <h2 className="text-lg font-bold text-[#14462C]  transition">{item.title}</h2>
              <p className="text-sm mt-2">{item.desc}</p>
              <div className="py-4">
                <Link href={`/portofolio/${item.id}`}>
                  <motion.div whileHover={{ x: 5 }} className="absolute bottom-3 inline-block mt-4 text-sm font-semibold text-orange-400 hover:text-orange-300 transition">
                    VISIT
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {hidden && (
        <div className="flex items-center justify-center" id="gallery">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-5 mb-12 rounded-md bg-transparent hover:bg-[#14462C] border border-[#14462C] text-[#14462C] hover:text-white px-12 py-3 font-semibold transition-colors duration-300">
            EXPLORE
          </motion.button>
        </div>
      )}
    </React.Fragment>
  )
}
