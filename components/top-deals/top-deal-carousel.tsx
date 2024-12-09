"use client";
import React, { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { TopDealCarouselProps } from "@/types";
import Link from "next/link";

const TopDealCarousel: FC<TopDealCarouselProps> = ({ data }) => {
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
        {data.map((item) => (
          <CarouselItem
            key={item.urlToOffer}
            className="basis-[60%] relative aspect-square sm:basis-[50%]  md:basis-[40%] lg:basis-[40%]"
          >
            <Link href={item.urlToOffer}>
              <Image
                fill
                src={item.imageUrl}
                alt="image"
                className="object-contain w-full h-full"
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute -left-4 bg-[#FFFFFF99]" />
      <CarouselNext className="absolute -right-4 bg-[#FFFFFF99]" />
    </Carousel>
  );
};

export default TopDealCarousel;
