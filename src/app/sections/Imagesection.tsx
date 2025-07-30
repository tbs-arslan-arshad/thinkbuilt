import { Images } from "../constants/index";
import Image from "next/image";
import { FEATURES } from "../constants/index";

const Imagesection = () => {
  return (
    <section className="bg-[#0E0805] ">
      <div className="flex flex-col items-center gap-4 py-[50px]  justify-center mx-4">
        {/* First row - works perfectly */}
        <div className="grid xl:grid-cols-[820px_441px] gap-4 items-center justify-center ">
          <Image
            src={Images[0].src}
            alt={Images[0].alt}
            width={820}
            height={409}
            className="flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
    hover:scale-[1.03]
    hover:shadow-lg
    hover:-translate-y-2
    transform-gpu
    will-change-transform
    cursor-pointer"
          />

          <div className="flex flex-col bg-[#AAE3FE] p-4 rounded-3xl  sm:h-[409] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
    hover:scale-[1.03]
    hover:shadow-lg
    hover:-translate-y-2
    transform-gpu
    will-change-transform
    cursor-pointer">
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
          <div className="w-full xl:w-[600px] flex justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
    hover:scale-[1.03]
    hover:shadow-lg
    hover:-translate-y-2
    transform-gpu
    will-change-transform
    cursor-pointer">
            <Image
              src={Images[2].src}
              alt={Images[2].alt}
              width={600}
              height={409}
            />
          </div>
          <div className=" xl:w-[662px] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
    hover:scale-[1.03]
    hover:shadow-lg
    hover:-translate-y-2
    transform-gpu
    will-change-transform
    cursor-pointer">
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
