"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetcher } from "@/configs/axios";
import React, { useEffect } from "react";
import BlogCard from "../Card/BlogCard";
import { Blog } from "@/type/blog";
import Link from "next/link";

const getBlogs = async (): Promise<any> => {
  try {
    const data = await fetcher({
      url: "/blog?random=true?limit=6",
      method: "GET",
    });
    const tags = await fetcher({
      url: "/blog/tags/all",
      method: "GET",
    });
    return {
      blogs: data || [],
      tags: tags || [],
    };
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
};

const BlogsContainer = () => {
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  const [tags, setTags] = React.useState<string[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogs();
      setBlogs(data.blogs);
      setTags(data.tags);
    };
    fetchData();
  }, []);
  return (
    <div className="container mx-auto h-screen grid grid-cols-2 gap-8">
      <div className="col-span-2 flex justify-between">
        <h2 className="text-xl font-medium">Featured posts</h2>
        <div className="flex items-center gap-x-2">
          <p className="">Hot tags:</p>
          <ul className="flex items-center gap-x-2">
            {tags?.map((item: any, i: number) => (
              <li key={i} className="text-sm">
                <Link href={`/blogs?tag=${item?._id}`}>#{item?._id}</Link>
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
