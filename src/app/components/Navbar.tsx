import { NAV_LINKS } from "../constants/index";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className=" py-[10px] bg-black  fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between relative items-center xl:px-[10%] px-[5%] mt-[10px]">
        <Link href="/">
          <Image src="/Group.png" alt="logo" width={195.63} height={44} />
        </Link>

        <ul className="hidden h-full gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="relative group">
              
              <Link
                href={link.href}
                className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:text-blue-400">
                {link.label}
              </Link>
              <span className="absolute  left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full mt-[30px]"></span>
            </li>
          ))}
        </ul>

        <div className="lg:flex text-black rounded-full  bg-white hidden ">
          <Button type="button" title="Get Started" variant="py-2 px-4" />
        </div>
        <Image 
        src="/hamburger.png"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden bg-white"
      />
        
      </div>
      <div className=" border-t border-white  xl:ml-[10%] xl:mr-[10%] ml-[5%] mr-[5%] my-[20px]"></div>
    </nav>
  );
};

export default Navbar;
