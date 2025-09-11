"use client";
import Image from "next/image";
import { footerData } from "../../constants";
import { socialIcons } from "../../constants";
import { useRef } from "react";
import { useInView, motion } from "motion/react";
import { useMediaQuery } from "react-responsive";
const Footer = () => {
  const isMediumUp = useMediaQuery({ minWidth: 1024 });
  const clarityRef = useRef(null);
  const clarityRefInView = useInView(clarityRef, { once: true, amount: 0.4 });
  return (
    <footer ref={clarityRef} className="bg-[#0E0805] text-white min-h-[400px] py-8">
      <motion.div 
      initial={{
            opacity: 0,
            x : isMediumUp? -80 : 0,
            y : isMediumUp?  0 : -80,
        }}
        animate={
              clarityRefInView
                ? { opacity: 1, x: 0, y: 0 }
                : {
                    opacity: 0,
                    x: isMediumUp ? -80 : 0,
                    y: isMediumUp ? 0 : -80,
                  }
            }
            transition={{ duration: 0.9, ease: "easeInOut" }}
      className="px-2 font-Satoshi">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
          <div className="flex flex-col items-center justify-start mt-6 sm:mt-12 md:mt-14">
            
            <Image
              src="/images/Group.png"
              alt="ThinkBuilt Solutions Logo"
              width={199}
              height={45}
              priority
              className="hover-animation"
            />
            <p className="w-full max-w-[277px] mt-4 text-center text-sm sm:text-base">
              We work with startups in SaaS, fintech, healthtech, AI, and Web3.
            </p>
            <div className="flex gap-2">
              {socialIcons.map((icon) => (
                <a
                  key={icon.id}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={50}
                    height={50}
                    className="w-[30px]  mt-8"
                    priority={true} // Ensures immediate loading
                  unoptimized={true} // For development
                  />
                </a>
              ))}
            </div>
          </div>

          {footerData.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start mt-6 sm:mt-8 md:mt-10">
              <ul className="mt-4 flex flex-col items-center gap-2.5">
                <li className="text-xl sm:text-2xl mb-2.5 font-semibold">
                  {section.title}
                </li>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.href}
                      className="hover:underline text-sm sm:text-base">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              {section.title === "Contact" && (
                <div className="mt-[58.25px] w-full max-w-[240px]">
                  <h1 className="text-sm sm:text-base font-semibold text-center">
                    News Letter
                  </h1>
                  <div className="flex gap-2 h-[27px] mt-[27.44px]">
                    <input
                      type="email"
                      placeholder="Enter your Email Address"
                      className="rounded-sm text-white w-[200px] text-md"
                    />
                    <Image
                      src="/images/Mail icon.png"
                      alt="Subscribe"
                      width={27}
                      height={19}
                      className="w-[20px] sm:w-[27px]"
                      priority={true} // Ensures immediate loading
                  unoptimized={true} // For development
                    />
                  </div>
                  <div className="h-[1.193px] border-t mt-[21.47px] "></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 px-8">
          <p className="text-sm sm:text-base">
            ©ThinkBuiltSolutions. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;