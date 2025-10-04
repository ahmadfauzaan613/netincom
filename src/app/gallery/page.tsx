'use client'

import Hero from '@/components/Hero'
import React from 'react'
import ContactUs from '../../../public/images/contact.svg'
import { imagesData } from '@/data/images'
import Gallery from '@/components/Home/Gallery'

export default function GalleryPage() {
  return (
    <>
      <Hero title="GALLERY" image={ContactUs} />
      <div className="container mx-auto my-20 px-6">
        <h1 className=" titleCustom text-3xl sm:text-4xl md:text-4xl text-center font-bold leading-tight text-[#14462C] mb-10">GALLERY</h1>
        <Gallery data={imagesData} hidden={false} />
      </div>
    </>
  )
}
