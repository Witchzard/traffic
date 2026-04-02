import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Wallet, CheckCircle, Plus, BarChart3 as Analytics, History, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-32 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-2 h-2 bg-secondary rounded-full status-pulse"></span>
              System Live
            </span>
            <h2 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface">Citizen Dashboard</h2>
            <p className="text-on-surface-variant mt-2 max-w-xl">Monitor your contributions to Bengaluru's traffic safety and claim your earned civic rewards.</p>
          </div>
          <Link to="/report">
            <button className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 active:scale-95 duration-150 shadow-lg shadow-primary/20">
              <Plus className="w-6 h-6" />
              Report New Violation
            </button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { label: 'Total Reports Submitted', value: '128', icon: Analytics, trend: '+12% from last month', color: 'text-primary' },
          { label: 'Active Incentives Earned', value: '₹4,250', icon: Wallet, trend: 'Redeemable at Metro & BBMP', color: 'text-secondary' },
          { label: 'Resolved Cases', value: '114', icon: CheckCircle, trend: '89% verification rate', color: 'text-primary-container' },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface-container-lowest p-8 rounded-xl relative overflow-hidden group border border-outline-variant/10"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <stat.icon className="w-16 h-16" />
            </div>
            <p className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">{stat.label}</p>
            <p className={cn("font-headline text-5xl font-extrabold", stat.color)}>{stat.value}</p>
            <div className="mt-4 flex items-center gap-2 text-on-surface-variant text-sm font-semibold">
              {i === 0 && <TrendingUp className="w-4 h-4 text-secondary" />}
              <span>{stat.trend}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Recent Submissions */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-headline text-2xl font-bold">Recent Submissions</h3>
            <Link to="/evidence" className="text-primary-container font-semibold text-sm hover:underline flex items-center gap-1">
              View All Records
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { type: 'Wrong-side Driving', loc: 'Silk Board Junction, Outer Ring Rd', id: '#TRF-9921', time: 'Oct 24, 10:45 AM', amount: '₹150.00', status: 'Paid', statusColor: 'bg-secondary-container text-on-secondary-container' },
              { type: 'No Helmet (Pillion)', loc: 'Indiranagar 100ft Road', id: '#TRF-9884', time: 'Oct 24, 09:12 AM', amount: '₹50.00', status: 'Verified', statusColor: 'bg-tertiary-fixed text-on-tertiary-fixed' },
              { type: 'Signal Jumping', loc: 'Marathahalli Bridge', id: '#TRF-9872', time: 'Oct 23, 06:30 PM', amount: '---', status: 'Pending', statusColor: 'bg-surface-container-highest text-outline' },
            ].map((sub, i) => (
              <div key={i} className="bg-surface-container-low p-6 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-surface-container transition-colors border border-outline-variant/10">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-surface-container-highest overflow-hidden flex-shrink-0">
                    <img 
                      src={`https://picsum.photos/seed/${sub.id}/200/200`} 
                      alt="Violation proof" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight">{sub.type}</h4>
                    <p className="text-on-surface-variant text-sm mt-1">{sub.loc}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-[10px] uppercase font-bold tracking-tighter text-outline bg-surface-container-highest px-2 py-0.5 rounded">ID: {sub.id}</span>
                      <span className="text-xs text-on-surface-variant/60 font-medium">{sub.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Incentive</p>
                    <p className="font-headline font-bold text-secondary">{sub.amount}</p>
                  </div>
                  <span className={cn("px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2", sub.statusColor)}>
                    {sub.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div>
            <h3 className="font-headline text-2xl font-bold mb-6">Traffic Awareness</h3>
            <div className="bg-primary text-white p-8 rounded-2xl relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4">Earn 2x Rewards this weekend!</h4>
                <p className="text-on-primary-container text-sm leading-relaxed mb-6">Bengaluru Police is prioritizing 'No Parking' zones in Commercial Street. Report violations to earn double civic tokens.</p>
                <button className="bg-white text-primary px-6 py-2 rounded-lg font-bold text-sm hover:bg-on-primary-container transition-colors">Learn More</button>
              </div>
              <History className="absolute -bottom-10 -right-10 w-48 h-48 opacity-20 rotate-12" />
            </div>
          </div>

          <div className="bg-surface-container-high p-8 rounded-2xl">
            <h3 className="font-headline text-xl font-bold mb-4">Quick Stats</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-on-surface-variant">Verification Speed</span>
                <span className="text-sm font-bold text-primary">2.4 Hours</span>
              </div>
              <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[85%] rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-on-surface-variant">Accuracy Score</span>
                <span className="text-sm font-bold text-secondary">98.2%</span>
              </div>
              <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-[98%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
