import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/types";
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

  return (
    <div className="min-w-0 w-full flex justify-center relative p-3 md:p-6 lg:p-10">
      <main className="min-w-0 w-full flex justify-center relative">
        <div className="max-w-5xl w-full flex flex-col relative py-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-balance mb-3 md:mb-6 lg:mb-10 ml-6">
            Appunti di design e sviluppo...
          </h1>
          <div className="min-w-0 w-full flex flex-col gap-10 relative">
            {/* Featured Post (primo post) */}
            <div className="w-full grid grid-cols-1 relative gap-4 mb-10">
              <Link
                href={`/blog/${posts[0].slug}`}
                title={posts[0].title}
                className="min-w-0 w-full flex p-0 border-none outline-0 bg-none"
              >
                <div className="min-w-0 w-full flex flex-col md:flex-row gap-6 relative p-1 border border-transparent rounded-2xl hover:bg-gray-500/15 focus-within:bg-gray-500/15 active:bg-gray-500/15 transition-colors duration-300">
                  {posts[0].image && (
                    <div className="min-w-0 w-full flex flex-col relative rounded-2xl overflow-hidden border border-foreground-light/20 dark:border-foreground-dark/20 bg-background/50 backdrop-blur-sm bg-black/30 transition-colors duration-300">
                      <Image
                        src={posts[0].image}
                        alt={posts[0].title}
                        width={960}
                        height={0}
                        className="w-full h-auto"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  )}
                  <div className="min-w-0 w-full flex relative">
                    <div className="max-w-md w-full flex justify-center flex-col gap-5 relative py-6 px-3 md:px-6 lg:px-10">
                      <div className="flex items-center gap-6 relative">
                        <Image
                          src={posts[0].authorAvatar}
                          alt={posts[0].author}
                          width={28}
                          height={28}
                          className="rounded-full border border-foreground-light/60 dark:border-foreground-dark/60 backdrop-blur-lg bg-black/30 transition-colors duration-300 relative z-30"
                        />
                        <div className="flex items-center gap-4 relative">
                          <span className="text-xs">{posts[0].author}</span>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {posts[0].publishedAt}
                        </span>
                      </div>
                      <span className="text-lg md:text-xl lg:text-2xl font-semibold">
                        {posts[0].title}
                      </span>
                      <span className="text-xs md:text-sm font-light text-gray-600 dark:text-gray-400">
                        {posts[0].category}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Grid con 2 post (post 2 e 3) */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 relative gap-4 mb-10">
              {posts.slice(1, 3).map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  title={post.title}
                  className="min-w-0 w-full flex p-0 border-none outline-0 bg-none"
                >
                  <div className="min-w-0 w-full flex flex-col gap-6 relative p-1 border border-transparent rounded-2xl hover:bg-gray-500/15 focus-within:bg-gray-500/15 active:bg-gray-500/15 transition-colors duration-300">
                    {post.image && (
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
                    <div className="min-w-0 w-full flex relative">
                      <div className="max-w-md w-full flex justify-center flex-col gap-5 relative py-6 px-3 md:px-6 lg:px-10">
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
                        <span className="text-lg md:text-xl lg:text-2xl font-semibold">
                          {post.title}
                        </span>
                        <span className="text-xs md:text-sm font-light text-gray-600 dark:text-gray-400">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Earlier posts (dal post 4 in poi, senza immagini) */}
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-balance ml-6">
              Earlier posts
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 relative gap-4 mb-10">
              {posts.slice(3).map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  title={post.title}
                  className="min-w-0 w-full flex p-0 border-none outline-0 bg-none"
                >
                  <div className="min-w-0 w-full flex flex-col md:flex-row gap-6 relative p-1 border border-transparent rounded-2xl hover:bg-gray-500/15 focus-within:bg-gray-500/15 active:bg-gray-500/15 transition-colors duration-300">
                    <div className="min-w-0 w-full flex relative">
                      <div className="max-w-md w-full flex justify-center flex-col gap-5 relative py-6 px-3 md:px-6 lg:px-10">
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
                        <span className="text-lg md:text-xl lg:text-2xl font-semibold">
                          {post.title}
                        </span>
                        <span className="text-xs md:text-sm font-light text-gray-600 dark:text-gray-400">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
