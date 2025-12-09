import BlogPostList from "@/components/sections/BlogPostList";
import { BlogPost, BlogPostSection } from "@/lib/types";
import axios from "axios";

export const metadata = {
  title: {
    default: "Blog",
  },
  description:
    "Nel mio blog condivido articoli e risorse sullo sviluppo web moderno. Condivido esperienze e soluzioni pratiche per chi lavora con tecnologie moderne come Node.js, Next.js e React.",
};

export default async function Blog() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const { data: posts } = await axios.get<BlogPost[]>(
    `${baseUrl}/data/blogs.json`
  );

  const blogSections: BlogPostSection[] = [
    {
      posts: [posts[0]],
      layout: "single",
    },
    {
      posts: [posts[1], posts[2]],
      layout: "grid",
    },
    {
      title: "Earlier posts",
      posts: posts.slice(3),
      layout: "grid",
    },
  ];

  return (
    <div className="min-w-0 w-full flex justify-center relative p-3 md:p-6 lg:p-10">
      <main className="min-w-0 w-full flex justify-center relative">
        <div className="max-w-5xl w-full flex flex-col relative py-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-balance mb-3 md:mb-6 lg:mb-10 ml-6">
            Writing about design and tech...
          </h1>
          <div className="min-w-0 w-full flex flex-col gap-10 relative">
            {blogSections.map((section, index) => (
              <BlogPostList key={index} section={section} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
