import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Admission from './components/Admission/Admission';
import Donation from './components/Donation/Donation';
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
        <ConditionalLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add other routes as placeholders or components are created */}
            <Route path="/about" element={<div style={{ padding: '50px', textAlign: 'center' }}>About Us Page</div>} />
            <Route path="/administration" element={<div style={{ padding: '50px', textAlign: 'center' }}>Administration Page</div>} />
            <Route path="/academics" element={<div style={{ padding: '50px', textAlign: 'center' }}>Academics Page</div>} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<div style={{ padding: '50px', textAlign: 'center' }}>Login Page</div>} />

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

/* ConditionalLayout hides Navbar & Footer on /student routes */
function ConditionalLayout({ children }) {
  const location = useLocation();
  const isStudent = location.pathname.startsWith('/student');
  return (
    <>
      {!isStudent && <Navbar />}
      {children}
      {!isStudent && <Footer />}
    </>
  );
}

export default App;
