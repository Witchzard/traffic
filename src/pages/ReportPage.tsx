import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, MapPin, Send, Info } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function ReportPage() {
  const [violationType, setViolationType] = useState('');
  
  return (
    <div className="min-h-screen bg-background pt-24 pb-32 px-6 max-w-7xl mx-auto">
      <div className="mb-10">
        <h2 className="font-headline text-3xl font-extrabold text-primary mb-2">Report Violation</h2>
        <p className="text-on-surface-variant font-medium">Contribute to safer roads in Namma Bengaluru.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* Camera Button */}
          <button className="group relative w-full aspect-[4/3] rounded-3xl bg-surface-container-low border-2 border-dashed border-outline-variant flex flex-col items-center justify-center gap-4 overflow-hidden transition-all hover:bg-surface-container active:scale-95 duration-200">
            <div className="w-24 h-24 rounded-full bg-primary-container flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Camera className="w-10 h-10" />
            </div>
            <div className="text-center">
              <span className="font-headline text-xl font-bold text-primary block">Capture Violation Photo</span>
              <span className="text-sm text-on-surface-variant mt-1 block">Clear image of vehicle and license plate</span>
            </div>
          </button>

          {/* Form */}
          <div className="bg-surface-container-low rounded-3xl p-8 space-y-8 border border-outline-variant/10">
            <div className="space-y-6">
              <div className="group">
                <label className="block font-headline text-sm font-bold text-on-surface-variant mb-2">Violation Type</label>
                <div className="relative">
                  <select 
                    value={violationType}
                    onChange={(e) => setViolationType(e.target.value)}
                    className="w-full bg-surface-container-highest border-b border-outline-variant focus:border-primary focus:ring-0 appearance-none py-3 px-4 rounded-t-lg transition-colors"
                  >
                    <option value="">Select violation type</option>
                    <option>Wrong-way driving</option>
                    <option>No helmet</option>
                    <option>Signal jumping</option>
                    <option>Riding on footpath</option>
                    <option>Triple riding</option>
                    <option>Using phone while driving</option>
                  </select>
                </div>
              </div>

              <div className="group">
                <label className="block font-headline text-sm font-bold text-on-surface-variant mb-2">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
                  <input 
                    className="w-full bg-surface-container-highest border-b border-outline-variant focus:border-primary focus:ring-0 py-3 pl-12 pr-4 rounded-t-lg transition-colors"
                    readOnly
                    value="Outer Ring Road, Marathahalli, Bengaluru"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block font-headline text-sm font-bold text-on-surface-variant mb-2">Vehicle Number</label>
                <input 
                  className="w-full bg-surface-container-highest border-b border-outline-variant focus:border-primary focus:ring-0 py-3 px-4 rounded-t-lg transition-colors uppercase font-mono font-bold tracking-widest placeholder:normal-case placeholder:font-body placeholder:font-normal placeholder:tracking-normal"
                  placeholder="e.g. KA-01-AB-1234"
                />
              </div>
            </div>

            <button className="w-full py-5 rounded-full bg-gradient-to-br from-primary to-primary-container text-white font-headline font-extrabold text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-primary/30 transition-all duration-300 active:scale-95">
              <span>Submit Report</span>
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Map Preview */}
        <div className="lg:col-span-5">
          <div className="bg-surface-container-high rounded-3xl overflow-hidden h-full min-h-[400px] relative border border-outline-variant/10">
            <img 
              src="https://picsum.photos/seed/bengaluru-map/800/1000" 
              alt="Map" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-xl p-4 rounded-xl flex items-center gap-4 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <MapPin className="w-6 h-6 fill-current" />
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Verified Location</p>
                <p className="text-sm font-bold text-primary">Marathahalli Junction</p>
              </div>
              <div className="ml-auto">
                <div className="w-3 h-3 bg-secondary rounded-full status-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
