"use client";
import Image from "next/image";
import { tagItems } from "../../../constants";
import Button from "../../../components/ui/Button";
import { profiles } from "../../../constants";
import { useRef } from "react";
import { useInView, motion } from "motion/react";

const Village = () => {
  const villageRef = useRef(null);
  const villageInView = useInView(villageRef, { once: true, amount: 0.4 });

  return (
    <section className="flex bg-[#0E0805]  justify-center ">
      <div
        ref={villageRef}
        className="lg:flex  2xl:mx-[207.17] gap-[50px] lg:gap-[80px]  xl:gap-[130.31] sm:px-2 py-[60] "
      >
        <div className="flex justify-center mt-[80px] ">
          {profiles.map((profile) => (
            <div key={profile.id} className={profile.container.className}>
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={
                  villageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }
                }
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Image
                  src={profile.mainImage.src}
                  alt={profile.mainImage.alt}
                  width={profile.mainImage.width}
                  height={profile.mainImage.height}
                  className={profile.mainImage.className}
                />
              </motion.div>

              {/* Overlay Image */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={
                  villageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }
                }
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
              >
                <Image
                  src={profile.overlayImage.src}
                  alt={profile.overlayImage.alt}
                  width={profile.overlayImage.width}
                  height={profile.overlayImage.height}
                  className={profile.overlayImage.className}
                />
              </motion.div>

              {/* Name with Highlighted Part */}
              <motion.h1
                initial={{ opacity: 0, x: -80 }}
                animate={
                  villageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }
                }
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
                className={`${profile.name.className} font-Unbounded`}
              >
                <span style={{ color: profile.name.highlight.color }}>
                  {profile.name.highlight.text}
                </span>{" "}
                {profile.name.text.split(" ")[1]}{" "}
              </motion.h1>
            </div>
          ))}
        </div>

        <div className="  sm:h-[500px] lg:h-[540px]  text-center lg:text-left justify-center items-center lg:items-start flex flex-col">
          <motion.h1
            initial={{ opacity: 0, x: 80 }}
            animate={
              villageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }
            }
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="  text-white text-xl sm:text-3xl lg:text-4xl font-normal leading-[150%] text-center lg:text-left px-2 sm:px-0 mt-[30px]"
          >
            From a Small Village to <br className="hidden sm:block" />
            <span className="text-[#1D9ED9]">&#123;</span>Leadlyft & Remember
            Well
            <span className="text-[#1D9ED9]">&#125;</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 80 }}
            animate={
              villageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }
            }
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            className="mt-[22.13] text-sm sm:text-lg lg:text-xl text-white font-normal  text-center lg:text-left "
          >
            I’m Basit — developer, tutor, and founder of
            <br className="" />
            ThinkBuilt Solutions. From Jhandeeryein, Pakistan
            <br className="" />
            to 7-figure platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={
              villageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }
            }
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
            className="my-[20px] flex flex-wrap items-center gap-1 sm:gap-3 w-[325px] sm:w-[500px] justify-center lg:justify-start"
          >
            {tagItems.map((item, index) => (
              <div
                key={index}
                className="text-white p-2 sm:p-4 rounded-full bg-[#FFFFFF1A]  flex items-center justify-center text-center w-fit gap-2 transition-all duration-500 hover-animation"
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span className="text-xs sm:text-md xl:text-lg">
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={
              villageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
            }
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.8 }}
          >
            <Button
              type="button"
              title="Read My Full Story"
              variant="py-2 px-4 mt-[10px] bg-[#1D9ED9] text-white text-sm sm:text-lg lg:text-xl border-x border-y rounded-full transition-colors "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Village;
