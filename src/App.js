import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Teacher/Home';
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
import EditProfile from './components/Teacher/EditProfile';
import Inbox from './components/Teacher/Inbox';
import Footer from './components/Footer/Footer';
import './App.css';

const AppContent = () => {
  const location = useLocation();

  // List of paths that should NOT show the global Navbar and Footer
  // (Teacher pages have their own sidebar/header)
  const hideNavFooterPaths = ['/', '/namaz-attendance', '/create-assignment', '/review-submissions', '/students', '/student-profile', '/weekly-report', '/submit-report', '/exam-tasks', '/results-entry', '/classes', '/draft-reports', '/edit-profile', '/inbox'];
  const shouldHide = hideNavFooterPaths.includes(location.pathname);

  return (
    <div className="App">
      {!shouldHide && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/about" element={<div style={{ padding: '50px', textAlign: 'center' }}>About Us Page</div>} />
        <Route path="/administration" element={<div style={{ padding: '50px', textAlign: 'center' }}>Administration Page</div>} />
        <Route path="/academics" element={<div style={{ padding: '50px', textAlign: 'center' }}>Academics Page</div>} />
        <Route path="/admission" element={<div style={{ padding: '50px', textAlign: 'center' }}>Admission Page</div>} />
        <Route path="/donation" element={<div style={{ padding: '50px', textAlign: 'center' }}>Donation Page</div>} />
        <Route path="/contact" element={<div style={{ padding: '50px', textAlign: 'center' }}>Contact Page</div>} />
        <Route path="/login" element={<div style={{ padding: '50px', textAlign: 'center' }}>Login Page</div>} />
      </Routes>
      {!shouldHide && <Footer />}
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
