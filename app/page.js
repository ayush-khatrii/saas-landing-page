import Hero from '@/components/Hero'
import LogoTicker from '@/components/LogoTicker'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
    </>
  )
}

export default page