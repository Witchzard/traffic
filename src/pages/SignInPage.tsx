import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Smartphone, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length === 10) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-background relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-primary rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-secondary rounded-full blur-[120px]"></div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-surface-container-lowest rounded-[3rem] shadow-[0_24px_48px_rgba(25,27,34,0.04)] overflow-hidden border border-outline-variant/10"
      >
        {/* Left Side */}
        <div className="relative hidden lg:flex flex-col justify-between p-12 bg-primary-container overflow-hidden">
          <div className="z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <ShieldCheck className="text-primary w-6 h-6" />
              </div>
              <span className="font-headline font-black text-xl text-white italic tracking-tight">The Civic Editorial</span>
            </div>
          </div>

          <div className="z-10 space-y-6">
            <h1 className="font-headline font-extrabold text-5xl text-white leading-tight">
              Restore the Rhythm <br /> of <span className="text-secondary-container">Bengaluru</span>.
            </h1>
            <p className="text-on-primary-container text-lg leading-relaxed max-w-md">
              Join an elite community of proactive citizens. Report violations, earn rewards, and help us transform the city's traffic culture through data-driven accountability.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <img 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-primary-container object-cover" 
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    alt="User"
                    referrerPolicy="no-referrer"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-bold border-2 border-primary-container">+12k</div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm">Active Citizens</span>
                <span className="text-on-primary-container text-xs">Making roads safer today</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 opacity-20 pointer-events-none">
            <Smartphone className="w-full h-full text-white" />
          </div>
          
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/seed/bengaluru-traffic/1200/800" 
              alt="Traffic" 
              className="w-full h-full object-cover opacity-30 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-transparent opacity-90"></div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-16 flex flex-col justify-center bg-surface-container-lowest">
          <div className="max-w-md w-full mx-auto space-y-10">
            <div className="space-y-2">
              <div className="lg:hidden mb-6">
                <span className="font-headline font-black text-xl text-primary italic tracking-tight">The Civic Editorial</span>
              </div>
              <h2 className="font-headline font-bold text-3xl text-on-surface tracking-tight">Sign In</h2>
              <p className="text-on-surface-variant font-medium">Verify your identity via mobile OTP to continue.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block font-headline font-bold text-sm tracking-wide text-on-surface-variant px-1 uppercase">Mobile Number</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-on-surface-variant font-bold border-r border-outline-variant/30 pr-3 mr-1">+91</span>
                  </div>
                  <input 
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="w-full pl-20 pr-4 py-4 bg-surface-container-highest rounded-xl border-none ring-0 focus:ring-2 focus:ring-primary transition-all text-lg font-semibold tracking-widest placeholder:text-outline-variant/50 placeholder:tracking-normal"
                    placeholder="98765 43210"
                    required
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-white font-headline font-bold rounded-xl shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                Send OTP Verification
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant/15"></div>
              </div>
              <div className="relative flex justify-center text-xs font-bold uppercase tracking-widest text-outline-variant bg-surface-container-lowest px-4">
                Citizen Secure Access
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/5">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex-shrink-0 flex items-center justify-center">
                  <Lock className="text-on-secondary-container w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-on-surface">Privacy First</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Your data is encrypted and only shared with the Bengaluru Traffic Police for official enforcement.</p>
                </div>
              </div>
              <p className="text-center text-sm text-on-surface-variant">
                By signing in, you agree to the <a href="#" className="text-primary font-bold underline decoration-outline-variant/30 underline-offset-4">Terms of Civic Service</a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
