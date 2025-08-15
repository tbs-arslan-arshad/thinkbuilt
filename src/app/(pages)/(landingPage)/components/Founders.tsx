"use client";
import Image from "next/image";
import { statsData } from "../../../constants";
import { featureItems } from "../../../constants";
import { featureCards } from "../../../constants";
import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "motion/react";

const Founders = () => {
  const foundersRef = useRef(null);
  const FounderRefInView = useInView(foundersRef, { once: true, amount: 0.4 });

  const [displayStats, setDisplayStats] = useState(statsData);
  const [allAnimationsDone, setAllAnimationsDone] = useState(false);

  useEffect(() => {
    if (FounderRefInView) {
      const countDelay = setTimeout(() => {
        const randomCountInterval = setInterval(() => {
          setDisplayStats(
            statsData.map((stat) => ({
              ...stat,
              value: `${Math.floor(Math.random() * 200) + 1}+`,
            }))
          );
        }, 100);

        const stopCountTimeout = setTimeout(() => {
          clearInterval(randomCountInterval);
          setDisplayStats(statsData);
        }, 1500);

        return () => clearTimeout(stopCountTimeout);
      }, 1000);

      // Total time for other animations (stats, heading, feature cards)
      // The longest animation is 0.6s duration + 0.6s delay = 1.2s.
      // We'll add a slight buffer.
      const animationEndDelay = setTimeout(() => {
        setAllAnimationsDone(true);
      }, 1500);

      return () => {
        clearTimeout(countDelay);
        clearTimeout(animationEndDelay);
      };
    }
  }, [FounderRefInView]);

  return (
    <section
      id="why-us"
      ref={foundersRef}
      className="  flex flex-col items-center justify-center min-h-screen"
    >
      <div className="grid md:grid-cols-4 grid-cols-2 gap-2 pt-2 ">
        {displayStats.map((stat) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={
              FounderRefInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0 }
            }
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              // delay: 0.1 * index,
            }}
            className="flex flex-col items-center justify-center rounded-full bg-[rgba(255,255,255,0.10)] w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] text-white mx-2 transition-all duration-500 hover-animation"
          >
            <h1 className="text-lg sm:text-3xl xl:text-4xl">{stat.value}</h1>
            <span className="text-xs sm:text-base ">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        animate={
          FounderRefInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -80 }
        }
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
        className="text-white text-xl sm:text-4xl mt-[50px] lg:mt-[150px]  h-[100] flex flex-col items-center justify-center"
      >
        Why Non-Tech Founders Choose
        <br />
        <span className="flex items-center justify-center mt-[10px]">
          <span className="text-[#1D9ED9]">&#123;</span>ThinkBuilt
          <span className="text-[#1D9ED9]">&#125;</span>
        </span>
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center mt-[20px]">
        {featureCards.map((card) => (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={
              FounderRefInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
            }
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
            key={card.id}
            className="text-white flex flex-col items-center sm:w-[350px] h-[150px] xl:h-[285px] transition-all duration-500 hover-animation"
          >
            <Image src={card.borderImage} alt="Border" width={60} height={60} />
            <Image
              src={card.iconImage}
              alt={card.iconAlt}
              width={42}
              height={42}
              className="mt-[-50px] mb-[20px]"
            />
            <h1>{card.title}</h1>
            <span className="w-[314px] h-[40px] flex justify-center text-center">
              {card.description}
            </span>
          </motion.div>
        ))}
      </div>

      <div
        className={`relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-2 mb-[20px]`}
      >
        {featureItems.map((item) => (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={
              FounderRefInView && allAnimationsDone
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 80 }
            }
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              // delay: 0.1 * index,
            }}
            key={item.id}
            className={`text-black text-sm xl:text-lg 2xl:text-xl ${item.bgColor} flex gap-1 items-center justify-center rounded-full py-2 px-2 mt-[10px] lg:mt-[0px] transition-all duration-500 hover-animation z-20`}
          >
            <Image
              src={item.icon}
              alt="Vector"
              width={25}
              height={25}
              className="xl:w-[25px] xl:h-[25px] w-[20px] h-[20px]"
            />
            {item.text}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Founders;
