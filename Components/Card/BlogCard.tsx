import { Blog } from "@/type/blog";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="bg-[#030414] p-5 rounded-lg relative isolate">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <Image
        src={blog.image}
        alt={blog.title}
        width={500}
        height={500}
        className="w-full rounded-lg h-[250px] object-cover"
      />
      <div className="pt-5 px-3">
        <Link
          href={blog.category}
          className="text-primary font-bold text-base "
        >
          {blog.category}
        </Link>
        <h2 className="text-2xl mt-2 font-bold text-white">{blog.title?.slice(0,50)}</h2>
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
