'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface PortoLinkProps {
  data: { name: string }[]
  activeItem: string
  onSelect: (name: string) => void
}

export default function PortoLink({ data, activeItem, onSelect }: PortoLinkProps) {
  return (
    <div className="w-full">
      {/* 📱 Dropdown untuk mobile */}
      <div className="block sm:hidden w-full">
        <select value={activeItem} onChange={(e) => onSelect(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bodyCustom text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#14462C]">
          {data.map((item, i) => (
            <option key={i} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      {/* 💻 Horizontal scroll menu untuk desktop */}
      <div
        className="
          hidden sm:flex
          flex-wrap sm:flex-nowrap 
          items-center justify-between gap-4 sm:gap-6
          overflow-x-auto scrollbar-hide px-2
          w-full
        "
      >
        {data.map((item, i) => {
          const isActive = activeItem === item.name

          return (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelect(item.name)}
              className={`
                relative px-2 py-1 text-sm sm:text-base md:text-base
                bodyCustom whitespace-nowrap transition-all duration-300
                ${isActive ? 'text-[#14462C] font-bold' : 'text-gray-500 hover:text-[#14462C]/80'}
              `}
            >
              {item.name}
              {isActive && <motion.span layoutId="activeUnderline" className="absolute left-0 bottom-0 h-[2px] w-full bg-[#14462C] rounded-full" transition={{ type: 'spring', stiffness: 300, damping: 25 }} />}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
