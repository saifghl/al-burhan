import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes as placeholders or components are created */}
          <Route path="/about" element={<div style={{ padding: '50px', textAlign: 'center' }}>About Us Page</div>} />
          <Route path="/administration" element={<div style={{ padding: '50px', textAlign: 'center' }}>Administration Page</div>} />
          <Route path="/academics" element={<div style={{ padding: '50px', textAlign: 'center' }}>Academics Page</div>} />
          <Route path="/admission" element={<div style={{ padding: '50px', textAlign: 'center' }}>Admission Page</div>} />
          <Route path="/donation" element={<div style={{ padding: '50px', textAlign: 'center' }}>Donation Page</div>} />
          <Route path="/contact" element={<div style={{ padding: '50px', textAlign: 'center' }}>Contact Page</div>} />
          <Route path="/login" element={<div style={{ padding: '50px', textAlign: 'center' }}>Login Page</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
