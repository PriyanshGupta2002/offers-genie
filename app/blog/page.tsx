import BlogList from "@/components/blog";
import { envVars } from "@/lib/constants";
import { BlogDataType } from "@/types";
import axios from "axios";
import React from "react";

const blogPage = async () => {
  const {
    data,
  }: {
    data: BlogDataType[];
  } = await axios.get(`${envVars.baseUrl}/blogPosts`);
  console.log(data);

  return (
    <>
      <BlogList blogList={data} />
    </>
  );
};

export default blogPage;
