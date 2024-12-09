import BannerCarousel from "@/components/banner-carousel";
import EzySteps from "@/components/ezy-steps";
import ImageBanner from "@/components/image-banner";
import TopCategories from "@/components/top-categories";
import TopDeals from "@/components/top-deals";
import { Server } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="space-y-8">
      <BannerCarousel />
      <EzySteps />
      <TopDeals />
      <TopCategories />
      <ImageBanner />
    </div>
  );
};

export default page;
