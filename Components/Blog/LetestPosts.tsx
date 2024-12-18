import { fetcher } from "@/configs/axios";
import { Blog } from "@/type/blog";
import React from "react";
import BlogCardHorizontal from "../Card/BlogCardHorizontal";

const LetestPosts = async () => {
  const data: Blog[] = await fetcher({
    url: "/blog?limit=6",
    method: "GET",
  });

  return (
    <div className="min-h-[100vh] py-16">
      <h2 className="text-lg font-medium">Letest Posts</h2>
      <div className="bg-gray-400 h-[1px] mt-2" />
      <div className="grid gap-y-5 mt-10">
        {data?.length > 0 &&
          data?.map((blog) => {
            return <BlogCardHorizontal key={blog._id} blog={blog} />;
          })}
      </div>
    </div>
  );
};

export default LetestPosts;
