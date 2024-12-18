import { Blog } from "@/type/blog";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCardHorizontal = ({ blog }: { blog: Blog }) => {
  return (
    <div className="flex gap-x-10">
      <Image
        src={blog.image}
        alt={blog.title}
        width={250}
        height={200}
        className="max-w-[250px] min-w-[250px] rounded-lg h-[170px] object-fill"
      />
      <div className="">
        <Link
          href={blog.category}
          className="text-primary font-bold text-base "
        >
          {blog.category}
        </Link>
        <h2 className="text-2xl mt-2 font-bold text-white">
          {blog.title?.slice(0, 50)}
        </h2>
        <p className="text-gray-400 text-sm mt-3">
          {blog.desc?.slice(0, 150)}...
        </p>
        <div className="flex gap-x-3 items-center text-sm mt-5">
          <span className="">
            {moment(blog.createdAt).format("MMM DD, YYYY")}
          </span>

          <span className="">{blog.views} views</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCardHorizontal;
