import CallToAction from '@/components/CallToAction'
import Hero from '@/components/Hero'
import LogoTicker from '@/components/LogoTicker'
import Navbar from '@/components/Navbar'
import Showcase from '@/components/Showcase'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Showcase />
      <Testimonials />
      <CallToAction />
    </>
  )
}

export default page