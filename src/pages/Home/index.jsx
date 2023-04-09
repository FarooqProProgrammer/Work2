import React from 'react'
import { Listing } from '../../Component'
import Citizen from '../../Component/Citizen'
import TurkeyAdvisor from '../../Component/TurkeyAdvisor'
import Blog from '../../Component/Blog'
import MobileStore from '../../Component/MobileStore'
import Testimonial from '../../Component/Testimonial'
import Hero from '../../Component/Hero'
import TurkeyProperty from '../../Component/TurkeyProperty'
import TurkeyTv from '../../Component/TurkeyTv'
import AdvisorDesk from '../../Component/AdvisorDesk'
import HeroSection from '../../Component/Hero__Section'
import RecomendedTurkishProperty from '../../Component/Recomended_Turkish_Property'

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <Hero /> */}
      <RecomendedTurkishProperty />
      <Citizen />
      {/* <TurkeyAdvisor /> */}
      <TurkeyProperty />
      <Testimonial />
      <TurkeyTv />
      <AdvisorDesk />
      <Blog />
      <MobileStore />
    </div>
  )
}
