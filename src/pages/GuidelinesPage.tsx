import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Gavel, Camera, Info, CheckCircle, AlertTriangle, Smartphone, TrafficCone } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function GuidelinesPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-32 px-6 max-w-5xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4">Guidelines & Fine Rates</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">Maintaining order on the streets of Bengaluru is a collective responsibility. Use this guide to ensure your reporting is effective and compliant.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="md:col-span-2 bg-surface-container-low rounded-3xl p-8 relative overflow-hidden group border border-outline-variant/10">
          <div className="relative z-10">
            <Camera className="text-primary w-10 h-10 mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-3">Evidence Standards</h3>
            <p className="text-on-surface-variant leading-relaxed mb-6">Reports must include high-resolution photos or videos where the vehicle's registration plate is clearly legible. Avoid blurring or distant shots that compromise legal identification.</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm font-semibold text-primary">
                <CheckCircle className="w-5 h-5 text-secondary fill-current" />
                Clear view of the license plate
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-primary">
                <CheckCircle className="w-5 h-5 text-secondary fill-current" />
                Visible landmark for location context
              </li>
            </ul>
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <ShieldCheck className="w-48 h-48" />
          </div>
        </div>
        <div className="bg-primary-container rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl">
          <div>
            <Gavel className="text-secondary-container w-10 h-10 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Legal Validity</h3>
            <p className="text-on-primary-container text-sm leading-relaxed">Every report is reviewed by the Bengaluru Traffic Police (BTP). Intentional false reporting may lead to account suspension and legal action under the IT Act.</p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs font-mono uppercase tracking-widest opacity-60">Verified Bureau System</p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold text-primary">Common Violations</h2>
          <div className="flex items-center gap-2 text-secondary font-bold text-sm bg-secondary-container px-4 py-2 rounded-full">
            <Info className="w-4 h-4" />
            Rates as of 2024
          </div>
        </div>
        <div className="space-y-4">
          {[
            { icon: TrafficCone, title: 'Riding without Helmet', desc: 'Includes pillion rider without helmet', fine: '₹1,000', extra: '+ DL Suspension' },
            { icon: AlertTriangle, title: 'Signal Jumping', desc: 'Disobeying traffic light signals', fine: '₹500', extra: '₹1,000 (Subsequent)' },
            { icon: AlertTriangle, title: 'Wrong Side Driving', desc: 'Driving against the flow of traffic', fine: '₹5,000', extra: 'Court Referral', error: true },
            { icon: Smartphone, title: 'Mobile Phone Usage', desc: 'Using handheld device while driving', fine: '₹1,500', extra: '₹10,000 (Subsequent)' },
          ].map((v, i) => (
            <div key={i} className="bg-surface-container-lowest hover:bg-white transition-all duration-300 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md grid grid-cols-1 md:grid-cols-12 items-center gap-4 border border-outline-variant/5">
              <div className="col-span-6 flex items-center gap-6">
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", v.error ? "bg-error-container text-error" : "bg-surface-container text-primary")}>
                  <v.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-on-surface">{v.title}</h4>
                  <p className="text-sm text-on-surface-variant">{v.desc}</p>
                </div>
              </div>
              <div className="col-span-3 text-center">
                <span className={cn("text-2xl font-black", v.error ? "text-error" : "text-primary")}>{v.fine}</span>
              </div>
              <div className="col-span-3 text-right">
                <span className={cn("text-sm font-bold px-3 py-1 rounded-lg", v.error ? "bg-error-container text-error" : "bg-surface-container text-on-surface-variant")}>
                  {v.extra}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
