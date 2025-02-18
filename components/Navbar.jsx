import { PiStarFourFill } from "react-icons/pi";
import { TbMenu3 } from "react-icons/tb";
import Button from "./ui/Button";

const Navbar = () => {
  return (
    <header className="z-10 border-b md:border-none border-white/15 py-4 sticky top-0">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="md:backdrop-blur flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
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
              <Button>
                Join Waitlist
              </Button>
            </div>
            <TbMenu3 className="h-6 w-6 text-white/80 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;