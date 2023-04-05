import React from 'react'
import { Listing } from '../../Component'
import Citizen from '../../Component/Citizen'
import TurkeyAdvisor from '../../Component/TurkeyAdvisor'
import Blog from '../../Component/Blog'
import MobileStore from '../../Component/MobileStore'
import Testimonial from '../../Component/Testimonial'

export default function Home() {
  return (
    <div>
      <Citizen />
      {/* <TurkeyAdvisor /> */}
      <Blog />
      <MobileStore />
      <Testimonial />
    </div>
  )
}
