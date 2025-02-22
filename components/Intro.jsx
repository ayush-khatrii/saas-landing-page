"use client";

import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

const Intro = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const scrollTargetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ["start end", "end end"],
  });

  const text = `Stop guessing—start leveraging AI-driven insights to make data-backed decisions. Our AI-powered analytics platform transforms raw data into actionable reports and real-time visualizations so you can stay ahead of the competition.`;

  const words = text.split(" ");
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (value) => {
      setCurrentWord(value);
    });
  }, [wordIndex]);

  return (
    <>
      <section className="flex flex-col justify-center w-auto items-center pt-28 lg:pt-40 px-4">
        <div className="container px-5 mx-auto">
          <div className="sticky top-52 sm:top-36 md:top-40">
            <div className="max-w-screen-md lg:max-w-screen-lg mx-auto text-center">
              <span className="px-3 py-1 bg-gradient-to-b from-[#4e0394] to-[#2a024f] shadow-[0px_0px_8px_#8c45ff] text-center rounded-full border border-purple-500">
                Supercharge Your Data
              </span>
              <h1 className="max-w-2xl mt-10 w-full mx-auto leading-tight text-2xl sm:text-4xl md:text-5xl font-semibold lg:text-5xl mb-5 text-purple-800">
                Turn Your Data into Smart Decisions with AI
              </h1>

              {/* Ensuring Words Stay Inside the Box */}
              <div className="flex flex-wrap justify-center items-center gap-2">
                {words.map((word, index) => (
                  <span
                    key={index}
                    className={twMerge(
                      "text-white/15 text-xl sm:text-3xl md:text-4xl font-light leading-normal transition-colors duration-500",
                      index < currentWord && "text-white"
                    )}
                  >
                    {word}
                  </span>
                ))}
              </div>
              <span className="border border-white/5 flex justify-center items-center flex-col mt-8"></span>
            </div>
          </div>
          <div ref={scrollTargetRef} className="md:h-[300vh] h-[250vh]"></div>
        </div>
      </section>
    </>
  );
};

export default Intro;
