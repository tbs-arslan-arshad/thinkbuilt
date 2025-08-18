"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NAV_LINKS } from "../../constants/index";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

const Header = () => {
  const handleScroll = (e: any, href: any) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (!element) return;

    const nav = document.querySelector("nav") as HTMLElement | null;
    const navH = nav?.offsetHeight ?? 0;
    const y = element.getBoundingClientRect().top + window.scrollY - navH;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className=" py-[10px] bg-black fixed top-0 left-0 w-full z-60">
      <div className="flex justify-between relative items-center xl:px-[10%] px-[5%] mt-[10px]">
        <Link href="/">
          <Image
            src="/images/Group.png"
            priority
            alt="logo"
            width={195.63}
            height={44}
          />
        </Link>

        <ul className="hidden h-full gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="relative group">
              <Link
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:text-blue-400"
              >
                {link.label}
              </Link>
              <span className="absolute  left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full mt-[30px]"></span>
            </li>
          ))}
        </ul>

        <div className="lg:flex text-[#0E0805] rounded-full text-lg bg-white hidden">
          <Button type="button" title="Get Started" variant="py-2 px-6" />
        </div>
        <Image
          src="/images/hamburger.png"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden bg-white"
        />
      </div>
      <div className=" border-t border-white  xl:ml-[10%] xl:mr-[10%] ml-[5%] mr-[5%] mt-[20px]"></div>
    </nav>
  );
};

export default Header;
