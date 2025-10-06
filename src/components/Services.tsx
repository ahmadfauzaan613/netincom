'use client'

import { motion } from 'framer-motion'
import { FileText, ClipboardCheck, Calendar, Camera } from 'lucide-react'

const services = [
  {
    title: 'ANNUAL REPORT & SUSTAINABILITY REPORT',
    desc: 'We specialize in preparing Annual and Sustainability Reports that comply with SEOJK.016, GRI, SASB, IIRC, and other frameworks—combining regulatory accuracy with engaging, creative design.',
    icon: FileText,
  },
  {
    title: 'COMPANY PROFILE',
    desc: 'inventore rem magnam reiciendis, quos debitis similique nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae velit necessitatibus ipsam sit beatae et reiciendis placeat cum! Quaerat sunt aliquid molestiae, nobis pariatur amet explicabo dignissimos voluptatem quidem dicta?',
    icon: FileText,
  },
  {
    title: 'MANUAL GCG',
    desc: 'Good Corporate Governance (GCG) manuals are critical for building credibility and ensuring accountability. Supported by a team of experts in GCG and updated regulatory requirements, we produce manuals that are practical, comprehensive, and aligned with the latest governance standards.',
    icon: ClipboardCheck,
  },
  {
    title: 'RENCANA JANGKA PANJANG PERUSAHAAN (RJPP)',
    desc: 'We assist companies, especially state-owned enterprises, in preparing their Long-term Corporate Plan (RJPP). Our team ensures that each long-term plan complies with regulator guidelines, providing a structured roadmap that clearly communicates strategic direction and growth priorities to stakeholders.',
    icon: ClipboardCheck,
  },
  {
    title: 'OTHER BOOKLET & MAGAZINE',
    desc: 'Beyond reports, we offer a broad range of publishing services for corporations. From commemorative books and internal magazines to stakeholder updates and thematic publications, we deliver engaging content and designs tailored to your communication needs.',
    icon: ClipboardCheck,
  },
  {
    title: 'CALENDAR DESIGN AND PRODUCTION',
    desc: 'Corporate calendars are not just functional—they are branding tools. We design and produce calendars that reflect your corporate identity, combining practicality with creativity to ensure your brand remains visible throughout the year.',
    icon: Calendar,
  },
  {
    title: 'PHOTO & VIDEO',
    desc: 'We provide professional photography and videography services to strengthen your corporate communication. From executive portraits and facility shoots to event documentation and brand storytelling videos, our visuals are crafted to leave a lasting impression.',
    icon: Camera,
  },
]

export default function Services() {
  return (
    <div className="container mx-auto mt-20 px-6 mb-16">
      <h1 className="titleCustom text-3xl sm:text-4xl md:text-4xl font-bold leading-tight text-[#14462C] text-left">WHAT WE CAN DO FOR YOU</h1>
      <p className="text-left bodyCustom text-sm sm:text-base  text-gray-600 mt-3 pt-3 mx-auto">
        Through our integrated expertise, we transform complex corporate information into clear, compelling, and visually engaging communication materials. From regulatory-driven reports to creative brand publications, we provide end-to-end solutions that cover writing, design, photography, and
        production—ensuring every deliverable is both compliant and impactful.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {services.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-[#14462C]/10 text-[#14462C]">
                  <Icon size={28} />
                </div>
                <h2 className="text-base sm:text-lg  titleCustom font-semibold text-gray-800">{item.title}</h2>
              </div>
              <p className="text-gray-600 text-sm sm:text-base bodyCustom leading-relaxed">{item.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
