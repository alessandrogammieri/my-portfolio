"use client";

import { useState } from "react";
import { HiClipboard, HiCheck } from "react-icons/hi2";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language = "bash",
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="relative mb-6 bg-gray-900 dark:bg-gray-950 border border-gray-700/50 dark:border-gray-800/50 rounded-xl overflow-hidden min-h-[2.5rem] isolate">
      {/* Language Badge - Header */}
      {language && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700/50 dark:border-gray-800/50">
          <span className="text-[11px] font-mono text-gray-500">
            {language}
          </span>
          {/* Copy Button in header */}
          <button
            onClick={handleCopy}
            aria-label={copied ? "Code copied" : "Copy code"}
            className="cursor-pointer group flex items-center justify-center w-7 h-7 rounded-lg bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-200"
          >
            {copied ? (
              <HiCheck className="w-3.5 h-3.5 text-green-400" />
            ) : (
              <HiClipboard className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-200 transition-colors" />
            )}
          </button>
        </div>
      )}

      <div className="relative flex flex-1">
        <div className="relative overflow-x-auto min-w-0 w-full">
          <pre
            className={`p-4 overflow-x-auto text-sm ${
              showLineNumbers ? "pl-12" : ""
            }`}
          >
            <code className={`language-${language} text-gray-100`}>{code}</code>
          </pre>
        </div>

        {/* Copy Button - only show if no language badge */}
        {!language && (
          <div className="absolute top-2 right-2 z-10">
            <button
              onClick={handleCopy}
              aria-label={copied ? "Code copied" : "Copy code"}
              className="cursor-pointer group flex items-center justify-center w-8 h-8 rounded-lg bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-200"
            >
              {copied ? (
                <HiCheck className="w-4 h-4 text-green-400" />
              ) : (
                <HiClipboard className="w-4 h-4 text-gray-400 group-hover:text-gray-200 transition-colors" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
