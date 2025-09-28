'use client'

import * as React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import AutoScroll from 'embla-carousel-auto-scroll'

const carouselData = [
  { id: 1, src: '/images/Cashlez-scaled-256x83.jpg', alt: 'Client 1' },
  { id: 2, src: '/images/Cashlez-scaled-256x83.jpg', alt: 'Client 2' },
  { id: 3, src: '/images/Cashlez-scaled-256x83.jpg', alt: 'Client 3' },
  { id: 4, src: '/images/Cashlez-scaled-256x83.jpg', alt: 'Client 4' },
  { id: 5, src: '/images/Cashlez-scaled-256x83.jpg', alt: 'Client 5' },
  { id: 6, src: '/images/Cashlez-scaled-256x83.jpg', alt: 'Client 6' },
]

export default function ClientCarousel() {
  return (
    <Carousel
      opts={{ loop: true }}
      className="relative"
      plugins={[
        AutoScroll({
          speed: 1,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent>
        {carouselData.map((item) => (
          <CarouselItem key={item.id} className="basis-1/2 md:basis-1/4 flex items-center justify-center">
            <div className="relative w-40 h-20 p-2 flex items-center justify-center">
              <Image src={item.src} alt={item.alt} fill className="object-contain" priority />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* <CarouselPrevious className="bg-green-500 hover:bg-green-600 text-white rounded-full" />
        <CarouselNext className="bg-green-500 hover:bg-green-600 text-white rounded-full" /> */}
    </Carousel>
  )
}
