import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const ParternshipHero = () => {
  return (
    <div className="bg-[#985FC0] flex items-center justify-center h-[450px]">
      <div className="max-w-7xl relative m-auto">
        <Image
          src={"/handshake.svg"}
          width={700}
          height={700}
          className="absolute  -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 z-0 opacity-45"
          alt="handshake"
        />

        <div className="flex flex-col  text-white gap-5 px-5 py-11 w-full items-center justify-center">
          <h2 className="font-bold text-xl z-10 md:text-2xl lg:text-2xl text-center">
            Partner with Offers Genie – Boost Your Reach, Drive Sales, and
            Engage Shoppers
          </h2>
          <p className="text-sm text-center z-10 lg:w-[60%]">
            Join the leading platform for deals, cashback, and offers, and
            connect with millions of savvy shoppers looking for the best deals
            every day
          </p>
          <Button
            variant={"tertiary"}
            className="uppercase bg-opacity-70 brightness-110 font-bold cursor-pointer z-40 px-5"
          >
            Become a Partner
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ParternshipHero;
