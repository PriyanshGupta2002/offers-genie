import { envVars } from "@/lib/constants";
import { footerBannerApiResponse } from "@/types";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageBanner = async () => {
  const {
    data,
  }: {
    data: footerBannerApiResponse;
  } = await axios.get(`${envVars.baseUrl}/home/footerBanner`);
  return (
    <Link href={data.urlToOffer}>
      <div className="p-4 max-w-7xl m-auto aspect-video relative">
        <Image
          alt="banner-image"
          src={data.imageUrl}
          fill
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export default ImageBanner;
