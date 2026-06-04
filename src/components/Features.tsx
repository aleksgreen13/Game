import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  Lock,
  Layers,
  Zap,
  Globe,
  Lightbulb,
  Users,
} from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: 'Vault System',
    desc: 'Progressively unlock interconnected vaults, each containing unique puzzle mechanics and story fragments.',
    glow: 'from-glow-green/20 to-glow-green/5',
  },
  {
    icon: Layers,
    title: 'Layered Realms',
    desc: 'Explore 5 distinct realms that shift and evolve as you solve puzzles, revealing hidden paths.',
    glow: 'from-mystic-400/20 to-mystic-400/5',
  },
  {
    icon: Zap,
    title: 'Dynamic Puzzles',
    desc: 'Over 100 handcrafted puzzles that adapt to your play style, ensuring no two solutions are the same.',
    glow: 'from-glow-gold/20 to-glow-gold/5',
  },
  {
    icon: Globe,
    title: 'Open Exploration',
    desc: 'Roam freely through a surreal dream world. There are no railroads here — only discovery.',
    glow: 'from-glow-cyan/20 to-glow-cyan/5',
  },
  {
    icon: Lightbulb,
    title: 'Hint Ecosystem',
    desc: 'A built-in hint system that nudges without spoiling, respecting your intelligence at every step.',
    glow: 'from-earth-400/20 to-earth-400/5',
  },
  {
    icon: Users,
    title: 'Community Challenges',
    desc: 'Team up with other players for special co-op vaults and seasonal puzzle events.',
    glow: 'from-vault-400/20 to-vault-400/5',
  },
];

export default function Features() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-vault-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(74,222,128,0.03)_0%,transparent_70%)]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-glow-cyan bg-vault-800/50 border border-vault-600/30 rounded-full mb-4">
              Core Features
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              What Makes It <span className="text-transparent bg-clip-text bg-gradient-to-r from-glow-cyan to-glow-green">Unique</span>
            </h2>
            <p className="mt-6 text-lg text-vault-300 max-w-2xl mx-auto">
              Every feature designed to pull you deeper into the mystery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`group relative rounded-2xl border border-vault-700/20 bg-vault-900/30 p-6 sm:p-8 hover:border-vault-600/40 transition-all duration-500 overflow-hidden ${
                    isVisible ? 'animate-slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Glow background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-vault-800/60 border border-vault-600/20 flex items-center justify-center mb-5 group-hover:border-glow-green/40 group-hover:shadow-lg group-hover:shadow-glow-green/10 transition-all duration-300">
                      <Icon className="w-7 h-7 text-vault-300 group-hover:text-glow-green transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-vault-100 mb-3 group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-vault-400 leading-relaxed group-hover:text-vault-300 transition-colors">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
