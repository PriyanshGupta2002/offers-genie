"use client";

import { topCategories } from "@/lib/constants";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import CategoryCard from "./category-card";
import { cn } from "@/lib/utils";
import { CategoryCarouselProps, Tabs } from "@/types";
import { FC, useCallback, useState } from "react";
import Image from "next/image";

const CategoryCarosuel: FC<CategoryCarouselProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const handleTabActive = useCallback((tab: Tabs) => {
    setActiveTab(tab);
  }, []);
  return (
    <div>
      <div className="hidden lg:flex flex-col gap-2 border-[1.5px]   border-neutralsLightGrey rounded-md ">
        {topCategories.map((item) => (
          <div className="relative" key={item.name}>
            <div
              className={cn(
                activeTab.includes(item.name)
                  ? "text-primaryPrimary bg-primary100 border-[1.5px] border-primaryPrimary"
                  : "text-neutralsBlack",
                "flex items-center px-3 py-7 transition-all cursor-pointer text-sm gap-3 font-medium  first:rounded-tl-md first:rounded-tr-md rounded-none"
              )}
              onClick={() => setActiveTab(item.name as Tabs)}
            >
              <item.Icon className="w-4 h-4" />
              <span>{item.name}</span>
            </div>
            {activeTab.includes(item.name) && (
              <div className="absolute w-4 h-4 -right-3 -translate-y-1/2 -rotate-90 top-1/2">
                <Image
                  className="w-full h-full"
                  fill
                  alt="pointer"
                  src={"/pointer.svg"}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="horizontal"
        className="lg:hidden"
      >
        <CarouselContent>
          {topCategories.map((item, idx) => (
            <CarouselItem key={idx} className="basis-[30%]">
              <CategoryCard
                icon={
                  <item.Icon
                    className={cn(
                      activeTab.includes(item.name)
                        ? "text-primaryPrimary"
                        : "text-neutralsDarkGrey",
                      "w-4 h-4"
                    )}
                  />
                }
                categoryName={item.name}
                isActive={activeTab.includes(item.name)}
                handleTabActive={handleTabActive}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CategoryCarosuel;
