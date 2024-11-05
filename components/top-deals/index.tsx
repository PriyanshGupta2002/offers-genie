import React from "react";
import TopDealCarousel from "./top-deal-carousel";

const TopDeals = () => {
  return (
    <div className="max-w-7xl m-auto p-3 text-textSecondary space-y-4">
      <h2 className="font-semibold text-2xl">Top Deals You Can&apos;t miss</h2>
      <div className="bg-tertiaryBg p-4 rounded-lg">
        <TopDealCarousel />
      </div>
    </div>
  );
};

export default TopDeals;
