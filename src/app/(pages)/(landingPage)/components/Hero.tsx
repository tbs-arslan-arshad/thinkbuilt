// components/Hero.js
"use client";
import Image from "next/image";
import Button from "../../../components/ui/Button";
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
    <section
      id="top"
      className="flex flex-col items-center min-h-screen relative mt-[60px] px-4 md:px-0"
    >
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onAnimationComplete={() => setTextAnimDone(true)}
        className="w-full flex flex-col items-center"
      >
        <span className="text-white text-lg font-normal leading-[150%] italic mt-[180px] 2xl:mt-[220]">
          <span className="text-[#1D9ED9]">&#123;</span> ThinkBuilt Solutions{" "}
          <span className="text-[#1D9ED9]">&#125;</span>
        </span>

        <h1 className="text-white mt-[25.82px] text-4xl md:text-[82px] font-normal leading-[120%] capitalize sm:px-4 md:px-8 lg:px-12 flex justify-center flex-wrap lg:flex-nowrap">
          Clarity Before&nbsp;
          <span className="sm:inline-block font-medium">
            <span className="text-[#1D9ED9]">&#123;</span>
            Code
            <span className="text-[#1D9ED9]">&#125;</span>.
            <br />
            <Image
              src="/images/Vector 2.png"
              alt="icons"
              width={400}
              height={9.412}
              className="justify-self-end mr-4 sm:mr-8 mt-[7.23px] xl:w-[254px] md:w-[190px] sm:w-[150px] w-[95px] sm:block"
            />
          </span>
        </h1>

        <div className="text-white/[0.86] text-base md:text-xl font-normal leading-[150%] text-center mt-[25] overflow-hidden px-4 md:px-0 w-full md:max-w-[ 575.932px] h-16">
          <p className="inline-block md:hidden">
            <span className="md:typewriter-first break-all">
              Helping non-tech founders turn ideas into digital platforms —
              confidence and the right direction.
            </span>
          </p>

          <p className="hidden md:inline-block">
            {showFirstLine && (
              <span className="typewriter-first">
                Helping non-tech founders turn ideas into digital platforms —
              </span>
            )}
          </p>
          <br />
          <p className="hidden md:inline-block">
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
        className="text-white/[0.86] rounded-full mt-[30px] bg-[#1D9ED9] text-lg font-medium leading-[30px]"
      >
        <Button
          type="button"
          title="Book Your Clarity Session"
          variant="py-2 px-3"
          onClick={() => window.open("https://calendly.com/basit-thinkbuiltsol/technical-partner", "_blank")}
        />
      </motion.div>

      {/* --- WAVE ANIMATION --- */}
      <div className="hidden absolute lg:flex bottom-0 left-0 w-full h-full pointer-events-none overflow-hidden justify-center items-center">
        {/* First Wave */}
        <motion.div
          className="absolute left-0 right-0 w-[110%] will-change-transform mt-16"
          animate={{ x: ["-100px", "100px"], y: ["-30px", "30px"] }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <Image
            src="/images/hero_bg_wave.png"
            alt="hero-background"
            height={300}
            width={1000}
            className="w-full h-auto"
            priority={true} // Ensures immediate loading
                  unoptimized={true} // For development
          />
        </motion.div>

        {/* Second Wave */}
        <motion.div
          className="absolute left-0 right-0 w-[110%] will-change-transform mt-40"
          animate={{ x: ["100px", "-100px"], y: ["-30px", "30px"] }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <Image
            src="/images/hero_bg_wave_2.png"
            alt="hero-background"
            height={300}
            width={1000}
            className="w-full h-auto opacity-80"
            priority={true} // Ensures immediate loading
                  unoptimized={true} // For development
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
