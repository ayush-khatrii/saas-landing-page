import Button from "./ui/Button"
import {
  AnimatedSpan, Terminal, TypingAnimation
} from "@/components/ui/Terminal";
import { Ripple } from "./ui/Ripple";
import { Particles } from "./ui/Particles";


const Hero = () => {
  return (
    <section className="h-[500px] relative flex justify-center items-center flex-col">
      <div className="absolute w-full h-[490px] opacity-50 -z-[200] overflow-hidden">
        <Ripple />
      </div>
      <div className="container px-3">
        <h1 className="z-50 lg:text-7xl text-3xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,.9))] text-transparent bg-clip-text text-center">
          {/* Unlock the Power of */}
           AI in Your Terminal
        </h1>
        <p className="max-w-5xl font-light text-sm md:text-xl text-white/70 leading-relaxed md:leading-loose text-center mx-auto">
          Transform your terminal with TermAI—get real-time code suggestions, error fixes, and project management tools, all powered by AI
        </p>
        <div className="flex justify-center mt-5">
          <Button>
            Join Waitlist
          </Button>
        </div>
      </div>
    </section >
  )
}

export default Hero