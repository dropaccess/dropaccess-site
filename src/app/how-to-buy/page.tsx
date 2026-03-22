import { Metadata } from "next";
import { TOKEN, LINKS } from "@/lib/constants";
import CopyAddress from "@/components/shared/CopyAddress";

export const metadata: Metadata = {
  title: "How to Buy | DropAccess (DROPA)",
  description: "Step-by-step guide to buying DROPA tokens on Solana using Jupiter, Phantom wallet, and more.",
};

const STEPS = [
  {
    step: "1",
    title: "Get a Solana Wallet",
    description: "Download Phantom Wallet (recommended) from phantom.app. Available as a browser extension and mobile app. Create a new wallet and securely save your recovery phrase.",
  },
  {
    step: "2",
    title: "Get SOL",
    description: "Buy SOL on any exchange (Coinbase, Binance, Kraken) and send it to your Phantom wallet address. You'll need SOL to swap for DROPA tokens. Even a small amount works.",
  },
  {
    step: "3",
    title: "Go to Jupiter",
    description: "Visit jup.ag — the best DEX aggregator on Solana. Connect your Phantom wallet by clicking 'Connect Wallet' in the top right.",
  },
  {
    step: "4",
    title: "Swap SOL for DROPA",
    description: "Select SOL as the input token. Paste the DROPA contract address (below) in the output field. Enter the amount of SOL you want to swap and confirm the transaction.",
  },
  {
    step: "5",
    title: "Confirm & Hold",
    description: "Approve the transaction in your Phantom wallet. Your DROPA tokens will appear in your wallet within seconds. Hold to unlock membership benefits!",
  },
];

export default function HowToBuyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold">
          How to Buy <span className="gradient-text">DROPA</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Get your {TOKEN.symbol} tokens in 5 simple steps. No complicated process — just a wallet and some SOL.
        </p>
      </div>

      {/* Contract Address */}
      <div className="text-center mb-12 p-6 rounded-xl bg-surface-light border border-white/5">
        <p className="text-sm text-gray-400 mb-3">Contract Address</p>
        <CopyAddress />
        <p className="text-xs text-gray-500 mt-2">Always verify the contract address before swapping</p>
      </div>

      {/* Steps */}
      <div className="space-y-6 mb-16">
        {STEPS.map((s) => (
          <div key={s.step} className="flex gap-5 p-6 rounded-xl bg-surface-light border border-white/5">
            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0">
              {s.step}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">{s.title}</h3>
              <p className="text-sm text-gray-400">{s.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { label: "Buy on Jupiter", href: LINKS.buy, primary: true },
          { label: "Get Phantom Wallet", href: "https://phantom.app", primary: false },
          { label: "View on SolScan", href: LINKS.solscan, primary: false },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`block text-center px-6 py-3 rounded-xl font-medium transition-colors ${
              link.primary
                ? "bg-primary hover:bg-primary-dark text-white"
                : "bg-surface-light border border-white/10 hover:border-primary/50 text-gray-300 hover:text-white"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
