"use client"
import { DotLottiePlayer } from "@dotlottie/react-player"
import Image from "next/image";

const featuresData = [
  {
    icon: "/assets/click.lottie",
    isNew: true,
    text: "AI-Powered Code Suggestions"
  },
  {
    icon: "/assets/stars.lottie",
    isNew: false,
    text: "Intelligent Error Fixing"
  },
  {
    icon: "/assets/vroom.lottie",
    isNew: false,
    text: "Seamless Project Management"
  },
];

const Showcase = () => {
  return (
    <section className="py-20 md:py24">
      <div className="container px-5 mx-auto">
        <h1 className="text-3xl md:text-5xl font-medium text-center tracking-tighter mb-5">
          Unlock the Full Potential of AI in Your Terminal
        </h1>
        <p className="text-white/70 text-center font-light tracking-tight text-base md:text-lg max-w-2xl mx-auto leading-relaxed">Supercharge your workflow with intelligent code suggestions, debugging tools, and AI-powered automation</p>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-2.5">
          {
            featuresData.map((item) => (
              <div
                key={item.text}
                className="group hover:border-purple-800 transition-all duration-300 ease-in-out border border-white/15 rounded-xl p-2.5 flex items-center gap-2.5  cursor-pointer">
                <div className="h-12 w-12 group-hover:bg-purple-800 transition-all duration-300 border border-white/15 rounded-lg inline-flex items-center justify-center">
                  <DotLottiePlayer src={item.icon} className="h-6 w-6" autoplay />
                </div>
                <div className="text-sm md:text-base font-light">{item.text}</div>
                {
                  item.isNew && <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">new</div>
                }
              </div>
            ))
          }
        </div>
        <div className="border mt-4 aspect-video border-white/20 rounded-xl p-2.5 flex items-center gap-2.5">
          <Image alt="product-image" width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto" src={"/assets/product-image.png"} />
        </div>
      </div>
    </section>
  )
}

export default Showcase