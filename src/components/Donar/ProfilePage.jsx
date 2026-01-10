import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';
import '../Donar/Dashboard.css'; // Shared layout
import UserAvatar from '../../assets/Picture33.png'; // User Avatar
import logoText from '../../assets/logo-text.png';
import LogoutModal from './LogoutModal';

// Icons
const Icons = {
    Camera: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>,
    CheckCircle: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="#15803d" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>,
    Lock: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
    Bell: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
    CreditCard: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>,
    ChevronRight: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>,
    Translate: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
    SignOut: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>,
    ArrowLeft: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>,
    Settings: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
    Check: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
};

const ProfilePage = () => {
    const navigate = useNavigate();
    const [editMode, setEditMode] = useState(true);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleConfirmLogout = () => {
        navigate('/');
    };

    return (
        <div className="profile-page-container">
            {/* Navbar (Same as Notification Page) */}
            <header className="pp-navbar">
                <div className="logo-section">
                    <img src={logoText} alt="Al Burhan" className="brand-logo" style={{ height: '40px' }} />
                </div>
                <div className="header-right">
                    <div className="icon-btn" onClick={() => navigate('/notifications')}><Icons.Bell /></div>
                    <div className="icon-btn" onClick={() => navigate('/settings')}><Icons.Settings /></div>
                    <div className="user-avatar-small">
                        <img src={UserAvatar} alt="User" />
                    </div>
                </div>
            </header>

            <main className="pp-main-content">
                <div className="pp-header-row">
                    <div>
                        <h1>Profile Settings</h1>
                        <p>Manage your personal information and preferences.</p>
                    </div>
                    <div className="last-updated">Last updated: Today, 10:42 AM</div>
                </div>

                <div className="pp-grid-layout">
                    {/* Left Column: Profile & Form */}
                    <div className="pp-col-left">

                        {/* User Card */}
                        <div className="pp-card user-identity-card">
                            <div className="pp-avatar-large">
                                <img src={UserAvatar} alt="User" />
                                <div className="camera-btn"><Icons.Camera /></div>
                            </div>
                            <div className="pp-identity-info">
                                <h2>James Anderson</h2>
                                <p>Member since September 2021</p>
                                <div className="pp-badges">
                                    <span className="badge-verified"><Icons.CheckCircle /> Verified Donor</span>
                                    <span className="badge-blue">Top Contributor</span>
                                </div>
                            </div>
                        </div>

                        {/* Edit Toggle */}
                        <div className="pp-card toggle-card">
                            <div>
                                <h3>Edit Mode</h3>
                                <p>Switch to edit your personal details</p>
                            </div>
                            <label className="toggle-switch">
                                <input type="checkbox" checked={editMode} onChange={() => setEditMode(!editMode)} />
                                <span className="slider round"></span>
                            </label>
                        </div>

                        {/* Personal Details Form */}
                        <div className="pp-card form-card">
                            <h3>Personal Details</h3>

                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" defaultValue="James Anderson" disabled={!editMode} className="pp-input" />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Mobile Number</label>
                                    <div className="input-with-icon">
                                        <input type="text" defaultValue="+91 98765 43210" disabled={!editMode} className="pp-input success" />
                                        <span className="status-icon"><Icons.CheckCircle /></span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <div className="input-with-icon">
                                        <input type="text" defaultValue="james.anderson@example.com" disabled={!editMode} className="pp-input success" />
                                        <span className="status-icon"><Icons.CheckCircle /></span>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Preferred Language</label>
                                <div className="input-with-icon-left">
                                    <span className="left-icon"><Icons.Translate /></span>
                                    <select disabled={!editMode} className="pp-input">
                                        <option>English (United States)</option>
                                        <option>Hindi</option>
                                        <option>Urdu</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Mailing Address</label>
                                <textarea rows="3" disabled={!editMode} className="pp-input" defaultValue="123, Green Park, New Delhi, India"></textarea>
                            </div>

                            {editMode && (
                                <div className="form-actions-row">
                                    <button className="btn-cancel" onClick={() => setEditMode(false)}>Cancel</button>
                                    <button className="btn-save">Save Changes</button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Impact & Prefs */}
                    <div className="pp-col-right">

                        {/* Impact Summary */}
                        <div className="pp-card impact-summary-card">
                            <h3>Impact Summary</h3>

                            <div className="impact-stat-box">
                                <label>Total Contribution</label>
                                <div className="stat-value">₹1,450</div>
                            </div>

                            <div className="impact-stat-box">
                                <label>Madarsas Supported</label>
                                <div className="stat-value">8</div>
                            </div>

                            <div className="view-history-link" onClick={() => navigate('/donation-history')}>
                                View detailed history <Icons.ChevronRight />
                            </div>
                        </div>

                        {/* Account Preferences */}
                        <div className="pp-card prefs-card">
                            <h3>Account Preferences</h3>
                            <ul className="prefs-list">
                                <li>
                                    <div className="pref-item">
                                        <span className="pref-icon"><Icons.Lock /></span> Change Password
                                    </div>
                                    <Icons.ChevronRight />
                                </li>
                                <li>
                                    <div className="pref-item">
                                        <span className="pref-icon"><Icons.Bell /></span> Notification Settings
                                    </div>
                                    <Icons.ChevronRight />
                                </li>
                                <li>
                                    <div className="pref-item">
                                        <span className="pref-icon"><Icons.CreditCard /></span> Payment Methods
                                    </div>
                                    <Icons.ChevronRight />
                                </li>
                            </ul>
                        </div>

                        {/* Support Card */}
                        <div className="pp-card support-card">
                            <h3>Need Help?</h3>
                            <p>Questions about your profile or donations?</p>
                            <button className="btn-light">Contact Support</button>
                        </div>

                    </div>
                </div>

                <div className="bottom-signout-row">
                    <button className="signout-link" onClick={() => setShowLogoutModal(true)}>
                        <Icons.SignOut /> Sign Out
                    </button>
                </div>
            </main>

            <LogoutModal
                isOpen={showLogoutModal}
                onClose={() => setShowLogoutModal(false)}
                onLogout={handleConfirmLogout}
            />
        </div>
    );
};

export default ProfilePage;
