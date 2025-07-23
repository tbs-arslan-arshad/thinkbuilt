import Image from "next/image"
import { footerData } from "../constants"

const Footer = () => {
  return (
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
  )
}

export default Footer