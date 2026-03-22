import { Metadata } from "next";
import { TOKEN, LINKS } from "@/lib/constants";
import { ALLOCATIONS } from "@/content/tokenomics";

export const metadata: Metadata = {
  title: "Whitepaper & Docs | DropAccess (DROPA)",
  description: "Read the DropAccess whitepaper — the full vision for token-gated e-commerce membership on Solana.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="text-gray-400 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold">
          <span className="gradient-text">Whitepaper</span>
        </h1>
        <p className="mt-4 text-gray-400">
          v1.0 &mdash; {TOKEN.name} ({TOKEN.symbol})
        </p>
      </div>

      <div className="rounded-2xl bg-surface-light border border-white/5 p-8 sm:p-12">
        <Section title="1. Abstract">
          <p>
            DropAccess (DROPA) is a Solana-based utility token designed to create a
            token-gated membership ecosystem for the global dropshipping industry. By
            holding DROPA tokens, users gain tiered access to vetted supplier databases,
            analytics tools, educational resources, and a community of e-commerce entrepreneurs.
          </p>
          <p>
            The dropshipping market is projected to reach $1.25 trillion by 2030. Despite
            this growth, access to quality suppliers and tools remains fragmented and often
            hidden behind expensive monthly subscriptions. DropAccess disrupts this model
            by replacing recurring payments with token ownership &mdash; buy once, hold,
            and access forever.
          </p>
        </Section>

        <Section title="2. Problem">
          <p>Current challenges in the dropshipping industry:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Fragmented supplier databases spread across multiple paid platforms</li>
            <li>Expensive monthly subscriptions ($50-$300/mo) for basic tools</li>
            <li>No unified community for sharing insights and strategies</li>
            <li>Scam suppliers and unverified product listings</li>
            <li>High barrier to entry for new entrepreneurs</li>
          </ul>
        </Section>

        <Section title="3. Solution">
          <p>
            DropAccess introduces token-gated access to a comprehensive e-commerce ecosystem:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong className="text-white">Vetted Supplier Database:</strong> Curated, verified suppliers updated monthly</li>
            <li><strong className="text-white">Analytics Tools:</strong> Product trend analysis, competition tracking, profit calculators</li>
            <li><strong className="text-white">Educational Resources:</strong> Courses, guides, and live workshops from successful sellers</li>
            <li><strong className="text-white">Community Access:</strong> Token-gated Discord channels, mastermind groups, and networking</li>
            <li><strong className="text-white">Tiered Membership:</strong> More tokens = higher tier = more features</li>
          </ul>
        </Section>

        <Section title="4. Token Details">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Name", TOKEN.name],
                  ["Symbol", TOKEN.symbol],
                  ["Network", TOKEN.network],
                  ["Decimals", String(TOKEN.decimals)],
                  ["Total Supply", TOKEN.totalSupply],
                  ["Contract", TOKEN.mintAddress],
                ].map(([key, val]) => (
                  <tr key={key} className="border-b border-white/5">
                    <td className="py-3 pr-4 text-gray-400 font-medium">{key}</td>
                    <td className="py-3 text-white font-mono text-xs">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="5. Token Distribution">
          <div className="space-y-3">
            {ALLOCATIONS.map((alloc) => (
              <div key={alloc.label} className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: alloc.color }} />
                <span className="text-white font-medium w-48">{alloc.label}</span>
                <div className="flex-1 bg-surface rounded-full h-3 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${alloc.percent}%`, backgroundColor: alloc.color, opacity: 0.7 }} />
                </div>
                <span className="text-sm font-bold text-white w-12 text-right">{alloc.percent}%</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="6. Membership Tiers">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { tier: "Bronze", tokens: "1,000+", perks: ["Basic supplier list", "Community chat", "Weekly newsletter"] },
              { tier: "Silver", tokens: "10,000+", perks: ["Full supplier database", "Analytics tools", "Monthly workshops", "All Bronze perks"] },
              { tier: "Gold", tokens: "100,000+", perks: ["1-on-1 mentoring", "Early feature access", "Governance voting", "All Silver perks"] },
            ].map((t) => (
              <div key={t.tier} className="rounded-xl bg-surface border border-white/5 p-5">
                <h4 className="text-lg font-bold text-white">{t.tier}</h4>
                <p className="text-sm text-primary mb-3">{t.tokens} DROPA</p>
                <ul className="space-y-1.5">
                  {t.perks.map((p) => (
                    <li key={p} className="text-xs text-gray-400 flex items-start gap-1.5">
                      <span className="text-accent mt-0.5">&#10003;</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="7. Roadmap">
          <p>
            See our full <a href="/roadmap" className="text-primary hover:text-primary-light underline">roadmap page</a> for
            detailed milestones across all four phases of development.
          </p>
        </Section>

        <Section title="8. Links">
          <div className="flex flex-wrap gap-4">
            {[
              { label: "Twitter", href: LINKS.twitter },
              { label: "Telegram", href: LINKS.telegram },
              { label: "Discord", href: LINKS.discord },
              { label: "SolScan", href: LINKS.solscan },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-surface border border-white/10 hover:border-primary/50 text-sm text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
