import React, { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Donar/Dashboard';
import DonationPage from './components/Donar/DonationPage';
import DonationAmountPage from './components/Donar/DonationAmountPage';
import ReviewDonationPage from './components/Donar/ReviewDonationPage';
import DonationPaymentPage from './components/Donar/DonationPaymentPage';
import PaymentSuccessPage from './components/Donar/PaymentSuccessPage';
import DonationHistory from './components/Donar/DonationHistory';
import TaxDocumentsPage from './components/Donar/TaxDocumentsPage';
import UtilizationReportPage from './components/Donar/UtilizationReportPage';
import DonationDetailsPage from './components/Donar/DonationDetailsPage';
import NotificationsPage from './components/Donar/NotificationsPage';
import UrgentAppealPage from './components/Donar/UrgentAppealPage';
import ProfilePage from './components/Donar/ProfilePage';
import SettingsPage from './components/Donar/SettingsPage';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import './App.css';

const AppContent = () => {
  const location = useLocation();
  const dashboardRoutes = [
    '/dashboard',
    '/donation',
    '/donation-amount',
    '/donation-history',
    '/tax-documents',
    '/utilization-report',
    '/donation-details',
    '/donation-payment',
    '/review-donation',
    '/payment-success',
    '/notifications',
    '/urgent-appeal',
    '/profile',
    '/settings'
  ];

  const isDashboardRoute = dashboardRoutes.some(route => location.pathname === route || location.pathname.startsWith(route + '/'));

  // Scroll to top on route change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      {!isDashboardRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<div style={{ padding: '50px', textAlign: 'center' }}>About Us Page</div>} />
        <Route path="/administration" element={<div style={{ padding: '50px', textAlign: 'center' }}>Administration Page</div>} />
        <Route path="/academics" element={<div style={{ padding: '50px', textAlign: 'center' }}>Academics Page</div>} />
        <Route path="/admission" element={<div style={{ padding: '50px', textAlign: 'center' }}>Admission Page</div>} />
        <Route path="/donation" element={<DonationPage />} />
        <Route path="/donation-amount" element={<DonationAmountPage />} />
        <Route path="/review-donation" element={<ReviewDonationPage />} />
        <Route path="/donation-payment" element={<DonationPaymentPage />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
        <Route path="/donation-history" element={<DonationHistory />} />
        <Route path="/tax-documents" element={<TaxDocumentsPage />} />
        <Route path="/utilization-report" element={<UtilizationReportPage />} />
        <Route path="/donation-details" element={<DonationDetailsPage />} />
        <Route path="/contact" element={<div style={{ padding: '50px', textAlign: 'center' }}>Contact Page</div>} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/urgent-appeal" element={<UrgentAppealPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/login" element={<div style={{ padding: '50px', textAlign: 'center' }}>Login Page</div>} />
      </Routes>
      {!isDashboardRoute && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
