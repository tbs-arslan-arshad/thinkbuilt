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
            <div className="flex items-center w-[252] justify-center mb-4 sm:mb-6 gap-2 mt-[20px]">
            <Image
              src="/Mark.png"
              alt="Mark Logo"
              width={80}
              height={80}
              />   
            <h2 className="text-white text-4xl  font-semibold  flex items-center justify-center">
                         MarketSavy
            </h2>
            </div>
            <p className="text-white text-sm sm:text-md md:text-lg lg:text-xl mb-4 sm:mb-6">
              Basit didn&apos;t just write code --- he <em>thought</em> like a
              co-founder. Leadlyft wouldn&apos;t be where it is without his.
            </p>
            <span className="text-white text-sm sm:text-base md:text-lg font-medium">
              Jacob R.,
            </span>
            <span className="text-white text-xs sm:text-sm md:text-base pb-[20]">
              CEO of LeadLyft
            </span>
            <div className="flex pt-4 sm:mt-6 gap-3 sm:gap-4">
             <Image
             src="/Group 2.png"
             alt="Icons"
             width={60}
             height={60}
             />
             <div className="rounded-full  w-15 h-15 bg-blue-300 flex items-center justify-center border-2 border-white">
              <Image
             src="/Vector 3.svg"
             alt="Icons"
             width={25}
             height={25}
             className="flex items-center justify-center"
             /></div>
             
            </div>
          </div>
        </div>


        
      </section>
  )
}

export default Review