import Image from "next/image";
import { statsData } from "../constants";

const Founders = () => {
  return (
    <section className="  flex flex-col items-center justify-center">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-2 pt-2">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center justify-center rounded-full bg-[rgba(255,255,255,0.10)]  w-[170px] h-[170px] text-white mx-2">
            <h1 className="text-2xl xl:text-4xl">{stat.value}</h1>
            <span className="text-md">{stat.label}</span>
          </div>
        ))}
      </div>

      <h1 className="text-white text-2xl sm:text-4xl mt-[50px] lg:mt-[150px]  h-[100] flex flex-col items-center justify-center">
        Why Non-Tech Founders Choose
        <br />
        <span className="flex items-center justify-center mt-[10px]">
          <span className="text-[#1D9ED9]">&#123;</span>ThinkBuilt
          <span className="text-[#1D9ED9]">&#125;</span>
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center mt-[20px]">
        <div className="text-white flex flex-col items-center xl:w-[473] h-[150] xl:h-[285]">
          <Image
            src="/Border.png"
            alt="Border"
            width={60}
            height={60}
            className=" "
          />
          <Image
            src="/display 1.png"
            alt="Display"
            width={42}
            height={42}
            className="mt-[-50px] mb-[20px]"
          />
          <h1>Coding Therapist</h1>
          <span className="w-[314] h-[40] flex justify-center">
            A &quot;Coding Therapist&ldquo; approach — human, honest guidance
          </span>
        </div>

        <div className="text-white flex flex-col items-center xl:w-[473] h-[150] xl:h-[285]">
          <Image
            src="/Border.png"
            alt="Border"
            width={60}
            height={60}
            className=" "
          />
          <Image
            src="/SVG.png"
            alt="svg"
            width={42}
            height={42}
            className="mt-[-50px] mb-[20px]"
          />
          <h1>Trusted by founders</h1>
          <span className="w-[314] h-[40] flex justify-center">
            Trusted by founders behind global 7-figure platforms
          </span>
        </div>

        <div className="text-white flex flex-col items-center xl:w-[473] h-[150] xl:h-[285]">
          <Image
            src="/Border.png"
            alt="Border"
            width={60}
            height={60}
            className=" "
          />
          <Image
            src="/SVG 1.png"
            alt="svg"
            width={42}
            height={42}
            className="mt-[-50px] mb-[20px]"
          />
          <h1>Product success,</h1>
          <span className="w-[314] h-[40] flex justify-center">
            Real product success, not theory
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center  gap-2 mb-[20px]">
        <div className="text-black text-md xl:text-lg 2xl:text-xl bg-[#B4F8BC] flex gap-1 items-center justify-center rounded-full py-2 px-2 ">
          <Image
            src="/SVG 2.png"
            alt="Vector"
            width={25}
            height={25}
            className=""
          />
          Continuous Innovation
        </div>

        <div className="text-black text-md xl:text-lg 2xl:text-xl bg-[#CBDEFD] flex gap-1 items-center justify-center rounded-full py-2 px-2 mt-[10px] lg:mt-[0px]">
          <Image
            src="/SVG 3.png"
            alt="Vector"
            width={25}
            height={25}
            className=""
          />
          Dedicated Support
        </div>

        <div className="text-black text-md xl:text-lg 2xl:text-xl bg-[#FFD3FA] flex gap-1 items-center justify-center rounded-full py-2 px-2 mt-[10px] lg:mt-[0px]">
          <Image
            src="/SVG 5.png"
            alt="Vector"
            width={25}
            height={25}
            className=""
          />
          Positive Client Experiences
        </div>

        <div className="text-black text-md xl:text-lg 2xl:text-xl bg-[#AAE3FE] flex gap-1 items-center justify-center rounded-full py-2 px- mt-[10px] lg:mt-[0px] ">
          <Image
            src="/SVG 4.png"
            alt="Vector"
            width={25}
            height={25}
            className=""
          />
          Commitment to Excellence
        </div>
      </div>
    </section>
  );
};

export default Founders;
