import ContactUs from '../../../public/images/contact.svg'
import React from 'react'
import Hero from '@/components/Hero'
import Connection from '@/components/Home/Connection'

export default function About() {
  return (
    <>
      <Hero title="ABOUT US" image={ContactUs} />
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-4xl text-left font-bold  leading-tight text-[#14462C]">OUR PARTNER</h1>
        <p className="text-md leading-relaxed pt-3 w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vero molestias dolores aperiam, a quidem nam ipsum ut dolorem commodi modi, incidunt quibusdam repellat eos labore rem provident quis eum.</p>
        <div className="grid grid-cols-3 mt-5">
          <div className="bg-amber-300">1</div>
          <div className="bg-amber-300">1</div>
          <div className="bg-amber-300">1</div>
          <div className="bg-amber-300">1</div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="container mx-auto  my-20">
          <h1 className="text-2xl md:text-4xl text-center font-bold  leading-tight text-[#14462C]">OUR PARTNER</h1>
          <div className="grid grid-cols-4 mt-10">
            <div className="bg-yellow-400 h-[15vh]">1</div>
            <div className="bg-yellow-400 h-[15vh]">1</div>
            <div className="bg-yellow-400 h-[15vh]">1</div>
            <div className="bg-yellow-400 h-[15vh]">1</div>
          </div>
        </div>
      </div>
      <Connection />
    </>
  )
}
