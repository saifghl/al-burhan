import React, { useState } from 'react';
import './CreateAssignment.css';
import {
    FaBell, FaCog, FaSearch, FaBold, FaItalic, FaListUl, FaLink,
    FaCloudUploadAlt, FaCalendarAlt, FaUserFriends, FaTimes, FaFlask,
    FaBook, FaCheckCircle, FaBars
} from 'react-icons/fa';
import { MdAssignment, MdSend } from 'react-icons/md';
import Sidebar from './Sidebar';
import profilePic from '../../assets/Picture16.png';

const CreateAssignment = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [taskTitle, setTaskTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="create-assignment-wrapper">
            <button className="sidebar-mobile-toggle" onClick={toggleSidebar}>
                <FaBars />
            </button>

            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <main className="main-content">
                {/* Header */}
                <header className="top-header">
                    <div className="container" style={{ justifyContent: 'flex-end' }}>
                        <div className="header-actions">
                            <FaBell className="header-icon" />
                            <FaCog className="header-icon" />
                            <div className="profile-section">
                                <img src={profilePic} alt="Profile" className="profile-pic" />
                            </div>
                        </div>
                    </div>
                </header>

                <div className="content-body container">
                    <div className="page-header">
                        <div>
                            <h2 className="page-title">Create New Assignment</h2>
                            <p className="page-subtitle">Configure and assign tasks to your class groups.</p>
                        </div>
                    </div>

                    <div className="assignment-layout">
                        {/* Left Column: Form */}
                        <div className="assignment-form-column">
                            {/* Assignment Details Card */}
                            <div className="card form-section">
                                <h3 className="section-title">
                                    <span className="icon-box green"><MdAssignment /></span>
                                    Assignment Details
                                </h3>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Class Group</label>
                                        <select className="form-select">
                                            <option>e.g. Chapter 4 review : mitosis stage</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Subject Module</label>
                                        <select className="form-select">
                                            <option>e.g. Chapter 4 review : mitosis stage</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Task Title</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="e.g. Chapter 4 review : mitosis stage"
                                        value={taskTitle}
                                        onChange={(e) => setTaskTitle(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Description & Instructions</label>
                                    <div className="rich-text-editor">
                                        <div className="editor-toolbar">
                                            <button className="toolbar-btn"><FaBold /></button>
                                            <button className="toolbar-btn"><FaItalic /></button>
                                            <button className="toolbar-btn"><FaListUl /></button>
                                            <button className="toolbar-btn"><FaLink /></button>
                                        </div>
                                        <textarea
                                            className="editor-content"
                                            placeholder="Provide detailed instructions for the students here..."
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* Attachments & Schedule Card */}
                            <div className="card form-section">
                                <h3 className="section-title">
                                    <span className="icon-box green"><FaLink /></span>
                                    Attachments & Schedule
                                </h3>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Attachments</label>
                                        <div className="upload-area">
                                            <div className="upload-placeholder">
                                                <FaCloudUploadAlt className="upload-icon" />
                                                <p>Click to upload or drag and drop</p>
                                                <span className="upload-hint">PDF, DOCX, JPG (Max 10MB)</span>
                                            </div>
                                        </div>
                                        <div className="file-item">
                                            <div className="file-info">
                                                <div className="file-icon pdf">PDF</div>
                                                <div>
                                                    <span className="file-name">Lab_Safety_Guidelines.pdf</span>
                                                    <span className="file-size">2.4 MB</span>
                                                </div>
                                            </div>
                                            <button className="remove-file"><FaTimes /></button>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="due-date-header">
                                            <label>Due Date</label>
                                            <div className="date-presets">
                                                <button className="preset-btn">Tomorrow</button>
                                                <button className="preset-btn active">Next Week</button>
                                            </div>
                                        </div>
                                        <div className="input-with-icon">
                                            <input
                                                type="text"
                                                className="form-input"
                                                placeholder="DD/MM/YYYY"
                                                value={dueDate}
                                                onChange={(e) => setDueDate(e.target.value)}
                                            />
                                            <FaCalendarAlt className="field-icon-right" />
                                        </div>

                                        <label className="mt-3">Assign To</label>
                                        <div className="assign-selector">
                                            <div className="assign-value">
                                                <FaUserFriends /> All Students (28)
                                            </div>
                                            <button className="edit-assign">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Sidebar Widgets */}
                        <div className="assignment-sidebar-column">
                            {/* Recent Assignments */}
                            <div className="card widget-card">
                                <h3>Recent Assignments</h3>
                                <p className="widget-subtitle">Showing recent tasks for Year 10A - Biology</p>

                                <div className="recent-list">
                                    <div className="recent-item">
                                        <div className="recent-icon purple"><FaFlask /></div>
                                        <div className="recent-details">
                                            <h4>Osmosis Experiment Report</h4>
                                            <p>Due: Oct 12 • 24/28 Submitted</p>
                                        </div>
                                    </div>
                                    <div className="recent-item">
                                        <div className="recent-icon blue"><FaCheckCircle /></div>
                                        <div className="recent-details">
                                            <h4>Cell Theory Quiz</h4>
                                            <p>Due: Oct 10 • Completed</p>
                                        </div>
                                    </div>
                                    <div className="recent-item">
                                        <div className="recent-icon orange"><FaBook /></div>
                                        <div className="recent-details">
                                            <h4>Read Chapter 3</h4>
                                            <p>Due: Oct 05 • No Submission</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="view-all-link">View all history →</button>
                            </div>

                            {/* Pro Tip */}
                            <div className="card tip-card">
                                <h4 className="tip-title">💡 Pro Tip</h4>
                                <p>You can schedule assignments to be published at a later date. Students won't see this task until the start date you select.</p>
                            </div>

                            <button className="btn btn-full-green">View completed task</button>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="page-footer-actions">
                        <button className="btn btn-text">Cancel</button>
                        <div className="footer-right">
                            <button className="btn btn-text-green">Save as Draft</button>
                            <button className="btn btn-primary"><MdSend /> Assign Task</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CreateAssignment;
