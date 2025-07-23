import Image from "next/image";
import { tagItems } from "../constants";

const Village = () => {
  return (
    <section className="flex bg-[#0E0805] items-center justify-center relative">
      <div className="lg:flex  2xl:mx-[207.17] gap-[50px] lg:gap-[130.31] items-center justify-center px-2 ">
        <Image
          src="/Image Wrapper.png"
          alt="Basit"
          width={417}
          height={589}
          className=" "
        />

        <div className="   h-[589px] mt-[120px] ">
          <h1 className=" max-h-[109] text-white text-2xl sm:text-3xl lg:text-4xl font-normal leading-[150%]">
            From a Small Village to <br />
            <span className="text-[#1D9ED9]">&#123;</span>Global Platforms
            <span className="text-[#1D9ED9]">&#125;</span>.
          </h1>
          <p className="mt-[22.13] text-sm sm:text-lg lg:text-xl text-white font-normal  max-h-[89] ">
            I’m Basit — developer, tutor, and founder of
            <br />
            ThinkBuilt Solutions. From Jhandeeryein, Pakistan
            <br />
            to 7-figure platforms.
          </p>

          <div className="my-[20px] grid grid-cols-2 items-center gap-1">
            {tagItems.map((item, index) => (
              <div
                key={index}
                className="text-white p-4 rounded-full bg-gray-900 mb-4 flex items-center justify-center  text-center w-fit  gap-2 ">
                {/* Using next/image for optimized loading */}
                <Image
                  src={item.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span className="text-xs sm:text-md xl:text-lg">{item.text}</span>
              </div>
            ))}
          </div>

          <button className="mt-[10px] bg-[#1D9ED9] text-white px-4 text-sm sm:text-lg lg:text-xl border-x border-y py-2 rounded-full hover:bg-[#1D9ED9] transition-colors">
            Read My Full Story
          </button>
        </div>
      </div>
    </section>
  );
};
export default Village;
