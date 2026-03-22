"use client";

import { TOKEN, LINKS } from "@/lib/constants";
import CopyAddress from "@/components/shared/CopyAddress";

const SWAP_STEPS = [
  {
    step: "1",
    title: "Connect Wallet",
    description: "Click the Jupiter widget below and connect your Phantom or Solflare wallet.",
  },
  {
    step: "2",
    title: "Set Amount",
    description: "Enter how much SOL you want to swap for DROPA tokens.",
  },
  {
    step: "3",
    title: "Confirm Swap",
    description: "Review the rate and click swap. Approve the transaction in your wallet.",
  },
];

export default function SwapPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          Swap for <span className="gradient-text">DROPA</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Buy {TOKEN.symbol} tokens directly using Jupiter, the leading Solana DEX aggregator.
        </p>
      </div>

      {/* Contract Address */}
      <div className="text-center mb-10 p-6 rounded-xl bg-surface-light border border-white/5">
        <p className="text-sm text-gray-400 mb-3">Contract Address</p>
        <CopyAddress />
      </div>

      {/* Jupiter Terminal Embed */}
      <div className="rounded-2xl bg-surface-light border border-white/5 p-6 mb-12">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-white mb-2">Swap via Jupiter</h2>
          <p className="text-sm text-gray-400">Best rates across all Solana DEXes</p>
        </div>

        {/* Jupiter iframe embed */}
        <div className="flex justify-center">
          <iframe
            src={`https://jup.ag/swap/SOL-${TOKEN.mintAddress}`}
            width="100%"
            height="600"
            className="rounded-xl border border-white/10 max-w-md"
            title="Jupiter Swap"
            allow="clipboard-write"
          />
        </div>

        <div className="mt-4 text-center">
          <a
            href={`https://jup.ag/swap/SOL-${TOKEN.mintAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:text-primary-light underline"
          >
            Open Jupiter in full screen
          </a>
        </div>
      </div>

      {/* Alternative DEX Links */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white text-center mb-6">Also Available On</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              name: "Jupiter",
              description: "Best aggregated rates",
              href: `https://jup.ag/swap/SOL-${TOKEN.mintAddress}`,
            },
            {
              name: "Raydium",
              description: "Solana's top AMM DEX",
              href: `https://raydium.io/swap/?inputMint=sol&outputMint=${TOKEN.mintAddress}`,
            },
            {
              name: "Birdeye",
              description: "Charts & analytics",
              href: `https://birdeye.so/token/${TOKEN.mintAddress}?chain=solana`,
            },
          ].map((dex) => (
            <a
              key={dex.name}
              href={dex.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-xl bg-surface-light border border-white/5 hover:border-primary/30 transition-colors text-center"
            >
              <h3 className="text-lg font-semibold text-white">{dex.name}</h3>
              <p className="text-sm text-gray-400 mt-1">{dex.description}</p>
            </a>
          ))}
        </div>
      </div>

      {/* How to Swap Steps */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white text-center mb-6">How to Swap</h2>
        <div className="space-y-4">
          {SWAP_STEPS.map((s) => (
            <div key={s.step} className="flex gap-4 p-5 rounded-xl bg-surface-light border border-white/5">
              <div className="w-9 h-9 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0 text-sm">
                {s.step}
              </div>
              <div>
                <h3 className="font-semibold text-white">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price Info */}
      <div className="rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 border border-white/5 p-8 text-center glow">
        <h2 className="text-2xl font-bold text-white">Live Token Info</h2>
        <p className="mt-2 text-gray-300 text-sm">
          Track DROPA price, volume, and holders in real-time.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href={`https://dexscreener.com/solana/${TOKEN.mintAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium transition-colors"
          >
            DEXScreener
          </a>
          <a
            href={`https://birdeye.so/token/${TOKEN.mintAddress}?chain=solana`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-lg border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-medium transition-colors"
          >
            Birdeye
          </a>
          <a
            href={`https://solscan.io/token/${TOKEN.mintAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-lg border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-medium transition-colors"
          >
            SolScan
          </a>
        </div>
      </div>
    </div>
  );
}
