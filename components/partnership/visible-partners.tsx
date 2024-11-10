"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { Button } from "../ui/button";

const VisiblePartners = () => {
  return (
    <div className="bg-[#F9F9F9] p-6 py-36 flex items-center gap-4 flex-col">
      <div className="flex flex-col text-center  justify-center items-center gap-3">
        <h1 className="font-bold text-3xl gap-3">Our Visibility Partners</h1>
        <p className="font-normal">
          Trusted brands and platforms we collaborate with to bring you
          exclusive offers.
        </p>
      </div>
      <Marquee className="p-3" autoFill pauseOnHover pauseOnClick>
        <Image
          src={"/hdfc.svg"}
          alt="image"
          width={200}
          height={70}
          className="mx-5"
        />
        <Image
          src={"/jio.svg"}
          alt="image"
          width={200}
          height={70}
          className="mx-5"
        />
        <Image
          src={"/icici.svg"}
          alt="image"
          width={200}
          height={70}
          className="mx-5"
        />
      </Marquee>
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold">Want to partner with us?</h2>

        <Button
          className="uppercase"
          variant="primary"
          onClick={() =>
            (window.location.href = "mailto:partnerships@offersgenie.net")
          }
        >
          Click Here
        </Button>
      </div>
      <div className="flex items-center md:flex-row flex-col">
        <span>For partnership inquiries, email us directly at</span>
        <span>
          <a
            href="mailto:partnerships@offersgenie.net"
            className="text-blue-500 ml-2"
          >
            partnerships@offersgenie.net
          </a>
        </span>
      </div>
    </div>
  );
};

export default VisiblePartners;
