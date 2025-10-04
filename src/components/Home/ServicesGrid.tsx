'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ServicesGrid() {
  const MotionLink = motion(Link)
  const services = [
    { title: 'ANNUAL REPORT & SUSTAINABILITY REPORT', image: '/images/Links/mockup_ar_pnre_isi.png' },
    { title: 'OTHER CORPORATE BOOKS', image: '/images/Links/gcg doss mockup.png' },
    { title: 'CALENDAR DESIGN AND PRODUCTION', image: '/images/Links/[IPC] Mockup Sample Calendar 2025.jpg' },
    { title: 'PHOTO AND VIDEO', image: '/images/Links/VIDEO COMPRO PDSI.jpg' },
  ]

  return (
    <>
      <div className="text-left mx-auto px-6">
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold titleCustom text-[#14462C]">WHAT WE CAN DO FOR YOU</h1>
        <p className="text-sm sm:text-base md:text-base leading-relaxed pt-3 mx-auto text-black bodyCustom">
          Through our integrated expertise, we transform complex corporate information into clear, compelling, and visually engaging communication materials. From regulatory-driven reports to creative brand publications, we provide end-to-end solutions that cover writing, design, photography, and
          production—ensuring every deliverable is both compliant and impactful.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 gap-6 items-start my-10">
        {services.map((service, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className="relative w-full h-[25vh] rounded-lg overflow-hidden group shadow-md">
            <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />

            <div className="absolute inset-0 bg-[#14462C]/70 group-hover:bg-[#14462C]/90 transition"></div>

            <div className="absolute inset-0 flex items-center justify-center p-4">
              <h1 className="text-white text-lg  font-semibold text-center leading-snug titleCustom">{service.title}</h1>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center text-[#14462C] hover:text-white">
        <MotionLink href="/about" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-5 mb-12 rounded-md bodyCustom bg-transparent hover:bg-[#14462C] border border-[#14462C]   px-10 py-3 font-semibold transition-colors duration-300">
          EXPLORE
        </MotionLink>
      </div>
    </>
  )
}
