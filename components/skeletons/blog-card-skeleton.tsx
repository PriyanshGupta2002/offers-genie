import React from "react";
import { Skeleton } from "../ui/skeleton";

const BlogCardSkeleton = () => {
  return (
    <div className="space-y-3 p-3">
      <Skeleton className="w-[250px] sm:w-[400px] md:w-[700px] lg:w-[900px] rounded-xl  h-[20px]" />
      <Skeleton className="max-w-6xl h-[300px] m-auto rounded-xl" />
    </div>
  );
};

export default BlogCardSkeleton;
