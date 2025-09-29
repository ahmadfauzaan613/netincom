'use client'

import { motion } from 'framer-motion'
import { Users, ShieldCheck, Layers, Award, Workflow, PenTool } from 'lucide-react'

const advantages = [
  {
    title: 'EXPERIENCED TEAM',
    desc: 'Our team brings years of hands-on experience in corporate reporting and communication. With writers, designers, and consultants who have worked on numerous reports for public companies and state-owned enterprises, we understand both the technical and creative sides of every project.',
    icon: Users,
  },
  {
    title: 'REGULATORY MASTERY',
    desc: 'We go beyond creativity by ensuring strict compliance with relevant regulations and standards. From POJK requirements and SOE guidelines to global frameworks such as GRI, SASB, and IFRS, we make sure every deliverable is aligned with industry expectations and best practices.',
    icon: ShieldCheck,
  },
  {
    title: 'INTEGRATED SERVICES',
    desc: 'We provide end-to-end solutions under one roof. From editorial consulting and copywriting to design, photography, and production, our clients enjoy a seamless process without the need to coordinate multiple vendors.',
    icon: Layers,
  },
  {
    title: 'PROVEN TRACK RECORD',
    desc: 'We have partnered with leading public companies and state-owned enterprises across various industries. Our proven track record demonstrates our ability to deliver results that meet client expectations and are recognized in external awards and benchmarks.',
    icon: Award,
  },
  {
    title: 'EFFICIENT WORKFLOW',
    desc: 'With a clear methodology and project management system, we ensure smooth coordination and timely delivery. Our structured workflow minimizes risks, maximizes productivity, and gives clients peace of mind throughout the project lifecycle.',
    icon: Workflow,
  },
  {
    title: 'CREATIVE + COMPLIANCE BALANCE',
    desc: 'We understand that reports must be both compliant and engaging. By combining strong regulatory alignment with creative visual storytelling, we create reports and corporate publications that are accurate, impactful, and visually compelling.',
    icon: PenTool,
  },
]

export default function CompetitiveAdvantage() {
  return (
    <div className="container mx-auto mt-16 ">
      <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[#14462C] text-center">COMPETITIVE ADVANTAGE</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {advantages.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-[#14462C]/10 text-[#14462C]">
                  <Icon size={28} />
                </div>
                <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
