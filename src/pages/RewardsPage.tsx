import React from 'react';
import { motion } from 'motion/react';
import { Wallet, TrendingUp, Verified, Award, Gift, Zap, ChevronRight, Info } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function RewardsPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-32 px-6 max-w-7xl mx-auto">
      <div className="mb-10">
        <h2 className="font-headline font-extrabold text-4xl text-primary tracking-tight mb-2">Rewards & Payouts</h2>
        <p className="text-on-surface-variant font-medium">Your civic contribution directly impacts the city's mobility.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-8">
          <section className="bg-gradient-to-br from-primary to-primary-container p-8 rounded-[2.5rem] shadow-[0_24px_48px_rgba(0,40,117,0.12)] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="font-label uppercase tracking-widest text-xs opacity-70 font-bold">Total Wallet Balance</span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-2xl font-semibold opacity-80">₹</span>
                  <h3 className="font-headline font-extrabold text-6xl tracking-tighter">12,450</h3>
                </div>
                <div className="mt-6 flex items-center gap-2 bg-white/10 w-fit px-3 py-1 rounded-full border border-white/10">
                  <Award className="w-4 h-4 fill-current" />
                  <span className="text-xs font-bold tracking-wide uppercase">Silver Citizen Tier</span>
                </div>
              </div>
              <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg active:scale-95">
                <Wallet className="w-5 h-5" />
                Withdraw to Bank
              </button>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-6 rounded-3xl flex flex-col justify-between border border-outline-variant/10">
              <span className="text-on-surface-variant font-semibold text-sm">Verified Reports</span>
              <div className="flex items-center gap-4 mt-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Verified className="w-6 h-6 text-secondary fill-current" />
                </div>
                <span className="font-headline font-bold text-3xl text-on-surface">42</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-3xl flex flex-col justify-between border border-outline-variant/10">
              <span className="text-on-surface-variant font-semibold text-sm">Total Earned This Month</span>
              <div className="flex items-center gap-4 mt-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <span className="font-headline font-bold text-3xl text-on-surface">₹2,850</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/15 h-full">
            <div className="flex items-center justify-between mb-8">
              <h4 className="font-headline font-bold text-xl">Payout History</h4>
              <button className="text-primary text-sm font-bold hover:underline">View All</button>
            </div>
            <div className="space-y-6">
              {[
                { type: 'Wrong-way Driving', date: 'May 12, 2024', id: '#TRF-9021', amount: '+₹250' },
                { type: 'Signal Jumping', date: 'May 10, 2024', id: '#TRF-8842', amount: '+₹500' },
                { type: 'No Helmet (Pillion)', date: 'May 08, 2024', id: '#TRF-8721', amount: '+₹100' },
                { type: 'Footpath Parking', date: 'May 05, 2024', id: '#TRF-8540', amount: '+₹200' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-secondary/10 group-hover:text-secondary transition-colors">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">{item.type}</p>
                      <p className="text-xs text-on-surface-variant font-medium">{item.date} • ID: {item.id}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-headline font-bold text-secondary">{item.amount}</p>
                    <p className="text-[10px] uppercase tracking-wider text-secondary font-bold">Verified</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-surface-container-high">
              <div className="bg-surface-container-low p-4 rounded-xl flex items-start gap-4">
                <Info className="w-5 h-5 text-primary-container shrink-0" />
                <p className="text-xs text-on-surface-variant leading-relaxed">Verification typically takes 2-4 business days. Payouts are credited once the Traffic Police Department confirms the violation evidence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Gift, title: 'Refer a Citizen', desc: 'Earn ₹50 for every friend who signs up and completes their first verified report.' },
          { icon: Award, title: 'Achievement Bonus', desc: 'Complete 50 reports this month to unlock a flat ₹1,000 "Civic Champion" bonus.' },
          { icon: Zap, title: 'Instant Payouts', desc: 'Top-tier contributors can now withdraw earnings instantly to UPI or Bank accounts.' },
        ].map((card, i) => (
          <div key={i} className="bg-surface-container p-6 rounded-3xl border border-outline-variant/10">
            <card.icon className="text-secondary w-8 h-8 mb-4" />
            <h5 className="font-bold text-lg mb-1">{card.title}</h5>
            <p className="text-sm text-on-surface-variant">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
