import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Admission from './components/Admission/Admission';
import Donation from './components/Donation/Donation';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login'; // Import Login
import LanguageSelection from './components/Login/LanguageSelection';
import VerifyIdentity from './components/Login/VerifyIdentity';
import ForgotPassword from './components/Login/ForgotPassword';
import Administration from './components/Administration/Administration'; // Import Administration
import Academics from './components/Academics/Academics'; // Import Academics
import Syllabus from './components/Syllabus/Syllabus';
import About from './components/About/About'; // Import About component
import ParentDashboard from './components/ParentDashboard/ParentDashboard';
import ParentProgress from './components/ParentDashboard/ParentProgress';
import ParentAttendance from './components/ParentDashboard/ParentAttendance';
import ParentFees from './components/ParentDashboard/ParentFees';
import ParentProfile from './components/ParentDashboard/ParentProfile';
import ParentSettings from './components/ParentDashboard/ParentSettings';
import ParentNotifications from './components/ParentDashboard/ParentNotifications';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Parent Dashboard - No Navbar/Footer */}
          <Route path="/login/parent-dashboard" element={<ParentDashboard />} />
          <Route path="/login/parent-dashboard/progress" element={<ParentProgress />} />
          <Route path="/login/parent-dashboard/attendance" element={<ParentAttendance />} />
          <Route path="/login/parent-dashboard/fees" element={<ParentFees />} />
          <Route path="/login/parent-dashboard/profile" element={<ParentProfile />} />
          <Route path="/login/parent-dashboard/settings" element={<ParentSettings />} />
          <Route path="/login/parent-dashboard/notifications" element={<ParentNotifications />} />

          {/* Main App Layout */}
          <Route path="*" element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/administration" element={<Administration />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/academics/syllabus" element={<Syllabus />} />
                <Route path="/admission" element={<Admission />} />
                <Route path="/donation" element={<Donation />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login/language" element={<LanguageSelection />} />
                <Route path="/login/verify" element={<VerifyIdentity />} />
                <Route path="/login/forgot-password" element={<ForgotPassword />} />
              </Routes>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
