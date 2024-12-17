/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetcher } from "@/configs/axios";
import React from "react";
import BlogCard from "../Card/BlogCard";
import { Blog } from "@/type/blog";
import Link from "next/link";

const getBlogs = async () => {
  const data = await fetcher({
    url: "/blog",
    method: "GET",
  });
  return data;
};

const BlogsContainer = async () => {
  const blogs: Blog[] = await getBlogs();
  const tags = await fetcher({
    url: "/blog/tags/all",
    method: "GET",
  });

  return (
    <div className="container mx-auto h-screen grid grid-cols-2 gap-8">
      <div className="col-span-2 flex justify-between">
        <h2 className="text-xl font-medium">Featured posts</h2>
        <div className="flex items-center gap-x-2">
          <p className="">
            Hot tags:
          </p>
          <ul className="flex items-center gap-x-2">
            {tags?.slice(0,5)?.map((item: any, i: number) => (
              <li key={i} className="text-sm">
                <Link href={`/blogs?tag=${item._id}`}>
                  #{item._id}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {blogs?.map((blog: Blog, index: number) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
  );
};

export default BlogsContainer;
