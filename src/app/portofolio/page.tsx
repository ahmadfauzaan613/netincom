import Hero from '@/components/Hero'
import React from 'react'
import ContactUs from '../../../public/images/contact.svg'
import Portofolio from '@/components/Home/Portofolio'
import { portfolioItems } from '@/data/portfolio'

export default function PortofolioPages() {
  return (
    <>
      <Hero title="PORTOFOLIO" image={ContactUs} />
      <div className="container mx-auto my-20 px-6">
        <h1 className="text-3xl sm:text-4xl md:text-4xl titleCustom text-center font-bold  leading-tight text-[#14462C]">PORTFOLIO</h1>
        <Portofolio data={portfolioItems} hidden={false} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-16 px-4" />
      </div>
    </>
  )
}
