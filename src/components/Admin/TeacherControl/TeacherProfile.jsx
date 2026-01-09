import React, { useState } from 'react';
import { FaPrint, FaUser, FaGraduationCap, FaLock, FaCalendarAlt, FaPen, FaPlus, FaSave, FaTrash, FaInfoCircle, FaClock, FaUsers, FaUserShield, FaKey, FaBan, FaBriefcase, FaFileAlt, FaHistory, FaSearch, FaFilter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './TeacherProfile.css';

const TeacherProfile = () => {
    const [activeTab, setActiveTab] = useState('profile'); // Default to profile for view
    const navigate = useNavigate();

    // Assignment State
    const [assignments, setAssignments] = useState([
        { class: 'Grade 10 - A', subject: 'Physics', role: '-', classPill: '10', classColor: 'purple' },
        { class: 'Grade 10 - B', subject: 'Physics', role: '★ Class Teacher', classPill: '10', classColor: 'purple' },
        { class: 'Grade 11 - Sci', subject: 'Adv. Chemistry', role: '-', classPill: '11', classColor: 'pink' }
    ]);

    const [newClass, setNewClass] = useState('');
    const [newSubject, setNewSubject] = useState('');
    const [isClassTeacher, setIsClassTeacher] = useState(false);

    const handleAddAllocation = () => {
        if (!newClass || !newSubject) return; // Simple validation

        const newAssignment = {
            class: newClass,
            subject: newSubject,
            role: isClassTeacher ? '★ Class Teacher' : '-',
            classPill: newClass.match(/\d+/)?.[0] || '?',
            classColor: 'purple' // Default color for new
        };

        setAssignments([...assignments, newAssignment]);
        // Reset form
        setNewClass('');
        setNewSubject('');
        setIsClassTeacher(false);
    };

    return (
        <div className="teacher-profile-container">

            <div className="profile-header-area">
                <div className="breadcrumbs">
                    <span className="home-icon">⌂</span> Home <span>/</span> Teachers <span>/</span> <strong>Sarah Jenkins</strong>
                </div>

                {/* Header (Always Visible or dynamic based on tab?) Image 2 shows it for Profile tab */}
                <div className="header-card">
                    <div className="header-left">
                        <div className="header-avatar" style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#e0e0e0' }}></div>
                        <div className="header-info-block">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <h1>Sarah Jenkins</h1>
                                <span className="status-badge-pill active">Active</span>
                            </div>
                            <div className="header-meta">
                                <span><span className="id-icon">🆔</span> ID: T-88392</span>
                                <span className="dot">•</span>
                                <span>📞 +1 (555) 019-2834</span>
                                <span className="dot">•</span>
                                <span>✉️ s.jenkins@school.edu</span>
                            </div>
                            <div className="header-tabs-inline">
                                {/* If we want tabs inside the header like the image? No, image has tabs BELOW header. */}
                            </div>
                        </div>
                    </div>
                    <div className="header-actions">
                        <button className="header-btn outline">
                            <FaKey className="btn-icon" /> Reset Password
                        </button>
                        <button className="header-btn danger-outline">
                            <FaBan className="btn-icon" /> Deactivate
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="profile-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveTab('profile')}
                    >
                        <FaUser className="tab-icon" /> Profile Details
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'classes' ? 'active' : ''}`}
                        onClick={() => setActiveTab('classes')}
                    >
                        <FaGraduationCap className="tab-icon" /> Class & Subject
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'permissions' ? 'active' : ''}`}
                        onClick={() => setActiveTab('permissions')}
                    >
                        <FaUserShield className="tab-icon" /> Permissions
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'timetable' ? 'active' : ''}`}
                        onClick={() => setActiveTab('timetable')}
                    >
                        <FaCalendarAlt className="tab-icon" /> Timetable
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="content-area">

                {/* ... existing profile/assignments/permissions tabs ... */}
                {activeTab === 'profile' && (
                    <div className="profile-view-grid">
                        <div className="main-info-column">
                            {/* Personal Information */}
                            <div className="info-card-section">
                                <div className="card-header-row">
                                    <h3 className="section-title-green"><FaUser className="title-icon" /> Personal Information</h3>
                                    <button className="edit-link" onClick={() => navigate('/admin/add-teacher')}><FaPen /> Edit</button>
                                </div>
                                <div className="info-grid-2">
                                    <div className="info-item">
                                        <label>Full Legal Name</label>
                                        <p>Sarah Elizabeth Jenkins</p>
                                    </div>
                                    <div className="info-item">
                                        <label>Date of Birth</label>
                                        <p>August 14, 1985</p>
                                    </div>
                                    <div className="info-item full-width">
                                        <label>Home Address</label>
                                        <p>42 Maple Avenue, Springfield, IL 62704</p>
                                    </div>
                                    <div className="info-item full-width">
                                        <label>Emergency Contact</label>
                                        <p><strong>Michael Jenkins (Spouse)</strong> <span className="muted-text">+1 (555) 992-1102</span></p>
                                    </div>
                                </div>
                            </div>

                            {/* Professional Information */}
                            <div className="info-card-section mt-4">
                                <div className="card-header-row">
                                    <h3 className="section-title-green"><FaBriefcase className="title-icon" /> Professional Information</h3>
                                    <button className="edit-link" onClick={() => navigate('/admin/add-teacher')}><FaPen /> Edit</button>
                                </div>
                                <div className="info-grid-2">
                                    <div className="info-item">
                                        <label>Department</label>
                                        <p><span className="dot-green">●</span> Science</p>
                                    </div>
                                    <div className="info-item">
                                        <label>Role</label>
                                        <p>Senior Teacher</p>
                                    </div>
                                    <div className="info-item">
                                        <label>Hire Date</label>
                                        <p>September 1, 2018</p>
                                    </div>
                                    <div className="info-item">
                                        <label>Years of Experience</label>
                                        <p>12 Years</p>
                                    </div>
                                    <div className="info-item full-width">
                                        <label>Qualifications / Degrees</label>
                                        <div className="tags-row">
                                            <span className="tag">M.Sc. Biology</span>
                                            <span className="tag">B.Ed. Secondary Education</span>
                                            <span className="tag">State Teaching Certification</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar: Current Load & Meta */}
                        <div className="side-info-column">
                            {/* Current Load */}
                            <div className="card side-card">
                                <div className="card-header-row">
                                    <h3 className="card-title-sm">Current Load</h3>
                                    <button className="view-all-link">View All</button>
                                </div>
                                <div className="load-list">
                                    <div className="load-item">
                                        <div className="load-main">
                                            <h4>Grade 10 - Biology</h4>
                                            <span className="load-time"><FaClock /> Mon, Wed, Fri • 09:00 AM</span>
                                            <span className="load-students"><FaUsers /> 28 Students</span>
                                        </div>
                                        <span className="subject-code blue">SCI-101</span>
                                    </div>
                                    <div className="load-item">
                                        <div className="load-main">
                                            <h4>Grade 11 - Adv. Bio</h4>
                                            <span className="load-time"><FaClock /> Tue, Thu • 11:30 AM</span>
                                            <span className="load-students"><FaUsers /> 15 Students</span>
                                        </div>
                                        <span className="subject-code purple">SCI-202</span>
                                    </div>
                                    <div className="load-item">
                                        <div className="load-main">
                                            <h4>Homeroom - 10B</h4>
                                            <span className="load-time"><FaClock /> Daily • 08:30 AM</span>
                                        </div>
                                        <span className="subject-code green">HR</span>
                                    </div>
                                </div>
                                <button className="assign-new-btn"><FaPlus /> Assign New Class</button>
                            </div>

                            {/* Account Meta */}
                            <div className="card side-card mt-4">
                                <h3 className="card-title-sm">Account Meta</h3>
                                <div className="meta-list">
                                    <div className="meta-row">
                                        <span>Last Login</span>
                                        <strong>Today, 08:15 AM</strong>
                                    </div>
                                    <div className="meta-row">
                                        <span>Profile Created</span>
                                        <strong>Sep 1, 2018</strong>
                                    </div>
                                    <div className="meta-row">
                                        <span>Last Updated By</span>
                                        <strong><span className="admin-circle"></span> Admin (You)</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


                {/* Class Assignments Tab Content */}
                {activeTab === 'classes' && (
                    <div className="assignments-grid">

                        {/* Left Column: New Allocation */}
                        <div className="left-column">
                            <div className="card allocation-card">
                                <h3 className="card-title"><FaPlus className="icon-green" /> New Allocation</h3>

                                <div className="form-group">
                                    <label>Academic Year</label>
                                    <select defaultValue="2024-2025">
                                        <option>2024 - 2025 (Current)</option>
                                        <option>2023 - 2024</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Class Selection</label>
                                    <select value={newClass} onChange={(e) => setNewClass(e.target.value)}>
                                        <option value="" disabled>Select a Class</option>
                                        <option value="Grade 10 - A">Grade 10 - A</option>
                                        <option value="Grade 10 - B">Grade 10 - B</option>
                                        <option value="Grade 11 - Sci">Grade 11 - Sci</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Subject Mapping</label>
                                    <select value={newSubject} onChange={(e) => setNewSubject(e.target.value)}>
                                        <option value="" disabled>Select a Subject</option>
                                        <option value="Physics">Physics</option>
                                        <option value="Chemistry">Chemistry</option>
                                        <option value="Adv. Chemistry">Adv. Chemistry</option>
                                    </select>
                                </div>

                                <div className="form-group checkbox-group">
                                    <input
                                        type="checkbox"
                                        id="classTeacher"
                                        checked={isClassTeacher}
                                        onChange={(e) => setIsClassTeacher(e.target.checked)}
                                    />
                                    <div className="check-label">
                                        <label htmlFor="classTeacher">Class Teacher</label>
                                        <span>Assign homeroom responsibilities</span>
                                    </div>
                                </div>

                                <button className="add-list-btn" onClick={handleAddAllocation}>
                                    <FaPlus /> Add to List
                                </button>
                            </div>

                            <div className="info-card blue">
                                <div className="info-header">
                                    <FaInfoCircle className="info-icon" />
                                    <h4>Portal Sync</h4>
                                </div>
                                <p>Changes saved here will reflect immediately on Sarah's Teacher Portal dashboard. Ensure assignments are finalized before saving.</p>
                            </div>
                        </div>

                        {/* Right Column: Current Assignments */}
                        <div className="right-column">
                            <div className="card assignments-card">
                                <div className="ac-header">
                                    <h3 className="card-title">Current Assignments</h3>
                                    <span className="term-badge">AY 2023-2024</span>
                                </div>

                                <table className="assignments-table">
                                    <thead>
                                        <tr>
                                            <th>Class / Section</th>
                                            <th>Subject</th>
                                            <th>Role</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assignments.map((assignment, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <div className={`class-pill ${assignment.classColor}`}>{assignment.classPill}</div>
                                                    {assignment.class}
                                                </td>
                                                <td className="subject-cell"><span className="dot blue">●</span> {assignment.subject}</td>
                                                <td>
                                                    {assignment.role !== '-' ? (
                                                        <span className="role-pill">{assignment.role}</span>
                                                    ) : '-'}
                                                </td>
                                                <td><button className="icon-btn"><FaTrash /></button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>


                            </div>

                            <div className="assignments-footer">
                                <div className="showing-text">Showing {assignments.length} active assignments</div>
                                <div className="footer-actions">
                                    <div className="last-update-text">🕒 Last updated: Today at 10:42 AM by Admin</div>
                                    <div className="footer-btns">
                                        <button className="cancel-text-btn">Cancel</button>
                                        <button className="save-green-btn"><FaSave /> Save Assignment</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

                {/* Permissions Tab Content */}
                {activeTab === 'permissions' && (
                    <div className="permissions-container">
                        <div className="permissions-card">
                            <h2 className="permissions-title">Permission Settings</h2>
                            <p className="permissions-subtitle">Configure what actions this teacher can perform in the Teacher Portal. Updates are applied immediately after saving.</p>

                            <div className="permissions-list">
                                {/* Attendance Entry */}
                                <div className="permission-item">
                                    <div className="perm-icon-wrapper blue">
                                        <FaCalendarAlt />
                                    </div>
                                    <div className="perm-details">
                                        <h4>Attendance Entry</h4>
                                        <p>Allow teacher to mark daily attendance for assigned classes.</p>
                                    </div>
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked />
                                        <span className="slider round"></span>
                                    </label>
                                </div>

                                {/* Result Entry */}
                                <div className="permission-item">
                                    <div className="perm-icon-wrapper purple">
                                        <FaGraduationCap /> {/* Using available icon as proxy for result */}
                                    </div>
                                    <div className="perm-details">
                                        <h4>Result Entry</h4>
                                        <p>Grant access to input and modify student grades and exam results.</p>
                                    </div>
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked />
                                        <span className="slider round"></span>
                                    </label>
                                </div>

                                {/* Activity Gallery Upload */}
                                <div className="permission-item">
                                    <div className="perm-icon-wrapper orange">
                                        <FaPen /> {/* Using pen as proxy for create/upload */}
                                    </div>
                                    <div className="perm-details">
                                        <h4>Activity Gallery Upload</h4>
                                        <p>Allow uploading photos and videos to the class activity feed.</p>
                                    </div>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                </div>

                                {/* Announcements */}
                                <div className="permission-item">
                                    <div className="perm-icon-wrapper pink">
                                        <FaInfoCircle /> {/* Using info as proxy for announcement */}
                                    </div>
                                    <div className="perm-details">
                                        <h4>Announcements</h4>
                                        <p>Enable sending push notifications and announcements to parents.</p>
                                    </div>
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>

                            {/* Permissions Footer */}
                            <div className="permissions-footer">
                                <div className="pending-changes">
                                    <span className="pending-icon">●</span> Changes Pending: 1 permission modified
                                </div>
                                <div className="perm-footer-btns">
                                    <button className="reset-btn">Reset to Default</button>
                                    <button className="save-green-btn"><FaSave /> Save Permissions</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Timetable Tab Content (Activity Log) */}
                {activeTab === 'timetable' && (
                    <div className="timetable-container">
                        <div className="timetable-controls">
                            <div className="tt-left">
                                <div className="search-wrapper basic">
                                    <FaSearch className="search-icon" />
                                    <input type="text" placeholder="Search log Entries..." />
                                </div>
                                <select className="basic-select"><option>All Actions</option></select>
                                <div className="date-picker-mock">DD/MM/YYYY <FaCalendarAlt /></div>
                            </div>
                            <div className="tt-right">
                                <button className="icon-btn-plain"><FaFilter /></button>
                                <button className="export-btn">⬇ Export CSV</button>
                            </div>
                        </div>

                        <div className="timetable-table-wrapper">
                            <table className="timetable-log-table">
                                <thead>
                                    <tr>
                                        <th>Date & Time</th>
                                        <th>Action Type</th>
                                        <th>Module / Context</th>
                                        <th>Details</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-muted">Oct 24, 2023 <span className="small">10:42 AM</span></td>
                                        <td><span className="action-row"><FaPen /> Grade Update</span></td>
                                        <td>Class 5B - Mathematics</td>
                                        <td className="text-muted">Updated mid-term scores for 24 students.</td>
                                        <td><span className="status-pill green">Approved</span></td>
                                    </tr>
                                    <tr>
                                        <td className="text-muted">Oct 23, 2023 <span className="small">04:15 PM</span></td>
                                        <td><span className="action-row"><FaCalendarAlt /> Attendance</span></td>
                                        <td>Class 5B - Homeroom</td>
                                        <td className="text-muted">Daily attendance submission finalized.</td>
                                        <td><span className="status-pill green">Approved</span></td>
                                    </tr>
                                    <tr className="row-error">
                                        <td className="text-muted">Oct 22, 2023 <span className="small">09:30 AM</span></td>
                                        <td><span className="action-row"><FaFileAlt /> Curriculum Upload</span></td>
                                        <td>Science Dept. Portal</td>
                                        <td className="text-muted">Upload failed: Invalid file format (PDF required).</td>
                                        <td><span className="status-pill red">Rejected</span></td>
                                    </tr>
                                    <tr>
                                        <td className="text-muted">Oct 20, 2023 <span className="small">02:22 PM</span></td>
                                        <td><span className="action-row"><FaUser /> Profile Change</span></td>
                                        <td>Personal Details</td>
                                        <td className="text-muted">Updated emergency contact phone number.</td>
                                        <td><span className="status-pill yellow">Pending Review</span></td>
                                    </tr>
                                    <tr>
                                        <td className="text-muted">Oct 18, 2023 <span className="small">08:05 AM</span></td>
                                        <td><span className="action-row"><FaKey /> System Access</span></td>
                                        <td>Teacher Portal</td>
                                        <td className="text-muted">Successful login from IP 192.168.1.45.</td>
                                        <td><span className="status-pill green">Approved</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="pagination-simple">
                            <span>Showing 1 to 5 of 42 results</span>
                            <div className="page-nav">
                                <span className="disabled">Previous</span>
                                <span className="active">Next</span>
                            </div>
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
};

export default TeacherProfile;
