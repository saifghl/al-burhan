import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ParentSettings.css';
import './ParentDashboard.css'; // Shared styles for header/nav
import pProfile from '../../assets/p-profile.png';
import logoText from '../../assets/logo-text.png';
import { FaBell, FaCog, FaChevronRight, FaShieldAlt, FaLanguage, FaRegBell, FaQuestionCircle, FaFileAlt, FaSignOutAlt, FaHome, FaChartLine, FaCalendarAlt, FaMoneyBillWave, FaUser } from 'react-icons/fa';
import LogoutModal from './LogoutModal';

const ParentSettings = () => {
    const navigate = useNavigate();
    const [showLogout, setShowLogout] = useState(false);
    // Mock state for toggles
    const [twoFactor, setTwoFactor] = useState(true);
    const [emailNotif, setEmailNotif] = useState(true);
    const [smsNotif, setSmsNotif] = useState(true);
    const [newsletter, setNewsletter] = useState(true);

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className="parent-settings-page">
            {/* Header - Reused */}
            <header className="pd-header">
                <div className="pd-logo">
                    <img src={logoText} alt="Al Burhan" className="logo-img" />
                </div>
                <div className="pd-header-actions">
                    <button className="icon-btn"><FaBell /></button>
                    {/* Active Cog since we are on Settings */}
                    <Link to="/login/parent-dashboard/settings" className="icon-btn active-s"><FaCog /></Link>
                    <button className="icon-btn" onClick={() => setShowLogout(true)}><FaSignOutAlt /></button>
                    <div className="header-profile">
                        <img src={pProfile} alt="Profile" />
                    </div>
                </div>
            </header>

            <div className="ps-container">
                <div className="ps-title-section">
                    <h1>Account Settings</h1>
                    <p>Manage your account preferences and security.</p>
                </div>

                {/* Profile Card */}
                <div className="ps-card profile-section">
                    <div className="ps-profile-info">
                        <div className="ps-avatar">
                            <img src={pProfile} alt="Profile" />
                        </div>
                        <div className="ps-details">
                            <h2>Mr. Mohammed Ali</h2>
                            <p className="role-text">Parent Account</p>
                            <p className="email-text">mohammed.ali@example.com</p>
                        </div>
                    </div>
                    <button className="edit-profile-btn">Edit Profile</button>
                </div>

                {/* Security Section */}
                <div className="ps-card">
                    <div className="section-header">
                        <FaShieldAlt className="section-icon" />
                        <h3>Security</h3>
                    </div>

                    <div className="setting-row">
                        <div className="setting-info">
                            <h4>Change Password</h4>
                            <p>Update your password to keep your account secure.</p>
                        </div>
                        <button className="update-btn">Update</button>
                    </div>

                    <div className="setting-row">
                        <div className="setting-info">
                            <h4>Two-Factor Authentication</h4>
                            <p>Add an extra layer of security to your account.</p>
                        </div>
                        {/* Toggle Switch */}
                        <div className={`toggle-switch ${twoFactor ? 'active' : ''}`} onClick={() => setTwoFactor(!twoFactor)}>
                            <div className="toggle-thumb"></div>
                        </div>
                    </div>
                </div>

                {/* Preferences Section */}
                <div className="ps-card">
                    <div className="section-header">
                        <FaCog className="section-icon" />
                        <h3>Preferences</h3>
                    </div>

                    <div className="setting-row">
                        <div className="setting-info">
                            <h4>Language Preference</h4>
                            <p>Select your preferred language for the interface.</p>
                        </div>
                        <select className="lang-select">
                            <option>English</option>
                            <option>Urdu</option>
                            <option>Arabic</option>
                        </select>
                    </div>

                    <div className="setting-group">
                        <h4 className="group-title">Notification Preferences</h4>

                        <div className="setting-row compact">
                            <span className="setting-label">Email Notifications for academic updates</span>
                            <div className={`toggle-switch small ${emailNotif ? 'active' : ''}`} onClick={() => setEmailNotif(!emailNotif)}>
                                <div className="toggle-thumb"></div>
                            </div>
                        </div>
                        <div className="setting-row compact">
                            <span className="setting-label">SMS Alerts for attendance</span>
                            <div className={`toggle-switch small ${smsNotif ? 'active' : ''}`} onClick={() => setSmsNotif(!smsNotif)}>
                                <div className="toggle-thumb"></div>
                            </div>
                        </div>
                        <div className="setting-row compact">
                            <span className="setting-label">Newsletters and Academy Announcements</span>
                            <div className={`toggle-switch small ${newsletter ? 'active' : ''}`} onClick={() => setNewsletter(!newsletter)}>
                                <div className="toggle-thumb"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Support & Legal */}
                <div className="ps-card">
                    <div className="section-header">
                        <FaQuestionCircle className="section-icon" />
                        <h3>Support & Legal</h3>
                    </div>

                    <div className="link-list">
                        <div className="link-item">
                            <div className="li-left">
                                <FaShieldAlt />
                                <span>Privacy Policy</span>
                            </div>
                            <FaChevronRight className="chevron" />
                        </div>
                        <div className="link-item">
                            <div className="li-left">
                                <FaFileAlt />
                                <span>Terms of Service</span>
                            </div>
                            <FaChevronRight className="chevron" />
                        </div>
                        <div className="link-item">
                            <div className="li-left">
                                <FaQuestionCircle />
                                <span>Help & Support</span>
                            </div>
                            <FaChevronRight className="chevron" />
                        </div>
                    </div>
                </div>

                {/* Danger Zone */}
                <div className="danger-limit">
                    <h4 className="danger-title">Danger Zone</h4>
                    <div className="danger-zone-card">
                        <div className="danger-info">
                            <h4>Deactivate Account</h4>
                            <p>Temporarily disable your account. This can be undone.</p>
                        </div>
                        <button className="deactivate-btn">Deactivate</button>
                    </div>
                </div>

            </div>

            {/* Bottom Nav */}
            <div className="pd-bottom-nav">
                <Link to="/login/parent-dashboard" className="nav-item">
                    <FaHome />
                    <span>Home</span>
                </Link>
                <Link to="/login/parent-dashboard/progress" className="nav-item">
                    <FaChartLine />
                    <span>Progress</span>
                </Link>
                <Link to="/login/parent-dashboard/attendance" className="nav-item">
                    <FaCalendarAlt />
                    <span>Attend</span>
                </Link>
                <Link to="/login/parent-dashboard/fees" className="nav-item">
                    <FaMoneyBillWave />
                    <span>Fees</span>
                </Link>
                <Link to="/login/parent-dashboard/profile" className="nav-item">
                    <FaUser />
                    <span>Profile</span>
                </Link>
            </div>
            {showLogout && <LogoutModal onClose={() => setShowLogout(false)} onLogout={handleLogout} />}
        </div>
    );
};

export default ParentSettings;
