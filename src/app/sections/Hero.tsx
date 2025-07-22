import Image from "next/image";
import Button from "../components/Button";
const Hero = () => {
  return (
    <section
      className="flex flex-col items-center  min-h-screen relative "
      >
      <span className="text-white text-xl md:text-2xl mt-[80] sm:mt-[100] 2xl:mt-[120px]">
        <span className="text-[#1D9ED9]">&#123;</span> Think Built Solution{" "}
        <span className="text-[#1D9ED9]">&#125;</span>
      </span>

      <h1 className="text-white text-3xl sm:text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl  mt-[25.82] px-4 md:px-8 lg:px-12">
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
            className="justify-self-end mr-8 mt-2  2xl:w-[400] xl:w-[290] md:w-[210] sm:w-[150] w-[100] block "
          />
        </span>
      </h1>

      <p className="text-white text-sm sm:text-md lg:text-xl xl:text-2xl  text-center mt-[33.82]">
        Helping non-tech founders turn ideas into digital platforms — with
        <br />
        confidence and the right direction.
      </p>
      <div className=" text-white rounded-full mt-[47px] bg-[#1D9ED9] text-xl lg:text-2xl font-Satoshi">
        <Button
          type="button"
          title="Book Your Clarity Session"
          variant="xl:py-4 py-2 xl:px-8 px-4"
        />
      </div>
    </section>
  );
};

export default Hero;
