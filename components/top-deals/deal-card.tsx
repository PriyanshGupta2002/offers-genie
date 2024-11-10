"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const DealCard = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div
          className={cn(
            !isLoaded ? "blur-md" : "blur-0",
            "aspect-square relative w-full h-full transition-all duration-200 ease-linear overflow-hidden"
          )}
        >
          <Image
            alt="deal"
            fill
            src={"/deal.svg"}
            onLoad={() => {
              setIsLoaded(true);
            }}
            className="object-cover"
          />
        </div>
        <div className="space-y-2 p-3 flex flex-col gap-1">
          <span>Big Discounts</span>
          <span className="text-[#343434] font-semibold text-xl">
            Upto 80% off
          </span>
          <Button variant={"primary"}>+8% Cashback</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DealCard;
