import React from 'react';
import { NavLink } from 'react-router-dom';
import {
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
    FaCog
} from 'react-icons/fa';
import logoText from '../../assets/logo-text.png';
import './Admin.css';

const AdminSidebar = () => {
    const menuItems = [
        { name: 'Dashboard', path: '/admin/dashboard', icon: <FaThLarge /> },
        { name: 'Public Content', path: '/admin/public-content', icon: <FaGlobe /> },
        { name: 'Public Requests', path: '/admin/public-requests', icon: <FaInbox /> },
        { name: 'User Accounts', path: '/admin/users', icon: <FaUsers /> },
        { name: 'Student Records', path: '/admin/students', icon: <FaUserGraduate /> },
        { name: 'Teacher Control', path: '/admin/teachers', icon: <FaChalkboardTeacher /> },
        { name: 'Attendance & Results', path: '/admin/attendance-results', icon: <FaClipboardList /> },
        { name: 'Notices & Activities', path: '/admin/notices', icon: <FaBullhorn /> },
        { name: 'Donations', path: '/admin/donations', icon: <FaHandHoldingHeart /> },
        { name: 'Publish Manager', path: '/admin/publish', icon: <FaCloudUploadAlt /> },
        { name: 'System Settings', path: '/admin/settings', icon: <FaCog /> },
    ];

    return (
        <div className="admin-sidebar">
            <div className="admin-logo">
                <img src={logoText} alt="Al Burhan" style={{ height: '40px', width: 'auto' }} />
            </div>
            <ul className="sidebar-menu">
                {menuItems.map((item, index) => (
                    <li key={index} className="sidebar-item">
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminSidebar;
