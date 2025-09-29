'use client'

import { motion } from 'framer-motion'
import { PenTool, Camera, Printer, Palette } from 'lucide-react'

const expertiseList = [
  {
    title: 'Editorial and Content Writing',
    desc: 'We provide end-to-end editorial services, from strategic content planning and compliance consulting to copywriting that communicates your corporate story with clarity and impact. Our team ensures that every report and publication not only meets regulatory standards but also resonates with stakeholders.',
    icon: PenTool,
  },
  {
    title: 'Photography and Videography',
    desc: 'We capture authentic moments and professional visuals that strengthen your corporate image. Whether through corporate photography, event coverage, or creative videography, our visual content is tailored to highlight your brand identity and support your communication goals.',
    icon: Camera,
  },
  {
    title: 'Printing and Production',
    desc: 'With reliable partners and meticulous quality control, we deliver high-standard printing and production services. From annual reports and sustainability reports to calendars, booklets, and magazines, we ensure premium finishes and timely delivery across all communication materials.',
    icon: Printer,
  },
  {
    title: 'Creative Design Development',
    desc: 'We transform ideas into captivating designs. Our creative team blends artistic flair with technical expertise to craft compelling graphics, corporate communication materials, and more. We bring your business vision to life with style and innovation.',
    icon: Palette,
  },
]

export default function Expertise() {
  return (
    <div className="container mx-auto my-20 ">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white">OUR EXPERTISE</h1>
        <p className="pt-3 text-white">
          Our expertise reflects our commitment to delivering integrated communication solutions. With a blend of creativity, technical knowledge, and strategic thinking, we provide services that help businesses stand out, connect with their audience, and achieve sustainable growth.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {expertiseList.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.15 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow border border-gray-100">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-[#14462C]/10 text-[#14462C] mb-6 mx-auto">
                <Icon size={32} />
              </div>

              {/* Content */}
              <h2 className="text-lg font-semibold text-gray-800 text-center">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed mt-3 text-sm text-center">{item.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
