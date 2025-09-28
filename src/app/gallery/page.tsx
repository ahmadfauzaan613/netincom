import Hero from '@/components/Hero'
import React from 'react'
import ContactUs from '../../../public/images/contact.svg'
import book from '../../../public/images/nobook-cover.svg'
import Gallery from '@/components/Home/Gallery'

export default function GalleryPage() {
  const images = [
    { src: book, alt: 'Gambar' },
    { src: book, alt: 'Gambar' },
    { src: book, alt: 'Gambar' },
    { src: book, alt: 'Gambar' },
    { src: book, alt: 'Gambar' },
    { src: book, alt: 'Gambar' },
    { src: book, alt: 'Gambar' },
    { src: book, alt: 'Gambar' },
    { src: book, alt: 'Gambar' },
    { src: book, alt: 'Gambar' },
    { src: book, alt: 'Gambar' },
    { src: book, alt: 'Gambar' },
    { src: book, alt: 'Gambar' },
    { src: book, alt: 'Gambar' },
    { src: book, alt: 'Gambar' },
    { src: book, alt: 'Gambar' },
  ]
  return (
    <>
      <Hero title="GALLERY" image={ContactUs} />
      <div className="container mx-auto my-20">
        <h1 className="text-2xl md:text-4xl text-center font-extrabold  leading-tight text-[#14462C]">GALLERY</h1>
        <Gallery data={images} hidden={false} />
      </div>
    </>
  )
}
