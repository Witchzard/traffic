import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TopAppBar, BottomNavBar } from './components/Navigation';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import ReportPage from './pages/ReportPage';
import EvidencePage from './pages/EvidencePage';
import RewardsPage from './pages/RewardsPage';
import LeaderboardPage from './pages/LeaderboardPage';
import GuidelinesPage from './pages/GuidelinesPage';
import SignInPage from './pages/SignInPage';

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/signin';
  const isLandingPage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-background">
      {!isAuthPage && !isLandingPage && <TopAppBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/evidence" element={<EvidencePage />} />
        <Route path="/rewards" element={<RewardsPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/guidelines" element={<GuidelinesPage />} />
      </Routes>
      {!isAuthPage && !isLandingPage && <BottomNavBar />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
