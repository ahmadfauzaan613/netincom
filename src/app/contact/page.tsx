'use client'

import Hero from '@/components/Hero'
import React from 'react'
import ContactHero from '../../../public/images/contact.svg'
import { Instagram, Linkedin, MapPin, MessageCircle, Phone } from 'lucide-react'
import Image from 'next/image'
import ContactUs from '../../../public/images/contactUs.svg'

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <Hero title="CONTACT US" image={ContactHero} />

      {/* Contact Section */}
      <div className="relative bg-gray-50 pt-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#14462C]">Get In Touch</h2>
            <p className="text-gray-600 mt-3 mb-6">Reach out to us through our social media or contact details below:</p>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Instagram className="w-6 h-6 text-[#14462C]" />
                <span>@netincom</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-6 h-6 text-[#14462C]" />
                <span>Netincom</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-[#14462C]" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-[#14462C]" />
                <span>+62 21-1234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#14462C]" />
                <span>Jl. Contoh Alamat No.123, Jakarta</span>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image src={ContactUs} alt="Contact Illustration" fill priority className="object-cover" />
          </div>
        </div>

        <div className="mt-16 h-[40vh] md:h-[60vh] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.123456789!2d106.816666!3d-6.200000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sNetincom!5e0!3m2!1sen!2sid!4v1695899999999!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </>
  )
}
