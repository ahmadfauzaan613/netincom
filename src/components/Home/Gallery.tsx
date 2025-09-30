'use client'

import React, { useState } from 'react'
import { MoveRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface GalleryProps {
  data: { src: string | StaticImageData; alt: string }[]
  hidden: boolean
}

export default function Gallery({ data, hidden }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData | null>(null)
  const MotionLink = motion(Link)
  return (
    <React.Fragment>
      {hidden && (
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-bold titleCustom text-[#14462C]">OUR GALLERY</h1>
          <MotionLink href="/gallery" whileHover={{ x: 5 }} className="mt-1 bodyCustom inline-flex items-center gap-2 text-orange-500 font-semibold cursor-pointer hover:text-orange-600 hover:underline">
            VIEW <MoveRight size={20} />
          </MotionLink>
        </div>
      )}

      <div className="grid grid-cols-4 gap-4 mt-8 mb-7">
        {data.map((item, i) => (
          <Dialog key={i}>
            <DialogTrigger asChild>
              <div className="relative w-full h-[25vh] rounded-lg overflow-hidden group shadow-md cursor-pointer" onClick={() => setSelectedImage(item.src)}>
                <Image src={item.src} alt={item.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />
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
    </React.Fragment>
  )
}
