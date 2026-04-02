import React from 'react';
import { motion } from 'motion/react';
import { Trophy, TrendingUp, TrendingDown, Minus, Medal, Award } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-32 px-6 max-w-4xl mx-auto">
      <section className="mb-12">
        <h2 className="font-headline font-bold text-4xl text-primary tracking-tight mb-2">Citizen Watch Leaderboard</h2>
        <p className="text-on-surface-variant font-medium">Rewarding the vigilance of Bengaluru's most proactive citizens.</p>
      </section>

      <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 vidhana-gradient p-8 rounded-[2.5rem] flex flex-col justify-between text-on-primary shadow-lg relative overflow-hidden">
          <div className="z-10">
            <span className="text-sm font-label tracking-widest uppercase opacity-80">Current Standing</span>
            <div className="flex items-baseline gap-4 mt-2">
              <span className="font-headline font-extrabold text-6xl">#124</span>
              <span className="font-headline font-bold text-xl opacity-90">KA 03 MX 9988</span>
            </div>
          </div>
          <div className="mt-8 flex gap-8 z-10">
            <div>
              <p className="text-xs opacity-70 mb-1">Total Incentives</p>
              <p className="font-headline font-bold text-2xl">₹4,250</p>
            </div>
            <div>
              <p className="text-xs opacity-70 mb-1">Verified Reports</p>
              <p className="font-headline font-bold text-2xl">28</p>
            </div>
          </div>
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white opacity-5 rounded-full"></div>
        </div>
        <div className="bg-secondary-container p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center border border-outline-variant/10">
          <Medal className="text-on-secondary-container w-12 h-12 mb-4 fill-current" />
          <p className="text-on-secondary-container font-headline font-bold text-xl leading-tight">You're in the Top 5% of your Zone</p>
          <button className="mt-4 px-6 py-2 bg-on-secondary-container text-white rounded-xl font-label font-bold text-sm hover:opacity-90 transition-opacity">View Perks</button>
        </div>
      </section>

      <section className="mb-16">
        <h3 className="font-headline font-bold text-2xl mb-8 flex items-center gap-2">
          <Trophy className="text-tertiary w-6 h-6" />
          The Vanguard
        </h3>
        <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-0">
          {/* Silver #2 */}
          <div className="w-full md:w-1/3 bg-surface-container-low p-6 rounded-t-[2.5rem] md:rounded-tr-none flex flex-col items-center text-center border-b-4 border-slate-300">
            <div className="relative mb-4">
              <img 
                src="https://picsum.photos/seed/user2/100/100" 
                alt="Citizen 2" 
                className="w-20 h-20 rounded-full border-4 border-slate-200"
                referrerPolicy="no-referrer"
              />
              <span className="absolute -bottom-2 -right-2 bg-slate-300 w-8 h-8 rounded-full flex items-center justify-center font-bold text-slate-700 shadow-sm">2</span>
            </div>
            <p className="font-headline font-bold text-on-surface">KA 01 ND 5521</p>
            <p className="text-secondary font-bold text-lg mt-1">₹12,400</p>
            <span className="text-xs text-on-surface-variant uppercase tracking-tighter mt-2">72 Verified</span>
          </div>
          {/* Gold #1 */}
          <div className="w-full md:w-1/3 bg-surface-container-lowest p-10 rounded-t-[2.5rem] flex flex-col items-center text-center border-b-4 border-yellow-500 shadow-xl z-10 scale-105">
            <div className="relative mb-4">
              <img 
                src="https://picsum.photos/seed/user1/100/100" 
                alt="Citizen 1" 
                className="w-24 h-24 rounded-full border-4 border-yellow-400"
                referrerPolicy="no-referrer"
              />
              <span className="absolute -bottom-2 -right-2 bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-md">1</span>
            </div>
            <p className="font-headline font-bold text-on-surface text-xl">KA 05 MN 0001</p>
            <p className="text-secondary font-black text-2xl mt-1">₹18,500</p>
            <span className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mt-2 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              94 Verified
            </span>
          </div>
          {/* Bronze #3 */}
          <div className="w-full md:w-1/3 bg-surface-container-low p-6 rounded-t-[2.5rem] md:rounded-tl-none flex flex-col items-center text-center border-b-4 border-orange-400">
            <div className="relative mb-4">
              <img 
                src="https://picsum.photos/seed/user3/100/100" 
                alt="Citizen 3" 
                className="w-20 h-20 rounded-full border-4 border-orange-200"
                referrerPolicy="no-referrer"
              />
              <span className="absolute -bottom-2 -right-2 bg-orange-400 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shadow-sm">3</span>
            </div>
            <p className="font-headline font-bold text-on-surface">KA 51 ZZ 1234</p>
            <p className="text-secondary font-bold text-lg mt-1">₹9,800</p>
            <span className="text-xs text-on-surface-variant uppercase tracking-tighter mt-2">68 Verified</span>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-headline font-bold text-xl text-on-surface">Top Contributors</h3>
          <span className="text-xs font-label font-bold text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full">Updated 10m ago</span>
        </div>
        {[
          { rank: 4, id: 'KA 04 HJ 2023', reports: 54, amount: '₹7,200', trend: 'up' },
          { rank: 5, id: 'KA 02 AB 4567', reports: 49, amount: '₹6,850', trend: 'stable' },
          { rank: 6, id: 'KA 01 BB 0070', reports: 42, amount: '₹5,900', trend: 'up' },
          { rank: 7, id: 'KA 53 MX 1102', reports: 38, amount: '₹5,100', trend: 'down' },
        ].map((item, i) => (
          <div key={i} className="bg-surface-container-low hover:bg-surface-container-high transition-all p-5 rounded-full flex items-center justify-between group border border-outline-variant/5">
            <div className="flex items-center gap-6">
              <span className="font-headline font-bold text-on-surface-variant w-6 text-center">{item.rank}</span>
              <div className="flex flex-col">
                <p className="font-headline font-bold text-on-surface">{item.id}</p>
                <p className="text-xs text-on-surface-variant font-medium">{item.reports} Verified Reports</p>
              </div>
            </div>
            <div className="text-right flex items-center gap-4">
              <p className="font-headline font-extrabold text-primary text-lg">{item.amount}</p>
              {item.trend === 'up' && <TrendingUp className="w-4 h-4 text-secondary" />}
              {item.trend === 'down' && <TrendingDown className="w-4 h-4 text-error" />}
              {item.trend === 'stable' && <Minus className="w-4 h-4 text-outline" />}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
