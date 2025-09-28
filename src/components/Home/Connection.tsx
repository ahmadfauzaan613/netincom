import ContactUs from '../../../public/images/contact.svg'
import Image from 'next/image'

export default function Connection() {
  return (
    <div className="relative w-full h-[35vh] flex items-center justify-start">
      <Image src={ContactUs} alt="Background" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container mx-auto">
        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="text-4xl pb-3 font-bold leading-tight">Let’s Elevate Your Brand Together.</h1>
          <p className="pt-2 text-lg text-gray-200">From strategy to execution, we deliver communication solutions that inspire, engage, and grow your business.</p>
          <button className="mt-2 px-6 py-3 hover:bg-orange-500 hover:text-white  text-orange-500 border border-orange-500 font-semibold rounded-[5px] shadow-lg transition">Work With Us</button>
        </div>
      </div>
    </div>
  )
}
