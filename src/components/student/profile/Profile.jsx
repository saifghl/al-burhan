import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { FaPen, FaUser, FaUsers, FaGraduationCap, FaIdCard, FaDownload, FaAward, FaEye, FaPhoneAlt } from 'react-icons/fa';

const Profile = () => {
    return (
        <div className="student-profile">
            {/* --- Profile Header --- */}
            <div className="profile-header">
                <div className="ph-left">
                    <img
                        src="https://img.freepik.com/free-photo/young-student-woman-wearing-denim-jacket-eyeglasses-holding-colorful-folders-showing-thumb-up-pink-background_141793-46714.jpg?t=st=1735549053~exp=1735552653~hmac=6217c24f63c87f4c7d0d01449405d6e245a4a908a709033327d8dbcc8f668858&w=996"
                        alt="Student"
                        className="ph-avatar"
                    />
                    <div className="ph-info">
                        <h2>Ahmed Al-Farsi</h2>
                        <div className="ph-meta">
                            <div className="ph-meta-row">
                                <span>Student ID: <strong>2023-ST-992</strong></span>
                                <span className="ph-divider"></span>
                                <span className="status-badge">Active Student</span>
                            </div>
                            <div className="ph-meta-row">
                                <span>Academic Year: 2023-2024</span>
                                <span className="ph-divider"></span>
                                <span>Grade 5 - Section A (Hifz)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ph-right">
                    <Link to="/student/profile/edit">
                        <button className="edit-btn">
                            <FaPen /> Edit Profile
                        </button>
                    </Link>
                </div>
            </div>

            {/* --- 3-Column Info Grid --- */}
            <div className="profile-grid">

                {/* Card 1: Personal Details */}
                <div className="info-card">
                    <div className="card-title">
                        <div className="title-icon icon-blue"><FaUser /></div>
                        <h3>Personal Details</h3>
                    </div>
                    <div className="info-content">
                        <div className="info-row">
                            <label className="info-label">Date of Birth</label>
                            <div className="info-value">12 October 2010</div>
                        </div>
                        <div className="info-row">
                            <label className="info-label">Gender</label>
                            <div className="info-value">Male</div>
                        </div>
                        <div className="info-row">
                            <label className="info-label">Nationality</label>
                            <div className="info-value">Omani</div>
                        </div>
                        <div className="info-row">
                            <label className="info-label">Address</label>
                            <div className="info-value">Villa 45, Street 12, Al-Seeb, Muscat, Oman</div>
                        </div>
                    </div>
                </div>

                {/* Card 2: Guardian Info */}
                <div className="info-card">
                    <div className="card-title">
                        <div className="title-icon icon-purple"><FaUsers /></div>
                        <h3>Guardian Info</h3>
                    </div>
                    <div className="info-content">
                        <div className="info-row">
                            <label className="info-label">Guardian Name</label>
                            <div className="info-value">Ibrahim Al-Farsi</div>
                        </div>
                        <div className="info-row">
                            <label className="info-label">Relationship</label>
                            <div className="info-value">Father</div>
                        </div>
                        <div className="info-row">
                            <label className="info-label">Contact Number</label>
                            <div className="info-value val-highlight">
                                <FaPhoneAlt size={12} style={{ marginRight: 4 }} /> +968 9988 7766
                            </div>
                        </div>
                        <div className="info-row">
                            <label className="info-label">Email</label>
                            <div className="info-value">ibrahim.alfarsi@example.com</div>
                        </div>
                    </div>
                </div>

                {/* Card 3: Academic & Fees */}
                <div className="info-card">
                    <div className="card-title">
                        <div className="title-icon icon-orange"><FaGraduationCap /></div>
                        <h3>Academic & Fees</h3>
                    </div>
                    <div className="info-content">
                        <div className="info-row">
                            <label className="info-label">Class Teacher</label>
                            <div className="info-value">Ustadh Muhammad Ali</div>
                        </div>
                        <div className="info-row">
                            <label className="info-label">Sponsorship Status</label>
                            <div className="info-value">
                                <span className="scholarship-tag">Full Scholarship</span>
                            </div>
                        </div>
                        <div className="info-row">
                            <label className="info-label">Sponsor Name</label>
                            <div className="info-value">Al-Manara Education Trust</div>
                        </div>
                        <div className="info-row">
                            <label className="info-label">Duration</label>
                            <div className="info-value">2023 - 2025</div>
                        </div>
                    </div>
                </div>

            </div>

            {/* --- Bottom Grid (Docs & Awards) --- */}
            <div className="bottom-grid">

                {/* Documents */}
                <div className="info-card">
                    <div className="card-title">
                        <div className="title-icon icon-green"><FaIdCard /></div>
                        <h3>Documents</h3>
                    </div>

                    <div className="doc-box">
                        <div className="doc-header">
                            <span className="doc-type">ID Card</span>
                            <span className="valid-until">Valid till Dec 2024</span>
                        </div>
                        <div className="id-card-preview">
                            <FaIdCard className="id-icon-large" />
                            <div className="id-text">
                                <h4>Student ID Card</h4>
                                <p>Official digital identification card.</p>
                            </div>
                        </div>
                        <button className="download-btn">
                            <FaDownload /> Download ID
                        </button>
                    </div>
                </div>

                {/* Certificates */}
                <div className="info-card">
                    <div className="card-title" style={{ justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div className="title-icon icon-green"><FaAward /></div>
                            <h3>Certificates & Awards</h3>
                        </div>
                        <a href="#" className="view-all-link">View All</a>
                    </div>

                    <div className="cert-list">
                        <div className="cert-item">
                            <div className="cert-left">
                                <div className="cert-icon"><FaAward /></div>
                                <div className="cert-info">
                                    <h4>Hifz Level 1 Completion</h4>
                                    <p>Issued: 15 Aug 2023</p>
                                </div>
                            </div>
                            <FaEye className="view-icon" />
                        </div>

                        <div className="cert-item">
                            <div className="cert-left">
                                <div className="cert-icon"><FaAward /></div>
                                <div className="cert-info">
                                    <h4>Best Attendance Award - Term 1</h4>
                                    <p>Issued: 20 Dec 2023</p>
                                </div>
                            </div>
                            <FaEye className="view-icon" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Profile;
