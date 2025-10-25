'use client'

import { motion } from 'framer-motion'
import { Download, MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import about from '../../../public/images/about2.svg'

export default function AboutUs() {
  const path = usePathname()
  const MotionLink = motion(Link)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-32 items-center px-6">
      <motion.div initial={{ opacity: 0, x: -40 }} {...(path === '/' ? { whileInView: { opacity: 1, x: 0 }, viewport: { once: true } } : { animate: { opacity: 1, x: 0 } })} transition={{ duration: 0.8, ease: 'easeOut' }} className={`${path === '/' ? 'w-full md:w-10/12' : 'w-full md:w-11/12'}`}>
        <h1 className=" titleCustom text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-snug text-[#14462C]">ABOUT US</h1>
        <p className="bodyCustom text-sm sm:text-base md:text-base leading-relaxed pt-4 sm:pt-5  text-gray-700 ">
          Netincom is a creative communication consultancy specializing in corporate reporting. We transform complex corporate data into clear, engaging, and visually compelling narratives—combining regulatory expertise with creative precision to help companies communicate their performance, values, and vision with impact.
        </p>
        {path === '/' ? (
          <MotionLink href="/about" whileHover={{ x: 5 }} className="mt-4 sm:mt-6 bodyCustom inline-flex items-center gap-2 text-orange-600 font-semibold cursor-pointer hover:underline">
            LEARN MORE <MoveRight className="w-5 h-5" />
          </MotionLink>
        ) : (
          <Link href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20meminta%20file%20Company%20Profile%20perusahaan%20Anda.%20Terima%20kasih%20atas%20bantuannya." target="_blank">
            <motion.a whileHover={{ x: 5 }} className="mt-4 sm:mt-6 bodyCustom inline-flex items-center gap-2 text-orange-600 font-semibold cursor-pointer hover:underline">
              DOWNLOAD COMPANY PROFILE <Download className="w-5 h-5" />
            </motion.a>
          </Link>
        )}
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="relative w-full h-64 sm:h-80 md:h-[40vh] rounded-2xl overflow-hidden shadow-xl">
        <Image src={about} alt="Background Netincom" fill priority className="object-cover scale-105 hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </motion.div>
    </div>
  )
}
