import { BlogListProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const BlogList: FC<BlogListProps> = ({ blogList }) => {
  return (
    <div className="max-w-6xl m-auto p-3 space-y-4">
      {blogList.map((item) => (
        <Link href={`/blog/${item.title}`} key={item.imageUrl}>
          <div className="space-y-1">
            <p className="font-semibold">{item.title}</p>
            <div className="aspect-video relative">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-center w-full h-full"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
