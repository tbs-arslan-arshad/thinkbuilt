
import { cardData } from "../../../constants";
import {Card} from "../../../components/ui/Card";

const Divsection = () => {
  return (
    <section className="flex flex-col  bg-[#0E0805] items-center justify-center ">
      <h1 className="text-white text-2xl sm:text-4xl mt-[20px]">
        What We Help You <span className="text-[#1D9ED9]">&#123;</span>Build
        <span className="text-[#1D9ED9]">&#125;</span>
      </h1>

      <p className="mt-[20.62] text-white  text-xs  sm:text-xl  flex flex-col justify-center  md:text-md lg:text-lg px-3 text-center">
        From strategy to execution — get the technical clarity and engineering
        <br className="hidden sm:inline"/>
          support you need.
        
      </p>

      <div className="grid lg:grid-cols-2 gap-6 my-[40px] mx-4">
  {cardData.map((card, index) => (
    <div 
      key={card.id}
      className="hover-animation"
      style={{
        transitionDelay: `${index * 75}ms`  // Staggered delay
      }}
    >
      <Card {...card} />
    </div>
  ))}
</div>
    </section>
  );
};

export default Divsection;
