import Image from 'next/image'
import React from 'react'

interface HeroProps {
  title: string
  image: string
}

export default function Hero({ title, image }: HeroProps) {
  return (
    <div className="relative w-full h-[35vh] flex items-center justify-start" id="hero">
      <Image src={image} alt="Background" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container mx-auto px-6 ">
        <div className="relative max-w-3xl text-white translate-y-12  ">
          <h1 className="text-2xl sm:text-3xl md:text-5xl pb-3 titleCustom font-bold leading-tight">{title}</h1>
        </div>
      </div>
    </div>
  )
}
