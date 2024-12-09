"use client";
import { useIp } from "@/hooks/useIpHook";
import { envVars } from "@/lib/constants";
import { TrendDealResponseStateProp } from "@/types";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import TopDealCarousel from "../top-deals/top-deal-carousel";
import { Skeleton } from "../ui/skeleton";

const TrendDeal = () => {
  const [trendResponse, setTrendResponse] =
    useState<TrendDealResponseStateProp[]>();
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const { ip } = useIp();

  const fetchTrendResponse = useCallback(async () => {
    try {
      setIsFetching(true);
      if (ip) {
        const { data } = await axios.get(`${envVars.baseUrl}/latestDeals`, {
          headers: {
            ip,
          },
        });
        setTrendResponse(data);
      }
    } catch (error) {
      setIsFetching(false);
      console.log("Error while fetching trending categories", error);
    } finally {
      setIsFetching(false);
    }
  }, [ip]);

  useEffect(() => {
    fetchTrendResponse();
  }, [fetchTrendResponse]);

  if (isFetching && !trendResponse) {
    return (
      <div className="min-h-screen flex items-center justify-center space-y-4 flex-col p-7">
        <div className="flex flex-col gap-3 w-full">
          <Skeleton className="w-full max-w-3xl h-8" />
          <Skeleton className="w-full max-w-6xl h-20" />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <Skeleton className="w-full max-w-3xl h-8" />
          <Skeleton className="w-full max-w-6xl h-20" />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <Skeleton className="w-full max-w-3xl h-8" />
          <Skeleton className="w-full max-w-6xl h-20" />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <Skeleton className="w-full max-w-3xl h-8" />
          <Skeleton className="w-full max-w-6xl h-20" />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <Skeleton className="w-full max-w-3xl h-8" />
          <Skeleton className="w-full max-w-6xl h-20" />
        </div>
      </div>
    );
  }

  if (trendResponse === null && !isFetching) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-primaryPrimary text-3xl font-semibold">
          No Latest Deals right now
        </span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl m-auto p-3 space-y-7">
      {trendResponse?.map((item) => (
        <div className="space-y-2" key={item.company_name}>
          <h1 className="text-base font-semibold">{item.company_name}</h1>
          <div className="bg-primary100 px-2 py-6 rounded-md">
            <TopDealCarousel data={item.offers} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendDeal;
