'use client'

import Hero from '@/components/Hero'
import React from 'react'
import ContactHero from '../../../public/images/contact.svg'
import { Instagram, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react'
import Image from 'next/image'
import ContactUs from '../../../public/images/contactUs.svg'

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <Hero title="CONTACT US" image={ContactHero} />

      {/* Contact Section */}
      <div className="relative bg-gray-50 pt-20">
        <div className="container mx-auto grid grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div className="p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-3xl titleCustom font-bold text-[#14462C]">Get In Touch</h2>
            <p className="text-gray-600 bodyCustom mt-3 mb-6">Reach out to us through our social media or contact details below:</p>

            {/* Marketing Office */}
            <div className="mb-6">
              <h3 className="font-semibold text-[#14462C]">Marketing Office</h3>
              <p className="bodyCustom">
                Wijaya Grand Centre <br />
                Jl. Wijaya II, Blok G No.15 <br />
                Kebayoran Baru, Jakarta Selatan
              </p>
            </div>

            {/* Workshop */}
            <div className="mb-6">
              <h3 className="font-semibold text-[#14462C]">Workshop</h3>
              <p className="bodyCustom">
                Jl. Besakih V Blok G6 No. 26 <br />
                Limo, Depok, Jawa Barat
              </p>
            </div>

            {/* Contacts */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#14462C]" />
                <span className="bodyCustom">(021) 5022836</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#14462C]" />
                <span className="bodyCustom">+62 851 7676 5995</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#14462C]" />
                <span className="bodyCustom">staff@netincom.id</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-[#14462C]" />
                <span className="bodyCustom">@netincom.id</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-[#14462C]" />
                <span className="bodyCustom">Netincom</span>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
            <Image src={ContactUs} alt="Contact Illustration" fill priority className="object-cover" />
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16 h-[60vh] rounded-xl overflow-hidden shadow-lg">
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
