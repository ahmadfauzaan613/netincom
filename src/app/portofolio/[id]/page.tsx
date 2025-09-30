'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { portfolioItems } from '@/data/portfolio'
import { motion } from 'framer-motion'
import { MoveLeft } from 'lucide-react'
import Gallery from '@/components/Home/Gallery'
import Image from 'next/image'

export default function PortfolioDetail() {
  const params = useParams()
  const router = useRouter()
  const { id } = params
  const item = portfolioItems.find((p) => p.id === Number(id))

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="bg-white pt-20">
      <div className="container mx-auto py-10">
        <motion.button onClick={handleBack} whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }} className="my-4 inline-flex items-center gap-2 text-orange-600 font-semibold cursor-pointer hover:underline">
          <MoveLeft className="w-5 h-5" /> BACK
        </motion.button>

        {/* Hero Image with Overlay */}
        <div className="relative w-full h-[50vh] rounded-2xl overflow-hidden shadow-lg mb-10">
          <Image src={item?.image ?? ''} alt={item?.title ?? 'Portfolio'} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute bottom-10 left-10 text-white">
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl font-bold leading-tight">
              {item?.title}
            </motion.h1>
          </div>
        </div>

        {/* Description */}
        <div className="mx-auto text-gray-700">
          <p className="text-md leading-relaxed mb-8 bodyCustom">{item?.text}</p>
        </div>

        {/* Gallery */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold titleCustom text-[#14462C] mb-6">Gallery</h2>
          <Gallery data={item?.gallery ?? []} hidden={false} />
        </div>
      </div>
    </div>
  )
}
