"use client";

import { useState } from "react";
import { HiOutlineLink, HiOutlineEnvelope, HiCheck } from "react-icons/hi2";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

interface ShareButtonsProps {
  url: string;
  title: string;
  description?: string;
}

export default function ShareButtons({
  url,
  title,
  description = "",
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const handleShareLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`;
    window.open(linkedInUrl, "_blank", "noopener,noreferrer");
  };

  const handleShareX = () => {
    const xUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(title)}`;
    window.open(xUrl, "_blank", "noopener,noreferrer");
  };

  const handleShareEmail = () => {
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(`${description}\n\n${url}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 relative">
      {/* LinkedIn */}
      <button
        onClick={handleShareLinkedIn}
        aria-label="Share on LinkedIn"
        className="cursor-pointer group flex items-center justify-center w-9 h-9 rounded-full bg-gray-500/10 hover:bg-cyan-500/10 dark:bg-gray-500/10 dark:hover:bg-cyan-500/10 border border-gray-400/20 hover:border-cyan-500/50 dark:border-gray-400/10 dark:hover:border-cyan-500/50 transition-all duration-200"
      >
        <FaLinkedinIn className="w-4 h-4 text-cyan-600 dark:text-cyan-500 transition-colors" />
      </button>

      {/* X (Twitter) */}
      <button
        onClick={handleShareX}
        aria-label="Share on X"
        className="cursor-pointer group flex items-center justify-center w-9 h-9 rounded-full bg-gray-500/10 hover:bg-cyan-500/10 dark:bg-gray-500/10 dark:hover:bg-cyan-500/10 border border-gray-400/20 hover:border-cyan-500/50 dark:border-gray-400/10 dark:hover:border-cyan-500/50 transition-all duration-200"
      >
        <FaXTwitter className="w-4 h-4 text-cyan-600 dark:text-cyan-500 transition-colors" />
      </button>

      {/* Email */}
      <button
        onClick={handleShareEmail}
        aria-label="Share via Email"
        className="cursor-pointer group flex items-center justify-center w-9 h-9 rounded-full bg-gray-500/10 hover:bg-cyan-500/10 dark:bg-gray-500/10 dark:hover:bg-cyan-500/10 border border-gray-400/20 hover:border-cyan-500/50 dark:border-gray-400/10 dark:hover:border-cyan-500/50 transition-all duration-200"
      >
        <HiOutlineEnvelope className="w-4 h-4 text-cyan-600 dark:text-cyan-500 transition-colors" />
      </button>

      {/* Copy Link */}
      <button
        onClick={handleCopyLink}
        aria-label={copied ? "Link copied" : "Copy link"}
        className="cursor-pointer group flex items-center justify-center w-9 h-9 rounded-full bg-gray-500/10 hover:bg-cyan-500/10 dark:bg-gray-500/10 dark:hover:bg-cyan-500/10 border border-gray-400/20 hover:border-cyan-500/50 dark:border-gray-400/10 dark:hover:border-cyan-500/50 transition-all duration-200"
      >
        {copied ? (
          <HiCheck className="w-4 h-4 text-green-600 dark:text-green-500" />
        ) : (
          <HiOutlineLink className="w-4 h-4 text-cyan-600 dark:text-cyan-500 transition-colors" />
        )}
      </button>
    </div>
  );
}
