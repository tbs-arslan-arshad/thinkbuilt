import Image from "next/image";
import { statsData } from "../constants";
import { featureItems } from "../constants";
import { featureCards } from "../constants";

const Founders = () => {
  return (
    <section className="  flex flex-col items-center justify-center min-h-screen">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-2 pt-2 ">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center justify-center rounded-full bg-[rgba(255,255,255,0.10)] w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] text-white mx-2 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
    hover:scale-[1.03]
    hover:shadow-lg
    hover:-translate-y-2
    transform-gpu
    will-change-transform
    cursor-pointer">
            <h1 className="text-lg sm:text-3xl xl:text-4xl">{stat.value}</h1>
            <span className="text-xs sm:text-base ">{stat.label}</span>
          </div>
        ))}
      </div>

      <h1 className="text-white text-xl sm:text-4xl mt-[50px] lg:mt-[150px]  h-[100] flex flex-col items-center justify-center">
        Why Non-Tech Founders Choose
        <br />
        <span className="flex items-center justify-center mt-[10px]">
          <span className="text-[#1D9ED9]">&#123;</span>ThinkBuilt
          <span className="text-[#1D9ED9]">&#125;</span>
        </span>
      </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center mt-[20px]">
  {featureCards.map((card) => (
    <div key={card.id} className="text-white flex flex-col items-center sm:w-[350px] h-[150px] xl:h-[285px] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
    hover:scale-[1.03]
    hover:shadow-lg
    hover:-translate-y-2
    transform-gpu
    will-change-transform
    cursor-pointer">
      <Image
        src={card.borderImage}
        alt="Border"
        width={60}
        height={60}
      />
      <Image
        src={card.iconImage}
        alt={card.iconAlt}
        width={42}
        height={42}
        className="mt-[-50px] mb-[20px]"
      />
      <h1>{card.title}</h1>
      <span className="w-[314px] h-[40px] flex justify-center text-center">
        {card.description}
      </span>
    </div>
  ))}
</div>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-2 mb-[20px] ">
  {featureItems.map((item) => (
    <div 
      key={item.id}
      className={`text-black text-sm xl:text-lg 2xl:text-xl ${item.bgColor} flex gap-1 items-center justify-center rounded-full py-2 px-2 mt-[10px] lg:mt-[0px] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
    hover:scale-[1.03]
    hover:shadow-lg
    hover:-translate-y-2
    transform-gpu
    will-change-transform
    cursor-pointer`}
    >
      <Image
        src={item.icon}
        alt="Vector"
        width={25}
        height={25}
        className="xl:w-[25px] xl:h-[25px] w-[20px] h-[20px]"
      />
      {item.text}
    </div>
  ))}
</div>
    </section>
  );
};

export default Founders;
