'use client'

import { motion } from 'framer-motion'
import { FileText, ClipboardCheck, Book, BookOpen, Calendar, Camera } from 'lucide-react'

const services = [
  {
    title: 'ANNUAL & SUSTAINABILITY REPORT',
    desc: 'We specialize in preparing Annual and Sustainability Reports that comply with SEOJK.016, GRI, SASB, IIRC, and other frameworks—combining regulatory accuracy with engaging, creative design.',
    icon: FileText,
  },
  {
    title: 'RJPP',
    desc: 'We assist companies, especially SOEs, in preparing Long-term Corporate Plans (RJPP) that comply with regulator guidelines and clearly communicate strategic direction.',
    icon: ClipboardCheck,
  },
  {
    title: 'MANUAL GCG',
    desc: 'We develop Good Corporate Governance (GCG) manuals that are practical, comprehensive, and aligned with the latest governance standards.',
    icon: Book,
  },
  {
    title: 'BOOKLET & MAGAZINE',
    desc: 'From commemorative books and internal magazines to stakeholder updates, we deliver creative publications tailored to corporate needs.',
    icon: BookOpen,
  },
  {
    title: 'CALENDAR DESIGN & PRODUCTION',
    desc: 'Corporate calendars designed to strengthen your brand identity while remaining practical and creative throughout the year.',
    icon: Calendar,
  },
  {
    title: 'PHOTO & VIDEO',
    desc: 'Professional photography and videography services—from executive portraits to storytelling videos that elevate your corporate communication.',
    icon: Camera,
  },
]

export default function Services() {
  return (
    <div className="container mx-auto mt-20 mb-16">
      <h1 className="titleCustom text-4xl font-bold leading-tight text-[#14462C] text-left">WHAT WE CAN DO FOR YOU</h1>
      <p className="text-left bodyCustom  text-gray-600 mt-3 pt-3 mx-auto">
        Through our integrated expertise, we transform complex corporate information into clear, compelling, and visually engaging communication materials. From regulatory-driven reports to creative brand publications, we provide end-to-end solutions that cover writing, design, photography, and
        production—ensuring every deliverable is both compliant and impactful.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {services.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-[#14462C]/10 text-[#14462C]">
                  <Icon size={28} />
                </div>
                <h2 className="text-lg titleCustom font-semibold text-gray-800">{item.title}</h2>
              </div>
              <p className="text-gray-600 text-sm bodyCustom leading-relaxed">{item.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
