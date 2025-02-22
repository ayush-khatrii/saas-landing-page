import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import LogoTicker from '@/components/LogoTicker'
import Navbar from '@/components/Navbar'
import Showcase from '@/components/Showcase'
import Testimonials from '@/components/Testimonials'

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Intro />
      <Showcase />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  )
}

export default page