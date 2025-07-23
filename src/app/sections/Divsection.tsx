import Image from "next/image";
import { cardData } from "../constants";

const Divsection = () => {
  return (
    <section className="flex flex-col  bg-[#0E0805] items-center justify-center ">
      <h1 className="text-white text-2xl sm:text-4xl mt-[10px]">
        What We Help You <span className="text-[#1D9ED9]">&#123;</span>Build
        <span className="text-[#1D9ED9]">&#125;</span>
      </h1>
      <p className="mt-[20.62] text-white  text-xs  sm:text-xl  flex flex-col justify-center">
        From strategy to execution — get the technical clarity and engineering
        <br />
        <span className="items-center justify-center text-center">
          support you need.
        </span>
      </p>

      <div className="grid lg:grid-cols-2 gap-6 my-[40px] mx-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`${card.bgColor} p-6 rounded-xl max:w-[613px] h-[213px]`}>
            <div className="flex bg-gray-600 justify-center rounded-xl w-[58px] py-[13px]">
              <Image src={card.icon} alt={card.alt} width={31} height={31} />
            </div>
            <h2 className="text-black text-2xl my-4">{card.title}</h2>
            <p className="text-black">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Divsection;
