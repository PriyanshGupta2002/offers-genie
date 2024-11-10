import { partnershipData } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const PartnershipFaq = () => {
  return (
    <div className="p-4 flex items-center flex-col justify-center gap-9">
      <div className="flex flex-col text-center  justify-center items-center gap-3">
        <h1 className="font-bold text-3xl gap-3">
          Why Partner with OffersGenie?
        </h1>
        <p className="font-normal">
          Partnering with OffersGenie means gaining access to a vast and diverse
          user base of engaged online shoppers. <br /> Our users are actively
          seeking value, and we provide a platform to help them discover your
          offerings.
        </p>
      </div>
      <div className="grid grid-cols-1  w-full md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:p-6">
        {partnershipData.map((item) => (
          <div
            className="flex flex-col rounded-lg p-4 bg-[#CFE5FE4D] shadow-custom  items-center justify-center gap-3 text-center"
            key={item.label}
          >
            <Image src={item.icon} width={140} height={140} alt={item.label} />
            <h2 className="text-[#8038B3] font-bold text-lg">{item.label}</h2>
            <p className="font-normal text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnershipFaq;
