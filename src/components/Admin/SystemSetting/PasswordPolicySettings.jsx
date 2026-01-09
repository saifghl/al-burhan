import React, { useState } from 'react';
import {
    FaLock,
    FaTerminal,
    FaSortNumericDown,
    FaFont,
    FaFingerprint,
    FaRedoAlt
} from 'react-icons/fa';
import AdminMobileNav from '../AdminDonation/AdminMobileNav';
import './PasswordPolicySettings.css';

const PasswordPolicySettings = () => {
    // State for toggles
    const [policy, setPolicy] = useState({
        minLength: 12,
        expiryDays: 90,
        numbers: true,
        uppercase: true,
        specialChars: true,
        firstLoginChange: true
    });

    const handleToggle = (key) => {
        setPolicy(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPolicy(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="pps-container">
            <AdminMobileNav />

            <div className="pps-header">
                <span className="pps-breadcrumb">Settings {'>'} Password Policy</span>
                <div className="pps-title">
                    <h1>Password Security Settings</h1>
                    <p>Configure global password requirements for all system users.</p>
                </div>
            </div>

            {/* Visual Banner */}
            <div className="pps-banner">
                {/* Decorative Elements */}
                <div className="pps-banner-icon">
                    <FaLock />
                </div>
            </div>

            <div className="pps-content-card">
                {/* Input Row */}
                <div className="pps-input-row">
                    <div className="pps-input-group">
                        <label>Minimum Password Length</label>
                        <div className="pps-input-wrapper">
                            <input
                                type="number"
                                name="minLength"
                                value={policy.minLength}
                                onChange={handleChange}
                            />
                            <span className="pps-unit">characters</span>
                        </div>
                    </div>

                    <div className="pps-input-group">
                        <label>Password Expiry</label>
                        <div className="pps-input-wrapper">
                            <input
                                type="number"
                                name="expiryDays"
                                value={policy.expiryDays}
                                onChange={handleChange}
                            />
                            <span className="pps-unit">days</span>
                        </div>
                    </div>
                </div>

                {/* Toggles List */}
                <div className="pps-toggles-section">

                    {/* Item 1 */}
                    <div className="pps-toggle-item">
                        <div className="toggle-info">
                            <div className="toggle-icon-box green">
                                <FaSortNumericDown /> {/* Using generic icon since we don't have separate component */}
                            </div>
                            <div className="toggle-text">
                                <h4>Require numbers</h4>
                                <p>Passwords must contain at least one digit (0-9)</p>
                            </div>
                        </div>
                        <label className="pps-switch">
                            <input
                                type="checkbox"
                                checked={policy.numbers}
                                onChange={() => handleToggle('numbers')}
                            />
                            <span className="pps-slider"></span>
                        </label>
                    </div>

                    {/* Item 2 */}
                    <div className="pps-toggle-item">
                        <div className="toggle-info">
                            <div className="toggle-icon-box green">
                                <FaFont />
                            </div>
                            <div className="toggle-text">
                                <h4>Require uppercase letters</h4>
                                <p>Passwords must contain at least one uppercase letter (A-Z)</p>
                            </div>
                        </div>
                        <label className="pps-switch">
                            <input
                                type="checkbox"
                                checked={policy.uppercase}
                                onChange={() => handleToggle('uppercase')}
                            />
                            <span className="pps-slider"></span>
                        </label>
                    </div>

                    {/* Item 3 */}
                    <div className="pps-toggle-item">
                        <div className="toggle-info">
                            <div className="toggle-icon-box green">
                                <FaFingerprint />
                            </div>
                            <div className="toggle-text">
                                <h4>Require special characters</h4>
                                <p>Include symbols like !, @, #, $, %</p>
                            </div>
                        </div>
                        <label className="pps-switch">
                            <input
                                type="checkbox"
                                checked={policy.specialChars}
                                onChange={() => handleToggle('specialChars')}
                            />
                            <span className="pps-slider"></span>
                        </label>
                    </div>

                    {/* Item 4 */}
                    <div className="pps-toggle-item">
                        <div className="toggle-info">
                            <div className="toggle-icon-box green">
                                <FaRedoAlt />
                            </div>
                            <div className="toggle-text">
                                <h4>Force first-login password change</h4>
                                <p>New users must reset their password immediately</p>
                            </div>
                        </div>
                        <label className="pps-switch">
                            <input
                                type="checkbox"
                                checked={policy.firstLoginChange}
                                onChange={() => handleToggle('firstLoginChange')}
                            />
                            <span className="pps-slider"></span>
                        </label>
                    </div>

                </div>
            </div>

            {/* Footer Actions */}
            <div className="pps-footer-flow">
                <span className="pps-label-apply">Apply to All Users</span>
                <button className="btn-save-policy">Save Policy</button>
            </div>

        </div>
    );
};

export default PasswordPolicySettings;
