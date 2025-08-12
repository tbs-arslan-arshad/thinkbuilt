"use client";
import { useEffect, useRef, useState } from "react";
import { Images } from "../../../constants/index";
import Image from "next/image";
import { FEATURES } from "../../../constants/index";
import { tags } from "../../../constants/index";
import { useInView, motion } from "motion/react";

const Imagesection = () => {
  const [animatedTagId, setAnimatedTagId] = useState(0);

  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const row1InView = useInView(row1Ref, { once: true, amount: 0.4 });
  const row2InView = useInView(row2Ref, { once: true, amount: 0.25 });

  useEffect(() => {
    const animateTag = () => {
      const randomIndex = Math.floor(Math.random() * tags.length);
      const randomTagId = tags[randomIndex].id;
      setAnimatedTagId(randomTagId);
    };

    const intervalId = setInterval(animateTag, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section ref={row1Ref} className="bg-[#0E0805]">
      <div className="flex flex-col items-center gap-4 py-[50px]  justify-center mx-4">
        <div className="grid 2xl:grid-cols-[820px_441px] xl:grid-cols-[800px_441px] gap-4 items-center justify-center ">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={row1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Image
              src={Images[0].src}
              alt={Images[0].alt}
              width={820}
              height={409}
              className="flex items-center justify-center transition-all duration-500 hover-animation"
            />
          </motion.div>

          <motion.div
            ref={row1Ref}
            initial={{ opacity: 0, x: 80 }}
            animate={row1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="flex flex-col bg-[#AAE3FE] p-4 rounded-3xl  2xl:h-[409] transition-all duration-500 hover-animation">
              {FEATURES.map((stat, index) => (
                <div key={index} className="">
                  <h1 className="text-6xl sm:text-8xl mt-[10px]">
                    {stat.title}
                  </h1>
                  <span className="font-bold">{stat.heading}</span>
                  <p className="text-md mt-[120px] sm:mt-[220px]">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col xl:flex-row gap-4 items-center justify-center">
          <motion.div
            ref={row2Ref}
            initial={{ opacity: 0, x: -80 }}
            animate={row2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="w-full xl:w-[600px] sm:h-[409px] relative flex justify-center items-center transition-all duration-500 hover-animation">
              <div className=" xl:w-[662px]  transition-all duration-500 hover-animation sm:hidden">
                <Image
                  src={Images[2].src}
                  alt={Images[2].alt}
                  width={662}
                  height={409}
                />
              </div>

              <div className="absolute inset-0 w-full h-full hidden sm:block">
                <Image
                  src="/images/Background 8.png"
                  alt="Background Image"
                  width={660}
                  height={409}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Tag Circle - centered over image */}
              <div className="relative z-10 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] rounded-full border-2 border-white overflow-hidden hidden sm:block">
                {tags.map((tag) => (
                  <div
                    key={tag.id}
                    className={`flex gap-1 items-center ${
                      tag.bgColor
                    } rounded-full py-2 px-5 ${tag.rotation} ${
                      tag.zIndex
                    } absolute ${
                      tag.position
                    } transform -translate-x-1/2 hover:scale-105 transition-all duration-400
            ${animatedTagId === tag.id ? "scale-110" : ""}`}
                  >
                    <Image
                      src={tag.icon}
                      alt={tag.text}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="text-black text-base font-medium whitespace-nowrap">
                      {tag.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={row2Ref}
            initial={{ opacity: 0, x: 80 }}
            animate={row2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className=" 2xl:w-[662px]  sm:h-[409px] transition-all duration-500 hover-animation">
              <Image
                src={Images[3].src}
                alt={Images[3].alt}
                width={662}
                height={409}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Imagesection;
