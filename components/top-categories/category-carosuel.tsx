"use client";

import { topCategories } from "@/lib/constants";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import CategoryCard from "./category-card";

const CategoryCarosuel = () => {
  const activeTabs = ["Fashion"];
  return (
    <Carousel
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        {topCategories.map((item, idx) => (
          <CarouselItem key={idx} className="basis-[30%]">
            <CategoryCard
              categoryImage={item.iconPath}
              categoryName={item.name}
              isActive={activeTabs.includes(item.name)}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CategoryCarosuel;
