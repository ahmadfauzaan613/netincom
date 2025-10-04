'use client'

import React, { useState } from 'react'
import { MoveRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface GalleryProps {
  data: { src: string | StaticImageData; alt: string }[]
  hidden: boolean
}

export default function Gallery({ data, hidden }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData | null>(null)
  const pathname = usePathname()
  const MotionLink = motion(Link)

  // 🔹 Jika di halaman "/", hanya ambil 8 data teratas
  const displayedData = pathname === '/' ? data.slice(0, 8) : data

  return (
    <>
      {hidden && (
        <div className="sm:flex items-center justify-between px-6">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold titleCustom text-[#14462C]">OUR GALLERY</h1>
          <MotionLink href="/gallery" whileHover={{ x: 5 }} className="mt-1 bodyCustom inline-flex items-center gap-2 text-orange-500 font-semibold cursor-pointer hover:text-orange-600 hover:underline">
            VIEW <MoveRight size={20} />
          </MotionLink>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 gap-4 mt-8 mb-7">
        {displayedData.map((item, i) => (
          <Dialog key={i}>
            <DialogTrigger asChild>
              <div className="relative w-full h-[25vh] rounded-lg overflow-hidden group shadow-md cursor-pointer" onClick={() => setSelectedImage(item.src)}>
                <Image src={item.src} alt={item.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                {/* <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" /> */}
              </div>
            </DialogTrigger>

            <DialogContent className="max-w-5xl p-0 bg-transparent border-0 shadow-none">
              <DialogTitle></DialogTitle>
              {selectedImage && (
                <div className="relative w-full h-[80vh]">
                  <Image src={selectedImage} alt="Preview" fill className="object-contain rounded-lg" />
                </div>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  )
}
