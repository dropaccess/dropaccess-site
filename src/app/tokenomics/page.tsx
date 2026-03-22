import { Metadata } from "next";
import { TOKEN } from "@/lib/constants";
import { ALLOCATIONS, TOKEN_FEATURES } from "@/content/tokenomics";

export const metadata: Metadata = {
  title: "Tokenomics | DropAccess (DROPA)",
  description: "Explore the DROPA token distribution, supply mechanics, and vesting schedule.",
};

function PieChart() {
  const size = 200;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 80;
  let cumulativePercent = 0;

  function getCoordinates(percent: number) {
    const x = Math.cos(2 * Math.PI * percent) * radius;
    const y = Math.sin(2 * Math.PI * percent) * radius;
    return [cx + x, cy + y];
  }

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-64 h-64 mx-auto">
      {ALLOCATIONS.map((alloc) => {
        const startPercent = cumulativePercent;
        cumulativePercent += alloc.percent / 100;
        const [startX, startY] = getCoordinates(startPercent);
        const [endX, endY] = getCoordinates(cumulativePercent);
        const largeArc = alloc.percent > 50 ? 1 : 0;
        const d = [
          `M ${cx} ${cy}`,
          `L ${startX} ${startY}`,
          `A ${radius} ${radius} 0 ${largeArc} 1 ${endX} ${endY}`,
          "Z",
        ].join(" ");
        return <path key={alloc.label} d={d} fill={alloc.color} opacity={0.85} />;
      })}
      <circle cx={cx} cy={cy} r={35} fill="var(--color-surface)" />
      <text x={cx} y={cy - 6} textAnchor="middle" className="text-[10px] fill-gray-400">
        Total
      </text>
      <text x={cx} y={cy + 8} textAnchor="middle" className="text-[10px] fill-white font-bold">
        1B
      </text>
    </svg>
  );
}

export default function TokenomicsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold">
          <span className="gradient-text">Tokenomics</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Transparent, fair, and built to last. Here&apos;s exactly how {TOKEN.totalSupply} DROPA tokens are distributed.
        </p>
      </div>

      {/* Chart + Allocations */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <PieChart />
        <div className="space-y-4">
          {ALLOCATIONS.map((alloc) => (
            <div key={alloc.label} className="flex items-center gap-4 p-4 rounded-xl bg-surface-light border border-white/5">
              <div className="w-4 h-4 rounded-full shrink-0" style={{ backgroundColor: alloc.color }} />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white">{alloc.label}</span>
                  <span className="text-primary font-bold">{alloc.percent}%</span>
                </div>
                <div className="text-sm text-gray-400">{alloc.tokens} tokens &mdash; {alloc.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Token Features */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TOKEN_FEATURES.map((feature) => (
          <div key={feature.title} className="rounded-xl p-6 bg-surface-light border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
