import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFileExport, FaCheckDouble, FaCheck, FaTimes, FaFilter, FaSearch } from 'react-icons/fa';
import { IoMdEye, IoMdRefresh } from 'react-icons/io';
import { TbFileTime } from 'react-icons/tb';
import { MdEditDocument } from 'react-icons/md';
import './PendingApprovals.css';

const PendingApprovals = () => {
    const navigate = useNavigate();
    // Mock Data
    const [approvals] = useState([
        {
            id: 1,
            examName: "Mid-Term Assessment 2023",
            class: "Grade 10-A",
            subject: "Mathematics",
            teacher: "Sarah Connor",
            submitted: "Oct 24, 2023",
            status: "Pending"
        },
        {
            id: 2,
            examName: "Unit Test: Organic Chemistry",
            class: "Grade 11-B",
            subject: "Science",
            teacher: "Michael Chen",
            submitted: "Oct 24, 2023",
            status: "Pending"
        },
        {
            id: 3,
            examName: "English Literature - Hamlet",
            class: "Grade 12-C",
            subject: "English",
            teacher: "Emma Wilson",
            submitted: "Oct 23, 2023",
            status: "Under Review"
        },
        {
            id: 4,
            examName: "History: World War II",
            class: "Grade 10-A",
            subject: "History",
            teacher: "Robert Fox",
            submitted: "Oct 23, 2023",
            status: "Pending"
        },
        {
            id: 5,
            examName: "Physics Finals",
            class: "Grade 12-B",
            subject: "Physics",
            teacher: "Albert Bell",
            submitted: "Oct 22, 2023",
            status: "Pending"
        }
    ]);

    return (
        <div className="pending-approvals-container">
            {/* Header Section */}
            <div className="approvals-header">
                <div className="header-content">
                    <div className="breadcrumbs">Home / Results / Approvals</div>
                    <h1>Pending Result Approvals</h1>
                    <p>Review and approve marks submitted by teachers before final publication.</p>
                </div>
                <div className="header-actions">
                    <button className="btn-export">
                        <FaFileExport /> Export Data
                    </button>
                    <button className="btn-bulk-approve">
                        <FaCheckDouble /> Bulk Approve
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-info">
                        <span className="stat-label">Total Pending</span>
                        <div className="stat-value">24</div>
                        <span className="stat-trend positive">+4 since yesterday</span>
                    </div>
                    <div className="stat-icon pending">
                        <TbFileTime />
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-info">
                        <span className="stat-label">Approved Today</span>
                        <div className="stat-value">12</div>
                        <span className="stat-trend positive">85% approval rate</span>
                    </div>
                    <div className="stat-icon approved">
                        <FaCheck />
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-info">
                        <span className="stat-label">Rejected</span>
                        <div className="stat-value">3</div>
                        <span className="stat-trend negative">Needs revision</span>
                    </div>
                    <div className="stat-icon rejected">
                        <FaTimes />
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="content-area">
                {/* Filters */}
                <div className="filters-bar">
                    <div className="filter-group">
                        <select className="filter-select">
                            <option>All Classes</option>
                            <option>Grade 10-A</option>
                            <option>Grade 11-B</option>
                        </select>
                        <select className="filter-select">
                            <option>All Subjects</option>
                            <option>Mathematics</option>
                            <option>Science</option>
                        </select>
                        <select className="filter-select">
                            <option>Teachers</option>
                            <option>Sarah Connor</option>
                        </select>
                    </div>
                    <div className="table-actions">
                        <button className="refresh-btn">
                            <IoMdRefresh />
                        </button>
                        <button className="refresh-btn">
                            <FaFilter />
                        </button>
                    </div>
                </div>

                {/* Table */}
                <table className="approvals-table">
                    <thead>
                        <tr>
                            <th style={{ width: '40px' }}><input type="checkbox" /></th>
                            <th>Exam Name</th>
                            <th>Class</th>
                            <th>Subject</th>
                            <th>Teacher</th>
                            <th>Submitted</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {approvals.map((item) => (
                            <tr key={item.id}>
                                <td><input type="checkbox" /></td>
                                <td><b>{item.examName}</b></td>
                                <td>{item.class}</td>
                                <td>{item.subject}</td>
                                <td>
                                    <div className="teacher-cell">
                                        <div className="teacher-avatar">
                                            {item.teacher.charAt(0)}
                                        </div>
                                        {item.teacher}
                                    </div>
                                </td>
                                <td>{item.submitted}</td>
                                <td>
                                    <span className={`status-badge ${item.status.toLowerCase().replace(' ', '-')}`}>
                                        <span className="status-dot"></span>
                                        {item.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="actions-cell">
                                        <button
                                            className="action-btn view"
                                            title="View Details"
                                            onClick={() => navigate('/admin/review-exam-results')}
                                        >
                                            <IoMdEye />
                                        </button>
                                        <button className="action-btn approve" title="Approve">
                                            <FaCheck />
                                        </button>
                                        <button className="action-btn reject" title="Reject">
                                            <FaTimes />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="pagination">
                    <span className="showing-text">Showing 1 to 5 of 24 results</span>
                    <button className="page-btn">{'<'}</button>
                    <button className="page-btn active">1</button>
                    <button className="page-btn">2</button>
                    <button className="page-btn">3</button>
                    <button className="page-btn">{'>'}</button>
                </div>
            </div>
        </div>
    );
};

export default PendingApprovals;
