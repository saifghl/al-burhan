import React, { useState } from 'react';
import './Student profile.css';
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';
import {
    MdCheckCircle,
    MdMenuBook,
    MdEmojiEvents,
    MdPrint,
    MdAddCircle,
    MdInfo,
    MdUpdate,
    MdCloudUpload,
    MdEdit,
    MdFormatBold,
    MdFormatItalic,
    MdFormatListBulleted,
    MdLink
} from 'react-icons/md';

import profilePic from '../../assets/Picture16.png';

const StudentProfile = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="student-profile-wrapper">
            <button className="sidebar-mobile-toggle" onClick={toggleSidebar}>
                <FaBars />
            </button>

            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <div className="profile-container">
                {/* Profile Header Card */}
                <div className="profile-header-card">
                    <div className="header-top">
                        <div className="student-info-main">
                            <div className="profile-image-container">
                                <img src={profilePic} alt="Ahmed Ali" className="profile-pic" />
                            </div>
                            <div className="name-id-section">
                                <h1 className="student-name">Ahmed Ali</h1>
                                <div className="student-meta">
                                    <span className="badge grade">Grade 5B</span>
                                    <span className="student-id">ID: #29381</span>
                                </div>
                            </div>
                        </div>
                        <div className="header-actions">
                            <button className="btn btn-secondary"><MdPrint /> Report</button>
                            <button className="btn btn-primary"><MdAddCircle /> Log New Activity</button>
                        </div>
                    </div>

                    <div className="header-stats">
                        <div className="stat-card">
                            <div className="stat-label">Attendance Rate</div>
                            <div className="stat-value-row">
                                <span className="stat-value">96%</span>
                                <MdCheckCircle className="stat-icon success" />
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-label">Current Hifz Level</div>
                            <div className="stat-value-row">
                                <span className="stat-value">Juz 5</span>
                                <MdMenuBook className="stat-icon info" />
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-label">Achievements</div>
                            <div className="stat-value-row">
                                <span className="stat-value">12 Certs</span>
                                <MdEmojiEvents className="stat-icon warning" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="tabs-navigation">
                    <button className="tab-item active">Overview</button>
                    <button className="tab-item">Daily Logs</button>
                    <button className="tab-item">Hifz Progress</button>
                    <button className="tab-item">Achievements</button>
                </div>

                {/* Main Content Grid */}
                <div className="main-content-grid">
                    {/* Daily Learning Activity */}
                    <div className="content-section-card">
                        <div className="section-header">
                            <h3><MdMenuBook className="header-icon" /> Daily Learning Activity</h3>
                            <span className="view-all">View All</span>
                        </div>
                        <div className="activity-list">
                            <div className="activity-item">
                                <div className="activity-indicator math"></div>
                                <div className="activity-details">
                                    <div className="activity-title-row">
                                        <strong>Mathematics - Chapter 4</strong>
                                        <span className="activity-time">10:30 AM</span>
                                    </div>
                                    <p>Completed worksheet on Fractions and Mixed Numbers.</p>
                                    <div className="activity-status-row">
                                        <span className="badge grade-small">Grade: A</span>
                                        <span className="text-success small">Verified</span>
                                    </div>
                                </div>
                            </div>
                            <div className="activity-item">
                                <div className="activity-indicator science"></div>
                                <div className="activity-details">
                                    <div className="activity-title-row">
                                        <strong>Science Lab</strong>
                                        <span className="activity-time">09:15 AM</span>
                                    </div>
                                    <p>Participated in Plant Biology experiment group.</p>
                                </div>
                            </div>
                            <div className="activity-item">
                                <div className="activity-indicator morning"></div>
                                <div className="activity-details">
                                    <div className="activity-title-row">
                                        <strong>Morning Assembly</strong>
                                        <span className="activity-time">08:00 AM</span>
                                    </div>
                                    <p>Present and punctual.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hifz Progress */}
                    <div className="content-section-card">
                        <div className="section-header">
                            <h3><MdMenuBook className="header-icon" /> Hifz Progress</h3>
                            <span className="view-all">Update</span>
                        </div>
                        <div className="hifz-content">
                            <div className="progress-section">
                                <div className="progress-labels">
                                    <span>Current Goal: Juz 5</span>
                                    <span className="progress-percent">75%</span>
                                </div>
                                <div className="progress-bar-container">
                                    <div className="progress-bar" style={{ width: '75%' }}></div>
                                </div>
                                <p className="completion-date">Target completion: Nov 30, 2023</p>
                            </div>
                            <div className="hifz-stats-grid">
                                <div className="hifz-stat-box">
                                    <div className="hifz-stat-label">
                                        <MdMenuBook className="hifz-icon" /> Memorized
                                    </div>
                                    <div className="hifz-stat-val">4.5 Juz</div>
                                </div>
                                <div className="hifz-stat-box">
                                    <div className="hifz-stat-label">
                                        <MdUpdate className="hifz-icon" /> Review
                                    </div>
                                    <div className="hifz-stat-val">Surah Yasin</div>
                                </div>
                            </div>
                            <div className="milestone-box">
                                <div className="milestone-icon-container">
                                    <MdInfo className="milestone-icon" />
                                </div>
                                <div className="milestone-text">
                                    <strong>New Milestone Reached!</strong>
                                    <p>Completed Surah Al-Mulk with Tajweed excellence.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Competitions */}
                    <div className="content-section-card">
                        <div className="section-header">
                            <h3>Competitions</h3>
                            <span className="add-link">+ Add</span>
                        </div>
                        <table className="competitions-table">
                            <thead>
                                <tr>
                                    <th>Event Name</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Annual Quran Recitation</td>
                                    <td>Oct 15, 2023</td>
                                    <td><span className="badge-status finalist">Finalist</span></td>
                                    <td><MdEdit className="edit-row-icon" /></td>
                                </tr>
                                <tr>
                                    <td>District Math Olympiad</td>
                                    <td>Sep 02, 2023</td>
                                    <td><span className="badge-status winner">Winner (1st)</span></td>
                                    <td><MdEdit className="edit-row-icon" /></td>
                                </tr>
                                <tr>
                                    <td>Science Fair 2023</td>
                                    <td>Aug 20, 2023</td>
                                    <td><span className="badge-status participant">Participant</span></td>
                                    <td><MdEdit className="edit-row-icon" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Certificates */}
                    <div className="content-section-card">
                        <div className="section-header">
                            <h3><MdEmojiEvents className="header-icon" /> Certificates</h3>
                            <span className="view-all">View Gallery</span>
                        </div>
                        <div className="upload-area">
                            <div className="upload-box">
                                <MdCloudUpload className="upload-icon" />
                                <p>Click to upload or drag and drop</p>
                                <span className="upload-subtitle">PDF, PNG, JPG up to 10MB</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Teacher's Evaluation Section */}
                <div className="evaluation-section">
                    <h3>Teacher's Evaluation</h3>
                    <p className="eval-subtitle">General Comments</p>
                    <div className="editor-container">
                        <div className="editor-toolbar">
                            <button className="toolbar-btn"><MdFormatBold /></button>
                            <button className="toolbar-btn"><MdFormatItalic /></button>
                            <button className="toolbar-btn"><MdFormatListBulleted /></button>
                            <div className="toolbar-divider"></div>
                            <button className="toolbar-btn"><MdLink /></button>
                        </div>
                        <textarea className="eval-textarea" placeholder="Enter your feedback here..."></textarea>
                    </div>
                    <div className="evaluation-actions">
                        <button className="btn btn-text">Save Draft</button>
                        <button className="btn btn-primary">Publish Assessment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;
