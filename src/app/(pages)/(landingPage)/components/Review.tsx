"use client";
import { useInView, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

const reviews = [
  {
    id: 1,
    founderName: "Coach AK Ikwuakor",
    companyName: "LeadLyft",
    companyLogo: "/images/leadLyft_logo.png",
    quote:
      "Basit and his team did an amazing job from start to finish. A true partner in helping build out the webapp. What I appreciated most about Basit was his communication, his deep understanding of our product; really taking the time to understand our industry. In the end, he created EXACTLEY what we wanted and some. Amazing experience and will work with him time and time again.",
    image: "/images/coach_ak.jpeg",
  },
  {
    id: 2,
    founderName: "Jane D.",
    companyName: "MarketSavy",
    companyLogo: "/images/mark_.png",
    quote:
      "Working with ThinkBuilt was a game-changer for our project. The attention to detail and proactive communication were outstanding.",
    image: "/images/review_2.jpg",
  },
  {
    id: 3,
    founderName: "Alex K.",
    companyName: "InnovateCo",
    companyLogo: "/images/mark_.png",
    quote:
      "The team at ThinkBuilt delivered a solution that exceeded our expectations. Their expertise and commitment are second to none.",
    image: "/images/Basit_Ali.png",
  },
];

const Review = () => {
  const isMediumUp = useMediaQuery({ minWidth: 1024 });
  const reviewsImageRef = useRef(null);
  const reviewsImageRefInView = useInView(reviewsImageRef, {
    once: true,
    amount: 0.4,
  });

  const reviewsRef = useRef(null);
  const reviewsRefInView = useInView(reviewsRef, { once: true, amount: 0.4 });
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const [containerHeight, setContainerHeight] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const activeCardNode = cardRefs.current[currentReviewIndex];
    if (activeCardNode) {
      setTimeout(() => {
        setContainerHeight(activeCardNode?.scrollHeight);
      }, 100);
    }
  }, [currentReviewIndex]);

  const handleNext = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="testimonials"
      ref={reviewsRef}
      className="relative flex flex-col bg-[#0E0805] items-center justify-center px-4 lg:px-[154px] py-16 lg:py-[120px]"
    >
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={
          reviewsRefInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -80 }
        }
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <h1 className="text-white text-4xl md:text-[48px] font-normal leading-[140%] capitalize text-center max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-12 mt-[20px]">
          <span className="text-white/46">
            What Founders Say After Working With
          </span>{" "}
          <br />
          <span className="flex items-center justify-center mt-2 sm:mt-3 font-medium">
            <span className="text-[#1D9ED9] mr-1">{"{"}</span>
            ThinkBuilt
            <span className="text-[#1D9ED9] ml-1">{"}"}</span>
          </span>
        </h1>
      </motion.div>

      <div className="relative flex flex-row justify-center items-stretch w-full">
        {/* Review Cards Section - Second Column */}
        <div
          ref={reviewsImageRef}
          style={{
            height: containerHeight > 0 ? `${containerHeight}px` : "auto",
          }}
          className="relative w-full h-auto overflow-hidden lg:overflow-visible rounded-[23px] lg:[clip-path:inset(0_-9999px_0_0)] transition-all duration-500"
        >
          {reviews.map((review, index) => {
            const isActive = index === currentReviewIndex;
            const isBehindOne =
              index === (currentReviewIndex + 1) % reviews.length;
            const isBehindTwo =
              index === (currentReviewIndex + 2) % reviews.length;

            let zIndex = 0;

            if (isActive) {
              zIndex = 20;
            } else if (isBehindOne) {
              zIndex = 15;
            } else if (isBehindTwo) {
              zIndex = 10;
            } else {
              zIndex = 5;
            }
            return (
              <motion.div
                key={review.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                initial={{
                  opacity: 0,
                  x: isMediumUp ? 0 : 0,
                  y: isMediumUp ? 0 : 0,
                }}
                animate={
                  reviewsImageRefInView && {
                    opacity: isActive ? 1 : 1.2,
                    scale: isActive ? 1 : 1,
                    rotate: isActive
                      ? 0
                      : isBehindOne
                      ? 5
                      : isBehindTwo
                      ? 8
                      : 0,
                    // y: isActive ? 0 : isBehindOne ? 8 : isBehindTwo ? 20 : 36,
                    x: isMediumUp
                      ? isActive
                        ? 0
                        : isBehindOne
                        ? 8
                        : isBehindTwo
                        ? 8
                        : 0
                      : 0,
                    y: !isMediumUp
                      ? isActive
                        ? 0
                        : isBehindOne
                        ? 8
                        : isBehindTwo
                        ? 8
                        : 0
                      : 0,
                    zIndex: zIndex,
                  }
                }
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                  transformOrigin: "bottom center",
                  backgroundImage: "url('/images/review_card_bg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className={`absolute top-0 left-0 right-0 w-full bg-[#1F1D1D] rounded-[25.27px] transform-gpu transition-all duration-500 origin-bottom-center border-r border-gray-400 ${
                  !isActive && "hidden sm:block "
                } ${
                  isBehindOne
                    ? "-top-[20px]! left-[-16px] border border-gray-400"
                    : ""
                } ${
                  isBehindTwo
                    ? "-top-[24px]! left-[-16px] border border-gray-400"
                    : ""
                }`}
              >
                <div className="grid grid-cols-3 w-full gap-2 items-stretch border-y-2 border-gray-500 rounded-[25.71px]">
                  {/*Left Side*/}
                  <motion.div
                    ref={reviewsImageRef}
                    initial={{
                      opacity: 0,
                      x: isMediumUp ? -80 : 0,
                      y: isMediumUp ? 0 : -80,
                    }}
                    animate={
                      reviewsImageRefInView
                        ? { opacity: 1, x: 0, y: 0 }
                        : {
                            opacity: 0,
                            x: isMediumUp ? -80 : 0,
                            y: isMediumUp ? 0 : -80,
                          }
                    }
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="col-span-1 h-full border border-gray-400 rounded-l-[25px] rounded-r-2xl overflow-hidden"
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-l-[25px]">
                      <Image
                        src={review.image}
                        alt={review.companyName}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </motion.div>

                  {/*Right Side*/}
                  <motion.div
                    ref={reviewsImageRef}
                    initial={{
                      opacity: 0,
                      x: isMediumUp ? 80 : 0,
                      y: isMediumUp ? 0 : 80,
                    }}
                    animate={
                      reviewsImageRefInView
                        ? { opacity: 1, x: 0, y: 0 }
                        : {
                            opacity: 0,
                            x: isMediumUp ? 80 : 0,
                            y: isMediumUp ? 0 : 80,
                          }
                    }
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="col-span-2 flex flex-col justify-center p-4 md:p-11 gap-6"
                  >
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src={review.companyLogo}
                        alt={review.companyName}
                        width={129.28}
                        height={36}
                        className="h-9 w-32 md:h-[50px] md:w-[200px] object-contain"
                      />
                      <h1 className="text-white text-lg md:text-3xl  font-semibold">
                        {review.companyName !== "LeadLyft"}
                      </h1>
                    </div>

                    <p className="text-white text-base lg:text-lg mb-4 sm:mb-6 text-wrap">
                      {review.quote}
                    </p>

                    <div>
                      <span className="text-white text-sm sm:text-base md:text-lg font-medium">
                        {review.founderName},
                      </span>
                      <span className="text-white text-xs sm:text-sm md:text-base block xl:pb-[20px]">
                        CEO of {review.companyName}
                      </span>
                    </div>

                    {isActive && (
                      <div className="flex mt-4 sm:mt-6 gap-3 sm:gap-4">
                        <div
                          className="rounded-full w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] bg-blue-300 flex items-center justify-center border-2 border-white cursor-pointer"
                          onClick={handlePrev}
                        >
                          <Image
                            src="/icons/Vector 3.svg"
                            alt="Previous"
                            width={25}
                            height={25}
                            className="w-4 h-4 sm:w-5 sm:h-5 transform rotate-180"
                          />
                        </div>
                        <div
                          className="rounded-full w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] bg-blue-300 flex items-center justify-center border-2 border-white cursor-pointer"
                          onClick={handleNext}
                        >
                          <Image
                            src="/icons/Vector 3.svg"
                            alt="Next"
                            width={25}
                            height={25}
                            className="w-[17px] h-[17px] sm:w-[25px] sm:h-[25px]"
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Review;
