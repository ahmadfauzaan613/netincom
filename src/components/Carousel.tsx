'use client'

import * as React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import AutoScroll from 'embla-carousel-auto-scroll'
import { carouselData } from '@/data/carousel'

export default function ClientCarousel() {
  return (
    <Carousel
      opts={{ loop: true }}
      className="relative w-full"
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

      {/* 
      <CarouselPrevious className="bg-green-500 hover:bg-green-600 text-white rounded-full" />
      <CarouselNext className="bg-green-500 hover:bg-green-600 text-white rounded-full" />
      */}
    </Carousel>
  )
}
