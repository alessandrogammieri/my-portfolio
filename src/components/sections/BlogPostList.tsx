import BlogCard from "@/components/ui/BlogCard";
import { BlogPostSection } from "@/lib/types";

interface BlogPostListProps {
  section: BlogPostSection;
}

export default function BlogPostList({ section }: BlogPostListProps) {
  return (
    <div className="min-w-0 w-full flex flex-col gap-10 relative">
      {/* Title se presente */}
      {section.title && (
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-balance ml-6">
          {section.title}
        </h2>
      )}

      {/* Posts Grid */}
      <div
        className={`w-full grid ${
          section.layout === "grid"
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1"
        } relative gap-4 mb-10`}
      >
        {section.posts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            variant={
              section.layout === "single"
                ? "featured"
                : post.image
                  ? "standard"
                  : "minimal"
            }
          />
        ))}
      </div>
    </div>
  );
}
