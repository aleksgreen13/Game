import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, Monitor, Smartphone, Maximize } from 'lucide-react';

const screenshots = [
  {
    title: 'The Entrance Vault',
    subtitle: 'Where every journey begins',
    gradient: 'from-vault-700 via-vault-800 to-mystic-900',
    accent: 'bg-glow-green/10 border-glow-green/20',
  },
  {
    title: 'The Crystal Caverns',
    subtitle: 'Puzzles hidden in light and shadow',
    gradient: 'from-mystic-800 via-mystic-900 to-vault-900',
    accent: 'bg-glow-cyan/10 border-glow-cyan/20',
  },
  {
    title: 'The Echoing Halls',
    subtitle: 'Sound-based challenges await',
    gradient: 'from-earth-700 via-earth-800 to-vault-900',
    accent: 'bg-glow-gold/10 border-glow-gold/20',
  },
  {
    title: 'The Dream Spire',
    subtitle: 'Reality bends at the peak',
    gradient: 'from-vault-800 via-mystic-800 to-vault-900',
    accent: 'bg-mystic-400/10 border-mystic-400/20',
  },
];

export default function Gameplay() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % screenshots.length);
  const prev = () => setActive((p) => (p - 1 + screenshots.length) % screenshots.length);

  return (
    <section id="gameplay" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-vault-950 via-vault-900/50 to-vault-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.04)_0%,transparent_60%)]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-glow-gold bg-vault-800/50 border border-vault-600/30 rounded-full mb-4">
              Visual Showcase
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              A World to <span className="text-transparent bg-clip-text bg-gradient-to-r from-glow-gold to-glow-green">Explore</span>
            </h2>
            <p className="mt-6 text-lg text-vault-300 max-w-2xl mx-auto">
              Every realm is a visual masterpiece. Here's a glimpse of what awaits.
            </p>
          </div>

          {/* Main showcase */}
          <div className="relative mb-8">
            <div className={`aspect-video rounded-2xl overflow-hidden bg-gradient-to-br ${screenshots[active].gradient} border border-vault-700/30 shadow-2xl`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl ${screenshots[active].accent} border flex items-center justify-center`}>
                    <Maximize className="w-10 h-10 text-vault-300/40" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white/80 mb-2">{screenshots[active].title}</h3>
                  <p className="text-vault-300/60 text-sm">{screenshots[active].subtitle}</p>
                  <p className="text-vault-400/40 text-xs mt-3">Replace with actual gameplay screenshot</p>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-vault-900/80 backdrop-blur border border-vault-600/30 flex items-center justify-center text-vault-300 hover:text-glow-green hover:border-glow-green/40 transition-all"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-vault-900/80 backdrop-blur border border-vault-600/30 flex items-center justify-center text-vault-300 hover:text-glow-green hover:border-glow-green/40 transition-all"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-3 sm:gap-4 justify-center">
            {screenshots.map((shot, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`group relative w-20 h-14 sm:w-28 sm:h-[70px] rounded-lg overflow-hidden bg-gradient-to-br ${shot.gradient} border transition-all duration-300 ${
                  i === active
                    ? 'border-glow-green/60 ring-2 ring-glow-green/30 scale-105'
                    : 'border-vault-700/30 opacity-60 hover:opacity-100'
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Monitor className={`w-5 h-5 ${i === active ? 'text-glow-green/50' : 'text-vault-400/30'}`} />
                </div>
              </button>
            ))}
          </div>

          {/* Platform badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {[
              { icon: Smartphone, label: 'iOS' },
              { icon: Smartphone, label: 'Android' },
              { icon: Monitor, label: 'PC' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-vault-900/40 border border-vault-700/20 text-sm text-vault-300"
              >
                <Icon className="w-4 h-4 text-vault-400" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
