import Button from "./ui/Button";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";

const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-5">
        <div className="border border-white/15 py-24 rounded-xl overflow-hidden relative"
          style={{
            backgroundImage: `url(${starsBg.src})`
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{
              backgroundImage: `url(${gridLines.src})`
            }}
          >
          </div>
          <div className="relative px-5">
            <h2 className="text-3xl md:text-6xl tracking-tighter text-center font-medium">Insights with AI-Powered Analytics</h2>
            <p className="md:text-xl text-center max-w-2xl mx-auto mt-5 tracking-tight font-light text-white/70 px-4 ">
              Transform raw data into powerful business decisions with real-time AI-driven insights, predictive analytics, and automated reporting.
            </p>
            <div className="flex justify-center mt-5">
              <Button>
                Get Started for Free
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-5 w-full font-extralight">Developed by <a href="https://ayushkhatri.site" target="_blank" className="text-purple-500 font-medium hover:underline transition-all"> Ayush Khatri</a></div>
    </section>
  )
}

export default CallToAction;