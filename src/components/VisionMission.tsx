'use client'

import { motion } from 'framer-motion'
import { Target, Rocket } from 'lucide-react'

const items = [
  {
    title: 'VISION',
    desc: 'To become the most trusted corporate communication partner, offering innovative solutions that pave the way for long-term success for our clients.',
    icon: Target,
  },
  {
    title: 'MISSION',
    desc: ['Deliver innovative and creative communication strategies tailored to client needs.', 'Ensure regulatory compliance and uphold the highest professional standards.', 'Build long-term partnerships through trust and consistent excellence.'],
    icon: Rocket,
  },
]

export default function VisionMission() {
  return (
    <div className="container mx-auto mt-20 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#14462C]">OUR VISION & MISSION</h2>
      <p className="text-center text-gray-600 mt-2 mb-10">Clear purpose and direction that guide everything we do</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.2 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-[#14462C]/10 text-[#14462C]">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              </div>

              {/* Kalau Mission berupa list */}
              {Array.isArray(item.desc) ? (
                <ul className="space-y-3 text-gray-600 leading-relaxed list-disc list-inside text-sm">
                  {item.desc.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
