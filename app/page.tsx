import BlogsContainer from "@/Components/Blog/BlogsContainer";
import BlogSidebar from "@/Components/Blog/BlogSidebar";
import LetestPosts from "@/Components/Blog/LetestPosts";
import HeroArea from "@/Components/Home/HeroArea";
import { fetcher } from "@/configs/axios";
const getBlogs = async () => {
  try {
    const data = await fetcher({
      url: "/blog?limit=6&random=ture",
      method: "GET",
    });
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

const getTags = async () => {
  try {
    const tags = await fetcher({
      url: "/blog/tags/all",
      method: "GET",
    });
    return tags;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

export default async function Home() {
  const tags = await getTags();
  const blogs = await getBlogs();
  return (
    <div>
      <HeroArea />
      <div className="flex gap-x-5 container mx-auto py-20 items-start">
        <div className="flex flex-col">
          <BlogsContainer tags={tags} blogs={blogs} />
          <LetestPosts />
        </div>
        <BlogSidebar />
      </div>
    </div>
  );
}
