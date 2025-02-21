import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'
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
      <Footer />
    </>
  )
}

export default page