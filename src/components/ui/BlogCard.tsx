import Link from "next/link";
import Image from "next/image";
import { BlogCardProps } from "@/lib/types";

export default function BlogCard({
  post,
  variant = "standard",
}: BlogCardProps) {
  const isFeatured = variant === "featured";
  const isMinimal = variant === "minimal";

  return (
    <Link
      href={`/blog/${post.slug}`}
      title="Read case study"
      className="min-w-0 w-full flex p-0 border-none outline-0 bg-none"
    >
      <div
        className={`min-w-0 w-full flex ${
          isFeatured ? "flex-col md:flex-row" : "flex-col"
        } gap-6 relative p-1 border border-transparent rounded-2xl hover:bg-gray-500/15 focus-within:bg-gray-500/15 active:bg-gray-500/15 transition-colors duration-300`}
      >
        {/* Image - only if post has image and not minimal */}
        {post.image && !isMinimal && (
          <div className="min-w-0 w-full flex flex-col relative rounded-2xl overflow-hidden border border-foreground-light/20 dark:border-foreground-dark/20 bg-background/50 backdrop-blur-sm bg-black/30 transition-colors duration-300">
            <Image
              src={post.image}
              alt={post.title}
              width={960}
              height={0}
              className="w-full h-auto"
              style={{ objectFit: "contain" }}
            />
          </div>
        )}

        {/* Content */}
        <div className="min-w-0 w-full flex relative">
          <div className="max-w-md w-full flex justify-center flex-col gap-5 relative py-6 px-3 md:px-6 lg:px-10">
            {/* Author info */}
            <div className="flex items-center gap-6 relative">
              <Image
                src={post.authorAvatar}
                alt={post.author}
                width={28}
                height={28}
                className="rounded-full border border-foreground-light/60 dark:border-foreground-dark/60 backdrop-blur-lg bg-black/30 transition-colors duration-300 relative z-30"
              />
              <div className="flex items-center gap-4 relative">
                <span className="text-xs">{post.author}</span>
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {post.publishedAt}
              </span>
            </div>

            {/* Title */}
            <span className="text-lg md:text-xl lg:text-2xl font-semibold">
              {post.title}
            </span>

            {/* Category */}
            <span className="text-xs md:text-sm font-light text-gray-600 dark:text-gray-400">
              {post.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
