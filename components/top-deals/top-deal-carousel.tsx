"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import DealCard from "./deal-card";
import Autoplay from "embla-carousel-autoplay";

const TopDealCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[Autoplay()]}
      className="w-full"
    >
      <CarouselContent>
        <CarouselItem className="basis-[60%] sm:basis-[50%]  md:basis-[40%] lg:basis-[30%]">
          <DealCard />
        </CarouselItem>
        <CarouselItem className="basis-[60%] sm:basis-[50%]  md:basis-[40%] lg:basis-[30%]">
          <DealCard />
        </CarouselItem>
        <CarouselItem className="basis-[60%] sm:basis-[50%] md:basis-[40%] lg:basis-[30%]">
          <DealCard />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default TopDealCarousel;
