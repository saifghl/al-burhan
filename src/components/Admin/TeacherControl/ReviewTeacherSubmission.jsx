import React from 'react';
import './ReviewTeacherSubmission.css';
import { FaEye, FaCheckCircle, FaUndo, FaTimesCircle, FaFilePdf, FaFileImage, FaDownload, FaUser, FaEnvelope, FaPhone, FaTrash, FaPen, FaHistory, FaGavel } from 'react-icons/fa';

const ReviewTeacherSubmission = () => {
    return (
        <div className="review-submission-container">
            {/* Breadcrumb */}
            <div className="rs-breadcrumb">
                Dashboard / Approvals / <span>Jane Doe</span>
            </div>

            {/* Header */}
            <div className="rs-header">
                <div>
                    <h1>Review Teacher Submission</h1>
                    <div className="status-indicator">
                        <span className="status-dot"></span> Status: Pending Review
                    </div>
                </div>
                <button className="public-preview-btn">
                    <FaEye /> Public Preview
                </button>
            </div>

            {/* Layout Grid */}
            <div className="rs-layout">
                {/* Left Column: Details */}
                <div className="rs-left-column">

                    {/* Profile Summary Card */}
                    <div className="rs-card">
                        <div className="profile-summary-header">
                            <div className="profile-avatar"></div> {/* Placeholder for img */}
                            <div className="profile-details">
                                <h2>Jane Doe</h2>
                                <div className="profile-meta-line">
                                    <span className="meta-item">ID: #T-8842</span>
                                    <span className="dot">•</span>
                                    <span className="meta-item">Science Department</span>
                                </div>
                                <div className="profile-meta-line" style={{ marginTop: '5px' }}>
                                    <span className="meta-item"><FaEnvelope size={12} /> jane.doe@school.edu</span>
                                    <span style={{ marginLeft: '10px' }} className="meta-item"><FaPhone size={12} /> +1 (555) 012-3456</span>
                                </div>
                            </div>
                        </div>
                        <span className="new-sub-badge">New Submission</span>
                    </div>

                    {/* Personal Information */}
                    <div className="rs-card">
                        <div className="section-header">
                            <h3>Personal Information</h3>
                            <FaUser className="icon-gray" />
                        </div>
                        <div className="info-grid">
                            <div className="info-item">
                                <label>Date of Birth</label>
                                <span>May 15, 1985</span>
                            </div>
                            <div className="info-item">
                                <label>Gender</label>
                                <span>Female</span>
                            </div>
                        </div>
                        <div className="info-item" style={{ marginBottom: '20px' }}>
                            <label>Home Address</label>
                            <span>4521 Maple Avenue, Springfield, IL 62704</span>
                        </div>
                        <div className="info-item">
                            <label>Biography</label>
                            <p>
                                Passionate science educator with over 10 years of experience in fostering a love for biology and chemistry in high school students. Dedicated to creating interactive and inclusive learning environments that cater to diverse learning styles. Currently pursuing a Master's in Educational Technology to integrate more digital tools into the classroom.
                            </p>
                        </div>
                    </div>

                    {/* Professional Details */}
                    <div className="rs-card">
                        <div className="section-header">
                            <h3>Professional Details</h3>
                            <FaTrash className="icon-gray" /> {/* Trash icon as per image, though odd for read-only view, keeping strictly to img */}
                        </div>
                        <div className="info-grid">
                            <div className="info-item">
                                <label>Department</label>
                                <span>Science</span>
                            </div>
                            <div className="info-item">
                                <label>Specialization</label>
                                <span>Biology, Chemistry</span>
                            </div>
                        </div>
                        <div className="info-item">
                            <label>Requested Class Assignments</label>
                            <div style={{ display: 'flex', gap: '8px', marginTop: '5px' }}>
                                <span style={{ background: '#e6f7ff', color: '#0050b3', padding: '4px 10px', borderRadius: '4px', fontSize: '13px' }}>Grade 10 Biology</span>
                                <span style={{ background: '#e6f7ff', color: '#0050b3', padding: '4px 10px', borderRadius: '4px', fontSize: '13px' }}>Grade 11 Chemistry</span>
                                <span style={{ background: '#e6f7ff', color: '#0050b3', padding: '4px 10px', borderRadius: '4px', fontSize: '13px' }}>AP Environmental Science</span>
                            </div>
                        </div>
                    </div>

                    {/* Attachments */}
                    <div className="rs-card">
                        <div className="section-header">
                            <h3>Attachments</h3>
                            <div style={{ transform: 'rotate(45deg)' }}><FaPen className="icon-gray" /></div> {/* Paperclip icon proxy */}
                        </div>

                        <div className="attachment-item">
                            <FaFilePdf className="file-icon pdf" />
                            <div className="file-info">
                                <span className="file-name">Resume_Jane_Doe_2023.pdf</span>
                                <span className="file-meta">2.4 MB • Uploaded Oct 24, 2023</span>
                            </div>
                            <FaDownload className="download-icon" />
                        </div>

                        <div className="attachment-item">
                            <FaFileImage className="file-icon img" />
                            <div className="file-info">
                                <span className="file-name">Teaching_Certification_State_Board.jpg</span>
                                <span className="file-meta">1.8 MB • Uploaded Oct 24, 2023</span>
                            </div>
                            <FaDownload className="download-icon" />
                        </div>
                    </div>

                </div>

                {/* Right Column: Decisions */}
                <div className="rs-right-column">

                    {/* Review Decision Card */}
                    <div className="decision-wrapper">
                        <div className="decision-card-header">
                            <FaGavel size={20} />
                            <h3>Review Decision</h3>
                        </div>
                        <div className="decision-body">
                            <p style={{ fontSize: '13px', color: '#fff', opacity: 0.9, marginTop: '-35px', marginBottom: '20px' }}>Select an action to proceed.</p> {/* Hack for subtext in header if needed, but img shows it inside green header. */}
                            {/* Actually text is inside header in image. Corrections below. */}

                            <button className="approve-btn">
                                <FaCheckCircle /> Approve & Publish
                            </button>

                            <div className="or-divider">OR</div>

                            <label className="feedback-label">Reason / Feedback (Required for Rejection)</label>
                            <textarea className="feedback-input" placeholder="Enter reason for rejection or details for correction..."></textarea>

                            <div className="action-row">
                                <button className="send-back-btn">
                                    <FaUndo /> Send Back
                                </button>
                                <button className="reject-btn">
                                    <FaTimesCircle /> Reject
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Submission History Card */}
                    <div className="rs-card">
                        <div className="history-section-title">
                            <FaHistory /> Submission History
                        </div>
                        <div className="history-timeline">
                            <div className="timeline-item active">
                                <span className="timeline-title">New Submission</span>
                                <span className="timeline-date">Oct 24, 2023 at 10:45 AM</span>
                                <p className="timeline-desc">Teacher updated bio and requested new class assignments.</p>
                            </div>
                            <div className="timeline-item">
                                <span className="timeline-title">Profile Created</span>
                                <span className="timeline-date">Aug 15, 2021</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewTeacherSubmission;
