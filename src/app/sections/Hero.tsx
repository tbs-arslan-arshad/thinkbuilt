
import Image from "next/image";
import Button from "../components/Button";


const Hero = () => {


  return (
    <section
      className="flex flex-col items-center  min-h-screen relative mt-[60]"
    >
      <span className="text-white text-xl md:text-2xl mt-[180] 2xl:mt-[220]">
        <span className="text-[#1D9ED9]">&#123;</span> Think Built Solution{" "}
        <span className="text-[#1D9ED9]">&#125;</span>
      </span>

      <h1 className="text-white text-3xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl  mt-[25.82] px-4 md:px-8 lg:px-12 items-center justify-center">
        Clarity Before&nbsp;
        <span className="inline-block">
          <span className="text-[#1D9ED9]">&#123;</span>
          Code
          <span className="text-[#1D9ED9]">&#125;</span>.
          <br />
          <Image
            src="/Vector 2.png"
            alt="icons"
            width={400}
            height={9.412}
            className="justify-self-end mr-8 mt-1 sm:mt-2  2xl:w-[300] xl:w-[220] md:w-[190] sm:w-[150] w-[95] block "
          />
        </span>
      </h1>

      <p className="text-white text-xs md:text-lg xl:text-xl   text-center mt-[25]">
        Helping non-tech founders turn ideas into digital platforms — with
        <br />
        confidence and the right direction.
      </p>
      <div className=" text-white rounded-full mt-[30px] bg-[#1D9ED9] text-xs sm:text-sm md:text-md lg-text-lg xl:text-xl 2xl:text-2xl font-Satoshi">
        <Button

          type="button"
          title="Book Your Clarity Session"
          variant=" py-2 px-3"
        />
      </div>

    </section>
  );
};

export default Hero;
