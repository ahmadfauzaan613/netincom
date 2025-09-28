import Hero from '@/components/Hero'
import React from 'react'
import ContactUs from '../../../public/images/contact.svg'
import Portofolio from '@/components/Home/Portofolio'
import { portfolioItems } from '@/data/portfolio'

export default function PortofolioPages() {
  return (
    <>
      <Hero title="PORTOFOLIO" image={ContactUs} />
      <div className="container mx-auto my-20">
        <h1 className="text-2xl md:text-4xl text-center font-extrabold  leading-tight text-[#14462C]">PORTFOLIO</h1>
        <Portofolio data={portfolioItems} hidden={false} className="grid grid-cols-4 gap-8 my-16 px-4" />
      </div>
    </>
  )
}
