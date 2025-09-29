'use client'

import Image from 'next/image'

const partners = [
  { src: '/images/Cashlez-scaled-256x83.jpg', alt: 'Cashlez' },
  { src: '/images/Cashlez-scaled-256x83.jpg', alt: 'Partner 2' },
  { src: '/images/Cashlez-scaled-256x83.jpg', alt: 'Partner 3' },
  { src: '/images/Cashlez-scaled-256x83.jpg', alt: 'Partner 4' },
  { src: '/images/Cashlez-scaled-256x83.jpg', alt: 'Cashlez' },
  { src: '/images/Cashlez-scaled-256x83.jpg', alt: 'Partner 2' },
  { src: '/images/Cashlez-scaled-256x83.jpg', alt: 'Partner 3' },
  { src: '/images/Cashlez-scaled-256x83.jpg', alt: 'Partner 4' },
]

export default function OurPartner() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto py-20 ">
        <h1 className="text-2xl md:text-4xl text-center font-bold leading-tight text-[#14462C]">OUR PARTNER</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="relative w-full h-20 flex items-center justify-center">
              <Image src={partner.src} alt={partner.alt} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
