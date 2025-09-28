import Hero from '@/components/Hero'
import React from 'react'
import ContactHero from '../../../public/images/contact.svg'
import ContactUs from '../../../public/images/contactUs.svg'

import Image from 'next/image'
import { Instagram, Linkedin, MapPin, MessageCircle, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <Hero title="CONTACT US" image={ContactHero} />
      <div className="container mx-auto my-20">
        <div className="grid grid-cols-2 items-start">
          <div>
            <h1 className="text-2xl md:text-4xl font-extrabold  leading-tight text-[#14462C]">CONTACT US</h1>
            <p className="text-base md:text-md leading-relaxed pt-4 text-gray-700">Ready to take your business to the next level? The Netincom team is here to provide creative communication solutions tailored to your needs. Contact us today and start a partnership that drives results!</p>
            <div className="flex flex-col w-full max-w-10/12 space-y-5 divide-y divide-gray-300 py-4">
              <div className="flex items-center gap-3 py-3">
                <Instagram className="w-6 h-6 text-[#14462C]" />
                <span>@netincom</span>
              </div>

              <div className="flex items-center gap-3 py-3">
                <Linkedin className="w-6 h-6 text-[#14462C]" />
                <span>Netincom</span>
              </div>

              <div className="flex items-center gap-3 py-3">
                <MessageCircle className="w-6 h-6 text-[#14462C]" />
                <span>+62 812-3456-7890</span>
              </div>

              <div className="flex items-center gap-3 py-3">
                <Phone className="w-6 h-6 text-[#14462C]" />
                <span>+62 21-1234-5678</span>
              </div>

              <div className="flex items-center gap-3 py-3">
                <MapPin className="w-6 h-6 text-[#14462C]" />
                <span>Jl. Contoh Alamat No.123, Jakarta</span>
              </div>
            </div>
          </div>
          <div className="relative w-full h-full rounded-[5px]">
            <Image src={ContactUs} alt="Background" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
      </div>
      <div className="h-[35vh] mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.123456789!2d106.816666!3d-6.200000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sNetincom!5e0!3m2!1sen!2sid!4v1695899999999!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        />
      </div>
    </>
  )
}
