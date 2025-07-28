import { Images } from "../constants/index";
import Image from "next/image";

const Imagesection = () => {
  return (
    <section className="bg-[#0E0805] ">
      <div className="flex flex-col items-center gap-4 py-[50px] ">
        {/* First row - works perfectly */}
        <div className="grid xl:grid-cols-[820px_441px] gap-4 items-center justify-center">
          <Image
            src={Images[0].src}
            alt={Images[0].alt}
            width={820}
            height={409}
            className="flex items-center justify-center"
          />
          <div className="flex flex-col  bg-[#AAE3FE] p-4 rounded-3xl maw-w-[441] h-[409]">
            <h1 className="text-8xl mt-[10]">10k+</h1>
            <span className="font-bold">SATISFIED CUSTOMERS</span>
            <p className="text-md mt-[220]">
              Trusted by Industry Leaders Worldwide.
            </p>
          </div>
        </div>

        {/* Second row - fixed responsive behavior */}
        <div className="flex flex-col xl:flex-row gap-4 items-center justify-center">
          <div className="w-full xl:w-[600px] felx justify-center items-center ">
            <Image
              src={Images[2].src}
              alt={Images[2].alt}
              width={600}
              height={409}
            />
          </div>
          <div className=" xl:w-[662px] ">
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
