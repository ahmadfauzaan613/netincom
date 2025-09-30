'use client'

import Image from 'next/image'
import { Download, MoveRight } from 'lucide-react'
import { motion } from 'framer-motion'
import about from '../../../public/images/about2.svg'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function AboutUs() {
  const path = usePathname()
  const MotionLink = motion(Link)
  return (
    <div className={`grid grid-cols-2 gap-12 my-32 items-center px-16`}>
      <motion.div initial={{ opacity: 0, x: -40 }} {...(path === '/' ? { whileInView: { opacity: 1, x: 0 }, viewport: { once: true } } : { animate: { opacity: 1, x: 0 } })} transition={{ duration: 0.8, ease: 'easeOut' }} className={`${path === '/' ? 'w-full md:w-10/12' : 'w-full md:w-11/12'}`}>
        <h1 className=" titleCustom text-5xl font-bold  leading-tight text-[#14462C]">ABOUT US</h1>
        <p className="bodyCustom text-lg leading-relaxed pt-5 text-gray-700">
          Netincom stands as a visionary force in the realm of creative communication consultancy, offering fully integrated services. Our journey is driven by an unwavering commitment to excellence, a passion for innovation, and an unrelenting focus on client satisfaction. At Netincom, we are
          committed to delivering topnotch communication solutions that empower businesses to communicate effectively and leave a lasting impression on their audience.
        </p>
        {path === '/' ? (
          <MotionLink href="/about" whileHover={{ x: 5 }} className="mt-6 bodyCustom inline-flex items-center gap-2 text-orange-600 font-semibold cursor-pointer hover:underline">
            LEARN MORE <MoveRight className="w-5 h-5" />
          </MotionLink>
        ) : (
          <motion.a whileHover={{ x: 5 }} className="mt-6 bodyCustom inline-flex items-center gap-2 text-orange-600 font-semibold cursor-pointer hover:underline">
            DOWNLOAD PORTFOLIO <Download className="w-5 h-5" />
          </motion.a>
        )}
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="relative w-full h-[40vh] rounded-2xl overflow-hidden shadow-xl">
        <Image src={about} alt="Background Netincom" fill priority className="object-cover scale-105 hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </motion.div>
    </div>
  )
}
