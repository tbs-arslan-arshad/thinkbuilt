// components/Hero.js
"use client";
import Image from "next/image";
import Button from "../components/Button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    // Start first line typing after a short delay
    const firstTimer = setTimeout(() => {
      setShowFirstLine(true);
    }, 500);

    // Start second line typing after first line completes
    const secondTimer = setTimeout(() => {
      setShowSecondLine(true);
    }, 3000); // 2.5s typing + 0.5s delay

    // Reset animation after everything completes
    const resetTimer = setTimeout(() => {
      setShowFirstLine(false);
      setShowSecondLine(false);
    }, 5500); // Total animation time

    // Restart animation
    const restartTimer = setTimeout(() => {
      setShowFirstLine(true);
    }, 6000); // 500ms after reset

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
      clearTimeout(resetTimer);
      clearTimeout(restartTimer);
    };
  }, [showFirstLine, showSecondLine]);

  return (
    <section className="flex flex-col items-center min-h-screen relative mt-[60]">
      <span className="text-white text-xl md:text-2xl mt-[180] 2xl:mt-[220]">
        <span className="text-[#1D9ED9]">&#123;</span> Think Built Solution{" "}
        <span className="text-[#1D9ED9]">&#125;</span>
      </span>

      <h1 className="text-white text-3xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl mt-[25.82] px-4 md:px-8 lg:px-12 items-center justify-center">
        Clarity Before&nbsp;
        <span className="inline-block">
          <span className="text-[#1D9ED9]">&#123;</span>
          Code
          <span className="text-[#1D9ED9]">&#125;</span>.
          <br />
          <Image
            src="/Vector 2.png"
            alt="icons"
            width={400}
            height={9.412}
            className="justify-self-end mr-8 mt-2 sm:mt-4 2xl:w-[300] xl:w-[220] md:w-[190] sm:w-[150] w-[95] block"
          />
        </span>
      </h1>

      <div className="text-white text-xs md:text-lg xl:text-xl text-center mt-[25] h-[60px] overflow-hidden">
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

      <div className="text-white rounded-full mt-[30px] bg-[#1D9ED9] text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl font-Satoshi">
        <Button type="button" title="Book Your Clarity Session" variant="py-2 px-3" />
      </div>

      <style jsx>{`
        .typewriter-first {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          animation: typing-first 2.5s steps(40, end);
        }

        .typewriter-second {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          animation: typing-second 2.5s steps(30, end);
        }

        @keyframes typing-first {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes typing-second {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;