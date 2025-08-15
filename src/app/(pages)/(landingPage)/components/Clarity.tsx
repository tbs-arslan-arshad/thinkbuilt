import Image from "next/image";
import Link from "next/link";

const Clarity = () => {
  return (
    <section className="bg-[#121010] px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 min-h-[400px] lg:min-h-[600px]">
          <div className="flex flex-col text-white w-full max-w-[700px] pt-6 sm:pt-8 lg:pt-[50.78px]">
            <h3 className="text-xl md:text-3xl lg:text-[44px] font-normal w-full lg:max-w-[525px] leading-tight text-center lg:text-left">
              Before You Build Anything,
              <br />
              <span>
                Talk to Someone
                <span className="text-[#1D9ED9]"> {"{"}</span>
                Who&apos;s Built It
                <span className="text-[#1D9ED9]">{"}"}</span>.
              </span>
            </h3>

            <p className="mt-[21px] text-sm sm:text-base lg:text-[20px] w-full lg:max-w-[586px] text-center lg:text-left leading-[150%]">
              In just one session, I’ll help you understand what to build, who
              to hire, and how to start — without wasting your time.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="/book-session" // Replace with your actual route
                className=" border border-[#FFFFFF99]
      flex items-center justify-center 
      w-full max-w-[307px] 
      mt-6 sm:mt-[30px] lg:mt-[40px] 
      px-4 sm:px-4 xl:px-5 
      py-2 sm:py-3 xl:py-3 
      bg-[#1D9ED9] hover:bg-[#1678a1] 
      text-white 
      font-medium 
      lg:text-[18px] 
      rounded-full 
      transition-colors
      focus:outline-none focus:ring-2 focus:ring-[#1D9ED9] focus:ring-opacity-50
    ">
                Book Your 1-on-1 Clarity Session
              </Link>
            </div>
          </div>

          <Image
            src="/images/Image 3.png"
            alt="Clarity Session"
            width={418}
            height={436}
            className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[418px] py-4 sm:py-6 lg:py-0
    transition-all duration-500 hover-animation"
          />
        </div>
      </div>
    </section>
  );
};

export default Clarity;
