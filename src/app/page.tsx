import AboutHeaderLayout from "@/components/AboutLayout";
import { BlogPostsResponse } from "@/models/BlogPost";
import Link from "next/link";

export default async function BlogPage() {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: BlogPostsResponse = await response.json();



  return (
    <div>
      {/* <AboutHeaderLayout /> */}

    </div>

  );
}
