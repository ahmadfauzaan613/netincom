import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface GalleryProps {
  data: { src: string | StaticImageData; alt: string }[]
}

export default function OurPartnership({ data }: GalleryProps) {
  return data.map((item, i) => (
    <div key={i} className="relative w-full overflow-hidden group">
      <Image src={item.src} alt={item.alt} width={250} height={250} className="object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
  ))
}
