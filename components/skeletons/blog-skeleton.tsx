import React from "react";
import { Skeleton } from "../ui/skeleton";

const BlogSkeleton = () => {
  return (
    <div className="space-y-2 p-3">
      <Skeleton className="w-[300px] md:w-[400px] lg:w-[1000px] h-[20px] rounded-xl" />
      <Skeleton className="max-w-7xl m-auto h-[300px] rounded-xl" />
    </div>
  );
};

export default BlogSkeleton;
