import BannerCarousel from "@/components/banner-carousel";
import EzySteps from "@/components/ezy-steps";
import ImageBanner from "@/components/image-banner";
import MarkdownViewer from "@/components/markdown-viewer";
import TopCategories from "@/components/top-categories";
import TopDeals from "@/components/top-deals";
import React from "react";

const page = () => {
  return (
    <div>
      <BannerCarousel />
      <EzySteps />
      <TopDeals />
      <TopCategories />
      <ImageBanner />
      <MarkdownViewer url="http://104.197.123.26:9000/imagesources/Untitleddocument.md" />
    </div>
  );
};

export default page;
