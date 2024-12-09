"use client";
import { useIp } from "@/hooks/useIpHook";
import { envVars } from "@/lib/constants";
import { footerBannerApiResponse } from "@/types";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

const ImageBanner = () => {
  const { ip } = useIp();
  const [data, setData] = useState<footerBannerApiResponse>();
  const fetchFooterBanner = useCallback(async (ip: string) => {
    const {
      data: footerData,
    }: {
      data: footerBannerApiResponse;
    } = await axios.get(`${envVars.baseUrl}/home/footerBanner`, {
      headers: {
        ip: ip,
      },
    });
    setData(footerData);
  }, []);

  useEffect(() => {
    if (ip) {
      fetchFooterBanner(ip);
    }
  }, [fetchFooterBanner, ip]);

  if (!data) {
    return <Skeleton />;
  }

  return (
    <div className="p-4 max-w-7xl m-auto aspect-30/9 relative">
      <Link href={data?.urlToOffer}>
        <Image
          alt="banner-image"
          src={data?.imageUrl}
          fill
          className="object-contain"
        />
      </Link>
    </div>
  );
};

export default ImageBanner;
