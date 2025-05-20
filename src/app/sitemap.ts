import { BlogPostsResponse } from "@/models/BlogPost";
import { MetadataRoute } from "next";
import { imagesArray } from "./lib/images";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: BlogPostsResponse = await response.json();

  const postEntries: MetadataRoute.Sitemap = posts.map(({ id }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`
  }));

  const imagesEntries: MetadataRoute.Sitemap = imagesArray.map((img) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/gallery/${img.id}`,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/gallery`,
      lastModified: new Date(),
    },
    ...postEntries,
    ...imagesEntries
  ];
}
