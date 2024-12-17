"use client";
import Image from "next/image";
import React, { useState } from "react";
import MobileMenu from "./mobile-menu";
import { NavMenulinks } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>("/");
  return (
    <header className="top-0 sticky z-30 bg-white">
      <nav className=" shadow-sm p-2">
        <div className="max-w-6xl m-auto flex items-center justify-between md:justify-normal space-x-60 px-2">
          <Link href={"/"}>
            {" "}
            <div className="w-[66px] h-[70px] md:w-[57px] md:h-[63px]  relative">
              <Image src={"/logo.svg"} alt="offers_genie" fill />
            </div>
          </Link>
          <MobileMenu activeLink={activeLink} setActiveLink={setActiveLink} />
          <div className="hidden md:block">
            <div className="flex items-center max-w-6xl  md:px-2 xl:px-0 text-sm m-auto justify-start gap-12">
              {NavMenulinks.map((navLink) => (
                <Link
                  key={navLink.name}
                  className={cn(
                    activeLink === navLink.url
                      ? "text-primaryPrimary"
                      : "text-neutralsBlack",
                    "font-medium"
                  )}
                  onClick={() => setActiveLink(navLink.url)}
                  href={navLink.url}
                >
                  {navLink.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
