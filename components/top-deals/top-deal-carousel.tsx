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
        <CarouselItem className=" basis-[70%] md:basis-1/3">
          <DealCard />
        </CarouselItem>
        <CarouselItem className="basis-[70%]  md:basis-1/3">
          <DealCard />
        </CarouselItem>
        <CarouselItem className="basis-[70%] md:basis-1/3">
          <DealCard />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default TopDealCarousel;
