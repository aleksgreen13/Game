import { Lock, Github, Twitter, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Github, label: 'Discord', href: '#' },
];

const footerLinks = [
  {
    title: 'Game',
    links: ['About', 'Features', 'Gameplay', 'Press Kit'],
  },
  {
    title: 'Community',
    links: ['Discord', 'Twitter', 'YouTube', 'Newsletter'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-vault-800/50 bg-vault-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-vault-500 to-glow-green flex items-center justify-center">
                <Lock className="w-5 h-5 text-vault-950" />
              </div>
              <span className="text-lg font-bold">
                Mindscape<span className="text-glow-green"> Vaults</span>
              </span>
            </a>
            <p className="text-sm text-vault-400 leading-relaxed max-w-xs mb-6">
              A puzzle-adventure game that invites you into a captivating digital dream world.
              Unlock the mystery within.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-vault-900/60 border border-vault-700/20 flex items-center justify-center text-vault-400 hover:text-glow-green hover:border-glow-green/30 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-vault-200 mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-vault-400 hover:text-glow-green transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-vault-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-vault-500">
            &copy; {new Date().getFullYear()} Mindscape Vaults. All rights reserved.
          </p>
          <p className="text-xs text-vault-600">
            Crafted with passion by the Mindscape team
          </p>
        </div>
      </div>
    </footer>
  );
}
