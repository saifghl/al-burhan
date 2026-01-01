import React, { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

/* Teacher Components */
import TeacherHome from './components/Teacher/Home';
import NamazAttendance from './components/Teacher/Namaz Attendance';
import CreateAssignment from './components/Teacher/CreateAssignment';
import ReviewSubmissions from './components/Teacher/Review Submissions';
import StudentList from './components/Teacher/Student list';
import StudentProfile from './components/Teacher/Student profile';
import WeeklyReportHistory from './components/Teacher/Weekly Report';
import WeeklyReportSubmission from './components/Teacher/WeeklyReportSubmission';
import ExamTasks from './components/Teacher/ExamTasks';
import ResultsEntry from './components/Teacher/ResultsEntry';
import AssignedClasses from './components/Teacher/AssignedClasses';
import DraftReportSubmission from './components/Teacher/DraftReportSubmission';
import EditProfileTeacher from './components/Teacher/EditProfile';
import Inbox from './components/Teacher/Inbox';
import TeacherLogout from './components/Teacher/Logout';

/* Donor Components */
import Dashboard from './components/Donar/Dashboard';
import DonorDonationPage from './components/Donar/DonationPage';
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
import Home from './components/Home/Home'; // Remote Home

/* General/Public Components */
import Footer from './components/Footer/Footer';
import Admission from './components/Admission/Admission';
import About from './components/About/About';
import Administration from './components/Administration/Administration';
import Academics from './components/Academics/Academics';
import Syllabus from './components/Syllabus/Syllabus';
import Donation from './components/Donation/Donation';
import Contact from './components/Contact/Contact';

/* Auth Components */
// import DonorSignup from './components/Login/Signup'; // File not found, commented out to fix build
import DonorLogin from './components/Login/Login';
import DonorForgotPassword from './components/Login/ForgotPassword';
import DonorVerifyOtp from './components/Login/VerifyIdentity';

/* Student components */
import Sidebar from './components/student/sidebar/Sidebar';
import StudentHome from './components/student/dashboard/Home';
import Learnings from './components/student/dashboard/learning/Learnings';
import StudyMaterial from './components/student/dashboard/learning/StudyMaterial';
import SubjectDetail from './components/student/dashboard/learning/SubjectDetail';
import Attendance from './components/student/dashboard/attendance/Attendance';
import SubjectAttendance from './components/student/dashboard/attendance/SubjectAttendance';
import Results from './components/student/dashboard/results/Results';
import Profile from './components/student/profile/Profile';
import EditProfile from './components/student/profile/EditProfile';
import Fees from './components/student/dashboard/fees/Fees';
import Settings from './components/student/settings/Settings';
import FAQ from './components/student/settings/FAQ';
import Notifications from './components/student/dashboard/notifications/Notifications';
import Activities from './components/student/dashboard/activities/Activities';
import Logout from './components/student/dashboard/logout/Logout';

/* Parent Dashboard Components */
import ParentDashboard from './components/ParentDashboard/ParentDashboard';
import ParentAttendance from './components/ParentDashboard/ParentAttendance';
import ParentProgress from './components/ParentDashboard/ParentProgress';
import ParentFees from './components/ParentDashboard/ParentFees';
import ParentProfile from './components/ParentDashboard/ParentProfile';
import ParentSettings from './components/ParentDashboard/ParentSettings';
import ParentNotifications from './components/ParentDashboard/ParentNotifications';
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
            <Route path="/about" element={<About />} />
            <Route path="/administration" element={<Administration />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/contact" element={<Contact />} />

            {/* Teacher Routes - Mapped to their own paths */}
            <Route path="/teacher" element={<TeacherHome />} />
            <Route path="/namaz-attendance" element={<NamazAttendance />} />
            <Route path="/create-assignment" element={<CreateAssignment />} />
            <Route path="/review-submissions" element={<ReviewSubmissions />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/student-profile" element={<StudentProfile />} />
            <Route path="/weekly-report" element={<WeeklyReportHistory />} />
            <Route path="/submit-report" element={<WeeklyReportSubmission />} />
            <Route path="/exam-tasks" element={<ExamTasks />} />
            <Route path="/results-entry" element={<ResultsEntry />} />
            <Route path="/classes" element={<AssignedClasses />} />
            <Route path="/draft-reports" element={<DraftReportSubmission />} />
            <Route path="/teacher-edit-profile" element={<EditProfileTeacher />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/teacher-logout" element={<TeacherLogout />} />


            {/* Auth Routes (Integrated from Stash) */}
            <Route path="/login" element={<AuthWrapper component={DonorLogin} />} />
            {/* <Route path="/signup" element={<DonorSignup />} /> */}
            <Route path="/forgot-password" element={<DonorForgotPassword />} />
            <Route path="/verify-otp" element={<DonorVerifyOtp />} />

            {/* Donor Dashboard Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/make-donation" element={<DonorDonationPage />} />
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
              <Route path="learning/study-material" element={<StudyMaterial />} />
              <Route path="learning/:subjectId" element={<SubjectDetail />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="attendance/subject/:subjectId" element={<SubjectAttendance />} />
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

            {/* Parent Dashboard Routes */}
            <Route path="/parent-dashboard" element={<ParentDashboard />} />
            <Route path="/parent-dashboard/attendance" element={<ParentAttendance />} />
            <Route path="/parent-dashboard/progress" element={<ParentProgress />} />
            <Route path="/parent-dashboard/fees" element={<ParentFees />} />
            <Route path="/parent-dashboard/profile" element={<ParentProfile />} />
            <Route path="/parent-dashboard/settings" element={<ParentSettings />} />
            <Route path="/parent-dashboard/notifications" element={<ParentNotifications />} />
          </Routes>
        </ConditionalLayout>
      </div>
    </Router>
  );
}

// Simple Wrapper to pass navigation props to DonorLogin (quick fix for props dependency)
const AuthWrapper = ({ component: Component }) => {
  // Use window.location for simple navigation redirection since component expects props
  return <Component
    onGoToSignup={() => window.location.href = '/signup'}
    onForgotPassword={() => window.location.href = '/forgot-password'}
    onLoginViaOtp={() => window.location.href = '/verify-otp'}
  />;
};

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

/* ConditionalLayout hides Navbar & Footer on /student routes AND dashboard routes AND auth routes AND teacher routes */
      function ConditionalLayout({children}) {
  const location = useLocation();
      const dashboardRoutes = [
      '/dashboard',
      // '/donation', // Public route
      '/make-donation',
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
      '/settings',
      '/parent-dashboard'
      ];

      const authRoutes = ['/login', '/signup', '/forgot-password', '/verify-otp'];

      // Teacher routes that hide the global navbar
      const teacherRoutes = [
      '/teacher', // Assuming teacher home is here
      '/namaz-attendance',
      '/create-assignment',
      '/review-submissions',
      '/students',
      '/student-profile',
      '/weekly-report',
      '/submit-report',
      '/exam-tasks',
      '/results-entry',
      '/classes',
      '/draft-reports',
      '/teacher-edit-profile',
      '/inbox',
      '/teacher-logout'
      ];

      const isStudent = location.pathname.startsWith('/student');
  const isDashboardRoute = dashboardRoutes.some(route => location.pathname === route || location.pathname.startsWith(route + '/'));
  const isAuthRoute = authRoutes.some(route => location.pathname === route);
  const isTeacherRoute = teacherRoutes.some(route => location.pathname === route || location.pathname.startsWith(route + '/'));

      // Logic: Hide Global Navbar/Footer if it's any of these specific dashboard/app sections
      const shouldHideNavbarAndFooter = isStudent || isDashboardRoute || isAuthRoute || isTeacherRoute;

      return (
      <>
        {!shouldHideNavbarAndFooter && <Navbar />}
        {children}
        {!shouldHideNavbarAndFooter && <Footer />}
      </>
      );
}

      export default App;
