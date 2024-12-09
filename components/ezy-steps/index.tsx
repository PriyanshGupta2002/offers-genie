import Image from "next/image";
import React from "react";

const EzySteps = () => {
  return (
    <div className="max-w-7xl m-auto p-3 space-y-6">
      <h2 className="text-neutralsBlack font-semibold text-2xl">
        Easy Steps to Save More
      </h2>
      <div className="grid grid-cols-3 gap-2 text-neutralsBlack font-medium text-sm md:text-base lg:text-xl">
        <div className="flex flex-col  md:flex-row-reverse md:gap-4 gap-2 items-center justify-between bg-[#A1D6FF] px-3 py-5 rounded-lg">
          <div className="md:space-y-3">
            <span>Deals &amp; Coupons</span>
            <p className="text-base font-light text-[#5a5a5a] hidden md:block">
              Unlock exclusive coupons and grab the hottest deals instantly
            </p>
          </div>
          <Image src={"/coupons.svg"} alt="coupon" width={81} height={58} />
        </div>
        <div className="flex flex-col  md:flex-row-reverse gap-2  md:gap-4 items-center justify-between bg-[#FFDDA4] px-3 py-5 rounded-lg">
          <div className="md:space-y-3">
            <span>Find Best Offers</span>
            <p className="text-base font-light text-[#5a5a5a] hidden md:block">
              Get personalized recommendations to make the most of every
              purchase
            </p>
          </div>
          <Image src={"/offers.svg"} alt="coupon" width={81} height={58} />
        </div>
        <div className="flex flex-col  md:flex-row-reverse gap-2 md:gap-4 items-center justify-between bg-[#C9FFBA] px-3 py-5 rounded-lg">
          <div className="md:space-y-3">
            <span>Save Money</span>
            <p className="text-base font-light text-[#5a5a5a] hidden md:block">
              Shop smart and keep more money in your pocket with every purchase
            </p>
          </div>
          <Image src={"/money.svg"} alt="coupon" width={81} height={58} />
        </div>
      </div>
    </div>
  );
};

export default EzySteps;
