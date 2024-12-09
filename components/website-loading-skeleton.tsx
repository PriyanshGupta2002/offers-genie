import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const WebsiteLoadingSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* Header Skeleton */}
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>

        {/* Content Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="space-y-4">
              <Skeleton className="h-[200px] w-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Content Skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-6 w-1/3" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>

        {/* Footer Skeleton */}
        <div className="flex justify-between items-center">
          <Skeleton className="h-10 w-[120px]" />
          <div className="flex space-x-4">
            <Skeleton className="h-10 w-[80px]" />
            <Skeleton className="h-10 w-[80px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteLoadingSkeleton;
