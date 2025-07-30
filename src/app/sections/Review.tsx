import Image from "next/image";

const Review = () => {
  return (
    <section className="flex flex-col min-h-screen bg-[#0E0805] items-center justify-center  xl:px-8">
      
      <h1 className="text-white text-md sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-12 mt-[20px]">
        What Founders Say After Working With <br />
        <span className="flex items-center justify-center mt-2 sm:mt-3">
          <span className="text-[#1D9ED9] mr-1">{"{"}</span>
          ThinkBuilt
          <span className="text-[#1D9ED9] ml-1">{"}"}</span>
        </span>
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-0 gap-2  w-full ">
        <div className="relative w-full max-w-[300px] sm:max-w-[325px] xl:max-w-[418px] aspect-[418/473] ">
          <Image
            src="/Link.png"
            alt="Link"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 300px, (max-width: 768px) 325px, 418px"
            priority={false} // Set to true if this is above the fold
            quality={85} // Adjust quality for optimization (default is 75)
          />
        </div>



<div className="relative max-w-[300px] sm:max-w-[480px] md:max-w-[600px] transition-all duration-500 hover-animation">
  {/* Decorative divs BEHIND the card (z-10) */}
  <div className="hidden sm:block w-[300px] sm:w-[338px] h-[280px] xl:h-[380px] rounded-4xl bg-gray-800 border border-white absolute top-12 -right-5 transform rotate-[12.49deg] scale-x-[-1] z-10"></div>
  <div className="hidden sm:block w-[300px] sm:w-[338px] h-[320] xl:h-[409px] rounded-4xl bg-gray-800 border border-white absolute top-5 -right-2 transform rotate-[7.29deg] scale-x-[-1] z-10"></div>
  

  {/* Main card IN FRONT (z-20) */}
  <div className="relative flex flex-col bg-gray-700 p-6 sm:p-8 xl:p-10 rounded-l-4xl lg:rounded-l-lg rounded-r-4xl  h-[370px] xl:h-[473px] border border-white z-20">
    
    
    {/* Card content remains unchanged */}
    <div className="flex items-center   mb-4 sm:mb-6 gap-2 xl:mt-[20px] ">

      <Image src="/Mark.png" alt="Mark Logo" width={90} height={90} className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]" />

      <h1 className="text-white text-3xl sm:text-5xl font-semibold">MarketSavy</h1>

    </div>



     <p className="text-white text-sm sm:text-md md:text-lg lg:text-xl mb-4 sm:mb-6 text-wrap">
            Basit didn&apos;t just write code --- he <em>thought</em> like a
            co-founder. Leadlyft wouldn&apos;t be where it is without his.
          </p>
    <div>
      <span className="text-white text-sm sm:text-base md:text-lg font-medium">Jacob R.,</span>
      <span className="text-white text-xs sm:text-sm md:text-base block xl:pb-[20px]">CEO of LeadLyft</span>
    </div>
    <div className="flex mt-4 sm:mt-6 gap-3 sm:gap-4">
      <Image src="/Group 2.png" alt="Icons" width={60} height={60} className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]" />
      <div className="rounded-full w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] bg-blue-300 flex items-center justify-center border-2 border-white">
        <Image src="/Vector 3.svg" alt="Icon" width={25} height={25} className="w-[17px] h-[17px] sm:w-[25px] sm:h-[25px]" />
      </div>
    </div>
  </div>
</div>
      </div>
      
    </section>
  );
};

export default Review;
