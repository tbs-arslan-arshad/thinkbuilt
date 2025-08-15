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

      return () => clearTimeout(countDelay);
    }
  }, [FounderRefInView]);

  return (
    <section
      ref={foundersRef}
      className="  flex flex-col items-center justify-center min-h-screen">
      <div className="grid md:grid-cols-4 grid-cols-2 mt-[150px] ">
        {displayStats.map((stat, index) => (
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
              delay: 0.1 * index,
            }}
            className="flex flex-col items-center justify-center rounded-full bg-[#FFFFFF1A] w-[130px] h-[130px] sm:w-[187px] sm:h-[187px] text-white  transition-all duration-500 hover-animation">
            <h1 className="text-3xl xl:text-[40px] text-white font-unbounded  font-normal leading-[32px] tracking-[-2px]">
              {stat.value}
            </h1>
            <span className="text-xs sm:text-base text-white/80 font-satoshi font-normal leading-6 mt-2">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.h3
        initial={{ opacity: 0, y: -80 }}
        animate={
          FounderRefInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -80 }
        }
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
        className="text-white text-xl sm:text-[44px] mt-[50px] lg:mt-[193.67px] flex flex-col items-center justify-center text-center font-satoshi font-normal leading-[130%] capitalize">
        Why Non-Tech Founders Choose
        <span className="flex items-center justify-center ">
          <span className="text-[#1D9ED9]">&#123;</span>ThinkBuilt
          <span className="text-[#1D9ED9]">&#125;</span>
        </span>
      </motion.h3>

      <div className="flex flex-col flex-wrap md:flex-row gap-3 items-center justify-center mt-[50px] w-full">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-flow-row-dense items-center justify-center mt-[50px] gap-2  px-4"> */}
        {featureCards.map((card) => (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={
              FounderRefInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
            }
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
            key={card.id}
            className="text-white flex-1 w-full flex flex-col items-center h-[220px] max-w-[473px] rounded-xl transition-all duration-500 hover-animation py-[20px] border border-[#FFFFFF0D] bg-[rgba(13,13,13,0.2)] md:bg-[rgba(13,13,13,0.1)] backdrop-blur-[5px]">
            
                <Image
                  src={card.iconImage}
                  alt={card.iconAlt}
                  width={60}
                  height={60}
                  priority={true}
                  unoptimized={true}
                />
              
            
            <h1 className="text-white text-center font-satoshi pt-[25px] text-[20px] font-bold leading-[26px] tracking-[-0.1px]">
              {card.title}
            </h1>
            <span className="w-[310px] flex justify-center text-white text-center font-satoshi text-base font-normal leading-[26px] pt-[15px]">
              {card.description}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-2 pt-[23px] ">
        {featureItems.map((item) => (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={
              FounderRefInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
            }
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
            key={item.id}
            className={`text-sm xl:text-base ${item.bgColor} flex gap-1 items-center justify-center rounded-full py-2 mb-[23px] lg:mb-[74px] px-2  transition-all duration-500 hover-animation text-black font-satoshi  font-normal leading-6`}>
            <Image
              src={item.icon}
              alt="Vector"
              width={25}
              height={25}
              className="w-[20px] h-[20px]"
              priority={true} // Ensures immediate loading
              unoptimized={true} // For development
            />
            {item.text}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Founders;
