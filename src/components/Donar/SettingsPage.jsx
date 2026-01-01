import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SettingsPage.css';
import '../Donar/Dashboard.css'; // Shared layout
import UserAvatar from '../../assets/Picture33.png'; // User Avatar

// Icons
const Icons = {
    Bell: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
    Settings: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
    SignOut: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>,
    LogOut: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>,
    Smartphone: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>,
    MessageSquare: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>,
    Monitor: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
    SmartphoneDevice: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
};

const SettingsPage = () => {
    const navigate = useNavigate();
    const [twoFactor, setTwoFactor] = useState(true);

    return (
        <div className="settings-page-container">
            {/* Navbar */}
            <header className="sp-navbar">
                <div className="logo-section">
                    <span className="logo-icon">🏰</span>
                    <span className="logo-text">Al Burhan</span>
                </div>
                <div className="header-right">
                    <div className="icon-btn" onClick={() => navigate('/notifications')}><Icons.Bell /></div>
                    <div className="icon-btn active"><Icons.Settings /></div>
                    <div className="user-avatar-small" onClick={() => navigate('/profile')}>
                        <img src={UserAvatar} alt="User" />
                    </div>
                </div>
            </header>

            <main className="sp-main-content">
                <div className="sp-header-row">
                    <h1>Security Settings</h1>
                    <p>Manage your password and security preferences to keep your donation account safe.</p>
                </div>

                <div className="sp-content-col">

                    {/* Change Password Card */}
                    <div className="sp-card">
                        <h3>Change Password</h3>

                        <div className="form-group">
                            <label>Current Password</label>
                            <input type="password" className="sp-input" />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>New Password</label>
                                <input type="password" className="sp-input" />
                            </div>
                            <div className="form-group">
                                <label>Confirm New Password</label>
                                <input type="password" className="sp-input" />
                            </div>
                        </div>

                        <div className="form-footer">
                            <a href="#" className="forgot-link">Forgot your password?</a>
                            <button className="btn-update">Update Password</button>
                        </div>
                    </div>

                    {/* 2FA Card */}
                    <div className="sp-card">
                        <div className="card-header-row">
                            <h3>Two-Factor Authentication</h3>
                            <button className="icon-btn-plain"><Icons.Smartphone /></button>
                        </div>
                        <p className="card-subtext">Secure your account with OTP verification via SMS.</p>

                        <div className="tfa-status-box">
                            <div className="tfa-info">
                                <div className="tfa-icon-sq"><Icons.MessageSquare /></div>
                                <div>
                                    <h4>Text Message (SMS)</h4>
                                    <p>Code sent to ending in •••• 8832</p>
                                </div>
                            </div>
                            <div className="toggle-wrapper">
                                <span className={`status-label ${twoFactor ? 'on' : 'off'}`}>{twoFactor ? 'On' : 'Off'}</span>
                                <label className="toggle-switch-sp">
                                    <input type="checkbox" checked={twoFactor} onChange={() => setTwoFactor(!twoFactor)} />
                                    <span className="slider-sp round"></span>
                                </label>
                            </div>
                        </div>

                        <a href="#" className="change-phone-link">Change phone number</a>
                    </div>

                    {/* Devices Card */}
                    <div className="sp-card">
                        <h3>Where you're logged in</h3>
                        <p className="card-subtext">We'll alert you via email if there is any unusual activity on your account.</p>

                        <div className="device-list">
                            <div className="device-item">
                                <div className="device-icon"><Icons.Monitor /></div>
                                <div className="device-info">
                                    <h4>Chrome on macOS</h4>
                                    <p>London, United Kingdom · <span className="active-green">Active now</span></p>
                                </div>
                                <span className="device-status-text">This Device</span>
                            </div>

                            <div className="device-item">
                                <div className="device-icon"><Icons.SmartphoneDevice /></div>
                                <div className="device-info">
                                    <h4>Safari on iPhone 13</h4>
                                    <p>London, United Kingdom · Last active 3 days ago</p>
                                </div>
                                <button className="logout-device-btn">Log out</button>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-logout-row">
                        <button className="logout-all-btn">
                            <Icons.LogOut /> Log out of all known devices
                        </button>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default SettingsPage;
