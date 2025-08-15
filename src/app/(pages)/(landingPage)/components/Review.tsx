"use client";
import { useInView, motion } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

const reviews = [
  {
    id: 1,
    founderName: "Jacob R.",
    companyName: "LeadLyft",
    companyLogo: "/images/mark_.png",
    quote:
      "Basit didn't just write code --- he thought like a co-founder. Leadlyft wouldn't be where it is without his.",
    image: "/images/review_3.png",
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
  const reviewsImageRef = useRef(null);
  const reviewsImageRefInView = useInView(reviewsImageRef, {
    once: true,
    amount: 0.4,
  });

  const reviewsRef = useRef(null);
  const reviewsRefInView = useInView(reviewsRef, { once: true, amount: 0.4 });
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

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
      ref={reviewsRef}
      className="flex flex-col min-h-screen bg-[#0E0805] items-center justify-center px-[154px]"
    >
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={
          reviewsRefInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -80 }
        }
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <h1 className="text-white text-md sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-12 mt-[20px]">
          What Founders Say After Working With <br />
          <span className="flex items-center justify-center mt-2 sm:mt-3">
            <span className="text-[#1D9ED9] mr-1">{"{"}</span>
            ThinkBuilt
            <span className="text-[#1D9ED9] ml-1">{"}"}</span>
          </span>
        </h1>
      </motion.div>

      <div className="relative flex flex-row justify-center items-center w-full h-[473px] border-2 border-gray-500 rounded-[25.71px]">
        {/* Review Image Section - First Column */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={
            reviewsImageRefInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: -80 }
          }
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
          className="flex items-center justify-center"
        >
          <Image
            src={reviews[currentReviewIndex].image}
            alt={reviews[currentReviewIndex].companyName}
            className="h-[468px] w-[418px] object-cover rounded-r-xl rounded-l-[23px] border-r border-gray-300 bg-white"
            width={418}
            height={468}
            // priority={false}
            // quality={85}
          />
        </motion.div>

        {/* Review Cards Section - Second Column */}
        <div
          ref={reviewsImageRef}
          className="relative w-full h-full [clip-path:inset(0_-9999px_0_0)]"
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
                initial={{ opacity: 0, x: 100 }}
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
                    x: isActive ? 0 : isBehindOne ? 8 : isBehindTwo ? 8 : 100,
                    zIndex: zIndex,
                  }
                }
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                  transformOrigin: "bottom center",
                  backgroundImage: "url('/images/review_card_bg.png')", // Add your background image
                  backgroundSize: "cover", // Adjust as needed
                  backgroundPosition: "center", // Adjust as needed
                }}
                className={`absolute top-0 left-0 w-full h-full bg-[#1F1D1D] p-6 sm:p-8 xl:p-10 rounded-r-[25.21px] transform-gpu transition-all duration-500 origin-bottom-center border-r border-gray-400 ${
                  !isActive && "hidden sm:block "
                } ${
                  isBehindOne
                    ? "-top-[20px]! left-[-26px] border border-gray-400"
                    : ""
                } ${
                  isBehindTwo
                    ? "-top-[24px]! left-[-30px] border border-gray-400"
                    : ""
                }`}
              >
                <div
                  className={`flex items-center mb-4 sm:mb-6 gap-2 xl:mt-[20px] transition-all duration-500`}
                >
                  <Image
                    src={review.companyLogo}
                    alt={`${review.companyName} Logo`}
                    width={90}
                    height={90}
                    className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]"
                  />
                  <h1 className="text-white text-3xl sm:text-5xl font-semibold">
                    {review.companyName}
                  </h1>
                </div>

                <p className="text-white text-sm sm:text-md md:text-lg lg:text-xl mb-4 sm:mb-6 text-wrap">
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
                        className="w-[17px] h-[17px] sm:w-[25px] sm:h-[25px] transform rotate-180"
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Review;
