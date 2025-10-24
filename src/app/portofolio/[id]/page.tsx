'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { portfolioItems2 } from '@/data/portfolio'
import { motion } from 'framer-motion'
import { MoveLeft } from 'lucide-react'
import Gallery from '@/components/Home/Gallery'
import Image from 'next/image'
import Link from 'next/link'

export default function PortfolioDetail() {
  const params = useParams()
  const { id } = params
  const item = portfolioItems2.find((p) => p.id === Number(id))

  return (
    <div className="bg-white pt-20 px-6">
      <div className="container mx-auto py-10">
        <Link href={'/'}>
          <motion.button whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="my-4 mx-6 inline-flex items-center gap-2 text-orange-600 font-semibold cursor-pointer hover:underline">
            <MoveLeft className="w-5 h-5" /> BACK
          </motion.button>
        </Link>

        {/* Hero Image with Overlay */}
        <div className="mx-6 relative w-full h-[50vh] rounded-2xl overflow-hidden shadow-lg mb-10">
          <Image src={item?.image ?? ''} alt={item?.title ?? 'Portfolio'} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute bottom-10 left-6 sm:left-10 text-white">
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              {item?.title}
            </motion.h1>
          </div>
        </div>

        {/* Description */}
        <div className="mx-auto text-gray-700 px-6">
          <p className="text-sm sm:text-base leading-relaxed mb-8 bodyCustom">{item?.text}</p>
        </div>

        {/* Gallery */}
        <div className={`${item?.gallery.length === 0 && 'hidden'} mt-16`}>
          <h2 className="text-2xl sm:text-3xl md:text-3xl px-6 font-bold titleCustom text-[#14462C] mb-6">Gallery</h2>
          <Gallery data={item?.gallery ?? []} hidden={false} />
        </div>
      </div>
    </div>
  )
}
