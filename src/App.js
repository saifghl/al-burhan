<<<<<<< Updated upstream
import React, { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
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
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Admission from './components/Admission/Admission';

import Contact from './components/Contact/Contact';

/* Student components */
import Sidebar from './components/student/sidebar/Sidebar';
import StudentHome from './components/student/dashboard/Home';
import Learnings from './components/student/dashboard/learning/Learnings';
import SubjectDetail from './components/student/dashboard/learning/SubjectDetail';
import Attendance from './components/student/dashboard/attendance/Attendance';
import Results from './components/student/dashboard/results/Results';
import Profile from './components/student/profile/Profile';
import EditProfile from './components/student/profile/EditProfile';
import Fees from './components/student/dashboard/fees/Fees';
import Settings from './components/student/settings/Settings';
import FAQ from './components/student/settings/FAQ';
import Notifications from './components/student/dashboard/notifications/Notifications';
import Activities from './components/student/dashboard/activities/Activities';
import Logout from './components/student/dashboard/logout/Logout';
import './App.css';
import { FaBell } from 'react-icons/fa'; // Import bell icon for header

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <ConditionalLayout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div style={{ padding: '50px', textAlign: 'center' }}>About Us Page</div>} />
            <Route path="/administration" element={<div style={{ padding: '50px', textAlign: 'center' }}>Administration Page</div>} />
            <Route path="/academics" element={<div style={{ padding: '50px', textAlign: 'center' }}>Academics Page</div>} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/donation" element={<DonationPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<div style={{ padding: '50px', textAlign: 'center' }}>Login Page</div>} />

            {/* Donor Dashboard Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/donation-amount" element={<DonationAmountPage />} />
            <Route path="/review-donation" element={<ReviewDonationPage />} />
            <Route path="/donation-payment" element={<DonationPaymentPage />} />
            <Route path="/payment-success" element={<PaymentSuccessPage />} />
            <Route path="/donation-history" element={<DonationHistory />} />
            <Route path="/tax-documents" element={<TaxDocumentsPage />} />
            <Route path="/utilization-report" element={<UtilizationReportPage />} />
            <Route path="/donation-details" element={<DonationDetailsPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/urgent-appeal" element={<UrgentAppealPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />

            {/* Student area */}
            <Route path="/student" element={<StudentLayout />}>
              <Route index element={<StudentHome />} />
              <Route path="home" element={<StudentHome />} />
              <Route path="learning" element={<Learnings />} />
              <Route path="learning/:subjectId" element={<SubjectDetail />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="results" element={<Results />} />
              <Route path="profile" element={<Profile />} />
              <Route path="profile/edit" element={<EditProfile />} />
              <Route path="fees" element={<Fees />} />
              <Route path="settings" element={<Settings />} />
              <Route path="settings/faq" element={<FAQ />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="activities" element={<Activities />} />
              <Route path="logout" element={<Logout />} />
            </Route>
          </Routes>
        </ConditionalLayout>
      </div>
    </Router>
  );
}

function ScrollToTop() {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function StudentLayout() {
  return (
    <div className="student-area" style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>

        {/* Global Student Header */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '30px',
          zIndex: 100,
          background: '#fff',
          borderRadius: '50%',
          width: '45px',
          height: '45px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          cursor: 'pointer'
        }}>
          <a href="/student/notifications" style={{ color: '#64A926', display: 'flex', fontSize: '20px' }}>
            <FaBell />
          </a>
        </div>

        <main className="student-content" style={{ flex: 1 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
=======
import React, { useState } from 'react';
import './App.css';
import DonorSignup from './Component/Donar/DonorSignup';
import DonorLogin from './Component/Donar/DonorLogin';
import DonorForgotPassword from './Component/Donar/DonorForgotPassword';
import DonorVerifyOtp from './Component/Donar/DonorVerifyOtp';

function App() {
  const [screen, setScreen] = useState('signup'); // signup | login | forgot | otp

  const renderScreen = () => {
    switch (screen) {
      case 'login':
        return (
          <DonorLogin
            onGoToSignup={() => setScreen('signup')}
            onForgotPassword={() => setScreen('forgot')}
            onLoginViaOtp={() => setScreen('otp')}
          />
        );
      case 'forgot':
        return <DonorForgotPassword />;
      case 'otp':
        return <DonorVerifyOtp />;
      case 'signup':
      default:
        return <DonorSignup onGoToLogin={() => setScreen('login')} />;
    }
  };

  return <div className="App">{renderScreen()}</div>;
>>>>>>> Stashed changes
}

/* ConditionalLayout hides Navbar & Footer on /student routes AND dashboard routes */
function ConditionalLayout({ children }) {
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

  const isStudent = location.pathname.startsWith('/student');
  // Check if current path is one of the dashboard routes (exact match or start check if needed)
  const isDashboardRoute = dashboardRoutes.some(route => location.pathname === route || location.pathname.startsWith(route + '/'));

  const shouldHideNavbarAndFooter = isStudent || isDashboardRoute;

  return (
    <>
      {!shouldHideNavbarAndFooter && <Navbar />}
      {children}
      {!shouldHideNavbarAndFooter && <Footer />}
    </>
  );
}

export default App;
