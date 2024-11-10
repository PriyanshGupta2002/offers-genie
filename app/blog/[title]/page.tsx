import MarkdownViewer from "@/components/markdown-viewer";
import BlogSkeleton from "@/components/skeletons/blog-skeleton";
import { envVars } from "@/lib/constants";
import { BlogDataType } from "@/types";
import axios from "axios";
import React from "react";

const blogDetailPage = async ({
  params,
}: {
  params: {
    title: string;
  };
}) => {
  const {
    data: blogs,
  }: {
    data: BlogDataType[];
  } = await axios.get(`${envVars.baseUrl}/blogPosts`);

  const blogLink = blogs.find(
    (blog) => blog.title === decodeURIComponent(params.title)
  )?.urlToPost;

  if (!blogLink) {
    return <BlogSkeleton />;
  }

  return <MarkdownViewer url={blogLink} />;
};

export default blogDetailPage;
