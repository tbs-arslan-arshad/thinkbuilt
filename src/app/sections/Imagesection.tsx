import { Images } from "../constants/index";
import Image from "next/image";

const Imagesection = () => {
  return (
    <section className="bg-[#0E0805] ">
  <div className="flex flex-col items-center gap-6 pt-[50px]">
    {/* First row - works perfectly */}
    <div className="grid xl:grid-cols-[820px_441px] gap-6">
      <Image src={Images[0].src} alt={Images[0].alt} width={820} height={409} />
      <Image src={Images[1].src} alt={Images[1].alt} width={441} height={409} />
    </div>
    
    {/* Second row - fixed responsive behavior */}
    <div className="flex flex-col xl:flex-row gap-6">
      <div className="w-full xl:w-[600px]">
        <Image src={Images[2].src} alt={Images[2].alt} width={600} height={409} />
      </div>
      <div className="w-full xl:w-[662px]">
        <Image src={Images[3].src} alt={Images[3].alt} width={662} height={409} />
      </div>
    </div>
  </div>
</section>
  );
};

export default Imagesection;
