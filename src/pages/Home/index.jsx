import React from 'react'
import { Listing } from '../../Component'
import Citizen from '../../Component/Citizen'
import TurkeyAdvisor from '../../Component/TurkeyAdvisor'
import Blog from '../../Component/Blog'
import MobileStore from '../../Component/MobileStore'
import Testimonial from '../../Component/Testimonial'
import Hero from '../../Component/Hero'
import TurkeyProperty from '../../Component/TurkeyProperty'
import Recomended_Turkish_Property from '../../Component/Recomended_Turkish_Property'
import TurkeyTv from '../../Component/TurkeyTv'
import AdvisorDesk from '../../Component/AdvisorDesk'
import HeroSection from '../../Component/Hero__Section'

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <Hero /> */}
      <Recomended_Turkish_Property />
      <Citizen />
      {/* <TurkeyAdvisor /> */}
      <TurkeyProperty />
      <Blog />
      <TurkeyTv />
      <MobileStore />
      <Testimonial />
      <AdvisorDesk />
    </div>
  )
}
