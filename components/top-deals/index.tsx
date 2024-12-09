"use client";
import React, { useCallback, useEffect, useState } from "react";
import TopDealCarousel from "./top-deal-carousel";
import { footerBannerApiResponse } from "@/types";
import { Handshake } from "lucide-react";
import axios from "axios";
import { envVars } from "@/lib/constants";
import { useIp } from "@/hooks/useIpHook";

const TopDeals = () => {
  const [topDealData, setTopDealData] = useState<footerBannerApiResponse[]>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const { ip } = useIp();
  const fetchTopDealData = useCallback(async () => {
    try {
      setIsFetching(true);
      const { data } = await axios.get(`${envVars.baseUrl}/home/topOffers`, {
        headers: {
          ip: ip,
        },
      });
      setTopDealData(data);
    } catch (error) {
      console.log("Error while fetching top deal data");
    } finally {
      setIsFetching(false);
    }
  }, [ip]);
  useEffect(() => {
    fetchTopDealData();
  }, [fetchTopDealData]);

  return (
    <div className="max-w-7xl mx-auto p-3 text-neutralsBlack space-y-4">
      <h2 className="font-semibold text-2xl leading-7">
        Top Deals You Can&apos;t miss
      </h2>
      <div className="bg-primary100 p-10 rounded-lg">
        {topDealData && !isFetching ? (
          <TopDealCarousel data={topDealData} />
        ) : (
          <div className="flex flex-col gap-2 justify-center items-center">
            <Handshake />
            <span>No top deals available right now</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopDeals;
