import Image from "next/image"

const Review = () => {
  return (
      <section className="flex flex-col min-h-screen bg-[#0E0805] items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-md sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-12 mt-[20px]">
          What Founders Say After Working With <br />
          <span className="flex items-center justify-center mt-2 sm:mt-3">
            <span className="text-[#1D9ED9] mr-1">{"{"}</span>
            ThinkBuilt
            <span className="text-[#1D9ED9] ml-1">{"}"}</span>
          </span>
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-0 gap-2  w-full max-w-6xl">
          <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[418px] aspect-[418/473]">
            <Image
              src="/Link.png"
              alt="Link"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, 418px"
              priority={false} // Set to true if this is above the fold
              quality={85} // Adjust quality for optimization (default is 75)
            />
          </div>
          <div className="flex flex-col w-full max-w-[600px] bg-gray-700 p-6 sm:p-8 lg:p-10 rounded-lg h-[473]">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 mt-[40px]">
              MarketSavy
            </h2>
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6">
              Basit didn&apos;t just write code --- he <em>thought</em> like a
              co-founder. Leadlyft wouldn&apos;t be where it is without his.
            </p>
            <span className="text-white text-sm sm:text-base md:text-lg font-medium">
              Jacob R.,
            </span>
            <span className="text-white text-xs sm:text-sm md:text-base">
              CEO of LeadLyft
            </span>
            <div className="flex mt-4 sm:mt-6 gap-3 sm:gap-4">
              <div className="rounded-full w-8 h-8 sm:w-10 sm:h-10 bg-blue-500"></div>
              <div className="rounded-full w-8 h-8 sm:w-10 sm:h-10 bg-blue-300"></div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Review