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
import AdminLayout from './components/Admin/AdminLayout';
import AdminDashboard from './components/Admin/AdminDashboard';
import PublicContentManager from './components/Admin/PublicContent/PublicContentManager';
import AdmissionRequests from './components/Admin/PublicRequests/AdmissionRequests';
import RequestDetails from './components/Admin/PublicRequests/RequestDetails';
import StudentRegistrationForm from './components/Admin/PublicRequests/StudentRegistrationForm';
import MadarsaIdGeneration from './components/Admin/PublicRequests/MadarsaIdGeneration';
import RegistrationSuccess from './components/Admin/PublicRequests/RegistrationSuccess';
import FundAllocation from './components/Admin/AdminDonation/FundAllocation';
import UtilizationHistory from './components/Admin/AdminDonation/UtilizationHistory';
import GenerateReceipt from './components/Admin/AdminDonation/GenerateReceipt';
import TransparencyReport from './components/Admin/AdminDonation/TransparencyReport';
import PublishManager from './components/Admin/PublicManager/PublishManager';
import ContentApprovalQueue from './components/Admin/PublicManager/ContentApprovalQueue';
import ReviewContent from './components/Admin/PublicManager/ReviewContent';
<<<<<<< Updated upstream
import DraftManagement from './components/Admin/PublicManager/DraftManagement';
import PublishedContent from './components/Admin/PublicManager/PublishedContent';
import ArchiveRepository from './components/Admin/PublicManager/ArchiveRepository';
import RejectionHistory from './components/Admin/PublicManager/RejectionHistory';
import ApprovalRules from './components/Admin/PublicManager/ApprovalRules';
import SystemControlCenter from './components/Admin/SystemSetting/SystemControlCenter';
import AcademicYearSettings from './components/Admin/SystemSetting/AcademicYearSettings';
import PasswordPolicySettings from './components/Admin/SystemSetting/PasswordPolicySettings';
import NotificationTemplates from './components/Admin/SystemSetting/NotificationTemplates';
import PortalAccessRules from './components/Admin/SystemSetting/PortalAccessRules';
import SystemActivityLogs from './components/Admin/SystemSetting/SystemActivityLogs';
import AdminDonationDashboard from './components/Admin/AdminDonation/AdminDonationDashboard';
import DonorManagement from './components/Admin/AdminDonation/DonorManagement';
import DonationRecords from './components/Admin/AdminDonation/DonationRecords';
import DonorDetails from './components/Admin/AdminDonation/DonorDetails';
=======
import UserAccounts from './components/Admin/UserAccounts/UserAccounts';
import CreateUser from './components/Admin/UserAccounts/CreateUser';
import RolesPermissions from './components/Admin/UserAccounts/RolesPermissions';
import UserDetails from './components/Admin/UserAccounts/UserDetails';
import AdminStudentList from './components/Admin/StudentRecords/StudentList';
import AdminStudentProfile from './components/Admin/StudentRecords/StudentProfile';
>>>>>>> Stashed changes
import './App.css';
import { FaBell } from 'react-icons/fa'; // Import bell icon for header

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <ConditionalLayout>
          <Routes>
            {/* ... other routes ... */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="public-content" element={<PublicContentManager />} />
              <Route path="donation-dashboard" element={<AdminDonationDashboard />} />
              <Route path="donors" element={<DonorManagement />} />
              <Route path="donors/:id" element={<DonorDetails />} />
              <Route path="donations" element={<DonationRecords />} />
              <Route path="utilization-history" element={<UtilizationHistory />} />
              <Route path="fund-allocation" element={<FundAllocation />} />
              {/* ... other admin routes ... */}

              <Route path="generate-receipt" element={<GenerateReceipt />} />
              <Route path="transparency-report" element={<TransparencyReport />} />

              {/* Public Requests (Admissions) Routes */}
              <Route path="public-requests" element={<AdmissionRequests />} />
              <Route path="public-requests/:id" element={<RequestDetails />} />
              <Route path="public-requests/:id/register" element={<StudentRegistrationForm />} />
              <Route path="public-requests/:id/generate-id" element={<MadarsaIdGeneration />} />
              <Route path="public-requests/:id/success" element={<RegistrationSuccess />} />
              <Route path="public-requests/:id/success" element={<RegistrationSuccess />} />

              {/* Publish Manager Route */}
              <Route path="publish" element={<PublishManager />} />
              <Route path="content-approval" element={<ContentApprovalQueue />} />
              <Route path="content-review" element={<ReviewContent />} />
<<<<<<< Updated upstream
              <Route path="drafts" element={<DraftManagement />} />
              <Route path="published-content" element={<PublishedContent />} />
              <Route path="archive-repository" element={<ArchiveRepository />} />
              <Route path="rejection-history" element={<RejectionHistory />} />
              <Route path="approval-rules" element={<ApprovalRules />} />
              <Route path="settings" element={<SystemControlCenter />} />
              <Route path="settings/academic-year" element={<AcademicYearSettings />} />
              <Route path="settings/password-policy" element={<PasswordPolicySettings />} />
              <Route path="settings/notification-templates" element={<NotificationTemplates />} />
              <Route path="settings/portal-access" element={<PortalAccessRules />} />
              <Route path="settings/activity-logs" element={<SystemActivityLogs />} />
=======

              {/* User Accounts */}
              <Route path="user-accounts" element={<UserAccounts />} />
              <Route path="user-accounts/create" element={<CreateUser />} />
              <Route path="user-accounts/permissions" element={<RolesPermissions />} />
              <Route path="user-accounts/:userId" element={<UserDetails />} />

              {/* Student Records */}
              <Route path="student-records" element={<AdminStudentList />} />
              <Route path="student-records/:studentId" element={<AdminStudentProfile />} />
>>>>>>> Stashed changes
            </Route>
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
    </div>
  );
}

/* ConditionalLayout hides Navbar & Footer on /student routes AND dashboard routes AND auth routes AND teacher routes */
function ConditionalLayout({ children }) {
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

  const isAdmin = location.pathname.startsWith('/admin');
  const isStudent = location.pathname.startsWith('/student');
  const isDashboardRoute = dashboardRoutes.some(route => location.pathname === route || location.pathname.startsWith(route + '/'));
  const isAuthRoute = authRoutes.some(route => location.pathname === route);
  const isTeacherRoute = teacherRoutes.some(route => location.pathname === route || location.pathname.startsWith(route + '/'));

  // Logic: Hide Global Navbar/Footer if it's any of these specific dashboard/app sections
  const shouldHideNavbarAndFooter = isAdmin || isStudent || isDashboardRoute || isAuthRoute || isTeacherRoute;

  return (
    <>
      {!shouldHideNavbarAndFooter && <Navbar />}
      {children}
      {!shouldHideNavbarAndFooter && <Footer />}
    </>
  );
}

export default App;
