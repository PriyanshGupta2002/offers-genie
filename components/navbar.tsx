import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import { AlignJustify, Search } from "lucide-react";
import MobileMenu from "./mobile-menu";
import { NavMenulinks } from "@/lib/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-primaryBg p-2">
        <div className="max-w-6xl m-auto flex items-center justify-between px-2">
          <div className="w-[66px] h-[70px] md:w-[78px] md:h-[86px]  relative">
            <Image src={"/logo.svg"} alt="offers_genie" fill />
          </div>
          <div className="bg-white h-[40px] w-[70%] rounded-lg overflow-hidden flex pl-2 items-center">
            <Search className="text-textTertiary" />
            <Input
              placeholder="Search for deals,coupons,offers..."
              className="outline-none shadow-none focus-visible:ring-0 border-none ring-0 h-full w-full ring-offset-0 outline-offset-0"
            />
          </div>
          <MobileMenu />
        </div>
      </nav>
      <div className="hidden md:block px-2 bg-[#FF9E53B2]">
        <div className="flex items-center max-w-6xl py-7 md:px-2 xl:px-0 m-auto justify-start gap-7">
          {NavMenulinks.map((navLink) => (
            <Link key={navLink.name} className="font-medium" href={navLink.url}>
              {navLink.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
