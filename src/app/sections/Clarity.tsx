import Image from "next/image";
import Button from "../components/Button";

const Clarity = () => {
  return (
    <section className="bg-[#121010] px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 min-h-[400px] lg:min-h-[600px]">
          <div className="flex flex-col text-white w-full max-w-[700px] pt-6 sm:pt-8 lg:pt-12">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold w-full max-w-[525px] leading-tight">
              Before You Build Anything,
              <br />
              <span>
                Talk to Someone
                <span className="text-[#1D9ED9]"> {"{"}</span>
                Who&apos;s Built It
                <span className="text-[#1D9ED9]">{"}"}</span>.
              </span>
            </h1>
            <p className="mt-4 text-sm sm:text-base lg:text-lg w-full max-w-[586px]">
              In just one session, I’ll help you understand what to build, who
              to hire, and how to start — without wasting your time.
            </p>

            <div className="  ">
              <Button
                type="button"
                title="Book Your 1-on-1 Clarity Session"
                variant="xl:py-4 py-2 xl:px-8 px-4 flex mt-6 sm:mt-8 lg:mt-10 bg-[#1D9ED9] rounded-full py-2 sm:py-3 sm:px-4 w-full max-w-[307px] items-center justify-center text-md  lg:text-lg transition-colors font-medium hover:bg-[#1678a1] border"
              />
            </div>
           
          </div>

          <Image
            src="/Image 3.png"
            alt="Clarity Session"
            width={418}
            height={436}
            className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[418px] py-4 sm:py-6 lg:py-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Clarity;
