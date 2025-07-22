import {PEOPLE_URL} from "../constants/index"
import Image from "next/image";

const Trusted = () => {
  return (
     <section className="flex flex-col items-center  bg-[#0E0805] pt-[150px]">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Trusted by Founders Building
              <br />
              <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-[21px] flex  justify-center">
                <span className="text-[#1D9ED9]">&#123;</span>Real Products
                <span className="text-[#1D9ED9]">&#125;</span>
              </span>
            </h1>
            <div className=" mb-[20px] items-center justify-center">
              <p className="text-white text-sm md:text-md lg:text-xl  ">
                From solo founders to global brands, we've helped turn
                <br />
                <span className="flex justify-center">
                  ideas into platforms that scale.
                </span>
              </p>
            </div>
            <div className="border-t border-gray-700 w-full max-w-[75%] 2xl:max-w-[80%] mx-auto my-6 "></div>

      {/* Grid Display */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 w-full max-w-[75%] 2xl:max-w-[80%] mx-auto items-center justify-center">
        {PEOPLE_URL.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-4 sm:p-5 lg:p-6 flex items-center justify-center"
          >
            <Image
              src={item}
              alt={`grid-image-${index}`}
              width={130}
              height={24.327}
              className=" max-w-[80px] sm:max-w-[100px] md:max-w-[130px]  object-contain w-[130] h-[24.327]"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1536px) 25vw, 20vw"
            />
          </div>
        ))}
      </div>
      <div className="border-t border-gray-700 w-full max-w-[75%] 2xl:max-w-[80%] mx-auto my-6"></div>
            <h1 className="mt-[60px] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300">
              You’ve Got the Vision.   
            </h1>
            <br />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-400">
              We Help You Bring It To Life —{" "}
              <span className="text-[#1D9ED9]">&#123;</span>
              <span className="text-white">The Right Way</span>
              <span className="text-[#1D9ED9]">&#125;</span>.
            </span>
            <p className="text-gray-200 mt-[20.75]    justify-center items-center text-sm md:text-md lg:text-lg">
              Whether it's a SaaS, web app, or marketplace, we guide non-tech
              founders
              <br />
              <span className="flex justify-center items-center mb-[40px] 2xl:mb-[0px]"> from idea to execution.</span>
            </p>      
          </section>
  )
}

export default Trusted