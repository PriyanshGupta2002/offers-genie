import Image from "next/image";
import React from "react";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { footerSocials } from "@/lib/constants";
import Link from "next/link";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div className="p-4 bg-[#818182]">
      <footer className="p-5 gap-3 space-y-3 flex items-center flex-col justify-center">
        <Image src={"/logo.svg"} alt="logo" width={87} height={96} />
        <div className="flex flex-col gap-1 text-white font-normal">
          <h1 className="text-center text-xl">Sitemap</h1>
          <div
            className={cn(
              poppins.className,
              "flex flex-col text-sm gap-1 items-start  justify-center"
            )}
          >
            <span className="ml-2">Home</span>
            <span className="ml-2">Category</span>
            <span className="ml-2">Latest Deals</span>
            <span className="ml-2">Blog</span>
            <span className="ml-2">Contact</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {footerSocials.map((item, idx) => (
            <div className="bg-white rounded-full p-3" key={idx}>
              <Link href={item.url}>
                <Image
                  alt={item.url}
                  width={15}
                  height={15}
                  src={item.iconPath}
                />
              </Link>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
