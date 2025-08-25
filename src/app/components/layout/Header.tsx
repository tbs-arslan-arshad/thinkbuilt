"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NAV_LINKS } from "../../constants/index";
import Image from "next/image";
import Link from "next/link";

import { Menu } from "lucide-react";

const Header = () => {
  // const handleScroll = (e: any, href: any) => {
  //   e.preventDefault();
  //   const targetId = href.replace("#", "");
  //   const element = document.getElementById(targetId);
  //   if (!element) return;

  //   const nav = document.querySelector("nav") as HTMLElement | null;
  //   const navH = nav?.offsetHeight ?? 0;
  //   const y = element.getBoundingClientRect().top + window.scrollY - navH;

  //   window.scrollTo({ top: y, behavior: "smooth" });
  // };

  const Navbar =()=>{
    console.log("hello world")
  }

  
  return (
    <nav className=" py-[10px] bg-black fixed top-0 left-0 w-full z-60">
      <div className="flex justify-between relative items-center xl:px-[10%] px-4 mt-[10px]">
        <Link href="/">
          <Image
            src="/images/Group.png"
            priority
            alt="logo"
            width={195.63}
            height={44}
            className="w-32 h-8 md:w-[195.63px] md:h-[44px]"
          />
        </Link>

        <ul className="hidden h-full gap-8.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="relative group">
              <Link
                href={link.href}
                className="text-[#C9C9C9] flexCenter cursor-pointer font-satoshi text-[18px] font-medium leading-[140%] pb-1.5 transition-all hover:text-[#1D9ED9] ">
                {link.label}
              </Link>
              <span className="absolute  left-0 w-0 h-0.5 bg-[#1D9ED9] transition-all duration-300 group-hover:w-full mt-[30px]"></span>
            </li>
          ))}
        </ul>

        <div className="lg:flex hidden font-medium text-base leading-[30px] font-satoshi text-[#00010A] bg-white text-center rounded-full">
          <Link href="/your-target-path" className="py-2 px-6 block">
            Get Started
          </Link>
        </div>
        <Menu size={32} color="white" strokeWidth={2} className="lg:hidden" onClick={Navbar}/>
      </div>
      <div className=" border-t border-white  xl:ml-[10%] xl:mr-[10%] ml-[5%] mr-[5%] mt-[20px]"></div>
    </nav>
  );
};

export default Header;
