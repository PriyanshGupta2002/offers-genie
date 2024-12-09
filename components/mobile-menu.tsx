"use client";
import React, { FC } from "react";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { NavMenulinks } from "@/lib/constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MobileMenuProps } from "@/types";
import { cn } from "@/lib/utils";
const MobileMenu: FC<MobileMenuProps> = ({ activeLink, setActiveLink }) => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden cursor-pointer">
        <AlignJustify className="text-iconPrimary" />
      </SheetTrigger>
      <SheetContent className="space-y-4 py-10">
        {NavMenulinks.map((item) => (
          <div
            className={cn(
              activeLink === item.url
                ? "text-primaryPrimary"
                : "text-neutralsBlack",
              "cursor-pointer"
            )}
            key={item.name}
            onClick={() => setActiveLink(item.url)}
          >
            <Link href={item.url}>{item.name}</Link>
          </div>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
