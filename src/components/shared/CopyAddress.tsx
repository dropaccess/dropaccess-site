"use client";

import { useState } from "react";
import { TOKEN } from "@/lib/constants";

export default function CopyAddress() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(TOKEN.mintAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-lighter border border-white/10 hover:border-primary/50 transition-colors text-sm font-mono text-gray-300"
    >
      <span className="truncate max-w-[200px]">{TOKEN.mintAddress}</span>
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {copied ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        )}
      </svg>
      {copied && <span className="text-accent text-xs">Copied!</span>}
    </button>
  );
}
