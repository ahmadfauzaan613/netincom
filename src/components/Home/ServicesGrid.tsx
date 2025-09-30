'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ServicesGrid() {
  const services = [
    { title: 'ANNUAL REPORT & SUSTAINABILITY REPORT', image: '/images/nobook2-cover.svg' },
    { title: 'COMPANY PROFILE', image: '/images/nobook2-cover.svg' },
    { title: 'MANUAL GCG', image: '/images/nobook2-cover.svg' },
    { title: 'RENCANA JANGKA PANJANG PERUSAHAAN (RJPP)', image: '/images/nobook2-cover.svg' },
    { title: 'OTHER BOOKLET & MAGAZINE', image: '/images/nobook2-cover.svg' },
    { title: 'CALENDAR DESIGN AND PRODUCTION', image: '/images/nobook2-cover.svg' },
    { title: 'PHOTO AND VIDEO', image: '/images/nobook2-cover.svg' },
  ]

  return (
    <>
      {/* Header */}
      <div className="text-left">
        <h1 className="text-5xl font-bold text-[#14462C]">WHAT WE CAN DO FOR YOU</h1>
        <p className="text-md leading-relaxed pt-3 mx-auto text-black">
          Through our integrated expertise, we transform complex corporate information into clear, compelling, and visually engaging communication materials. From regulatory-driven reports to creative brand publications, we provide end-to-end solutions that cover writing, design, photography, and
          production—ensuring every deliverable is both compliant and impactful.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start my-10">
        {services.map((service, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className="relative w-full h-[25vh] rounded-lg overflow-hidden group shadow-md">
            <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />

            <div className="absolute inset-0 bg-[#14462C]/70 group-hover:bg-[#14462C]/90 transition"></div>

            <div className="absolute inset-0 flex items-center justify-center p-4">
              <h1 className="text-white text-lg font-semibold text-center leading-snug">{service.title}</h1>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <div className="flex items-center justify-center">
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-5 mb-12 rounded-md bg-transparent hover:bg-[#14462C] border border-[#14462C] text-[#14462C] hover:text-white px-10 py-3 font-semibold transition-colors duration-300">
          EXPLORE
        </motion.button>
      </div>
    </>
  )
}
