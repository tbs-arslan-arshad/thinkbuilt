import Image from "next/image";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Trusted from "./sections/Trusted";
import Imagesection from "./sections/Imagesection";
import { footerData } from "./constants/index";
import Village from "./sections/Village";
import Divsection from "./sections/Divsection";
import Founders from "./sections/Founders";

export default function Home() {
  return (
    <>
      <div
        className=" z-50"
        style={{
          backgroundImage: " url('/section.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <Navbar />
        <Hero />
      </div>
      <Trusted />
      <Imagesection />
      <Village />
      <Divsection />
      <div
        className=" z-50"
        style={{
          backgroundImage: " url('/Bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <Founders />
      </div>
      

      {/* Sixth Section */}
      <section className="flex flex-col min-h-screen bg-[#0E0805] items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-12">
        What Founders Say After Working With <br />
        <span className="flex items-center justify-center mt-2 sm:mt-3">
          <span className="text-[#1D9ED9] mr-1">{'{'}</span>
          ThinkBuilt
          <span className="text-[#1D9ED9] ml-1">{'}'}</span>
        </span>
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-0 gap-2  w-full max-w-6xl">
       <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[418px] aspect-[418/473]">
  <Image
    src="/Link.png"
    alt="Link"
    fill
    className="object-contain"
    sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, 418px"
    priority={false} // Set to true if this is above the fold
    quality={85} // Adjust quality for optimization (default is 75)
  />
</div>
        <div className="flex flex-col w-full max-w-[600px] bg-gray-700 p-6 sm:p-8 lg:p-10 rounded-lg h-[473]">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 mt-4">
            MarketSavy
          </h2>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6">
            Basit didn't just write code --- he *thought* like a co-founder.
            Leadlyft wouldn't be where it is without his.
          </p>
          <span className="text-white text-sm sm:text-base md:text-lg font-medium">
            Jacob R.,
          </span>
          <span className="text-white text-xs sm:text-sm md:text-base">
            CEO of LeadLyft
          </span>
          <div className="flex mt-4 sm:mt-6 gap-3 sm:gap-4">
            <div className="rounded-full w-8 h-8 sm:w-10 sm:h-10 bg-blue-500"></div>
            <div className="rounded-full w-8 h-8 sm:w-10 sm:h-10 bg-blue-300"></div>
          </div>
        </div>
      </div>
    </section>

      {/* seventh section */}
      <section className="bg-[#121010] px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 min-h-[400px] lg:min-h-[600px]">
            <div className="flex flex-col text-white w-full max-w-[700px] pt-6 sm:pt-8 lg:pt-12">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold w-full max-w-[525px] leading-tight">
                Before You Build Anything,
                <br />
                <span>
                  Talk to Someone
                  <span className="text-[#1D9ED9]"> {"{"}</span>
                  Who’s Built It
                  <span className="text-[#1D9ED9]">{"}"}</span>.
                </span>
              </h1>
              <p className="mt-4 text-sm sm:text-base lg:text-lg w-full max-w-[586px]">
                In just one session, I’ll help you understand what to build, who
                to hire, and how to start — without wasting your time.
              </p>
              <div className="flex mt-6 sm:mt-8 lg:mt-10 bg-[#1D9ED9] rounded-full border border-[#1D9ED9] py-4 sm:py-3 px-4 w-full max-w-[307px] items-center justify-center text-md  lg:text-lg font-medium hover:bg-[#1678a1] transition-colors">
                Book Your 1-on-1 Clarity Session
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

      <footer className="bg-[#0E0805] text-white min-h-[400px] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="flex flex-col items-center justify-start mt-6 sm:mt-8 md:mt-10">
              <Image
                src="/Group.png"
                alt="ThinkBuilt Solutions Logo"
                width={199}
                height={45}
                className="w-[150px] sm:w-[180px] md:w-[199px]"
              />
              <p className="w-full max-w-[277px] mt-4 text-center text-sm sm:text-base">
                We work with startups in SaaS, fintech, healthtech, AI, and
                Web3.
              </p>
              <Image
                src="/Social.png"
                alt="Social"
                width={150}
                height={150}
                className="w-[100px] sm:w-[120px] md:w-[150px] mt-6"
              />
            </div>

            {footerData.map((section, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-start mt-6 sm:mt-8 md:mt-10">
                <ul className="mt-4 flex flex-col items-center gap-2.5">
                  <li className="text-xl sm:text-2xl mb-2.5 font-semibold">
                    {section.title}
                  </li>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.href}
                        className="hover:underline text-sm sm:text-base">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                {section.title === "Contact" && (
                  <div className="mt-6 w-full max-w-[280px]">
                    <h1 className="text-center text-sm sm:text-base font-semibold">
                      News Letter
                    </h1>
                    <div className="flex gap-3 h-[27px] mt-4 justify-center">
                      <input
                        type="email"
                        placeholder="Enter your email Address"
                        className="rounded-sm text-white w-[160px] sm:w-[180px] md:w-[200px] bg-gray-800 px-2 text-sm"
                      />
                      <Image
                        src="/Mail icon.png"
                        alt="Subscribe"
                        width={27}
                        height={19}
                        className="w-[20px] sm:w-[27px]"
                      />
                    </div>
                    <div className="h-[1.193px] w-full max-w-[280px] border-t mt-4 mx-auto"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10">
            <p className="text-sm sm:text-base">
              ©ThinkBuiltSolutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
