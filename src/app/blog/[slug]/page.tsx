import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShareButtons from "@/components/ui/ShareButtons";
import BlogCard from "@/components/ui/BlogCard";
import BlogContent from "@/components/ui/BlogContent";
import { BlogPost } from "@/lib/types";
import axios from "axios";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const { data: posts } = await axios.get<BlogPost[]>(
    `${baseUrl}/data/blogs.json`
  );
  return posts.map((post) => ({ slug: post.slug }));
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const { data: posts } = await axios.get<BlogPost[]>(
    `${baseUrl}/data/blogs.json`
  );
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post non trovato",
    };
  }

  return {
    title: {
      default: post.title,
      template:
        "%s | Alessandro Gammieri - Full Stack Developer & Web Architect",
    },
    description: post.category,
  };
};

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const { data: posts } = await axios.get<BlogPost[]>(
    `${baseUrl}/data/blogs.json`
  );
  const post = posts.find((p) => p.slug === slug);
  const recentPosts = posts.slice(0, 2);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-w-0 w-full flex justify-center relative p-3 md:p-6 lg:p-10">
      <main className="min-w-0 w-full flex justify-center relative">
        <div className="max-w-5xl w-full flex flex-col items-center gap-4 md:gap-6 lg:gap-10 relative py-3">
          <div className="max-w-3xl w-full flex flex-col items-center gap-4 relative text-center">
            <Link
              href="/blog"
              title="Explore case study"
              aria-label="Explore detailed case study"
              className="group flex items-center text-sm mt-3 text-cyan-600 dark:text-cyan-500 hover:text-[#0a0a0a] hover:dark:text-white transition-all duration-300"
            >
              <span className="font-semibold">Blog</span>
            </Link>
            <span className="text-xs text-gray-600 dark:text-gray-400 mb-3">
              {post.publishedAt}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              {post.title}
            </h1>
          </div>
          <div className="flex justify-center relative mb-8">
            <div className="flex justify-center items-center gap-4 relative">
              <div className="flex items-center relative">
                <div className="flex items-center -space-x-2">
                  <Image
                    src={post.authorAvatar}
                    alt={post.author}
                    width={28}
                    height={28}
                    className="rounded-full border border-foreground-light/60 dark:border-foreground-dark/60 backdrop-blur-lg bg-black/30 transition-colors duration-300 relative z-30"
                  />
                </div>
              </div>
              <span className="flex flex-col sm:flex-row items-start sm:items-center text-sm text-cyan-600 dark:text-cyan-500">
                {post.author}
              </span>
            </div>
          </div>
          {post.coverImage && (
            <div className="min-w-0 w-full flex flex-col relative m-0 rounded-2xl overflow-hidden border border-foreground-light/20 dark:border-foreground-dark/20 bg-background/50 backdrop-blur-sm">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={960}
                height={0}
                className="w-full h-auto"
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
          <article className="max-w-2xl w-full flex flex-col m-auto relative">
            {post.fullContent ? (
              <BlogContent sections={post.fullContent} />
            ) : (
              <p className="mt-2 mb-3 text-sm sm:text-base">{post.content}</p>
            )}
          </article>
          <div className="min-w-0 w-full flex flex-col sm:flex-row items-center justify-center gap-4 relative mt-8 mb-4">
            <span className="text-gray-600 dark:text-gray-400">
              Share this post:
            </span>
            <ShareButtons
              url={`https://tuosito.com/blog/${post.slug}`}
              title={post.title}
              description={post.category}
            />
          </div>
          {recentPosts.length > 0 && (
            <div className="min-w-0 w-full flex flex-col items-center gap-10 relative mt-10">
              <div className="min-w-0 max-w-10 h-0.5 w-full flex relative bg-gray-400 dark:bg-gray-600"></div>
              <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mb-6">
                Recent posts
              </h2>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 relative gap-4 mb-10">
                {recentPosts.map((recentPost) => (
                  <BlogCard
                    key={recentPost.id}
                    post={recentPost}
                    variant="standard"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
