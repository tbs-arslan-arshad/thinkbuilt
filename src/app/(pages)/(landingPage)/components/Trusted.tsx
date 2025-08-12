/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { PEOPLE_URL } from "../../../constants/index";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const Trusted = () => {
  // Refs for in-view detection
  const headRef = useRef(null);
  const gridRef = useRef(null);

  // Only animate once, when at least ~40% / 25% of the block is visible
  const headInView = useInView(headRef, { once: true, amount: 0.4 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.25 });

  const half = Math.ceil(PEOPLE_URL.length / 2);
  const row1 = PEOPLE_URL.slice(0, half);
  const row2 = PEOPLE_URL.slice(half);

  const LogoCard = ({ src }: any) => (
    <div className="bg-[#1E1E1E] rounded-[20px] h-[58px] w-[186px] flex items-center justify-center shrink-0 transition-all duration-500">
      <Image
        src={src}
        alt="brand"
        width={129.28}
        height={24.33}
        className="h-[24.33px] w-[129.28px] object-contain"
      />
    </div>
  );

  const MarqueeRow = ({ items, active, speed = 18, delay = 0 }: any) => {
    const [loop, setLoop] = useState(false);

    return (
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0E0805] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0E0805] to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay }}
          onAnimationComplete={() => setLoop(true)}
        >
          <motion.div
            className="flex gap-2.5"
            animate={active && loop ? { x: ["0%", "-50%"] } : { x: "0%" }}
            transition={
              active && loop
                ? { duration: speed, repeat: Infinity, ease: "linear" }
                : undefined
            }
          >
            <div className="flex gap-2.5">
              {items.map((src: any, i: any) => (
                <LogoCard key={`item1-${i}`} src={src} />
              ))}
            </div>
            <div className="flex gap-2.5">
              {items.map((src: any, i: any) => (
                <LogoCard key={`item2-${i}`} src={src} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  };

  return (
    <section className="flex flex-col items-center  bg-[#0E0805] pt-[100px]">
      <motion.div
        ref={headRef}
        initial={{ opacity: 0, y: -80 }}
        animate={headInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -80 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full flex flex-col items-center"
      >
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Trusted by Founders Building
          <br />
          <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-[21px] flex  justify-center">
            <span className="text-[#1D9ED9]">&#123;</span>Real Products
            <span className="text-[#1D9ED9]">&#125;</span>
          </span>
        </h1>
        <div className=" mb-[20px] items-center justify-center">
          <p className="text-white text-xs sm:text-sm md:text-md lg:text-xl  ">
            From solo founders to global brands, we&apos;ve helped turn
            <br />
            <span className="flex justify-center">
              ideas into platforms that scale.
            </span>
          </p>
        </div>
        <div className="border-t border-gray-700 w-full max-w-[75%] 2xl:max-w-[80%] mx-auto my-6 "></div>
      </motion.div>

      <motion.div
        ref={gridRef}
        initial={{ opacity: 0, y: 80 }}
        animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full flex flex-col items-center"
      >
        <div className="w-full max-w-[75%] 2xl:max-w-[80%] mx-auto space-y-5">
          <MarqueeRow items={row1} active={gridInView} speed={22} />
          <MarqueeRow items={row2} active={gridInView} speed={24} delay={0.1} />
        </div>
        <div className="border-t border-gray-700 w-full max-w-[75%] 2xl:max-w-[80%] mx-auto my-6"></div>
      </motion.div>

      <motion.div
        ref={gridRef}
        initial={{ opacity: 0, y: -80 }}
        animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -80 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full flex flex-col items-center"
      >
        <h1 className="mt-[60px] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300">
          You’ve Got the Vision.
        </h1>
        <br />
        <span className="text-sm sm:text-2xl md:text-3xl lg:text-4xl text-gray-400">
          We Help You Bring It To Life —{" "}
          <span className="text-[#1D9ED9]">&#123;</span>
          <span className="text-white">The Right Way</span>
          <span className="text-[#1D9ED9]">&#125;</span>.
        </span>
        <p className="text-gray-200 mt-[20.75]  justify-center items-center text-xs md:text-md lg:text-lg px-3 text-center mb-[40px] sm:mb-[0px]">
          Whether it&apos;s a SaaS, web app, or marketplace, we guide non-tech
          founders
          <br className="hidden sm:inline" />
          <span className="sm:flex justify-center text-center  mb-[40px] 2xl:mb-[30px]">
            from idea to execution.
          </span>
        </p>
      </motion.div>
    </section>
  );
};

export default Trusted;
