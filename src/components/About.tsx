import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Brain, Compass, Eye, Scroll } from 'lucide-react';

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-vault-950 via-vault-900/80 to-vault-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,222,128,0.04)_0%,transparent_70%)]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-glow-green bg-vault-800/50 border border-vault-600/30 rounded-full mb-4">
              The Game
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Enter the <span className="text-transparent bg-clip-text bg-gradient-to-r from-glow-green to-glow-cyan">Dreamworld</span>
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-vault-300 max-w-3xl mx-auto leading-relaxed">
              Mindscape Vaults is a puzzle-adventure game that invites you into a captivating digital
              dream world filled with interconnected challenges and a rich narrative. Every vault
              you unlock reveals deeper layers of mystery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Visual placeholder */}
            <div className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-vault-800 to-vault-900 border border-vault-700/30 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-vault-700/50 border border-vault-600/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Compass className="w-10 h-10 text-glow-green/60" />
                    </div>
                    <p className="text-vault-400 text-sm">Gameplay Preview</p>
                    <p className="text-vault-500 text-xs mt-1">Replace with trailer or screenshot</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-vault-950/60 to-transparent" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-glow-green/10 to-glow-cyan/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>

            {/* Feature list */}
            <div className="space-y-6">
              {[
                {
                  icon: Brain,
                  title: 'Interconnected Puzzles',
                  desc: 'Each challenge links to the next, creating a web of mystery that rewards creative thinking and persistence.',
                },
                {
                  icon: Scroll,
                  title: 'Rich Narrative',
                  desc: 'Uncover a deep story woven through every vault. The more you explore, the more the world reveals.',
                },
                {
                  icon: Eye,
                  title: 'Dreamlike Realms',
                  desc: 'Navigate stunning, surreal environments that blur the line between dreams and digital reality.',
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group flex gap-4 p-5 rounded-xl bg-vault-900/40 border border-vault-700/20 hover:border-glow-green/30 transition-all duration-300 hover:bg-vault-800/40"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-vault-800/60 border border-vault-600/20 flex items-center justify-center group-hover:border-glow-green/40 transition-colors">
                    <Icon className="w-6 h-6 text-glow-green/70 group-hover:text-glow-green transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-vault-100 mb-1">{title}</h3>
                    <p className="text-sm text-vault-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
