import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, XCircle, Share2, Trash2, Plus, Clock } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function EvidencePage() {
  const reports = [
    { id: '#BTC-29402', date: 'Oct 24, 2023', status: 'Verification in Progress', statusType: 'pending', img: 'https://picsum.photos/seed/traffic1/800/450' },
    { id: '#BTC-28192', date: 'Oct 21, 2023', status: 'Verified', statusType: 'verified', points: '50 Traffic Points', img: 'https://picsum.photos/seed/traffic2/800/450' },
    { id: '#BTC-27811', date: 'Oct 19, 2023', status: 'Rejected', statusType: 'rejected', reason: 'Image quality too low for identification', img: 'https://picsum.photos/seed/traffic3/800/450' },
    { id: '#BTC-26551', date: 'Oct 15, 2023', status: 'Verification in Progress', statusType: 'pending', img: 'https://picsum.photos/seed/traffic4/800/450' },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-32 px-6 max-w-7xl mx-auto">
      <header className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-headline font-extrabold text-4xl lg:text-5xl tracking-tight mb-4 text-primary">Evidence Gallery</h1>
            <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">Your personal encrypted database of civic reports. View, manage, and track the status of your submitted evidence.</p>
          </div>
          <div className="flex gap-2 p-1.5 bg-surface-container-low rounded-xl border border-outline-variant/10">
            <button className="px-6 py-2 rounded-lg bg-primary text-white font-semibold text-sm transition-all hover:shadow-lg active:scale-95">All</button>
            <button className="px-6 py-2 rounded-lg text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-all">Verified</button>
            <button className="px-6 py-2 rounded-lg text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-all">Rejected</button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reports.map((report, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-surface-container-lowest rounded-3xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl border border-outline-variant/10"
          >
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={report.img} 
                alt="Violation proof" 
                className={cn("w-full h-full object-cover transition-all duration-500", report.statusType === 'rejected' ? 'grayscale' : 'group-hover:scale-105')}
                referrerPolicy="no-referrer"
              />
              <div className={cn(
                "absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 backdrop-blur-md",
                report.statusType === 'pending' && "bg-secondary/90 text-white status-pulse",
                report.statusType === 'verified' && "bg-secondary text-white",
                report.statusType === 'rejected' && "bg-error text-white"
              )}>
                {report.statusType === 'pending' && <Clock className="w-3 h-3" />}
                {report.statusType === 'verified' && <CheckCircle className="w-3 h-3 fill-current" />}
                {report.statusType === 'rejected' && <XCircle className="w-3 h-3 fill-current" />}
                {report.status}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs font-bold text-primary/60 uppercase tracking-widest mb-1 font-label">Report ID</p>
                  <h3 className="font-headline font-bold text-xl">{report.id}</h3>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-primary/60 uppercase tracking-widest mb-1 font-label">Date Captured</p>
                  <p className="font-semibold text-on-surface">{report.date}</p>
                </div>
              </div>
              
              {report.points && (
                <div className="bg-secondary-container/20 p-3 rounded-lg mb-4 flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-secondary fill-current" />
                  <p className="text-xs font-semibold text-on-secondary-container">Awarded {report.points}</p>
                </div>
              )}

              {report.reason && (
                <p className="text-sm text-error font-medium mb-4 italic">Reason: {report.reason}</p>
              )}

              <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/10">
                <button className={cn(
                  "flex-1 py-2 text-sm font-bold rounded-lg transition-colors",
                  report.statusType === 'rejected' ? "bg-surface-container-high text-on-surface hover:bg-surface-variant" : "bg-primary text-white hover:bg-primary-container"
                )}>
                  {report.statusType === 'rejected' ? 'Re-submit Info' : 'View Details'}
                </button>
                <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
                  {report.statusType === 'rejected' ? <Trash2 className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mt-20 p-12 rounded-[3rem] bg-surface-container-low border border-dashed border-outline-variant/30 text-center">
        <div className="w-20 h-20 bg-surface-container-lowest rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Plus className="w-10 h-10 text-primary/40" />
        </div>
        <h2 className="font-headline font-bold text-2xl mb-2">Want to add more?</h2>
        <p className="text-on-surface-variant mb-8 max-w-md mx-auto">Help make Bengaluru's roads safer by reporting active violations. Your evidence is the first step toward civic order.</p>
        <button className="px-8 py-3 rounded-full bg-gradient-to-br from-primary to-primary-container text-white font-bold tracking-wide hover:shadow-2xl transition-all active:scale-95">
          SUBMIT NEW EVIDENCE
        </button>
      </section>
    </div>
  );
}
