import { useState, useEffect } from 'react';
import { Lock, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Gameplay', href: '#gameplay' },
    { label: 'Join', href: '#waitlist' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-vault-950/90 backdrop-blur-xl border-b border-vault-700/30 shadow-lg shadow-vault-950/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-vault-500 to-glow-green flex items-center justify-center shadow-lg shadow-glow-green/20 group-hover:shadow-glow-green/40 transition-shadow">
              <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-vault-950" />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight">
              Mindscape<span className="text-glow-green"> Vaults</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-vault-200 hover:text-glow-green transition-colors rounded-lg hover:bg-vault-800/50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="ml-3 px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-vault-500 to-vault-400 text-white rounded-lg hover:from-vault-400 hover:to-glow-green hover:text-vault-950 transition-all duration-300 shadow-lg shadow-vault-500/25 hover:shadow-glow-green/30"
            >
              Join Waitlist
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-vault-200 hover:text-glow-green transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-vault-950/95 backdrop-blur-xl border-b border-vault-700/30">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-vault-200 hover:text-glow-green hover:bg-vault-800/50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 px-4 py-3 text-sm font-semibold text-center bg-gradient-to-r from-vault-500 to-vault-400 text-white rounded-lg"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
