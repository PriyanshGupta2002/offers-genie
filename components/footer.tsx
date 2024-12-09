import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { footerSocials, NavMenulinks } from "@/lib/constants";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";

const Footer = () => {
  return (
    <div className="md:p-4 p-2  bg-neutralsBlack">
      <footer className="md:p-5 p-1 gap-3 flex items-start flex-wrap  justify-between">
        <Image src={"/dark-logo.svg"} alt="logo" width={87} height={96} />
        <div className="flex flex-col gap-1 text-white font-normal">
          <h1 className="text-center text-xl">Explore</h1>
          <div
            className={cn(
              "flex flex-col text-xs font-medium gap-2 items-start  justify-center"
            )}
          >
            {NavMenulinks.map((item) => (
              <Link href={item.url} key={item.name}>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-1 text-xs text-white">
          <span className="uppercase">Socials</span>
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
        </div>
      </footer>
      <div className="flex font-medium items-center gap-2 text-white">
        <Link href={"/disclaimer"}>Disclaimer</Link>
        <div className="w-[1px] h-5 bg-white" />
        <Link href={"/privacy-policy"}>Privacy Policy</Link>
      </div>
    </div>
  );
};

export default Footer;
