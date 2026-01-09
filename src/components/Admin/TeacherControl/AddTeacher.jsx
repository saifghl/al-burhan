import React, { useState } from 'react';
import { FaPrint, FaUser, FaGraduationCap, FaLock, FaCalendarAlt, FaPen, FaSave, FaTrash } from 'react-icons/fa';
import './AddTeacher.css';

const AddTeacher = () => {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className="add-teacher-container">
            <div className="profile-header-area">
                <div className="breadcrumbs">
                    <span className="home-icon">⌂</span> Home <span>/</span> Teachers <span>/</span> <strong>Sarah Jenkins</strong>
                </div>

                <div className="header-row">
                    <div className="title-info">
                        <h1>Sarah Jenkins</h1>
                        <p className="teacher-id"><span className="id-icon">🆔</span> Teacher ID: #88234</p>
                    </div>
                    <button className="print-btn">
                        <FaPrint /> Print Profile
                    </button>
                </div>

                <div className="profile-tabs">
                    <button className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
                        <FaUser className="tab-icon" /> Profile Details
                    </button>
                    <button className={`tab-btn ${activeTab === 'classes' ? 'active' : ''}`} onClick={() => setActiveTab('classes')}>
                        <FaGraduationCap className="tab-icon" /> Class Assignments
                    </button>
                    <button className={`tab-btn ${activeTab === 'permissions' ? 'active' : ''}`} onClick={() => setActiveTab('permissions')}>
                        <FaLock className="tab-icon" /> Permissions
                    </button>
                    <button className={`tab-btn ${activeTab === 'timetable' ? 'active' : ''}`} onClick={() => setActiveTab('timetable')}>
                        <FaCalendarAlt className="tab-icon" /> Timetable
                    </button>
                </div>
            </div>

            <div className="content-area">
                {activeTab === 'profile' && (
                    <div className="profile-card">
                        <div className="photo-section">
                            <div className="photo-wrapper">
                                <div className="photo-circle"></div>
                                <button className="edit-photo-btn"><FaPen /></button>
                            </div>
                            <div className="photo-actions">
                                <h3>Profile Photo</h3>
                                <p>Upload a professional photo. Allowed formats: *.jpeg, *.jpg, *.png. Max size of 3.1 MB.</p>
                                <div className="action-buttons">
                                    <button className="upload-btn">Upload New Photo</button>
                                    <button className="delete-btn">Delete</button>
                                </div>
                            </div>
                        </div>

                        <div className="forms-container">
                            <div className="form-column">
                                <h3 className="section-title">Personal Information</h3>
                                <div className="form-group">
                                    <label>Full Name <span className="required">*</span></label>
                                    <div className="input-with-icon">
                                        <span className="input-icon">👤</span>
                                        <input type="text" defaultValue="Sarah Jenkins" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group half">
                                        <label>Date of Birth</label>
                                        <input type="text" placeholder="DD/MM/YYYY" />
                                    </div>
                                    <div className="form-group half">
                                        <label>Gender</label>
                                        <select>
                                            <option>Female</option>
                                            <option>Male</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea defaultValue="123v green street, pune" rows="4"></textarea>
                                </div>
                            </div>
                            <div className="form-column">
                                <h3 className="section-title">Contact & Professional</h3>
                                <div className="form-group">
                                    <label>Email Address <span className="required">*</span></label>
                                    <div className="input-with-icon">
                                        <span className="input-icon">✉️</span>
                                        <input type="email" defaultValue="sarahjenkins@gmail.com" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <div className="input-with-icon">
                                        <span className="input-icon">📞</span>
                                        <input type="tel" defaultValue="+91 7538547498" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Highest Qualification</label>
                                    <div className="input-with-icon">
                                        <span className="input-icon">🎓</span>
                                        <input type="text" defaultValue="Master of Education (M.Ed)" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Teaching Experience (Years)</label>
                                    <div className="input-with-icon">
                                        <span className="input-icon">👨‍🏫</span>
                                        <input type="number" defaultValue="8" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-footer">
                            <div className="last-updated"><span className="info-icon">ℹ️</span> Last updated by Admin on Oct 24, 2023</div>
                            <div className="footer-buttons">
                                <button className="cancel-btn">Cancel</button>
                                <button className="save-btn"><FaSave /> Save Changes</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddTeacher;
