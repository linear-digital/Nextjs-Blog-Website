import { Blog } from "@/type/blog";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="bg-[#030414] p-5 rounded-lg">
      <Link href={`/blogs/${blog?._id}`}>
      <Image
        src={blog.image}
        alt={blog.title}
        width={500}
        height={500}
        className="w-full rounded-lg h-[250px] object-cover"
      />
      </Link>
      <div className="pt-5 px-3">
        <Link
          href={blog.category}
          className="text-primary font-bold text-base "
        >
          {blog.category}
        </Link>
        <Link href={`/blogs/${blog._id}`} className="text-2xl mt-2 font-bold text-white block">{blog.title?.slice(0,50)}</Link>
        <p className="text-gray-400 text-sm mt-3">
          {blog.desc?.slice(0, 90)}...
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

export default BlogCard;
