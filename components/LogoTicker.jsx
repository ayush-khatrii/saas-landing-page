"use client";
import quantam from "@/assets/logo-quantum.png";
import acme from "@/assets/logo-acme.png";
import celestial from "@/assets/logo-celestial.png";
import pulse from "@/assets/logo-pulse.png";
import apex from "@/assets/logo-apex.png";
import echo from "@/assets/logo-echo.png";
import { motion } from "motion/react";


const LogoTicker = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center gap-10">
          <div className="flex-1 md:flex-none">
            <h1 className="text-base">Trusted by leading companies</h1>
          </div>
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "50%" }}
              animate={{ translateX: "0%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex flex-none gap-10 pr-14 -translate-x-1/2">
              {[
                quantam,
                acme,
                celestial,
                pulse,
                apex,
                echo,
                quantam,
                acme,
                celestial,
                pulse,
                apex,
                echo,
              ].map((logo, index) => (
                <img
                  className="h-6 w-auto"
                  src={logo.src}
                  key={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoTicker