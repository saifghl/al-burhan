import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css';
import {
    FaThLarge,
    FaGlobe,
    FaInbox,
    FaUsers,
    FaGraduationCap,
    FaChalkboardTeacher,
    FaClipboardList,
    FaBullhorn,
    FaHandHoldingHeart,
    FaCloudUploadAlt,
    FaCog
} from 'react-icons/fa';

import { MdPublic } from "react-icons/md"; // Alternative for public content
import { IoIosPeople } from "react-icons/io";

const Sidebar = () => {
    const location = useLocation();

    // Menu logic: path is the route, label is the display text, icon is the component
    // Note: Some paths are placeholders until actual routes are created
    const menuItems = [
        { path: '/admin-dashboard', label: 'Dashboard', icon: <FaThLarge /> },
        { path: '/admin/public-content', label: 'Public Content', icon: <MdPublic /> },
        { path: '/admin/public-requests', label: 'Public Requests', icon: <FaInbox /> },
        { path: '/admin/user-accounts', label: 'User Accounts', icon: <FaUsers /> },
        { path: '/admin/student-records', label: 'Student Records', icon: <FaGraduationCap /> },
        { path: '/admin/teachers', label: 'Teacher Control', icon: <FaChalkboardTeacher /> }, // This matches the "Faculty Management" context
        { path: '/admin/attendance-results', label: 'Attendance & Results', icon: <FaClipboardList /> },
        { path: '/admin/notices', label: 'Notices & Activities', icon: <FaBullhorn /> },
        { path: '/admin/donations', label: 'Donations', icon: <FaHandHoldingHeart /> },
        { path: '/admin/publish', label: 'Publish Manager', icon: <FaCloudUploadAlt /> },
        { path: '/admin/settings', label: 'System Settings', icon: <FaCog /> },
    ];

    return (
        <aside className="admin-sidebar">
            <div className="sidebar-logo">
                {/* Placeholder SVG for Al Burhan Logo - replacing with text/icon representation if actual SVG not available */}
                <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-icon">
                    <path d="M25 2L2 14V46C2 47.1046 2.89543 48 4 48H46C47.1046 48 48 47.1046 48 46V14L25 2Z" stroke="#64A926" strokeWidth="3" strokeLinejoin="round" />
                    <path d="M12 20V40" stroke="#64A926" strokeWidth="3" strokeLinecap="round" />
                    <path d="M38 20V40" stroke="#64A926" strokeWidth="3" strokeLinecap="round" />
                    <path d="M2 14H48" stroke="#64A926" strokeWidth="3" />
                </svg>
                <h1 className="logo-text">Al Burhan</h1>
            </div>

            <ul className="sidebar-menu">
                {menuItems.map((item) => (
                    <li key={item.label}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
                        >
                            <span className="menu-icon">{item.icon}</span>
                            <span className="menu-text">{item.label}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
