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

const MobileMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="md:hidden cursor-pointer">
        <AlignJustify className="text-iconPrimary" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="font-semibold ">
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={"/"}>Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Categories
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Latest Deals
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Contact</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Blog</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
