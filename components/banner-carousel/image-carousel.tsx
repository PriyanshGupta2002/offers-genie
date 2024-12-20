"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { footerBannerApiResponse } from "@/types";
import { useIp } from "@/hooks/useIpHook";
import axios from "axios";
import { envVars } from "@/lib/constants";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

const ImageCarousel = () => {
  const [main, setMain] = useState<footerBannerApiResponse[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { ip } = useIp();

  const fetchTopBanner = useCallback(async () => {
    setIsLoading(true);
    try {
      if (ip) {
        const { data } = await axios.get(`${envVars.baseUrl}/home/mainBanner`, {
          headers: {
            ip,
          },
        });
        setMain(data);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("Error while fetching top banner", error);
    } finally {
      setIsLoading(false);
    }
  }, [ip]);
  useEffect(() => {
    fetchTopBanner();
  }, [fetchTopBanner]);

  if (isLoading) {
    return <Skeleton className="w-full h-[100px] rounded-md" />;
  }

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
        {main?.map((item) => (
          <CarouselItem
            key={item.imageUrl}
            className="relative aspect-video  basis-full lg:basis-1/2"
          >
            <Link href={item.urlToOffer}>
              {" "}
              <Image
                src={item.imageUrl}
                alt="banner1"
                fill
                className="object-contain  w-full h-full pl-2"
              />
            </Link>
          </CarouselItem>
        ))}
        {/* <CarouselItem className="relative aspect-video  basis-full lg:basis-1/2">
          <Image
            src={"/banner1.png"}
            alt="banner1"
            fill
            className="object-contain  w-full h-full pl-2"
          />
        </CarouselItem>
        <CarouselItem className="relative aspect-video basis-full lg:basis-1/2">
          <Image
            src={"/banner2.png"}
            alt="banner1"
            fill
            className="object-contain w-full h-full pl-2"
          />
        </CarouselItem>
        <CarouselItem className="relative aspect-video basis-full lg:basis-1/2">
          <Image
            src={"/banner3.png"}
            alt="banner1"
            fill
            className="object-contain  w-full h-full pl-2"
          />
        </CarouselItem> */}
      </CarouselContent>
      <CarouselPrevious className="absolute -left-4 bg-[#FFFFFF99]" />
      <CarouselNext className="absolute -right-4 bg-[#FFFFFF99]" />
    </Carousel>
  );
};

export default ImageCarousel;
