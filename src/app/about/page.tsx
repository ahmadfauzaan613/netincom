import ContactUs from '../../../public/images/contact.svg'
import React from 'react'
import Hero from '@/components/Hero'
import Connection from '@/components/Home/Connection'
import AboutUs from '@/components/Home/AboutUs'
import Expertise from '@/components/Home/Expertise'
import CompetitiveAdvantage from '@/components/CompetitiveAdvantage'
import VisionMission from '@/components/VisionMission'
import Services from '@/components/Services'
import OurPartner from '@/components/OurPartner'

export default function About() {
  return (
    <>
      <Hero title="ABOUT US" image={ContactUs} />
      <div className="container mx-auto mt-40">
        <AboutUs />
        <VisionMission />
      </div>
      <div className="bg-amber-600 p-2 my-20">
        <Expertise />
      </div>
      <CompetitiveAdvantage />
      <Services />
      <OurPartner />
      <Connection />
    </>
  )
}
