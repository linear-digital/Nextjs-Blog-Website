
import BlogsContainer from "@/Components/Blog/BlogsContainer";
import BlogSidebar from "@/Components/Blog/BlogSidebar";
import LetestPosts from "@/Components/Blog/LetestPosts";
import HeroArea from "@/Components/Home/HeroArea";

export default function Home() {
  return (
    <div>
      <HeroArea />
      <div className="flex gap-x-5 container mx-auto py-20 items-start">
        <div>
          <BlogsContainer />
          <LetestPosts />
        </div>
        <BlogSidebar />
      </div>
    </div>
  );
}
