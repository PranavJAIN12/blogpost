import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import fs from "fs";
import matter from "gray-matter";
import LikeButton from "@/components/likeButton";
import { supabase } from "../client";

const dirContent = fs.readdirSync("public/content", "utf-8");

const blogs = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`public/content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data;
});

async function getLikes() {
  const { data, error } = await supabase
    .from("like Count")
    .select("slug, likes_count");
  if (error) {
    console.error("Error fetching likes:", error);
    return {};
  }

  return data.reduce((acc, row) => {
    acc[row.slug] = row.likes_count || 0;
    return acc;
  }, {});
}

export default async function BlogPage() {
  const likes = await getLikes();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        Latest Blog Posts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((post) => (
          <div
            key={post.id}
            className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
          >
            <div className="relative w-full h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>

              <p className="mb-4 line-clamp-3">{post.description}</p>

              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-primary" />
                  <span>{post.date}</span>
                </div>
                <LikeButton
                  slug={post.slug}
                  initialLikes={likes[post.slug] || 0}
                />
                <div className="flex items-center space-x-2">
                  <User size={16} className="text-primary" />
                  <span>{post.author}</span>
                </div>
              </div>

              <Link
                href={`/blogpost/${post.slug}`}
                className="flex items-center text-primary hover:text-primary/80 font-semibold group"
              >
                Read More
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
