"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "./ui/dropdown-menu";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { NavMenulinks } from "@/lib/constants";

const MobileMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="md:hidden cursor-pointer">
        <AlignJustify className="text-iconPrimary" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="font-semibold ">
        {NavMenulinks.map((item) => (
          <DropdownMenuItem asChild className="cursor-pointer" key={item.name}>
            <Link href={item.url}>{item.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
