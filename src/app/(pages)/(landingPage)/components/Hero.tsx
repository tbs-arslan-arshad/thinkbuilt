// components/Hero.js
"use client";
import Image from "next/image";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const Hero = () => {
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [textAnimDone, setTextAnimDone] = useState(false);

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setShowFirstLine(true);
    }, 500);

    const secondTimer = setTimeout(() => {
      setShowSecondLine(true);
    }, 3000);

    const resetTimer = setTimeout(() => {
      setShowFirstLine(false);
      setShowSecondLine(false);
    }, 5500);

    const restartTimer = setTimeout(() => {
      setShowFirstLine(true);
    }, 6000);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
      clearTimeout(resetTimer);
      clearTimeout(restartTimer);
    };
  }, [showFirstLine, showSecondLine]);

  return (
    <section className="flex flex-col items-center min-h-screen relative mt-[60]">
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onAnimationComplete={() => setTextAnimDone(true)}
        className="w-full flex flex-col items-center">
        <span className="text-white text-[18px] mt-[180] 2xl:mt-[220] font-Satoshi leading-[150%] font-normal">
          <span className="text-[#1D9ED9]">&#123;</span> Think Built Solution{" "}
          <span className="text-[#1D9ED9]">&#125;</span>
        </span>

        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-[82px] mt-[25.82]  sm:px-4 md:px-8 lg:px-12 flex  justify-center text-center font-satoshi  font-normal leading-[120%] capitalize">
          Clarity Before&nbsp;
          <span className="sm:inline-block">
            <span className="text-[#1D9ED9]">&#123;</span>
            Code
            <span className="text-[#1D9ED9]">&#125;</span>.
            <br />
            <Image
              src="/images/Vector 2.png"
              alt="icons"
              width={400}
              height={9.412}
              className="justify-self-end mr-3 sm:mr-5 mt-[2px] 2xl:w-[240] xl:w-[210] md:w-[170] sm:w-[140] w-[85] sm:block"
            />
          </span>
        </h1>

        <div className="text-xs md:text-lg xl:text-xl mt-[25] h-[60px] overflow-hidden text-[rgba(255,255,255,0.86)] text-center font-satoshi font-normal leading-[150%]">
          <p className="inline-block">
            {showFirstLine && (
              <span className="typewriter-first">
                Helping non-tech founders turn ideas into digital platforms —
              </span>
            )}
          </p>
          <br />
          <p className="inline-block">
            {showSecondLine && (
              <span className="typewriter-second">
                confidence and the right direction.
              </span>
            )}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={textAnimDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
        className="text-white/86 rounded-full mt-[30px] bg-[#1D9ED9] text-xs sm:text-sm md:text-md lg:text-lg ">
        <Link
          href="/book-session" // Replace with your actual path
          className="py-2 px-3 inline-block text-center font-Satoshi font-medium leading-[30px] border border-[#FFFFFF99] rounded-full">
          Book Your Clarity Session
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
