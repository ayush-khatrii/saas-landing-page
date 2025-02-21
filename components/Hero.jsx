"use client";
import Button from "./ui/Button"
import { cn } from "@/lib/utils";
import { GridPattern } from "./ui/dotpattern";


const Hero = () => {
  return (
    <section className="relative overflow-hidden flex h-[600px] items-center flex-col">
      <div className="absolute inset-0 top-0 -z-10">
        <GridPattern
          strokeDasharray={"3 2"}
          className={cn(
            "md:[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "[mask-image:radial-gradient(circle_at_center,white,transparent)]",
          )}
        />
      </div>

      <div className="container px-3 mt-40">
        <h1 className="z-50 lg:text-7xl text-5xl font-semibold bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,.9))] text-transparent bg-clip-text text-center">
          AI-Powered Analytics
        </h1>
        <p className="max-w-5xl mt-2 font-light text-sm md:text-xl text-white/70 leading-relaxed md:leading-loose text-center mx-auto">
          Transform complex data into real-time insights. Make confident business decisions effortlessly with automation, accuracy, and speed.
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