'use client'
import Image from 'next/image'
import Background from '../../public/images/background.svg'

export default function HeroHome() {
  return (
    <div className="relative h-screen text-center text-white ">
      <Image src={Background} alt="Background Netincom" fill priority className="object-cover -z-10" />
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      <div className="absolute top-1/2  left-44 -translate-y-1/2 max-w-4xl px-4 text-left">
        <h1 className="text-6xl font-bold leading-tight uppercase">Integrated Solution for Creative Communication</h1>
        <p className="text-lg  leading-relaxed capitalize pt-6">
          Integrated Solution for Creative Communication is the key to help your businesses convey their message effectively and build strong connections with stakeholders. It’s where innovation and creativity meet to turn your vision into reality.
        </p>
        <button className="mt-3 rounded-sm border  border-orange-500 text-orange-500  hover:bg-orange-600 hover:text-white px-7 py-3 font-semibold transition">EXPLORE</button>
      </div>
    </div>
  )
}
