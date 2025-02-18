import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='h-screen'>
        <h1>Page</h1>
      </div>
    </>
  )
}

export default page