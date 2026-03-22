import { Metadata } from "next";
import { PHASES } from "@/content/roadmap";

export const metadata: Metadata = {
  title: "Roadmap | DropAccess (DROPA)",
  description: "See what's next for DropAccess — from token launch to a full e-commerce membership ecosystem.",
};

export default function RoadmapPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold">
          <span className="gradient-text">Roadmap</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Our journey from token launch to building the leading decentralized e-commerce membership platform.
        </p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

        <div className="space-y-12">
          {PHASES.map((phase) => (
            <div key={phase.phase} className="relative pl-16">
              {/* Dot */}
              <div
                className={`absolute left-4 top-1 w-5 h-5 rounded-full border-2 ${
                  phase.status === "current"
                    ? "bg-primary border-primary animate-pulse"
                    : "bg-surface-light border-gray-600"
                }`}
              />

              <div className="rounded-xl p-6 bg-surface-light border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {phase.phase}
                  </span>
                  {phase.status === "current" && (
                    <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      In Progress
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
