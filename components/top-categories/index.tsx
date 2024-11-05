import React from "react";
import CategoryCarosuel from "./category-carosuel";
import TopDealCarousel from "../top-deals/top-deal-carousel";

const TopCategories = () => {
  return (
    <div className="max-w-7xl m-auto p-4 space-y-3">
      <h1 className="text-2xl text-textSecondary font-bold">Top Category</h1>
      <div className="p-3 bg-[#78C4FF] rounded-lg">
        <CategoryCarosuel />
      </div>
      <div className="bg-[#FFE386] p-4 rounded-lg">
        <TopDealCarousel />
      </div>
    </div>
  );
};

export default TopCategories;
