import ContactUs from '../../../public/images/contact.svg'
import React from 'react'
import Hero from '@/components/Hero'
import Connection from '@/components/Home/Connection'
import AboutUs from '@/components/Home/AboutUs'
import Expertise from '@/components/Home/Expertise'
import CompetitiveAdvantage from '@/components/CompetitiveAdvantage'
import Services from '@/components/Services'
import OurPartnership from '@/components/OurPartnership'
import { PartnerData } from '@/data/Partner'

export default function About() {
  return (
    <>
      <Hero title="ABOUT US" image={ContactUs} />
      <div className="container mx-auto mt-40">
        <AboutUs />
      </div>
      <div className="bg-amber-600 p-2 my-20">
        <Expertise />
      </div>
      <CompetitiveAdvantage />
      <Services />
      <div className="bg-white">
        <div className="container mx-auto py-5 ">
          <h1 className="titleCustom text-3xl sm:text-4xl md:text-4xl font-bold leading-tight text-[#14462C] text-center">OUR CLIENTS</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-14">
            <OurPartnership data={PartnerData} />
          </div>
        </div>
      </div>
      <Connection />
    </>
  )
}
