'use client'

import Hero from '@/components/Hero'
import React, { useState } from 'react'
import ContactUs from '../../../public/images/contact.svg'
import book from '../../../public/images/nobook-cover.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

export default function GalleryPage() {
  const images = Array(16).fill({ src: book, alt: 'Gambar' })

  const [selected, setSelected] = useState<{ src: string; alt: string } | null>(null)

  return (
    <>
      <Hero title="GALLERY" image={ContactUs} />
      <div className="container mx-auto my-20 px-6">
        <h1 className=" titleCustom text-4xl text-center font-bold leading-tight text-[#14462C] mb-10">GALLERY</h1>

        {/* Masonry layout */}
        <div className="columns-4 gap-4 space-y-4 mt-10">
          {images.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl break-inside-avoid cursor-pointer"
              onClick={() => setSelected(item)}
            >
              <Image src={item.src} alt={item.alt} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent shadow-none border-none">
            <DialogTitle>
              <VisuallyHidden>Image Preview</VisuallyHidden>
            </DialogTitle>

            {selected && <Image src={selected.src} alt={selected.alt} width={1200} height={800} className="w-full h-auto object-contain rounded-lg" />}
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}
