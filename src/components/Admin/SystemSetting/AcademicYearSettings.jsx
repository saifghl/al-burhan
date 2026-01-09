import React, { useState } from 'react';
import {
    FaPlus,
    FaPencilAlt,
    FaRegCalendarAlt,
    FaGraduationCap,
    FaHistory,
    FaClock,
    FaFilter,
    FaEllipsisV
} from 'react-icons/fa';
import AdminMobileNav from '../AdminDonation/AdminMobileNav';
import './AcademicYearSettings.css';

const AcademicYearSettings = () => {
    return (
        <div className="ays-container">
            <AdminMobileNav />

            <div className="ays-header">
                <span className="ays-breadcrumb">Settings {'>'} Academic Year</span>
                <div className="ays-title-row">
                    <div className="ays-title">
                        <h1>Academic Year Settings</h1>
                        <p>Manage current and past academic sessions for the institution.</p>
                    </div>
                    <button className="btn-create-year">
                        <FaPlus /> Create New Academic Year
                    </button>
                </div>
            </div>

            <div className="ays-content-grid">
                {/* Left Column: Active Session & Stats */}
                <div className="ays-left-col">
                    <div className="active-session-card">
                        <div className="card-header">
                            <h3>Active Session</h3>
                            <div className="live-badge">
                                <span className="live-dot"></span> Live
                            </div>
                        </div>

                        <div className="current-year-display">
                            <FaRegCalendarAlt className="cyd-icon" />
                            <span className="cyd-year">2025–2026</span>
                            <span className="cyd-label">Current Academic Year</span>
                        </div>

                        <div className="date-fields">
                            <div className="field-group">
                                <label>Start Date</label>
                                <input type="text" value="September 01, 2025" readOnly />
                            </div>
                            <div className="field-group">
                                <label>End Date</label>
                                <input type="text" value="June 30, 2026" readOnly />
                            </div>
                        </div>

                        <div className="card-footer">
                            <span className="last-updated">Last updated: 2 days ago</span>
                            <a href="#" className="edit-link">Edit Details <FaPencilAlt size={10} /></a>
                        </div>
                    </div>

                    <div className="active-session-card">
                        <div className="card-header">
                            <h3>Session Breakdown</h3>
                        </div>
                        <div className="breakdown-stats">
                            <div className="stat-item">
                                <span className="stat-value">192</span>
                                <span className="stat-label">Teaching Days</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">3</span>
                                <span className="stat-label">Terms</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">12</span>
                                <span className="stat-label">Holidays</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: List */}
                <div className="years-list-card">
                    <div className="list-header">
                        <div>
                            <h3>All Academic Years</h3>
                            <p>History of past sessions and upcoming planned years.</p>
                        </div>
                        <div className="search-filter">
                            <input type="text" className="search-box" placeholder="Search..." />
                            <button className="filter-btn"><FaFilter /></button>
                        </div>
                    </div>

                    <div className="years-table-container">
                        <table className="years-table">
                            <thead>
                                <tr>
                                    <th>Academic Year</th>
                                    <th>Duration</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Row 1 - Active */}
                                <tr>
                                    <td>
                                        <div className="year-info-cell">
                                            <div className="year-icon active-icon"><FaGraduationCap /></div>
                                            <div className="year-text-group">
                                                <h4>2025-2026</h4>
                                                <span className="year-subtext active">Current Session</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="duration-text">Sep 01, 2025 — Jun 30, 2026</span></td>
                                    <td><span className="status-badge active">Active</span></td>
                                    <td><button className="action-btn-icon"><FaEllipsisV /></button></td>
                                </tr>

                                {/* Row 2 - Upcoming */}
                                <tr>
                                    <td>
                                        <div className="year-info-cell">
                                            <div className="year-icon"><FaRegCalendarAlt /></div>
                                            <div className="year-text-group">
                                                <h4>2026-2027</h4>
                                                <span className="year-subtext upcoming">Next Session</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="duration-text">Sep 01, 2026 — Jun 30, 2027</span></td>
                                    <td><span className="status-badge upcoming">Upcoming</span></td>
                                    <td><button className="action-btn-icon"><FaEllipsisV /></button></td>
                                </tr>

                                {/* Row 3 - Archived */}
                                <tr>
                                    <td>
                                        <div className="year-info-cell">
                                            <div className="year-icon"><FaHistory /></div>
                                            <div className="year-text-group">
                                                <h4>2024-2025</h4>
                                                <span className="year-subtext"></span>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="duration-text">Sep 01, 2024 — Jun 30, 2025</span></td>
                                    <td><span className="status-badge archived">Archived</span></td>
                                    <td><button className="action-btn-icon"><FaEllipsisV /></button></td>
                                </tr>

                                {/* Row 4 - Archived */}
                                <tr>
                                    <td>
                                        <div className="year-info-cell">
                                            <div className="year-icon"><FaHistory /></div>
                                            <div className="year-text-group">
                                                <h4>2023-2024</h4>
                                                <span className="year-subtext"></span>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="duration-text">Sep 01, 2023 — Jun 30, 2024</span></td>
                                    <td><span className="status-badge archived">Archived</span></td>
                                    <td><button className="action-btn-icon"><FaEllipsisV /></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="list-footer">
                        <span>Showing 1 to 4 of 12 results</span>
                        <div className="pagination-controls">
                            <button className="page-btn disabled">Previous</button>
                            <button className="page-btn">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcademicYearSettings;
