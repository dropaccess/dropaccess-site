import Link from "next/link";
import Image from "next/image";
import { TOKEN, LINKS } from "@/lib/constants";
import CopyAddress from "@/components/shared/CopyAddress";

const FEATURES = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Token-Gated Access",
    description: "Hold DROPA to unlock exclusive dropshipping resources, supplier databases, and premium tools.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Solana Speed",
    description: "Built on Solana for lightning-fast transactions with near-zero fees. No gas headaches.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Global Community",
    description: "Join thousands of entrepreneurs sharing insights, strategies, and winning products.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Verified Suppliers",
    description: "Access a curated, regularly updated database of vetted dropshipping suppliers worldwide.",
  },
];

const STATS = [
  { label: "Total Supply", value: TOKEN.totalSupply },
  { label: "Network", value: "Solana" },
  { label: "Tax", value: "0%" },
  { label: "Minting", value: "Disabled" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="text-center max-w-3xl mx-auto">
            <Image src="/images/logo.png" alt="DropAccess" width={80} height={80} className="rounded-full mx-auto mb-6" />
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-medium mb-6">
              Built on Solana
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Unlock{" "}
              <span className="gradient-text">Exclusive Access</span>{" "}
              to Dropshipping
            </h1>
            <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
              {TOKEN.name} is a Solana utility token that gates access to premium
              dropshipping tools, vetted suppliers, and a thriving community of
              e-commerce entrepreneurs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={LINKS.buy}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold transition-colors w-full sm:w-auto text-center"
              >
                Buy DROPA
              </a>
              <Link
                href="/docs"
                className="px-8 py-3 rounded-lg border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-semibold transition-colors w-full sm:w-auto text-center"
              >
                Read Whitepaper
              </Link>
            </div>
            <div className="mt-6">
              <CopyAddress />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-surface-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Why <span className="gradient-text">DropAccess</span>?
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            Real utility, not empty promises. DROPA gives you tangible tools and resources for your e-commerce business.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="gradient-border rounded-xl p-6 bg-surface-light hover:bg-surface-lighter transition-colors"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 border border-white/5 p-10 sm:p-16 text-center glow">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Join?
          </h2>
          <p className="mt-4 text-gray-300 max-w-lg mx-auto">
            Get DROPA tokens and unlock your membership to the most exclusive dropshipping community in crypto.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={LINKS.buy}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold transition-colors"
            >
              Buy on Jupiter
            </a>
            <a
              href={LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-semibold transition-colors"
            >
              Join Telegram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
