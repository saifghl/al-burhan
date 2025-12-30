
import { Link } from 'react-router-dom';
import './Settings.css';
import { FaUser, FaShieldAlt, FaBell, FaGlobe, FaQuestionCircle, FaLock, FaSlidersH, FaFileAlt } from 'react-icons/fa';

const Settings = () => {
    return (
        <div className="student-settings">

            <div className="settings-header">
                <h2>Settings</h2>
                <p>Manage your account preferences, security, and learning environment.</p>
            </div>

            <div className="settings-container">

                {/* Content Area */}
                <div className="settings-content">

                    {/* Change Password Card */}
                    <div className="settings-card">
                        <div className="sc-header">
                            <FaLock className="sc-icon" />
                            <h3>Change Password</h3>
                        </div>

                        <div className="form-group-row">
                            <label>Current Password</label>
                            <input type="password" className="st-input" placeholder="Enter current password" />
                        </div>

                        <div className="password-grid">
                            <div className="form-group-row">
                                <label>New Password</label>
                                <input type="password" className="st-input" placeholder="Enter new password" />
                            </div>
                            <div className="form-group-row">
                                <label>Confirm Password</label>
                                <input type="password" className="st-input" placeholder="Confirm new password" />
                            </div>
                        </div>

                        <button className="btn-update">Update Password</button>
                    </div>

                    {/* Preferences Card */}
                    <div className="settings-card">
                        <div className="sc-header">
                            <FaSlidersH className="sc-icon" />
                            <h3>Preferences</h3>
                        </div>

                        <div className="pref-row">
                            <div className="pref-info">
                                <h4>Language Preference</h4>
                                <p>Select your preferred language for the interface.</p>
                            </div>
                            <select className="lang-select">
                                <option>English</option>
                                <option>Arabic</option>
                            </select>
                        </div>

                        <div className="pref-row">
                            <div className="pref-info">
                                <h4>Email Notifications</h4>
                                <p>Receive daily summaries of your course progress.</p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider"></span>
                            </label>
                        </div>

                        <div className="pref-row">
                            <div className="pref-info">
                                <h4>Assignment Reminders</h4>
                                <p>Get notified 24h before an assignment is due.</p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider"></span>
                            </label>
                        </div>

                        <div className="pref-row">
                            <div className="pref-info">
                                <h4>New Course Announcements</h4>
                                <p>Be the first to know about new religious study modules.</p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>

                    {/* Bottom Info Cards */}
                    <div className="bottom-cards">
                        <div className="mini-card">
                            <div className="mc-content">
                                <h4>Privacy Policy</h4>
                                <p>Read about how we protect your data and learning history.</p>
                            </div>
                            <FaShieldAlt className="mc-icon" />
                        </div>

                        <Link to="/student/settings/faq" className="mini-card-link">
                            <div className="mc-content">
                                <h4>Help Center</h4>
                                <p>Find FAQs regarding exams, grades, and technical issues.</p>
                            </div>
                            <FaQuestionCircle className="mc-icon" />
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Settings;
