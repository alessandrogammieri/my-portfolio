import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const slug = (await params).slug;
  return {
    title: {
      default: `Post: ${slug}`,
      template:
        "%s | Alessandro Gammieri - Full Stack Developer & Web Architect",
    },
    description: `This is the post page for ${slug}.`,
  };
};

export default async function Post({ params }: Props) {
  const slug = (await params).slug;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Post Page {slug} </h1>
        <p className="text-lg">
          This is the Post page {slug} of our application.
        </p>
      </main>
    </div>
  );
}
