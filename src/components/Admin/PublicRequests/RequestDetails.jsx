import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaGraduationCap, FaUserFriends, FaFileAlt, FaCheckCircle, FaPauseCircle, FaTimesCircle, FaArchive, FaFileImage, FaFilePdf } from 'react-icons/fa';
import './PublicRequests.css';

const RequestDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [holdReason, setHoldReason] = useState('');
    const [rejectReason, setRejectReason] = useState('');

    const handleAccept = () => {
        navigate(`/admin/public-requests/${id || 'REQ-2024-089'}/register`);
    };

    return (
        <div className="public-requests-container">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <span className="breadcrumb-item" onClick={() => navigate('/admin')}>Dashboard</span>
                <span className="breadcrumb-separator">›</span>
                <span className="breadcrumb-item" onClick={() => navigate('/admin/public-requests')}>Admission Requests</span>
                <span className="breadcrumb-separator">›</span>
                <span className="breadcrumb-current">#{id || 'REQ-2024-089'}</span>
            </div>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <h1 className="page-title">Admission Request Details</h1>
                        <span className="status-badge status-new">New</span>
                    </div>
                    <p className="page-subtitle">Review details for Lucas Miller before taking action.</p>
                </div>
                <button className="btn-secondary-action" style={{ display: 'flex', gap: '8px', alignItems: 'center' }} onClick={() => navigate('/admin/public-requests')}>
                    <FaArrowLeft /> Back to List
                </button>
            </div>

            <div className="details-layout">
                {/* Main Content */}
                <div className="details-main">

                    {/* Student Info */}
                    <div className="info-card">
                        <div className="info-card-content">
                            <div className="info-card-header">
                                <FaGraduationCap style={{ color: '#64A926', fontSize: '20px' }} />
                                Student Information
                            </div>
                            <div style={{ display: 'flex', gap: '20px', marginBottom: '25px' }}>
                                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#f59e0b', border: '4px solid #fcd34d', display: 'flex', overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
                                    {/* Mock Avatar */}
                                    <img src="https://via.placeholder.com/80" alt="Lucas" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none' }} />
                                    <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>LM</span>
                                </div>
                                <div>
                                    <h3 style={{ margin: '10px 0 5px 0', color: '#1e293b' }}>Lucas Miller</h3>
                                    <span style={{ fontSize: '13px', color: '#64A926', fontWeight: '500' }}>Application ID: #{id || 'REQ-2024-089'}</span>
                                </div>
                            </div>

                            <div className="info-grid">
                                <div className="info-item">
                                    <label>Date of Birth</label>
                                    <p>May 15, 2015 (8 Years Old)</p>
                                </div>
                                <div className="info-item">
                                    <label>Gender</label>
                                    <p>Male</p>
                                </div>
                                <div className="info-item">
                                    <label>Class Applied For</label>
                                    <p>Grade 3</p>
                                </div>
                                <div className="info-item">
                                    <label>Previous Education</label>
                                    <p>Sunshine Elementary School (Grades K-2)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Parent Info */}
                    <div className="info-card">
                        <div className="info-card-content">
                            <div className="info-card-header">
                                <FaUserFriends style={{ color: '#64A926', fontSize: '20px' }} />
                                Parent / Guardian Details
                            </div>
                            <div className="info-grid">
                                <div className="info-item">
                                    <label>Full Name</label>
                                    <p>Sarah Miller</p>
                                </div>
                                <div className="info-item">
                                    <label>Relationship</label>
                                    <p>Mother</p>
                                </div>
                                <div className="info-item">
                                    <label>Mobile Number</label>
                                    <p>+1 (555) 012-3456</p>
                                </div>
                                <div className="info-item">
                                    <label>Email Address</label>
                                    <p style={{ color: '#3b82f6', cursor: 'pointer' }}>sarah.miller@example.com</p>
                                </div>
                                <div className="info-item" style={{ gridColumn: 'span 2' }}>
                                    <label>Residential Address</label>
                                    <p>123 Maple Avenue, Springfield, IL, 62704</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="info-card">
                        <div className="info-card-content">
                            <div className="info-card-header">
                                <FaFileAlt style={{ color: '#64A926', fontSize: '20px' }} />
                                Additional Info
                            </div>
                            <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                                <label style={{ fontSize: '12px', color: '#64A926', fontWeight: '600', display: 'block', marginBottom: '5px' }}>Reason for Admission Request</label>
                                <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.6', color: '#334155' }}>
                                    We are relocating to Springfield due to a job transfer. We have heard excellent things about Greenwood High's science program and believe it would be the perfect environment for Lucas, who has shown a keen interest in biology and nature studies.
                                </p>
                            </div>

                            <label style={{ fontSize: '12px', color: '#64A926', fontWeight: '600', display: 'block', marginBottom: '10px' }}>Uploaded Documents</label>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer' }}>
                                    <FaFilePdf style={{ color: '#ef4444', fontSize: '20px' }} />
                                    <div>
                                        <div style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>Previous_Report_Card.pdf</div>
                                        <div style={{ fontSize: '11px', color: '#94a3b8' }}>1.2 MB</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer' }}>
                                    <FaFileImage style={{ color: '#3b82f6', fontSize: '20px' }} />
                                    <div>
                                        <div style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>Birth_Certificate.jpg</div>
                                        <div style={{ fontSize: '11px', color: '#94a3b8' }}>850 KB</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Sidebar - Action Panel */}
                <div className="details-sidebar">
                    <div className="action-panel">
                        <div className="panel-header">
                            <FaCheckCircle /> Admin Actions Panel
                        </div>
                        <div className="panel-body">
                            <button className="action-btn-lg btn-accept" onClick={handleAccept}>
                                <FaCheckCircle /> Accept & Convert to Student
                            </button>
                            <p style={{ fontSize: '11px', color: '#94a3b8', textAlign: 'center', margin: '10px 0 0 0' }}>
                                This will create a new student profile and notify the parent.
                            </p>

                            <div className="action-divider"></div>

                            {/* Hold Section */}
                            <div style={{ marginBottom: '20px' }}>
                                <div className="action-section-title" style={{ color: '#ca8a04' }}>
                                    <FaPauseCircle /> Put on Hold
                                </div>
                                <textarea
                                    className="action-input"
                                    placeholder="Reason for holding (e.g. missing docs)..."
                                    value={holdReason}
                                    onChange={(e) => setHoldReason(e.target.value)}
                                ></textarea>
                                <button className="action-btn-lg btn-hold">
                                    Mark as Hold
                                </button>
                            </div>

                            {/* Reject Section */}
                            <div style={{ marginBottom: '20px' }}>
                                <div className="action-section-title" style={{ color: '#dc2626' }}>
                                    <FaTimesCircle /> Reject Application
                                </div>
                                <textarea
                                    className="action-input"
                                    placeholder="Reason for rejection"
                                    value={rejectReason}
                                    onChange={(e) => setRejectReason(e.target.value)}
                                ></textarea>
                                <button className="action-btn-lg btn-reject">
                                    Reject Application
                                </button>
                            </div>

                            <button className="action-btn-lg btn-archive" style={{ marginTop: '10px', justifyContent: 'center' }}>
                                <FaArchive /> Archive Request
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RequestDetails;
