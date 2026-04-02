import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Camera, ReceiptText, Trophy, Menu, Bell, User } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function TopAppBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-surface-container-high transition-colors rounded-full lg:hidden">
            <Menu className="w-6 h-6 text-primary" />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <h1 className="font-headline font-extrabold text-xl tracking-tight text-primary italic">The Civic Editorial</h1>
          </Link>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/dashboard" className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">Dashboard</Link>
          <Link to="/report" className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">Report</Link>
          <Link to="/evidence" className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">Evidence</Link>
          <Link to="/rewards" className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">Rewards</Link>
          <Link to="/leaderboard" className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">Leaderboard</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-surface-container-high transition-colors rounded-full">
            <Bell className="w-6 h-6 text-primary" />
          </button>
          <div className="w-10 h-10 rounded-full border-2 border-surface-container-high overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR33Uz3MJp_w9Z_18DdMZCVc_WaDSf24bevGmSTmutG68zMarVtRjZoTSScZqKynvu2ugKKjQWCoUsW3op1KV3Xr23cP-MvramFEMZg4JgeFcspmmRf5et9q48-iKCXGH5Xh7ByS47x79YkXJZA597NxHB8TxonLvIY0oYqLWlYK1L6lmx7dPZMLhBgSrbsCBg_z9gzC2oTw6EkTiUh-W8gMUz95hDlPC6eRZF0s-fnLj1pd73HzQkUP9KXgPPZoKevl5flghuxQ" 
              alt="User Profile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export function BottomNavBar() {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/dashboard' },
    { icon: Camera, label: 'Report', path: '/report' },
    { icon: ReceiptText, label: 'Evidence', path: '/evidence' },
    { icon: Trophy, label: 'Rewards', path: '/rewards' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-t border-outline-variant/10 lg:hidden">
      <div className="flex justify-around items-center h-20 px-4 pb-safe">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center px-4 py-2 rounded-xl transition-all duration-300",
                isActive ? "bg-secondary-container text-on-secondary-container scale-105" : "text-on-surface-variant hover:bg-surface-container-low"
              )}
            >
              <item.icon className={cn("w-6 h-6", isActive && "fill-current")} />
              <span className="text-[10px] font-bold uppercase tracking-widest mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
