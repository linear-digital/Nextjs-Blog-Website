/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import BlogCard from "../Card/BlogCard";
import { Blog } from "@/type/blog";
import Link from "next/link";

const BlogsContainer = async ({
  blogs,
  tags,
}: {
  blogs: Blog[];
  tags: any;
}) => {
  return (
    <div className="container mx-auto  grid grid-cols-2 gap-8">
      <div className="col-span-2 flex justify-between">
        <h2 className="text-xl font-medium">Featured posts</h2>
        <div className="flex items-center gap-x-2">
          <p className="">Hot tags:</p>
          <ul className="flex items-center gap-x-2">
            {tags?.length > 0 &&
              tags?.slice(0, 5).map((item: Blog, i: number) => (
                <li key={i} className="text-sm">
                  <Link href={`/blogs?tag=${item?._id}`}>#{item?._id}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
      {blogs?.length > 0 &&
        blogs?.map((blog: Blog, index: number) => (
          <BlogCard key={index} blog={blog} />
        ))}
    </div>
  );
};

export default BlogsContainer;
