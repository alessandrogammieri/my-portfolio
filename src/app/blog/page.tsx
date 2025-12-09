import BlogPostList from "@/components/sections/BlogPostList";
import { blogSections } from "@/data/blogs";

export const metadata = {
  title: {
    default: "Blog",
  },
  description:
    "Nel mio blog condivido articoli e risorse sullo sviluppo web moderno. Condivido esperienze e soluzioni pratiche per chi lavora con tecnologie moderne come Node.js, Next.js e React.",
};

export default function Blog() {
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
