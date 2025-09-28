'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { portfolioItems } from '@/data/portfolio'
import { motion } from 'framer-motion'
import { MoveLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Gallery from '@/components/Home/Gallery'
export default function PortfolioDetail() {
  const params = useParams()
  const router = useRouter()
  const { id } = params
  const item = portfolioItems.find((p) => p.id === Number(id))

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="bg-white py-5">
      <div className="container mx-auto">
        <motion.button onClick={handleBack} whileHover={{ x: 5 }} className="my-6 inline-flex items-center gap-2 text-orange-600 font-semibold cursor-pointer hover:underline">
          <MoveLeft className="w-5 h-5" /> BACK
        </motion.button>
        <div className="my-5">
          <h1 className="text-5xl w-8/12 text-left font-bold leading-tight text-[#14462C]">{item?.title}</h1>
          <div className="bg-black w-full h-[40vh] my-5"></div>
          <p className="text-md leading-relaxed py-5 text-gray-600">{item?.text}</p>
          <h1 className="text-2xl w-8/12 text-left font-bold leading-tight text-[#14462C]">Gallery</h1>
          <Gallery data={item?.gallery ?? []} hidden={false} />
        </div>
      </div>
    </div>
  )
}
