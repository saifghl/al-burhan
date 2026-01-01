import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMosque } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const location = useLocation();

    // SVG paths for menu icons to keep it lightweight (consistent with Home.jsx)
    const icons = {
        dashboard: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z", // Home/Dashboard
        students: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z", // People
        classes: "M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z", // Graduation Cap
        exams: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 7h10V5H7v2zm0 4h10v-2H7v2zm0 4h7v-2H7v2z", // Clipboard/Tasks
        reports: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z", // File Text
        curriculum: "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z", // Book with bookmark
        settings: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.04.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.08-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z", // Gear
    };

    const Icon = ({ path }) => (
        <svg className="sidebar-menu-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d={path} />
        </svg>
    );

    const menuItems = [
        { path: '/', label: 'Home', icon: icons.dashboard },
        { path: '/students', label: 'Students', icon: icons.students },
        { path: '/classes', label: 'Classes', icon: icons.classes },
        { path: '/exam-tasks', label: 'Exams', icon: icons.exams },
        { path: '/review-submissions', label: 'Reports', icon: icons.reports },
        { path: '/curriculum', label: 'Curriculum', icon: icons.curriculum },
        { path: '/settings', label: 'Settings', icon: icons.settings },
    ];

    return (
        <aside className={`sidebar-main ${isOpen ? 'open' : ''}`}>
            <Link to="/" className="sidebar-logo-section">
                <FaMosque className="sidebar-logo-icon" />
                <h1 className="sidebar-logo-text">Al Burhan</h1>
            </Link>

            <nav>
                <ul className="sidebar-nav-menu">
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`sidebar-menu-item ${location.pathname === item.path ? 'active' : ''}`}
                                onClick={() => isOpen && toggleSidebar && toggleSidebar()}
                            >
                                <Icon path={item.icon} /> {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
