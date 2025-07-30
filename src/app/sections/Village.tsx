import Image from "next/image";
import { tagItems } from "../constants";
import Button from "../components/Button";

const Village = () => {
  return (
    <section className="flex bg-[#0E0805]  justify-center ">
      <div className="lg:flex  2xl:mx-[207.17] gap-[50px] lg:gap-[80px]  xl:gap-[130.31] sm:px-2 py-[60] ">
        <div className="flex justify-center">
          <Image
            src="/Image Wrapper.png"
            alt="Basit"
            width={417}
            height={589}
            className=" max-w-[200px] max-h-[300px] sm:max-w-[250px] sm:max-h-[350px] md:max-w-[300px] md:max-h-[425px] lg:max-w-[350px] lg:max-h-[500px] xl:max-w-[417px] xl:max-h-[589px] "
          />
        </div>

        <div className="  sm:h-[500px] lg:h-[540px]  text-center lg:text-left justify-center items-center lg:items-start flex flex-col">

          <h1 className="  text-white text-xl sm:text-3xl lg:text-4xl font-normal leading-[150%] text-center lg:text-left px-2 sm:px-0 mt-[30px]">
            From a Small Village to <br className="hidden sm:block" />
            <span className="text-[#1D9ED9]">&#123;</span>Global Platforms
            <span className="text-[#1D9ED9]">&#125;</span>.
          </h1>


          <p className="mt-[22.13] text-sm sm:text-lg lg:text-xl text-white font-normal  text-center lg:text-left ">
            I’m Basit — developer, tutor, and founder of
            <br className=""/>
            ThinkBuilt Solutions. From Jhandeeryein, Pakistan
            <br className=""/>
            to 7-figure platforms.
          </p>


          <div className="my-[20px] flex flex-wrap items-center gap-1 sm:gap-3 w-[325px] sm:w-[500px] justify-center lg:justify-start ">
            {tagItems.map((item, index) => (
              <div
                key={index}
                className="text-white p-2 sm:p-4 rounded-full bg-[#FFFFFF1A]  flex items-center justify-center text-center w-fit gap-2">
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
          </div>
          <div>
            <Button
              type="button"
              title="Read My Full Story"
              variant="py-2 px-4 mt-[10px] bg-[#1D9ED9] text-white  text-sm sm:text-lg lg:text-xl border-x border-y rounded-full transition-colors"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Village;
