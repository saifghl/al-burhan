import React, { useState } from 'react';
import './EditProfile.css';
import profilePic from '../../assets/Picture16.png';

const EditProfile = () => {
    const [formData, setFormData] = useState({
        fullName: 'Ahmed Raza',
        gender: 'Male',
        contactNumber: '+92 300 1234567',
        email: 'ahmed.raza@madrasa.edu',
        residentialAddress: 'House 123, Street 4, Block R, Model Town, Lahore',
        highestQualification: 'Masters in Islamic Studies',
        experienceYears: '8',
        specialization: '14Z'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCancel = () => {
        console.log('Cancel clicked');
    };

    const handleSaveChanges = () => {
        console.log('Save Changes clicked', formData);
    };

    return (
        <div className="edit-profile-container">
            <div className="edit-profile-content">
                {/* Header Section */}
                <div className="profile-header">
                    <div className="header-left">
                        <h1 className="page-title">Edit Your Profile</h1>
                        <p className="page-subtitle">Manage personal details, professional qualifications and view employment records.</p>
                    </div>
                    <div className="header-actions">
                        <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                        <button className="save-btn" onClick={handleSaveChanges}>
                            <span className="save-icon">💾</span> Save Changes
                        </button>
                    </div>
                </div>

                {/* Profile Card */}
                <div className="profile-card">
                    <div className="profile-avatar-section">
                        <div className="avatar-wrapper">
                            <img src={profilePic} alt="Profile" className="profile-avatar" />
                            <button className="camera-btn">📷</button>
                        </div>
                    </div>
                    <div className="profile-info">
                        <h2 className="profile-name">Ahmed Raza</h2>
                        <p className="profile-role">Senior Teacher • Islamic Studies</p>
                        <div className="profile-contact-info">
                            <span className="contact-item">✉️ ahmed.raza@madrasa.edu</span>
                            <span className="contact-item">📞 +92 300 1234567</span>
                            <span className="contact-item">📍 Lahore, Pakistan</span>
                        </div>
                    </div>
                    <div className="profile-status">
                        <span className="status-badge active">Active</span>
                        <span className="employee-id">ID: T-1024</span>
                    </div>
                </div>

                {/* Main Form Section */}
                <div className="form-grid">
                    {/* Personal Information */}
                    <div className="form-section personal-info">
                        <h3 className="section-title">
                            <span className="section-icon">👤</span> Personal Information
                        </h3>

                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Gender</label>
                                <input
                                    type="text"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label>Contact Number</label>
                                <div className="input-with-icon">
                                    <span className="input-icon">📞</span>
                                    <input
                                        type="text"
                                        name="contactNumber"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        className="form-input"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <div className="input-with-icon">
                                <span className="input-icon">✉️</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Residential Address</label>
                            <input
                                type="text"
                                name="residentialAddress"
                                value={formData.residentialAddress}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>
                    </div>

                    {/* Employment Info */}
                    <div className="form-section employment-info">
                        <div className="section-header">
                            <h3 className="section-title">
                                <span className="section-icon">💼</span> Employment Info
                            </h3>
                            <button className="view-only-btn">View Only</button>
                        </div>

                        <div className="info-card">
                            <label>Date of Joining</label>
                            <div className="info-value">
                                <span className="calendar-icon">📅</span>
                                <span>September 15, 2016</span>
                            </div>
                        </div>

                        <div className="info-card">
                            <label>Monthly Honorarium</label>
                            <div className="info-value salary">
                                <span>PKR:</span>
                                <span className="amount">45,000</span>
                            </div>
                            <button className="eye-btn">👁️</button>
                        </div>

                        <div className="info-card">
                            <label>Attendance Summary (This Month)</label>
                            <div className="attendance-bar">
                                <div className="attendance-percentage">92%</div>
                                <div className="attendance-progress">
                                    <div className="progress-fill" style={{ width: '92%' }}></div>
                                </div>
                                <div className="attendance-stats">
                                    <span className="stat-item present">24 Present</span>
                                    <span className="stat-item absent">2 Absent</span>
                                    <span className="stat-item leave">1 Leave</span>
                                </div>
                            </div>
                        </div>

                        <div className="info-card">
                            <label>Contract Status</label>
                            <div className="contract-status">
                                <span className="status-icon">✅</span>
                                <div>
                                    <div className="status-text">Permanent Staff</div>
                                    <div className="status-date">Next review: Dec 2024</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Professional Details */}
                    <div className="form-section professional-details">
                        <h3 className="section-title">
                            <span className="section-icon">🎓</span> Professional Details
                        </h3>

                        <div className="form-group">
                            <label>Highest Qualification</label>
                            <input
                                type="text"
                                name="highestQualification"
                                value={formData.highestQualification}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label>Subjects Taught</label>
                            <div className="subjects-tags">
                                <span className="tag">Quran Translation <button className="tag-close">×</button></span>
                                <span className="tag">Arabic Grammar <button className="tag-close">×</button></span>
                                <span className="tag">Fiqh <button className="tag-close">×</button></span>
                                <span className="add-subjects">+Add Subjects</span>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Experience (Years)</label>
                                <input
                                    type="text"
                                    name="experienceYears"
                                    value={formData.experienceYears}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label>Specialization</label>
                                <input
                                    type="text"
                                    name="specialization"
                                    value={formData.specialization}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
