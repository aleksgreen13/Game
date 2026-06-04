import { useState, type FormEvent } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { supabase } from '../lib/supabase';
import { Mail, Check, Loader2, Gift, Users, Trophy } from 'lucide-react';

export default function Waitlist() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase
      .from('waitlist')
      .insert({ email, referral_source: 'website' });

    if (error) {
      if (error.code === '23505') {
        setErrorMsg('This email is already on the waitlist!');
        setStatus('error');
      } else {
        setErrorMsg('Something went wrong. Please try again.');
        setStatus('error');
      }
      return;
    }

    setStatus('success');
    setEmail('');
  };

  return (
    <section id="waitlist" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-vault-950 via-vault-900/80 to-vault-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,222,128,0.06)_0%,transparent_60%)]" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/5 w-64 h-64 rounded-full bg-glow-green/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/5 w-80 h-80 rounded-full bg-mystic-500/5 blur-3xl animate-float-delay" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-glow-green bg-vault-800/50 border border-vault-600/30 rounded-full mb-4">
              Early Access
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Be the First to <span className="text-transparent bg-clip-text bg-gradient-to-r from-glow-green to-glow-gold">Enter</span>
            </h2>
            <p className="mt-6 text-lg text-vault-300 max-w-2xl mx-auto">
              Join the waitlist and get exclusive early access, behind-the-scenes updates, and founder rewards.
            </p>
          </div>

          {/* Incentives */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Gift, label: 'Exclusive In-Game Item', desc: 'Founder badge & skin' },
              { icon: Users, label: 'Early Access', desc: 'Play before everyone else' },
              { icon: Trophy, label: 'Pioneer Rank', desc: 'Permanent status in-game' },
            ].map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex items-center gap-3 p-4 rounded-xl bg-vault-900/40 border border-vault-700/20"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-glow-green/10 border border-glow-green/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-glow-green" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-vault-100">{label}</div>
                  <div className="text-xs text-vault-400">{desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form card */}
          <div className="relative rounded-2xl border border-vault-700/30 bg-vault-900/40 backdrop-blur-sm p-8 sm:p-10 overflow-hidden">
            {/* Glow effect behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-glow-green/10 via-glow-cyan/5 to-glow-green/10 rounded-2xl blur-xl opacity-50 -z-10" />

            {status === 'success' ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-glow-green/20 border border-glow-green/30 flex items-center justify-center">
                  <Check className="w-8 h-8 text-glow-green" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                <p className="text-vault-300">
                  We'll notify you when it's time to enter the Vaults. Keep an eye on your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-vault-500" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-vault-800/60 border border-vault-600/30 text-white placeholder-vault-500 focus:outline-none focus:border-glow-green/50 focus:ring-2 focus:ring-glow-green/20 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-glow-green to-vault-400 text-vault-950 hover:from-vault-400 hover:to-glow-cyan transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.25)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      'Join Waitlist'
                    )}
                  </button>
                </div>

                {status === 'error' && errorMsg && (
                  <p className="text-sm text-red-400 text-center">{errorMsg}</p>
                )}

                <p className="text-xs text-vault-500 text-center">
                  No spam, ever. We'll only email you with launch updates and exclusive previews.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
