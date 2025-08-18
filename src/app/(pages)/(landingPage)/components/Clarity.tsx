"use client";
import Image from "next/image";
import Button from "../../../components/ui/Button";
import { useRef } from "react";
import { useInView, motion } from "motion/react";

const Clarity = () => {
  const clarityRef = useRef(null);

  const clarityRefInView = useInView(clarityRef, { once: true, amount: 0.4 });

  return (
    <section ref={clarityRef} className="bg-[#121010] flex">
      <div className="flex flex-col w-full lg:flex-row items-center justify-end min-h-[400px] lg:min-h-[600px]">
        <div className="flex flex-1 flex-col  text-white w-full h-full justify-center items-center pl-[142px]">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={
              clarityRefInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }
            }
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="w-full"
          >
            <h1 className="text-white text-[44px] font-normal leading-[130%] capitalize w-full max-w-[ 525.456p] text-center lg:text-left">
              <span className="text-white/[0.46]">
                Before You Build Anything, Talk to Someone
              </span>
              <br />
              <span className="font-medium">
                <span className="text-[#1D9ED9]"> {"{"}</span>
                Who&apos;s Built It
                <span className="text-[#1D9ED9]">{"}"}</span>.
              </span>
            </h1>
            <p className="mt-[21px] text-xl font-normal leading-[150%] w-full max-w-[586px] text-center lg:text-left">
              In just one session, I’ll help you understand what to build, who
              to hire, and how to start — without wasting your time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={
              clarityRefInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
            }
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
            className="flex justify-start w-full mt-10"
          >
            <Button
              type="button"
              title="Book Your 1-on-1 Clarity Session"
              variant="xl:py-3 py-2 xl:px-6 px-4 flex bg-[#1D9ED9] rounded-full py-2 sm:py-3 sm:px-4 w-full max-w-[307px] items-center justify-center text-md  lg:text-lg transition-colors font-medium hover:bg-[#1678a1] border"
            />
          </motion.div>
        </div>

        {/* New Image Section with Animation */}
        <div
          style={{
            backgroundImage: " url('/images/clarity_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="relative w-[40%] h-[617.16px] flex items-center justify-start "
        >
          {/* The three layered images with animation */}
          <motion.div
            className="relative h-[418.6px] w-[436.22px] left-[37.61px]"
            initial="start"
            animate={clarityRefInView ? "end" : "start"}
            variants={{
              start: {
                opacity: 0,
              },
              end: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2, // Stagger the animation of child images
                  delayChildren: 0.3,
                },
              },
            }}
          >
            {/* Image 3 (Background, rotated right) */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              variants={{
                start: { y: 40, x: 40, rotate: 10, opacity: 0 },
                end: {
                  y: 0,
                  x: 0,
                  rotate: 5,
                  opacity: 1,
                  transition: { duration: 0.6, ease: "easeInOut" },
                },
              }}
            >
              <Image
                src="/images/clarity_layer_3.png"
                alt="Third Clarity Session"
                width={418.6}
                height={436.22}
                className="w-full h-full z-10"
              />
            </motion.div>

            {/* Image 2 (Middle, rotated left) */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              variants={{
                start: { y: -40, x: -40, rotate: -10, opacity: 0 },
                end: {
                  y: 0,
                  x: 0,
                  rotate: -5,
                  opacity: 1,
                  transition: { duration: 0.6, ease: "easeInOut" },
                },
              }}
            >
              <Image
                src="/images/clarity_layer_2.png"
                alt="Second Clarity Session"
                width={418.6}
                height={436.22}
                className="w-full h-full z-20"
              />
            </motion.div>

            {/* Image 1 (Front and center) */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              variants={{
                start: { y: 40, x: 40, rotate: 0, opacity: 0 },
                end: {
                  y: 0,
                  x: 0,
                  rotate: 0,
                  opacity: 1,
                  transition: { duration: 0.6, ease: "easeInOut" },
                },
              }}
            >
              <Image
                src="/images/clarity_layer_1.png"
                alt="Main Clarity Session"
                width={418}
                height={436}
                className="w-full h-full z-30"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clarity;
