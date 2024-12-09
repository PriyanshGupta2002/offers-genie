"use client";

import { cn } from "@/lib/utils";
import { CategoryCardProps, Tabs } from "@/types";
import Image from "next/image";
import { FC } from "react";

const CategoryCard: FC<CategoryCardProps> = ({
  icon,
  categoryName,
  isActive,
  handleTabActive,
}) => {
  return (
    <>
      <div
        onClick={() => handleTabActive(categoryName as Tabs)}
        className={cn(
          isActive
            ? " border-primaryPrimary bg-primary100 lg:border-b-primaryPrimary lg:border-b-2"
            : "border-neutralsLightGrey bg-white",
          "flex border cursor-pointer lg:border-x-0 lg:border-t-0   transition-all lg:rounded-none lg:items-center flex-col lg:flex-row lg:justify-start items-center justify-center py-7 lg:py-4 lg:px-2 rounded-lg space-y-2 lg:space-y-0 lg:gap-3 lg:pl-6 "
        )}
      >
        <div>{icon}</div>

        <span
          className={cn(
            isActive ? "text-primaryPrimary" : "text-neutralsDarkGrey",
            "text-xs leading-[18px] lg:text-sm font-medium"
          )}
        >
          {categoryName}
        </span>
      </div>
      {isActive && (
        <Image
          className="mx-auto mt-0 lg:hidden"
          src={"/pointer.svg"}
          alt="pointer"
          width={10}
          height={10}
        />
      )}
      {/* {isActive && (
        <Image
          className="mx-auto mt-0 lg:hidden"
          src={"/pointer.svg"}
          alt="pointer"
          width={10}
          height={10}
        />
      )} */}
    </>
  );
};

export default CategoryCard;
