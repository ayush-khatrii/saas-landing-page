import Hero from '@/components/Hero'
import LogoTicker from '@/components/LogoTicker'
import Navbar from '@/components/Navbar'
import Showcase from '@/components/Showcase'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Showcase />
    </>
  )
}

export default page