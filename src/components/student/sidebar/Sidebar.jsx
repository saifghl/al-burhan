import React, { useState } from 'react';
import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Icon = ({ name }) => {
  switch (name) {
    case 'home':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 11.5L12 4l9 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 21V12h14v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      );
    case 'book':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 19.5A2 2 0 0 1 5 17.5H19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 6.5A2 2 0 0 1 7 4.5h12v15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      );
    case 'attendance':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" /><path d="M16 2v4M8 2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
      );
    case 'results':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /><path d="M18 7v10M12 11v6M6 15v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
      );
    case 'fees':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1v22" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /><path d="M17 5H7a4 4 0 0 0 0 8h10a4 4 0 0 1 0 8H7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      );
    case 'activity':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h4l3 8 4-16 3 8h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      );
    case 'profile':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 21v-2a4 4 0 0 1 3-3.87" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.6" /></svg>
      );
    case 'bell':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 17H9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><path d="M18 8v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6h0a6 6 0 0 1 6 6z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      );
    case 'gear':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" stroke="currentColor" strokeWidth="1.4" /><path d="M19.4 15a1.91 1.91 0 0 0 .1 1.8 2 2 0 0 1-1 .5 1.9 1.9 0 0 1-1.6-.4 2 2 0 0 0-1.6-.4 2 2 0 0 1-1.2 0 2 2 0 0 0-1.6.4A1.9 1.9 0 0 1 9.5 17a2 2 0 0 1-1-.5 1.9 1.9 0 0 0 .1-1.8 2 2 0 0 1 .4-1.6 1.9 1.9 0 0 0 .4-1.6 2 2 0 0 1 0-1.2 1.9 1.9 0 0 0-.4-1.6 2 2 0 0 1 .4-1.6 1.9 1.9 0 0 1 1-.5 2 2 0 0 1 1.2 0 1.9 1.9 0 0 0 1.6.4 2 2 0 0 1 1 .5 1.9 1.9 0 0 0 1.6.4 2 2 0 0 1 1.2 0 1.9 1.9 0 0 1 1 .5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      );
    case 'logout':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 17l5-5-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 12H9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 19H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      );
    default:
      return null;
  }
};

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const items = [
    { key: 'home', label: 'Home', to: '/student/home' },
    { key: 'book', label: 'My Learning', to: '/student/learning' },
    { key: 'attendance', label: 'Attendance', to: '/student/attendance' },
    { key: 'results', label: 'Results', to: '/student/results' },
    { key: 'fees', label: 'Fees', to: '/student/fees' },
    { key: 'activity', label: 'My Activities', to: '/student/activities' },
  ];

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button className="mobile-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {/* Overlay for mobile */}
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={closeSidebar}></div>

      <aside className={`student-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="brand">
          <h1 className="brand-title">Al Burhan</h1>
        </div>

        <nav className="nav">
          <ul>
            {items.map((it) => {
              const isActive = location.pathname === it.to || (it.to === '/student/home' && location.pathname === '/student');
              return (
                <li key={it.key} className={isActive ? 'active' : ''}>
                  <Link to={it.to} className="nav-link" onClick={closeSidebar}>
                    <span className="icon"><Icon name={it.key} /></span>
                    <span className="label">{it.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="sidebar-center">
          <ul className="center-actions">
            <li>
              <Link to="/student/profile" className="center-btn">
                <span className="cicon"><Icon name="profile" /></span>
                <span className="ctext">Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/student/notifications" className="center-btn">
                <span className="cicon"><Icon name="bell" /></span>
                <span className="ctext">Notification</span>
              </Link>
            </li>
            <li>
              <Link to="/student/settings" className="center-btn">
                <span className="cicon"><Icon name="gear" /></span>
                <span className="ctext">Settings</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-footer">
          <Link to="/student/logout" className="signout" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
            <span className="signout-icon"><Icon name="logout" /></span> Sign Out
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
