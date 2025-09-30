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
      <CarouselContent className="items-center">
        {carouselData.map((item) => (
          <CarouselItem
            key={item.id}
            className="
              basis-full        /* mobile: 1 item */
              sm:basis-1/2     /* ≥640px: 2 item */
              md:basis-1/3     /* ≥768px: 3 item */
              lg:basis-1/4     /* ≥1024px: 4 item */
              flex items-center justify-center
            "
          >
            <div className="relative w-32 h-16 sm:w-36 sm:h-20 lg:w-40 lg:h-24 p-2 flex items-center justify-center">
              <Image src={item.src} alt={item.alt} fill className="object-contain" priority />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Kalau mau aktifin manual control */}
      {/* 
      <CarouselPrevious className="bg-green-500 hover:bg-green-600 text-white rounded-full" />
      <CarouselNext className="bg-green-500 hover:bg-green-600 text-white rounded-full" />
      */}
    </Carousel>
  )
}
