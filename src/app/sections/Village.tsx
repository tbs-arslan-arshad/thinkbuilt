import Image from "next/image";
import { tagItems } from "../constants";
import Button from "../components/Button";
import { profiles } from "../constants";


const Village = () => {
  return (
    <section className="flex bg-[#0E0805]  justify-center ">
      <div className="lg:flex  2xl:mx-[207.17] gap-[50px] lg:gap-[80px]  xl:gap-[130.31] sm:px-2 py-[60] ">
        
        
       <div className="flex justify-center mt-[80px] ">
  {profiles.map((profile) => (
    <div key={profile.id} className={profile.container.className}>
      {/* Main Image */}
      <Image
        src={profile.mainImage.src}
        alt={profile.mainImage.alt}
        width={profile.mainImage.width}
        height={profile.mainImage.height}
        className={profile.mainImage.className}
      />

      {/* Overlay Image */}
      <Image
        src={profile.overlayImage.src}
        alt={profile.overlayImage.alt}
        width={profile.overlayImage.width}
        height={profile.overlayImage.height}
        className={profile.overlayImage.className}
      />

      {/* Name with Highlighted Part */}
      <h1 className={profile.name.className}>
        <span style={{ color: profile.name.highlight.color }}>
          {profile.name.highlight.text}
        </span>{" "}
        {profile.name.text.split(" ")[1]} {/* Gets "Ali" from "Basit Ali" */}
      </h1>
    </div>
  ))}
</div>

        <div className="  sm:h-[500px] lg:h-[540px]  text-center lg:text-left justify-center items-center lg:items-start flex flex-col">
          <h1 className="  text-white text-xl sm:text-3xl lg:text-4xl font-normal leading-[150%] text-center lg:text-left px-2 sm:px-0 mt-[30px]">
            From a Small Village to <br className="hidden sm:block" />
            <span className="text-[#1D9ED9]">&#123;</span>Leadlyft & Remember Well
            <span className="text-[#1D9ED9]">&#125;</span>.
          </h1>

          <p className="mt-[22.13] text-sm sm:text-lg lg:text-xl text-white font-normal  text-center lg:text-left ">
            I’m Basit — developer, tutor, and founder of
            <br className="" />
            ThinkBuilt Solutions. From Jhandeeryein, Pakistan
            <br className="" />
            to 7-figure platforms.
          </p>

          <div className="my-[20px] flex flex-wrap items-center gap-1 sm:gap-3 w-[325px] sm:w-[500px] justify-center lg:justify-start ">
            {tagItems.map((item, index) => (
              <div
                key={index}
                className="text-white p-2 sm:p-4 rounded-full bg-[#FFFFFF1A]  flex items-center justify-center text-center w-fit gap-2 transition-all duration-500 hover-animation">
                <Image
                  src={item.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span className="text-xs sm:text-md xl:text-lg">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          <div>
            <Button
              type="button"
              title="Read My Full Story"
              variant="py-2 px-4 mt-[10px] bg-[#1D9ED9] text-white  text-sm sm:text-lg lg:text-xl border-x border-y rounded-full transition-colors "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Village;
