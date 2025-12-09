import CodeBlock from "./CodeBlock";
import { BlogContentSection } from "@/lib/types";

interface BlogContentProps {
  sections: BlogContentSection[];
}

export default function BlogContent({ sections }: BlogContentProps) {
  return (
    <>
      {sections.map((section, index) => {
        switch (section.type) {
          case "heading":
            return (
              <div
                key={index}
                className="flex items-center relative mt-6 mb-3 gap-2"
              >
                <h2 className="font-bold text-lg sm:text-xl">
                  {section.content as string}
                </h2>
              </div>
            );

          case "paragraph":
            return (
              <p key={index} className="mt-2 mb-3 text-sm sm:text-base">
                {section.content as string}
              </p>
            );

          case "list":
            return (
              <ul key={index} className="list-disc m-0 pl-6 pr-0 py-0">
                {(section.content as string[]).map((item, i) => (
                  <li
                    key={i}
                    className="pl-2 pr-0 py-0 mt-1 mb-2 text-sm sm:text-base"
                  >
                    {/* Support for markdown-style bold */}
                    {item
                      .split("**")
                      .map((part, j) =>
                        j % 2 === 0 ? (
                          <span key={j}>{part}</span>
                        ) : (
                          <strong key={j}>{part}</strong>
                        )
                      )}
                  </li>
                ))}
              </ul>
            );

          case "code":
            return (
              <div key={index} className="my-4">
                <CodeBlock
                  code={section.content as string}
                  language={section.language || "text"}
                />
              </div>
            );

          default:
            return null;
        }
      })}
    </>
  );
}
