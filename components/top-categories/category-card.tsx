"use client";

import { cn } from "@/lib/utils";
import { CategoryCardProps } from "@/types";
import Image from "next/image";
import { FC } from "react";

const CategoryCard: FC<CategoryCardProps> = ({
  categoryImage,
  categoryName,
  isActive,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-3 space-y-2 ">
      <div
        className={cn(
          isActive ? "bg-activeBg" : "bg-[#60A9E3]",
          " p-5  rounded-lg"
        )}
      >
        <Image
          src={categoryImage}
          alt="image"
          className="object-contain"
          width={40}
          height={40}
        />
      </div>

      <span className="text-sm font-medium">{categoryName}</span>
    </div>
  );
};

export default CategoryCard;
