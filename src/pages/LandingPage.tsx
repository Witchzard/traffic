import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-widest uppercase">
              <ShieldCheck className="w-4 h-4" />
              BTP Official Initiative
            </div>
            <h1 className="text-5xl lg:text-7xl font-headline font-extrabold tracking-tight text-primary leading-tight">
              Making Bengaluru Roads <br />
              <span className="text-secondary">Safer Together.</span>
            </h1>
            <p className="text-lg lg:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              The Bengaluru Traffic Citizen Watch is a collaborative platform designed to empower residents. By capturing and reporting violations, you directly contribute to a more organized, lawful, and safer commute for everyone.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/signin">
                <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-bold hover:shadow-xl transition-all active:scale-95 flex items-center gap-2">
                  Start Reporting Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/guidelines">
                <button className="px-8 py-4 bg-surface-container-lowest text-primary border border-outline-variant/15 rounded-xl font-bold hover:bg-surface-container-low transition-all">
                  View Traffic Rules
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 bg-primary-container relative">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC45y2870mgUfOsq3SOPSmUHLL2Y8oGuCgiAgJ6h1rzlkFZbVOwwS54rr0ujT7C-2MR3YfO2TUZT_BYgCygbrdsG5SymwQBoiWjZzRnR0yRtQU9aMrDWNAjbMhK2Wv3WZD937OSZPSohrAcBf95a4Ro0hunxXyNB22epwiR0IeoPEkBx9-W3QRdCvbkmVrk6tTs2EIFKYR6HkzA67ZbG9BnDezvhlWqT1Op11UKJTdrtr52CzvfDmO7F3Bw7Gs-lwaJ8v3F9kh0vg" 
                alt="Bengaluru Traffic"
                className="w-full h-full object-cover mix-blend-overlay opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 lg:-left-12 glass-panel p-6 rounded-2xl shadow-xl border border-white/40 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-secondary rounded-full status-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-tighter text-secondary">Live Update</span>
              </div>
              <p className="font-headline font-bold text-primary">High contribution in Indiranagar zone this morning.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-surface-container-low p-8 lg:p-12 rounded-[2.5rem] flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-outline mb-4">The Collective Impact</h3>
              <div className="text-5xl lg:text-7xl font-headline font-black text-primary tracking-tighter mb-2">50,000+</div>
              <p className="text-xl text-on-surface-variant font-medium">Violations resolved through citizen reporting since launch.</p>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/20 flex gap-12">
              <div>
                <div className="text-2xl font-bold text-secondary">₹12.5M+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-outline">Incentives Paid</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">15%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-outline">Reduction in Recurrence</div>
              </div>
            </div>
          </div>
          <div className="bg-primary text-on-primary p-8 lg:p-12 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-end">
            <Users className="absolute top-8 right-8 w-24 h-24 opacity-20" />
            <div className="relative z-10">
              <div className="text-5xl font-headline font-black tracking-tighter mb-2">10,000+</div>
              <p className="text-lg opacity-80 font-medium">Active Citizens verifying roads daily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h3 className="text-3xl font-headline font-bold text-primary tracking-tight">Three Steps to Impact</h3>
          <p className="text-on-surface-variant">The process is designed for maximum efficiency and legal validity.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/3 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent"></div>
          
          {[
            { icon: Zap, title: '1. Capture', desc: 'Snap a clear photo or video of a traffic violation including the vehicle registration plate.', color: 'bg-surface-container-lowest' },
            { icon: ShieldCheck, title: '2. Verify', desc: 'BTP officials review the evidence. Once validated, a challan is issued to the offender.', color: 'bg-secondary-container' },
            { icon: Award, title: '3. Reward', desc: 'Receive civic credit points and monetary rewards directly into your digital platform wallet.', color: 'bg-tertiary-fixed' },
          ].map((step, i) => (
            <div key={i} className="group flex flex-col items-center text-center space-y-6 relative z-10">
              <div className={cn("w-20 h-20 shadow-xl rounded-2xl flex items-center justify-center text-primary border border-outline-variant/10 group-hover:scale-105 transition-transform duration-300", step.color)}>
                <step.icon className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-headline font-bold text-primary">{step.title}</h4>
                <p className="text-on-surface-variant text-sm px-4">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-primary to-primary-container p-12 lg:p-20 rounded-[3rem] text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-container rounded-full blur-[100px]"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-headline font-extrabold text-white tracking-tight relative z-10">Ready to take the first step?</h2>
          <p className="text-on-primary-container max-w-xl mx-auto text-lg relative z-10">Join thousands of citizens today and help us make Bengaluru a world-class city for transit.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Link to="/signin">
              <button className="px-10 py-5 bg-secondary text-on-secondary rounded-xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-secondary/20">
                Download the Mobile App
              </button>
            </Link>
            <button className="px-10 py-5 bg-white/10 text-white backdrop-blur-md border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
              Terms of Participation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
