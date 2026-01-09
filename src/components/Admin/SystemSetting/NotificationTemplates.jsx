import React, { useState } from 'react';
import {
    FaEnvelope,
    FaRegCheckCircle,
    FaUniversity,
    FaReceipt,
    FaKey,
    FaEye,
    FaSave,
    FaFolderOpen,
    FaGraduationCap,
    FaBell
} from 'react-icons/fa';
import AdminMobileNav from '../AdminDonation/AdminMobileNav';
import './NotificationTemplates.css';

const NotificationTemplates = () => {
    // Template Data
    const templates = [
        {
            id: 'admission',
            title: 'Admission Approved',
            category: 'System • Email & SMS',
            icon: <FaFolderOpen />,
            status: 'active',
            color: 'green'
        },
        {
            id: 'result',
            title: 'Result Published',
            category: 'Academic • Email only',
            icon: <FaGraduationCap />,
            status: 'active',
            color: 'blue'
        },
        {
            id: 'fee',
            title: 'Fee Reminder',
            category: 'Finance • Email & SMS',
            icon: <FaBell />,
            status: 'active',
            color: 'blue'
        },
        {
            id: 'password',
            title: 'Password Reset',
            category: 'Security • Email only',
            icon: <FaKey />,
            status: 'active',
            color: 'blue'
        },
        {
            id: 'receipt',
            title: 'Donation Receipt',
            category: 'Finance • Email only',
            icon: <FaReceipt />,
            status: 'inactive',
            color: 'gray'
        }
    ];

    const [selectedTemplateId, setSelectedTemplateId] = useState('admission');
    const [editorState, setEditorState] = useState({
        isActive: true,
        subject: '',
        body: `Dear {{guardian_name}},

We are pleased to inform you that the admission for {{student_name}} has been approved for the academic year {{academic_year}}.

Please log in to your portal to complete the enrollment process by {{deadline_date}}.

Best regards,
Madarsa Administration`
    });

    // Content mapping (mocking loading different content)
    const handleSelectTemplate = (id) => {
        setSelectedTemplateId(id);
        // ideally load content based on ID
        if (id !== 'admission') {
            setEditorState(prev => ({
                ...prev,
                subject: 'Mock Subject for ' + id,
                body: 'Mock body content...'
            }));
        } else {
            setEditorState(prev => ({
                ...prev,
                subject: '',
                body: `Dear {{guardian_name}},

We are pleased to inform you that the admission for {{student_name}} has been approved for the academic year {{academic_year}}.

Please log in to your portal to complete the enrollment process by {{deadline_date}}.

Best regards,
Madarsa Administration`
            }));
        }
    };

    const variables = [
        '{{student_name}}', '{{guardian_name}}', '{{app_id}}', '{{academic_year}}', '{{deadline_date}}', '{{amount}}'
    ];

    return (
        <div className="nt-container">
            <AdminMobileNav />

            {/* Header */}
            <div className="nt-header">
                <span className="nt-breadcrumb">Settings {'>'} Notification Templates</span>
                <div className="nt-title-row">
                    <div className="nt-title">
                        <h1>Notification Templates</h1>
                        <p>Manage and standardize system messages sent to students and guardians.</p>
                    </div>
                    <div className="nt-actions">
                        <button className="btn-preview"><FaEye /> Preview</button>
                        <button className="btn-save-changes"><FaSave /> Save Changes</button>
                    </div>
                </div>
            </div>

            <div className="nt-content-grid">
                {/* Sidebar List */}
                <div className="nt-sidebar">
                    <div className="nt-field-group">
                        <input type="text" className="nt-search-box nt-input" placeholder="Search templates..." style={{ marginBottom: '0' }} />
                    </div>

                    {templates.map(t => (
                        <div
                            key={t.id}
                            className={`nt-template-item ${selectedTemplateId === t.id ? 'active' : ''}`}
                            onClick={() => handleSelectTemplate(t.id)}
                        >
                            <div className="nt-item-content">
                                <div className="nt-item-icon">
                                    {t.icon}
                                </div>
                                <div className="nt-item-text">
                                    <h4>{t.title}</h4>
                                    <p>{t.category}</p>
                                </div>
                            </div>
                            <div className={`status-dot ${t.status === 'active' ? 'green' : 'gray'}`}></div>
                        </div>
                    ))}
                </div>

                {/* Editor Card */}
                <div className="nt-editor-card">
                    <div className="nt-editor-header">
                        <div className="edit-header-left">
                            <div className="edit-icon-box"><FaFolderOpen /></div>
                            <h3>Edit Template</h3>
                        </div>
                        <div className="status-toggle">
                            <span className="status-label">Status</span>
                            {/* Simple Toggle Switch Reuse or Custom */}
                            <label className="pps-switch" style={{ marginLeft: '8px' }}>
                                <input
                                    type="checkbox"
                                    checked={editorState.isActive}
                                    onChange={(e) => setEditorState({ ...editorState, isActive: e.target.checked })}
                                />
                                <span className="pps-slider"></span>
                            </label>
                        </div>
                    </div>

                    <div className="nt-field-group">
                        <label>Subject Line</label>
                        <input
                            type="text"
                            className="nt-input"
                            placeholder="Enter subject line..."
                            value={editorState.subject}
                            onChange={(e) => setEditorState({ ...editorState, subject: e.target.value })}
                        />
                        <span className="field-hint">This will appear as the email subject or the first line of an SMS.</span>
                    </div>

                    <div className="nt-field-group">
                        <div className="msg-body-header">
                            <label>Message Body</label>
                            <span className="insert-var-link">Insert Variable</span>
                        </div>

                        {/* Editor Simulation */}
                        <div className="toolbar-sim">
                            <span style={{ fontWeight: 'bold' }}>B</span>
                            <span style={{ fontStyle: 'italic' }}>I</span>
                            <span style={{ textDecoration: 'underline' }}>U</span>
                            <span>|</span>
                            <span>≡</span>
                            <span>⋮</span>
                            <span style={{ marginLeft: 'auto' }}>HTML</span>
                        </div>
                        <textarea
                            className="nt-textarea"
                            value={editorState.body}
                            onChange={(e) => setEditorState({ ...editorState, body: e.target.value })}
                        ></textarea>
                    </div>

                    <div className="nt-variables-section">
                        <span className="insert-var-link" style={{ fontSize: '11px', color: '#64748b', cursor: 'default' }}>Available Variables (Click to copy)</span>
                        <div className="var-chips-container">
                            {variables.map(v => (
                                <span key={v} className="var-chip">{v}</span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NotificationTemplates;
