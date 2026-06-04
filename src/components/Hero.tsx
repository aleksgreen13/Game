import { Lock, ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-vault-950" />
      <div className="absolute inset-0 bg-gradient-radial from-vault-800/40 via-vault-900/60 to-vault-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(74,222,128,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(96,165,250,0.06)_0%,transparent_60%)]" />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-glow-green/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-mystic-500/5 blur-3xl animate-float-delay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-vault-500/3 blur-[120px]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(74,222,128,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Vault door icon floating */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] opacity-[0.04]">
        <Lock className="w-full h-full text-glow-green" strokeWidth={0.5} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vault-800/60 border border-vault-600/30 text-sm font-medium text-glow-green mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Coming Soon - Join the Waitlist
          </div>
        </div>

        <h1 className="animate-slide-up text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-6">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-vault-100 to-vault-200">
            MINDSCAPE
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-glow-green via-vault-300 to-glow-cyan mt-2">
            VAULTS
          </span>
        </h1>

        <p className="animate-slide-up text-lg sm:text-xl md:text-2xl text-vault-300 font-light max-w-2xl mx-auto mb-4 leading-relaxed" style={{ animationDelay: '0.1s' }}>
          Unlock the mystery within. A puzzle-adventure that pulls you into a
          captivating digital dream world.
        </p>

        <p className="animate-slide-up text-sm sm:text-base text-vault-400 max-w-xl mx-auto mb-10" style={{ animationDelay: '0.2s' }}>
          Interconnected challenges. Rich narrative. Infinite wonder.
        </p>

        <div className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '0.3s' }}>
          <a
            href="#waitlist"
            className="group relative px-8 py-4 text-base sm:text-lg font-bold bg-gradient-to-r from-glow-green to-vault-400 text-vault-950 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(74,222,128,0.3)] hover:scale-105"
          >
            <span className="relative z-10">Join the Waitlist</span>
            <div className="absolute inset-0 bg-gradient-to-r from-vault-400 to-glow-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="#gameplay"
            className="px-8 py-4 text-base sm:text-lg font-medium text-vault-200 border border-vault-600/40 rounded-xl hover:border-glow-green/50 hover:text-glow-green transition-all duration-300 backdrop-blur-sm bg-vault-900/30"
          >
            See Gameplay
          </a>
        </div>

        {/* Stats row */}
        <div className="animate-slide-up mt-16 flex items-center justify-center gap-8 sm:gap-12 text-center" style={{ animationDelay: '0.5s' }}>
          {[
            { value: '100+', label: 'Puzzles' },
            { value: '5', label: 'Realms' },
            { value: '1', label: 'Mystery' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-bold text-glow-green">{stat.value}</div>
              <div className="text-xs sm:text-sm text-vault-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-vault-500" />
      </div>
    </section>
  );
}
