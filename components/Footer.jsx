import { FaInstagram, FaGithub, FaYoutube } from "react-icons/fa"
import { GiPolarStar } from "react-icons/gi"

const Footer = () => {
  return (
    <footer className="border-t border-white/15 py-5">
      <div className="container mx-auto px-5">
        <div className="flex flex-col justify-between lg:flex-row gap-8">
          <div className="relative flex items-center gap-3 cursor-pointer">
            <div className="border h-10 w-10 inline-flex justify-center items-center rounded-lg border-white/15 cursor-pointer">
              <GiPolarStar className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="font-medium">AI Startup landing page</div>
              <div className="mt-1 text-xs w-full font-extralight">Developed by <a href="https://ayushkhatri.site" target="_blank" className="text-purple-500"> Ayush Khatri</a></div>
            </div>
          </div>
          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-6 ">
            <a href="#" className="text-white/70 font-extralight hover:text-purple-600 hover:underline transition-all duration-300 ease-in-out md:text-base text-sm">Features</a>
            <a href="#" className="text-white/70 font-extralight hover:text-purple-600 hover:underline transition-all duration-300 ease-in-out md:text-base text-sm">Developers</a>
            <a href="#" className="text-white/70 font-extralight hover:text-purple-600 hover:underline transition-all duration-300 ease-in-out md:text-base text-sm">Pricing</a>
            <a href="#" className="text-white/70 font-extralight hover:text-purple-600 hover:underline transition-all duration-300 ease-in-out md:text-base text-sm">Blog</a>
            <a href="#" className="text-white/70 font-extralight hover:text-purple-600 hover:underline transition-all duration-300 ease-in-out md:text-base text-sm">Resources</a>
          </nav>
          <div className="flex gap-6 items-center">
            <FaInstagram className="h-6 w-6  text-white/70 hover:text-purple-600 scale-3d hover:scale-105 transition-all duration-200 ease-out cursor-pointer" />
            <FaGithub className="h-6 w-6  text-white/70 hover:text-purple-600 scale-3d hover:scale-105 transition-all duration-200 ease-out cursor-pointer" />
            <FaYoutube className="h-6 w-6  text-white/70 hover:text-purple-600 scale-3d hover:scale-105 transition-all duration-200 ease-out cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer