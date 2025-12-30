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
import './App.css';

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
      <main className="student-content" style={{ flex: 1 }}>
        <Outlet />
      </main>
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
