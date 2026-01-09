import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaUserCheck,
    FaSync,
    FaLock,
    FaCalendarAlt,
    FaSave,
    FaTimes,
    FaChevronDown
} from 'react-icons/fa';
import AdminMobileNav from '../AdminDonation/AdminMobileNav';
import './ApprovalRules.css';

const ApprovalRules = () => {
    const navigate = useNavigate();

    // State for interactive elements (Mock logic)
    const [selectedRoles, setSelectedRoles] = useState(['Administrators', 'Teachers']);
    const [autoPublishInternal, setAutoPublishInternal] = useState(true);
    const [scheduledPublishing, setScheduledPublishing] = useState(false);

    const toggleRole = (role) => {
        if (selectedRoles.includes(role)) {
            setSelectedRoles(selectedRoles.filter(r => r !== role));
        } else {
            setSelectedRoles([...selectedRoles, role]);
        }
    };

    return (
        <div className="approval-rules-container">
            <AdminMobileNav />

            {/* Header */}
            <div className="ar-header-section">
                <div className="ar-page-title">
                    <span className="ar-breadcrumb">Settings {'>'} Publishing Rules</span>
                    <h1>Approval Rules & Settings</h1>
                    <p>Configure system-wide control for content visibility, approval workflows, and publishing schedules.</p>
                </div>
                <div className="ar-header-actions">
                    <button className="btn-cancel" onClick={() => navigate('/admin/publish')}>Cancel</button>
                    <button className="btn-save" onClick={() => alert('Settings Saved Successfully!')}>
                        <FaSave /> Save Changes
                    </button>
                </div>
            </div>

            {/* Submission Privileges Card */}
            <div className="ar-card">
                <div className="ar-card-header">
                    <div className="ar-section-icon icon-privilege"><FaUserCheck /></div>
                    <h3>Submission Privileges</h3>
                </div>

                <span className="privilege-subtitle">Who is authorized to submit content?</span>
                <span className="privilege-desc">Selected roles can draft and submit content for the approval queue.</span>

                <div className="privilege-grid">
                    <div
                        className={`role-card ${selectedRoles.includes('Administrators') ? 'active' : ''}`}
                        onClick={() => toggleRole('Administrators')}
                    >
                        <span className="role-name">Administrators</span>
                        <span className="role-desc">Full access to create, edit, and delete any content.</span>
                    </div>

                    <div
                        className={`role-card ${selectedRoles.includes('Teachers') ? 'active' : ''}`}
                        onClick={() => toggleRole('Teachers')}
                    >
                        <span className="role-name">Teachers</span>
                        <span className="role-desc">Can submit course materials and announcements.</span>
                    </div>

                    <div
                        className={`role-card ${selectedRoles.includes('Support Staff') ? 'active' : ''}`}
                        onClick={() => toggleRole('Support Staff')}
                    >
                        <span className="role-name">Support Staff</span>
                        <span className="role-desc">Limited to general facility updates.</span>
                    </div>

                    <div
                        className={`role-card ${selectedRoles.includes('Student Leaders') ? 'active' : ''}`}
                        onClick={() => toggleRole('Student Leaders')}
                    >
                        <span className="role-name">Student Leaders</span>
                        <span className="role-desc">Can draft event proposals only.</span>
                    </div>
                </div>
            </div>

            {/* Automation & Workflow Card */}
            <div className="ar-card">
                <div className="ar-card-header">
                    <div className="ar-section-icon icon-workflow"><FaSync /></div>
                    <h3>Automation & Workflow</h3>
                </div>

                {/* Row 1 */}
                <div className="workflow-row">
                    <div className="workflow-info">
                        <h4>Auto-publish Internal Content</h4>
                        <p>If enabled, content marked as "Internal Only" (e.g. staff memos) skips the approval queue.</p>
                    </div>
                    <div className={`toggle-switch ${autoPublishInternal ? 'active' : ''}`} onClick={() => setAutoPublishInternal(!autoPublishInternal)}>
                        <span>Use setting</span>
                        <div className="switch"></div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="workflow-row">
                    <div className="workflow-info">
                        <h4>Public Content Approval <span className="badge-locked"><FaLock size={8} /> Locked</span></h4>
                        <p>For security compliance, all public-facing content must be manually approved by an Administrator. This setting cannot be disabled.</p>
                    </div>
                    <div className="toggle-switch disabled">
                        <div className="switch"></div>
                    </div>
                </div>
            </div>

            {/* Lifecycle & Scheduling Card */}
            <div className="ar-card">
                <div className="ar-card-header">
                    <div className="ar-section-icon icon-lifecycle"><FaCalendarAlt /></div>
                    <h3>Lifecycle & Scheduling</h3>
                </div>

                <div className="workflow-row">
                    <div className="workflow-info">
                        <h4>Allow Scheduled Publishing</h4>
                        <p>Allow users to set a future date and time for content to go live automatically.</p>
                    </div>
                    <div className={`toggle-switch ${scheduledPublishing ? 'active' : ''}`} onClick={() => setScheduledPublishing(!scheduledPublishing)}>
                        <span>Use setting</span>
                        <div className="switch"></div>
                    </div>
                </div>

                <div className="workflow-row">
                    <div className="workflow-info">
                        <h4>Default Content Expiration</h4>
                        <p>Automatically archive content after a set period to keep the portal fresh.</p>
                    </div>
                    <select className="dropdown-select">
                        <option>Never (Manual Archive)</option>
                        <option>30 Days</option>
                        <option>6 Months</option>
                        <option>1 Year</option>
                    </select>
                </div>
            </div>

        </div>
    );
};

export default ApprovalRules;
