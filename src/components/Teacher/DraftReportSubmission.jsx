import React from 'react';
import { MdNotifications, MdSettings, MdCloudUpload, MdSave, MdSend, MdDescription, MdHelpOutline } from 'react-icons/md';
import profilePic from '../../assets/Picture16.png';
import './DraftReportSubmission.css';

const DraftReportSubmission = () => {

    // Sample saved drafts data
    const savedDrafts = [
        {
            id: 1,
            name: 'HFZ_05_Assessment.pdf',
            date: 'Oct 24, 2023',
            size: '8.5 MB',
            class: 'HFZ - Batch 8',
            status: 'Draft'
        },
        {
            id: 2,
            name: 'Fiqh_Final_Term.docx',
            date: 'Oct 12, 2023',
            size: '8.05 MB',
            class: 'Fiqh - Advanced',
            status: 'Draft'
        },
        {
            id: 3,
            name: 'Attendance_Oct.xlsx',
            date: 'Oct 05, 2023',
            size: '42 KB',
            class: '',
            status: 'General'
        }
    ];

    // Sample recently submitted reports
    const recentReports = [
        {
            name: 'Final_Exams_2023.pdf',
            class: 'HFZ - Batch 8',
            type: 'Assessment',
            submittedOn: 'Oct 15, 2023',
            status: 'Published'
        },
        {
            name: 'Nazra_Progress_Rep.docx',
            class: 'Nazra - Grade 5',
            type: 'Progress',
            submittedOn: 'Oct 12, 2023',
            status: 'Pending Review'
        }
    ];

    return (
        <div className="draft-report-page">
            <main className="main-content">
                <header className="top-header">
                    <div className="container" style={{ justifyContent: 'flex-end', padding: '0 2rem' }}>
                        <div className="header-actions" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                            <MdNotifications size={22} color="#718096" />
                            <MdSettings size={22} color="#718096" />
                            <div className="profile-section">
                                <img src={profilePic} alt="Profile" style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </header>

                <div className="draft-content-wrapper">
                    <div className="page-header-section">
                        <h1 className="page-main-title">Upload Draft Reports</h1>
                        <p className="page-main-subtitle">Submit assessment and conduct reports for review and archival.</p>
                    </div>

                    <div className="two-column-layout">
                        {/* Left Column - New Submission */}
                        <div className="left-column">
                            <div className="submission-card">
                                <h2 className="card-title">New Submission</h2>

                                {/* File Upload Area */}
                                <div className="upload-zone">
                                    <MdCloudUpload className="upload-icon" />
                                    <p className="upload-text">
                                        <span className="upload-link">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="upload-hint">PDF, DOCX, XLSX up to 10MB</p>
                                </div>

                                {/* Form Fields */}
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Class / Batch</label>
                                        <input type="text" className="form-input" placeholder="Select class" />
                                    </div>
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <input type="text" className="form-input" placeholder="Select subject" />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Academic Term</label>
                                        <input type="text" className="form-input" placeholder="Select term" />
                                    </div>
                                    <div className="form-group">
                                        <label>Report Type</label>
                                        <input type="text" className="form-input" placeholder="Select type" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Comments / Notes</label>
                                    <textarea className="form-textarea" rows="4" placeholder="Add any additional notes..."></textarea>
                                </div>

                                {/* Action Buttons */}
                                <div className="form-actions">
                                    <button className="btn-secondary">
                                        <MdSave /> Save as Draft
                                    </button>
                                    <button className="btn-primary">
                                        <MdSend /> Submit Report
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Saved Drafts & Help */}
                        <div className="right-column">
                            {/* Saved Drafts */}
                            <div className="drafts-card">
                                <div className="drafts-header">
                                    <h3>Saved Drafts</h3>
                                    <a href="#" className="view-all-link">View All</a>
                                </div>
                                <div className="drafts-list">
                                    {savedDrafts.map((draft) => (
                                        <div key={draft.id} className="draft-item">
                                            <div className="draft-icon">
                                                <MdDescription size={24} color="#64A926" />
                                            </div>
                                            <div className="draft-details">
                                                <h4 className="draft-name">{draft.name}</h4>
                                                <p className="draft-meta">{draft.date} • {draft.size}</p>
                                            </div>
                                            <span className={`draft-badge ${draft.status.toLowerCase()}`}>
                                                {draft.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Help Card */}
                            <div className="help-card">
                                <div className="help-icon-wrapper">
                                    <MdHelpOutline size={24} />
                                </div>
                                <h4>Need help?</h4>
                                <p>Check the guide on how to format your reports correctly.</p>
                                <a href="#" className="help-link">#ReportGuidelines</a>
                            </div>
                        </div>
                    </div>

                    {/* Recently Submitted Reports Table */}
                    <div className="recent-reports-section">
                        <h2 className="section-title">Recently Submitted Reports</h2>
                        <div className="reports-table-wrapper">
                            <table className="reports-table">
                                <thead>
                                    <tr>
                                        <th>Report Name</th>
                                        <th>Class</th>
                                        <th>Type</th>
                                        <th>Submitted On</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentReports.map((report, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="report-name-cell">
                                                    <MdDescription size={20} color="#64A926" />
                                                    <span>{report.name}</span>
                                                </div>
                                            </td>
                                            <td>{report.class}</td>
                                            <td>{report.type}</td>
                                            <td>{report.submittedOn}</td>
                                            <td>
                                                <span className={`status-badge ${report.status.toLowerCase().replace(' ', '-')}`}>
                                                    {report.status}
                                                </span>
                                            </td>
                                            <td>
                                                <button className="view-btn">View</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DraftReportSubmission;
