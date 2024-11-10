import BannerCarousel from "@/components/banner-carousel";
import EzySteps from "@/components/ezy-steps";
import ImageBanner from "@/components/image-banner";
import TopDeals from "@/components/top-deals";
import React from "react";

const page = () => {
  return (
    <div>
      <BannerCarousel />
      <EzySteps />
      <TopDeals />
      {/* <TopCategories /> */}
      <ImageBanner />
    </div>
  );
};

export default page;
