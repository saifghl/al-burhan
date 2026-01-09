import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import {
    FaBars,
    FaTimes,
    FaThLarge,
    FaGlobe,
    FaInbox,
    FaUsers,
    FaUserGraduate,
    FaChalkboardTeacher,
    FaClipboardList,
    FaBullhorn,
    FaHandHoldingHeart,
    FaCloudUploadAlt,
    FaCog,
    FaExternalLinkAlt
} from 'react-icons/fa';
import './AdminMobileNav.css';

const AdminMobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Dashboard', path: '/admin/dashboard', icon: <FaThLarge /> },
        { name: 'Public Content', path: '/admin/public-content', icon: <FaGlobe /> },
        { name: 'Public Requests', path: '/admin/public-requests', icon: <FaInbox /> },
        { name: 'User Accounts', path: '/admin/users', icon: <FaUsers /> },
        { name: 'Student Records', path: '/admin/students', icon: <FaUserGraduate /> },
        { name: 'Teacher Control', path: '/admin/teachers', icon: <FaChalkboardTeacher /> },
        { name: 'Attendance & Results', path: '/admin/academics', icon: <FaClipboardList /> },
        { name: 'Notices & Activities', path: '/admin/notices', icon: <FaBullhorn /> },
        { name: 'Donations', path: '/admin/donations', icon: <FaHandHoldingHeart /> },
        { name: 'Publish Manager', path: '/admin/publish', icon: <FaCloudUploadAlt /> },
        { name: 'System Settings', path: '/admin/settings', icon: <FaCog /> },
        { name: 'Visit Website', path: '/', icon: <FaExternalLinkAlt /> },
    ];

    const sidebarContent = (
        <>
            {isOpen && (
                <div className="mobile-nav-overlay" onClick={() => setIsOpen(false)}></div>
            )}

            <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}>
                <div className="mobile-drawer-header">
                    <span className="mobile-nav-brand">Menu</span>
                    <button className="close-drawer-btn" onClick={() => setIsOpen(false)}>
                        <FaTimes />
                    </button>
                </div>
                <ul className="mobile-menu-list">
                    {menuItems.map((item, index) => (
                        <li key={index} className="mobile-menu-item">
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => isActive ? "mobile-menu-link active" : "mobile-menu-link"}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );

    return (
        <>
            <div className="mobile-nav-header">
                <button className="mobile-nav-toggle" onClick={() => setIsOpen(true)}>
                    <FaBars />
                </button>
                <div className="mobile-nav-brand">
                    <span>Al Burhan Admin</span>
                </div>
            </div>
            {createPortal(sidebarContent, document.body)}
        </>
    );
};

export default AdminMobileNav;
