import Image from "next/image";
import React from "react";

const EzySteps = () => {
  return (
    <div className="max-w-7xl m-auto p-3 space-y-6">
      <h2 className="text-textSecondary font-semibold text-2xl">
        Easy Steps to Save More
      </h2>
      <div className="grid grid-cols-3 gap-2 text-textSecondary font-bold text-xs md:text-2xl">
        <div className="flex flex-col gap-2 items-center justify-between bg-[#A1D6FF] px-3 py-5 rounded-lg">
          <span>Deals &amp; Coupons</span>
          <Image src={"/coupons.svg"} alt="coupon" width={81} height={58} />
        </div>
        <div className="flex flex-col gap-2 items-center justify-between bg-[#FFDDA4] px-3 py-5 rounded-lg">
          <span>Find Best Offers</span>
          <Image src={"/offers.svg"} alt="coupon" width={81} height={58} />
        </div>
        <div className="flex flex-col gap-2 items-center justify-between bg-[#C9FFBA] px-3 py-5 rounded-lg">
          <span>Save Money</span>
          <Image src={"/money.svg"} alt="coupon" width={81} height={58} />
        </div>
      </div>
    </div>
  );
};

export default EzySteps;
