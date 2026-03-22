import { Metadata } from "next";
import { LINKS } from "@/lib/constants";
import { MISSION, VALUES, TEAM_MEMBERS } from "@/content/team";

export const metadata: Metadata = {
  title: "About | DropAccess (DROPA)",
  description: "Learn about the DropAccess mission, team, and values driving the future of decentralized e-commerce access.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Mission */}
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold">
          <span className="gradient-text">{MISSION.title}</span>
        </h1>
        <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {MISSION.description}
        </p>
      </div>

      {/* Values */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-center text-white mb-10">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((value) => (
            <div key={value.title} className="gradient-border rounded-xl p-6 bg-surface-light">
              <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-sm text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-center text-white mb-10">The Team</h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="rounded-xl p-6 bg-surface-light border border-white/5 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {member.name[0]}
              </div>
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-primary mb-2">{member.role}</p>
              <p className="text-sm text-gray-400">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Join CTA */}
      <div className="text-center rounded-2xl bg-surface-light border border-white/5 p-10">
        <h2 className="text-2xl font-bold text-white">Want to Contribute?</h2>
        <p className="mt-3 text-gray-400 max-w-lg mx-auto">
          DropAccess is community-driven. Join our community channels to get involved, share ideas, and help shape the project.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium transition-colors">
            Join Discord
          </a>
          <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-lg border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-medium transition-colors">
            Join Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
