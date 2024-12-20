"use client";
import React, { useCallback, useEffect, useState } from "react";
import CategoryCarosuel from "./category-carosuel";
import TopDealCarousel from "../top-deals/top-deal-carousel";
import { footerBannerApiResponse, Tabs } from "@/types";
import axios from "axios";
import { envVars } from "@/lib/constants";
import { useIp } from "@/hooks/useIpHook";
import { Skeleton } from "../ui/skeleton";
import { Handshake } from "lucide-react";

const TopCategories = () => {
  const [activeTab, setActiveTab] = useState<Tabs>("Electronics");
  const [dealCarouselData, setDealCarouselData] =
    useState<footerBannerApiResponse[]>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const { ip } = useIp();

  const fetchData = useCallback(async () => {
    try {
      setIsFetching(true);
      if (ip || activeTab) {
        const { data } = await axios.get(
          `${envVars.baseUrl}/home/trendingCategories`,

          {
            headers: {
              ip: ip,
              Category: activeTab,
            },
          }
        );

        setDealCarouselData(data);
      }
    } catch (error) {
      console.log("Error while fetching carousel data", error);
      setIsFetching(false);
    } finally {
      setIsFetching(false);
    }
  }, [activeTab, ip]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isFetching && dealCarouselData?.length === 0) {
    return <Skeleton className="w-full h-[30px]" />;
  }

  return (
    <div className="max-w-7xl m-auto p-4 space-y-3">
      <h1 className="text-base text-neutralsBlack font-medium">
        Trending Categories
      </h1>
      <div className="flex flex-col lg:flex-row">
        <div className="p-3 rounded-lg  max-w-7xl w-full lg:w-[20%]  overflow-auto">
          <CategoryCarosuel activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="bg-[#FFE386] flex items-center justify-center lg:w-[80%] w-full p-4 rounded-lg">
          {dealCarouselData ? (
            <TopDealCarousel data={dealCarouselData || []} />
          ) : (
            <div className="text-neutral-500  flex-col items-center flex">
              <Handshake className="w-10 h-10" />
              <span className="text-2xl">No deals right now</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
