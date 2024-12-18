import Navbar from "@/Components/Navbar";
import { fetcher } from "@/configs/axios";
import { Blog } from "@/type/blog";
import React from "react";
// import { htmlToJsx } from "html-to-jsx-transform";
const getBlog = async (id: string) => {
  if (id) {
    const blog: Blog = await fetcher({
      url: `/blog/${id}`,
    });
    return blog;
  } else {
    return null;
  }
};

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params; // Await the params
  const blog: Blog | null = await getBlog(id);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto blog-container">
        {blog ? (
            <div dangerouslySetInnerHTML={{ __html: blog.content }} 
            ></div>
          
        ) : (
          <p>Blog not found.</p>
        )}
      </div>
    </div>
  );
};

export default page;
