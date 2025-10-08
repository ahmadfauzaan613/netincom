'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import PortoLink from '../PortoLink'
import { portoDataLink } from '@/data/portfolio'
import { FolderOpen } from 'lucide-react'

interface GalleryProps {
  src: string
  alt: string
}

interface PortoProps {
  data: {
    id: number
    image: string
    title: string
    year: string
    desc: string
    text: string
    gallery: GalleryProps[]
    link: string
    type?: string
  }[]
  hidden: boolean
  className: string
}

export default function Portofolio({ data, hidden, className }: PortoProps) {
  const path = usePathname()
  const MotionLink = motion(Link)
  const [activeCategory, setActiveCategory] = useState('Annual & Sustainability Report')
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  // ⚙️ Filter Data berdasarkan kategori
  let filteredData = data.filter((item) => {
    if (activeCategory === 'Annual & Sustainability Report') return item.type?.includes('Annual & Sustainability Report')
    if (activeCategory === 'Other Corporate Books') return item.type?.includes('Other Corporate Books')
    if (activeCategory === 'Calendar Design & Other Production') return item.type?.includes('Calendar Design & Other Production')
    if (activeCategory === 'Photo & Video') return item.type?.includes('Photo & Video')
    return true
  })

  // 🧩 Jika path === '/', ambil 3 index terakhir
  if (path === '/') {
    filteredData = filteredData.slice(-3)
  }

  // 🪄 Fungsi toggle Read More
  const toggleExpand = (id: number) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  return (
    <>
      {hidden && (
        <div className="text-left mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl md:text-4xl titleCustom font-bold text-[#14462C]">PORTFOLIO</h1>
          <p className="text-sm sm:text-base md:text-base bodyCustom leading-relaxed pt-5 text-gray-600">
            Netincom stands as a visionary force in the realm of creative communication consultancy, offering fully integrated services. Our journey is driven by an unwavering commitment to excellence, a passion for innovation, and an unrelenting focus on client satisfaction.
          </p>
        </div>
      )}

      <div className="flex items-center justify-between px-6 my-10">
        <PortoLink data={portoDataLink} activeItem={activeCategory} onSelect={setActiveCategory} />
      </div>

      <div className={`${className} mb-10`}>
        {filteredData.length === 0 ? (
          <div className="col-span-full flex justify-center items-center py-16 px-4">
            <div className="max-w-md mx-auto text-center">
              <FolderOpen className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-700 mb-2">Belum Ada Portfolio</h3>
              <p className="text-slate-500 mb-6">Portfolio untuk kategori ini sedang tidak tersedia.</p>
            </div>
          </div>
        ) : (
          filteredData.map((item, index) => {
            const isExpanded = expandedItems.includes(item.id)
            const shortDesc = item.desc.length > 120 ? item.desc.slice(0, 120) + '...' : item.desc

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                {...(path === '/portfolio'
                  ? { animate: { opacity: 1, y: 0 } }
                  : {
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true, amount: 0.1 },
                    })}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
              >
                <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden group">
                  <Image src={item.image} alt={item.title} fill className="object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                </div>

                <div className="p-5">
                  <h2 className="text-md sm:text-md md:text-md font-bold titleCustom text-[#14462C] transition">{item.title}</h2>
                  <p className="text-xs text-gray-500 pt-1">{item.year}</p>
                  <motion.p layout className="text-sm sm:text-sm md:text-sm mt-2 bodyCustom text-gray-700">
                    {isExpanded ? item.desc : shortDesc}
                  </motion.p>

                  {item.desc.length > 120 && (
                    <button onClick={() => toggleExpand(item.id)} className="text-xs sm:text-sm mt-1 font-medium text-[#14462C] hover:text-[#0d331f] transition">
                      {isExpanded ? 'Read less' : 'Read more'}
                    </button>
                  )}

                  <div className="py-4">
                    <Link href={`/portofolio/${item.id}`}>
                      <motion.div whileHover={{ x: 5 }} className="absolute bodyCustom bottom-3 inline-block mt-4 text-sm sm:text-base font-semibold text-orange-400 hover:text-orange-300 transition">
                        VISIT
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })
        )}
      </div>

      {hidden && (
        <div className={`flex items-center justify-center hover:text-white ${filteredData.length === 0 && 'hidden'}`} id="gallery">
          <MotionLink href="/portofolio" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-5 mb-12 rounded-md bg-transparent hover:bg-[#14462C] border border-[#14462C] text-[#14462C] hover:text-white px-12 py-3 font-semibold transition-colors duration-300">
            EXPLORE
          </MotionLink>
        </div>
      )}
    </>
  )
}
