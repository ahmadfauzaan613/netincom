'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

import Writing from '../../../public/images/writing.svg'
import Production from '../../../public/images/production.svg'
import Photo from '../../../public/images/photo.svg'
import Development from '../../../public/images/Development.svg'

export default function Expertise() {
  const expertiseList = [
    {
      title: 'Editorial and Content Writing',
      desc: 'We provide end-to-end editorial services, from strategic content planning and compliance consulting to copywriting that communicates your corporate story with clarity and impact. Our team ensures that every report and publication not only meets regulatory standards but also resonates with stakeholders.',
      image: Writing,
    },
    {
      title: 'Photography and Videography',
      desc: 'We capture authentic moments and professional visuals that strengthen your corporate image. Whether through corporate photography, event coverage, or creative videography, our visual content is tailored to highlight your brand identity and support your communication goals.',
      image: Photo,
    },
    {
      title: 'Printing and Production',
      desc: 'With reliable partners and meticulous quality control, we deliver high-standard printing and production services. From annual reports and sustainability reports to calendars, booklets, and magazines, we ensure premium finishes and timely delivery across all communication materials.',
      image: Production,
    },
    {
      title: 'Creative Design Development',
      desc: 'We transform ideas into captivating designs. Our creative team blends artistic flair with technical expertise to craft compelling graphics, corporate communication materials, and more. We bring your business vision to life with style and innovation.',
      image: Development,
    },
  ]

  return (
    <div>
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#14462C]">OUR EXPERTISE</h1>
        <p className="text-md leading-relaxed pt-3  mx-auto text-gray-700">
          Our expertise reflects our commitment to delivering integrated communication solutions. With a blend of creativity, technical knowledge, and strategic thinking, we provide services that help businesses stand out, connect with their audience, and achieve sustainable growth.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-14">
        {expertiseList.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }} className="relative text-white h-full p-6 rounded-lg overflow-hidden group shadow-lg">
            {/* Background */}
            <Image src={item.image} alt={item.title} fill priority className="object-cover -z-10 transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/60 -z-10 group-hover:bg-black/40 transition-colors duration-300"></div>

            {/* Content */}
            <h1 className="text-xl font-bold uppercase">{item.title}</h1>
            <p className="text-md leading-relaxed pt-5">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
