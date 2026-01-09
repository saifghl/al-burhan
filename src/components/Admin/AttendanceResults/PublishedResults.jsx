import React, { useState } from 'react';
import { FaSearch, FaCalendarAlt, FaFileAlt, FaEye, FaGlobe } from 'react-icons/fa';
import './PublishedResults.css';

const PublishedResults = () => {
    // Mock Data
    const [results] = useState([
        {
            id: 1,
            examName: "Mid-Term 2023",
            assessmentType: "Term 1 Assessment",
            class: "Class 10-A",
            subject: "Mathematics",
            publishDate: "Oct 12, 2023",
            status: "Live",
            iconColor: "#4A90E2", // Blue
            iconBg: "#E3F2FD"
        },
        {
            id: 2,
            examName: "Final Exam",
            assessmentType: "Annual Assessment",
            class: "Class 12-B",
            subject: "Physics",
            publishDate: "Oct 10, 2023",
            status: "Live",
            iconColor: "#D0021B", // Red/Pink
            iconBg: "#FCE4EC"
        },
        {
            id: 3,
            examName: "Unit Test 2",
            assessmentType: "Term 1 Assessment",
            class: "Class 08-C",
            subject: "English Literature",
            publishDate: "Oct 05, 2023",
            status: "Live",
            iconColor: "#F5A623", // Orange
            iconBg: "#FFF3E0"
        },
        {
            id: 4,
            examName: "Weekly Quiz",
            assessmentType: "Continuous Assessment",
            class: "Class 11-A",
            subject: "Geography",
            publishDate: "Sep 28, 2023",
            status: "Synced",
            iconColor: "#64A926", // Green
            iconBg: "#E8F5E9"
        },
        {
            id: 5,
            examName: "Term 1 Finals",
            assessmentType: "Archived",
            class: "Class 10-A",
            subject: "General Science",
            publishDate: "Aug 15, 2023",
            status: "Archived",
            iconColor: "#9E9E9E", // Grey
            iconBg: "#F5F5F5"
        }
    ]);

    return (
        <div className="published-results-container">
            {/* Header and Breadcrumbs */}
            <div className="page-header">
                <div className="breadcrumbs">
                    <span>Dashboard</span>
                    <span className="separator">›</span>
                    <span>Exams</span>
                    <span className="separator">›</span>
                    <span className="current">Published Results</span>
                </div>
                <div className="header-title-row">
                    <div>
                        <h1>Published Results</h1>
                        <p className="page-description">
                            View academic reports currently visible on Student and Parent portals. These records are read-only and sync automatically.
                        </p>
                    </div>
                    <div className="auto-sync-status">
                        <span className="sync-dot"></span> Auto-Sync Active
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="stats-cards-grid">
                <div className="stat-card">
                    <div className="stat-content">
                        <span className="stat-label">Total Published</span>
                        <div className="stat-value">1,240</div>
                        <div className="stat-trend positive">
                            <span>↗</span> 5% from last term
                        </div>
                    </div>
                    <div className="stat-icon-wrapper blue">
                        <FaFileAlt />
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-content">
                        <span className="stat-label">Published This Month</span>
                        <div className="stat-value">85</div>
                        <div className="stat-trend positive">
                            <span>↗</span> 12% increase
                        </div>
                    </div>
                    <div className="stat-icon-wrapper purple">
                        <FaCalendarAlt />
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-content">
                        <span className="stat-label">Pending Review</span>
                        <div className="stat-value">12</div>
                        <div className="stat-trend neutral">
                            Waiting for approval
                        </div>
                    </div>
                    <div className="stat-icon-wrapper orange">
                        <FaFileAlt />
                    </div>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="filters-section">
                <div className="search-box">
                    <label>Search Exam</label>
                    <div className="input-with-icon">
                        <FaSearch className="search-icon" />
                        <input type="text" placeholder="e.g. Mid Term 2023 Mathematics" />
                    </div>
                </div>
                <div className="filter-box">
                    <label>Filter by Class</label>
                    <select defaultValue="All Classes">
                        <option>All Classes</option>
                        <option>Class 10-A</option>
                        <option>Class 12-B</option>
                    </select>
                </div>
                <div className="filter-box">
                    <label>Academic Year</label>
                    <select defaultValue="2025-2026">
                        <option>2025-2026</option>
                        <option>2024-2025</option>
                    </select>
                </div>
            </div>

            {/* Results Table */}
            <div className="table-container">
                <table className="results-table">
                    <thead>
                        <tr>
                            <th>Exam Name</th>
                            <th>Class</th>
                            <th>Subject</th>
                            <th>Publish Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <div className="exam-name-cell">
                                        <div className="exam-icon" style={{ backgroundColor: item.iconBg, color: item.iconColor }}>
                                            <FaFileAlt />
                                        </div>
                                        <div className="exam-details">
                                            <span className="name">{item.examName}</span>
                                            <span className="type">{item.assessmentType}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="class-cell">{item.class}</td>
                                <td className="subject-cell">{item.subject}</td>
                                <td className="date-cell">{item.publishDate}</td>
                                <td>
                                    <span className={`status-badge ${item.status.toLowerCase()}`}>
                                        <span className="status-dot"></span> {item.status}
                                    </span>
                                </td>
                                <td>
                                    <button className="view-action-btn">
                                        <FaEye className="action-icon" /> View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="pagination-footer">
                    <span className="showing-text">Showing 1-5 of 142 results</span>
                    <div className="page-numbers">
                        <button className="page-nav prev">{'<'}</button>
                        <button className="page-num active">1</button>
                        <button className="page-num">2</button>
                        <button className="page-num">3</button>
                        <span className="ellipsis">...</span>
                        <button className="page-num">12</button>
                        <button className="page-nav next">{'>'}</button>
                    </div>
                </div>

                <div className="sync-info-footer">
                    All data is automatically synchronized with the Student Portal. Last sync: 2 minutes ago.
                </div>
            </div>
        </div>
    );
};

export default PublishedResults;
