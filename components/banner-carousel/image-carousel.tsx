"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const ImageCarousel = () => {
  return (
    <Carousel
      opts={{
        loop: true,
        align: "start",
      }}
      className="relative"
      plugins={[Autoplay()]}
    >
      <CarouselContent className="-ml-2">
        <CarouselItem className="relative aspect-video">
          <Image
            src={"/banner1.png"}
            alt="banner1"
            fill
            className="object-contain  w-full h-full"
          />
        </CarouselItem>
        <CarouselItem className="relative aspect-video">
          <Image
            src={"/banner2.png"}
            alt="banner1"
            fill
            className="object-contain w-full h-full"
          />
        </CarouselItem>
        <CarouselItem className="relative aspect-video">
          <Image
            src={"/banner3.png"}
            alt="banner1"
            fill
            className="object-contain  w-full h-full"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute -left-4 hidden" />
      <CarouselNext className="absolute -right-4 hidden" />
    </Carousel>
  );
};

export default ImageCarousel;
