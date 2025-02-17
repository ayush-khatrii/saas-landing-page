import { PiStarFourFill } from "react-icons/pi";
import { TbMenu3 } from "react-icons/tb";

const Navbar = () => {
  return (
    <header className="border-b md:border-none border-white/15 py-4">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div className="border h-10 w-10 inline-flex justify-center items-center rounded-lg border-white/15 cursor-pointer">
            <PiStarFourFill className="w-6 h-6 text-violet-700" />
          </div>
          <div>
            <nav className="hidden md:flex gap-8 justify-center text-sm items-center">
              <a href="#" className="text-white/70 hover:text-white transition">Home</a>
              <a href="#" className="text-white/70 hover:text-white transition">Features</a>
              <a href="#" className="text-white/70 hover:text-white transition">Developers</a>
              <a href="#" className="text-white/70 hover:text-white transition">Pricing</a>
            </nav>
          </div>
          <div className="flex gap-4 justify-center items-center cursor-pointer">
            <div>
              <button className="relative py-2 px-3 rounded-lg cursor-pointer font-medium text-sm bg-gradient-to-b from-[#4e0394] to-[#2a024f] shadow-[0px_0px_8px_#8c45ff] transition-all duration-200 ease-in-out text-white">
                <div className="absolute inset-0">
                  <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                  <div className="border  absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)] rounded-lg" />
                  <div className="absolute rounded-lg inset-0 shadow-[0_0_8px_#4e0394]" />
                </div>
                <span>Join waitlist</span>
              </button>
            </div>
            <TbMenu3 className="h-6 w-6 text-white/80 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;