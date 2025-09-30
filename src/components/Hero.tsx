import Image from 'next/image'
import React from 'react'

interface HeroProps {
  title: string
  image: string
}

export default function Hero({ title, image }: HeroProps) {
  return (
    <div className="relative w-full h-[30vh] flex items-center justify-start">
      <Image src={image} alt="Background" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container mx-auto">
        <div className="relative max-w-3xl text-white">
          <h1 className="text-5xl pb-3 font-bold leading-tight">{title}</h1>
        </div>
      </div>
    </div>
  )
}
