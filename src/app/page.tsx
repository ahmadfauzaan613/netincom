import HeroHome from '@/components/HeroHome'
import ImageCarousel from '@/components/Carousel'
import ServicesGrid from '@/components/Home/ServicesGrid'
import AboutUs from '@/components/Home/AboutUs'
import Expertise from '@/components/Home/Expertise'
import Portofolio from '@/components/Home/Portofolio'
import Gallery from '@/components/Home/Gallery'
import QuoteSection from '@/components/Home/QuoteSection'
import Connection from '@/components/Home/Connection'
import React from 'react'
import { imagesData } from '@/data/images'
import { portfolioHome } from '@/data/portfolio'

export default function Home() {
  return (
    <React.Fragment>
      <HeroHome />
      <div id="about"></div>
      <div className="container mx-auto mt-40">
        <AboutUs />
      </div>
      <div className="bg-amber-600 p-2">
        <Expertise />
      </div>
      <div className="container mx-auto pt-40  mb-20">
        <ServicesGrid />
      </div>
      <div className="bg-white">
        <ImageCarousel />
      </div>
      <div id="portfolio">
        <QuoteSection />
      </div>
      <div className="container mx-auto">
        <div className="py-20 ">
          <Portofolio data={portfolioHome} hidden={true} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-16 px-4" />
        </div>
      </div>
      <div className="container mx-auto mb-40">
        <Gallery data={imagesData} hidden={true} />
      </div>
      <Connection />
    </React.Fragment>
  )
}
