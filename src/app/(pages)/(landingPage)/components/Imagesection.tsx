import { Images } from "../../../constants/index";
import Image from "next/image";
import { FEATURES } from "../../../constants/index";
import { tags } from "../../../constants/index";

const Imagesection = () => {
  return (
    <section className="bg-[#0E0805] ">
      <div className="flex flex-col items-center gap-4 py-[50px]  justify-center mx-4">
        {/* First row - works perfectly */}
        <div className="grid 2xl:grid-cols-[820px_441px] xl:grid-cols-[800px_441px] gap-4 items-center justify-center ">
          <Image
            src={Images[0].src}
            alt={Images[0].alt}
            width={820}
            height={409}
            className="flex items-center justify-center transition-all duration-500 hover-animation"
          />

          <div className="flex flex-col bg-[#AAE3FE] p-4 rounded-3xl  2xl:h-[409] transition-all duration-500 hover-animation">
            {FEATURES.map((stat, index) => (
              <div key={index} className="">
                <h1 className="text-6xl sm:text-8xl mt-[10px]">{stat.title}</h1>
                <span className="font-bold">{stat.heading}</span>
                <p className="text-md mt-[120px] sm:mt-[220px]">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Second row - fixed responsive behavior */}
        <div className="flex flex-col xl:flex-row gap-4 items-center justify-center">


          <div className="w-full xl:w-[600px] sm:h-[409px] relative flex justify-center items-center transition-all duration-500 hover-animation">
         
          <div className=" xl:w-[662px]  transition-all duration-500 hover-animation sm:hidden">
            <Image
              src={Images[2].src}
              alt={Images[2].alt}
              width={662}
              height={409}
            />
          </div>
          
           
           
           
            {/* Background Image - fills container */}
            <div className="absolute inset-0 w-full h-full hidden sm:block">
              <Image
                src="/images/Background 8.png"
                alt="Background Image"
                width={660}
                height={409}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Tag Circle - centered over image */}
            <div className="relative z-10 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] rounded-full border-2 border-white overflow-hidden hidden sm:block">
              {tags.map((tag) => (
                <div
                  key={tag.id}
                  className={`flex gap-1 items-center ${tag.bgColor} rounded-full py-2 px-5 ${tag.rotation} ${tag.zIndex} absolute ${tag.position} transform -translate-x-1/2 hover:scale-105 transition-all`}>
                  <Image
                    src={tag.icon}
                    alt={tag.text}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="text-black text-base font-medium whitespace-nowrap">
                    {tag.text}
                  </span>
                </div>
              ))}
            </div>
          
          
          </div>


          <div className=" 2xl:w-[662px]  sm:h-[409px] transition-all duration-500 hover-animation">
            <Image
              src={Images[3].src}
              alt={Images[3].alt}
              width={662}
              height={409}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Imagesection;
