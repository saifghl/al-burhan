import React from 'react';
import {
    FaEye,
    FaFilePdf,
    FaImage,
    FaDownload,
    FaGlobe,
    FaCheck,
    FaLock,
    FaRegEdit,
    FaTimes,
    FaPaperPlane,
    FaInfoCircle,
    FaMobileAlt
} from 'react-icons/fa';
import AdminMobileNav from '../AdminDonation/AdminMobileNav'; // Assuming same nav reusing
import './ReviewContent.css';

const ReviewContent = () => {
    // Handlers
    const handleApprove = () => alert("Content Approved and Published!");
    const handleReject = () => alert("Content Rejected. Notification sent to author.");
    const handleSchedule = () => alert("Opening Schedule Dialog...");
    const handleDraft = () => alert("Saved as Draft.");

    return (
        <div className="review-content-container">
            <AdminMobileNav />
            {/* Header */}
            <div className="rc-header">
                <div className="rc-breadcrumb">
                    Content Management &rsaquo; <span>Review</span>
                </div>
                <div className="rc-title-row">
                    <div>
                        <h1 className="rc-page-title">Review: Annual Quran Competition</h1>
                        <p className="rc-meta">Version 1.0 • Created by Admin User • Last updated 2 hours ago</p>
                    </div>
                    <span className="rc-status-badge">
                        <span className="rc-dot"></span> Pending Review
                    </span>
                </div>
            </div>

            <div className="rc-layout">
                {/* Left Column: Content Preview */}
                <div className="rc-left-col">
                    <div className="preview-card">
                        <div className="preview-header">
                            <span className="preview-label"><FaEye /> Live Preview</span>
                            <div className="preview-dots">
                                <span className="dot-red"></span>
                                <span className="dot-yellow"></span>
                                <span className="dot-green"></span>
                            </div>
                        </div>

                        <div className="preview-body">
                            {/* Featured Image */}
                            <div className="preview-image-container">
                                {/* Placeholder for Quran image */}
                                <div className="img-placeholder-quran">
                                    <div className="img-overlay-text">Annual Quran Competition 2024</div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="preview-text-content">
                                <p>Assalamu Alaikum, we are pleased to announce the Annual Quran Recitation Competition for the year 2024. This event aims to encourage our students to deepen their connection with the Holy Quran and showcase their recitation skills.</p>

                                <h3>Competition Categories</h3>
                                <ul className="preview-list">
                                    <li><strong>Category A:</strong> Full Quran (Hifz) - Ages 15-18</li>
                                    <li><strong>Category B:</strong> 15 Juz - Ages 12-14</li>
                                    <li><strong>Category C:</strong> 5 Juz - Ages 8-11</li>
                                </ul>

                                <h3>Event Details</h3>
                                <div className="event-details-row">
                                    <div className="detail-box">
                                        <span className="detail-label">Date</span>
                                        <span className="detail-value">October 15th, 2024</span>
                                    </div>
                                    <div className="detail-box">
                                        <span className="detail-label">Venue</span>
                                        <span className="detail-value">Main Auditorium</span>
                                    </div>
                                </div>

                                <p style={{ marginTop: '24px' }}>Registration is now open through the Student Portal. Please ensure you have your parent's consent before registering. The deadline for registration is September 30th.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Sidebar */}
                <div className="rc-right-col">

                    {/* Attached Files */}
                    <div className="rc-card">
                        <div className="rc-card-header">
                            <h4><span style={{ marginRight: '8px' }}>📎</span> Attached Files</h4>
                        </div>
                        <div className="file-list">
                            <div className="file-item">
                                <div className="file-icon pdf"><FaFilePdf /></div>
                                <div className="file-info">
                                    <span className="file-name">Competition_Rules.pdf</span>
                                    <span className="file-size">2.4 MB</span>
                                </div>
                                <button className="btn-download"><FaDownload /></button>
                            </div>
                            <div className="file-item">
                                <div className="file-icon img"><FaImage /></div>
                                <div className="file-info">
                                    <span className="file-name">Event_Poster_v2.png</span>
                                    <span className="file-size">1.8 MB</span>
                                </div>
                                <button className="btn-download"><FaDownload /></button>
                            </div>
                        </div>
                    </div>

                    {/* Target Portals */}
                    <div className="rc-card">
                        <div className="rc-card-header">
                            <h4><FaGlobe style={{ marginRight: '8px', color: '#64748b' }} /> Target Portals</h4>
                        </div>
                        <div className="portal-list">
                            <div className="portal-item active">
                                <span className="portal-name">Student Portal</span>
                                <span className="portal-badge-primary">Primary</span>
                            </div>
                            <div className="portal-item">
                                <span className="portal-name">Parent Mobile App</span>
                            </div>
                            <div className="portal-item inactive">
                                <span className="portal-name">Staff Intranet</span>
                            </div>
                        </div>
                    </div>

                    {/* Actions Card */}
                    <div className="rc-card actions-card">
                        <div className="info-banner">
                            <FaInfoCircle className="info-icon" />
                            <p>Approved content will be visible instantly on selected portals.</p>
                        </div>

                        <button className="btn-approve" onClick={handleApprove}>
                            <FaCheck /> Approve & Publish
                        </button>

                        <div className="secondary-actions">
                            <button className="btn-text-action" onClick={handleSchedule}>
                                <FaLock size={12} /> Schedule
                            </button>
                            <button className="btn-text-action" onClick={handleDraft}>
                                <FaRegEdit size={12} /> Draft
                            </button>
                        </div>

                        <button className="btn-reject" onClick={handleReject}>
                            <FaTimes /> Reject
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewContent;
