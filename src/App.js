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
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div style={{ padding: '50px', textAlign: 'center' }}>About Us Page</div>} />
          <Route path="/administration" element={<Administration />} /> {/* Updated Route */}
          <Route path="/academics" element={<div style={{ padding: '50px', textAlign: 'center' }}>Academics Page</div>} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/language" element={<LanguageSelection />} />
          <Route path="/login/verify" element={<VerifyIdentity />} />
          <Route path="/login/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
