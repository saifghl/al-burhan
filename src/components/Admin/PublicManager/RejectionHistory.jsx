import React from 'react';
import {
    FaSearch,
    FaChevronDown,
    FaDownload,
    FaEye,
    FaBell
} from 'react-icons/fa';
import AdminMobileNav from '../AdminDonation/AdminMobileNav';
import './RejectionHistory.css';

const RejectionHistory = () => {
    // Mock Data based on image
    const rejectionList = [
        {
            id: 'DOC-2394',
            title: 'Grade 5 Fiqh Syllabus Update',
            submittedBy: 'Ustadh Ahmed',
            reason: 'Missing bibliography section and formatting issues.',
            date: 'Oct 24, 2023',
            status: 'Rework Pending',
            statusClass: 'status-rework',
            isResubmitted: false
        },
        {
            id: 'MED-4421',
            title: 'Morning Adhkar Audio',
            submittedBy: 'Sarah Karim',
            reason: 'Audio quality low in the first segment.',
            date: 'Oct 23, 2023',
            status: 'Resubmitted',
            statusClass: 'status-resubmitted',
            isResubmitted: true
        },
        {
            id: 'QZ-9912',
            title: 'Weekly Hadith Quiz',
            submittedBy: 'Bilal Mohammed',
            reason: 'Question 4 has an incorrect answer key.',
            date: 'Oct 22, 2023',
            status: 'Rework Pending',
            statusClass: 'status-rework',
            isResubmitted: false
        },
        {
            id: 'IMG-1029',
            title: 'Annual Event Poster',
            submittedBy: 'Yusuf Ali',
            reason: 'Incorrect logo usage and low contrast text.',
            date: 'Oct 21, 2023',
            status: 'Escalated',
            statusClass: 'status-escalated',
            isResubmitted: false
        }
    ];

    return (
        <div className="rejection-history-container">
            <AdminMobileNav />
            {/* Header */}
            <div className="rh-header-section">
                <div className="rh-page-title">
                    <h1>Rejection History</h1>
                    <p>View logs of rejected submissions and feedback transparency.</p>
                </div>
                <button className="btn-export-log" onClick={() => alert('Exporting log...')}>
                    <FaDownload /> Export Log
                </button>
            </div>

            {/* Stats Cards */}
            <div className="rh-stats-grid">
                <div className="rh-stat-card">
                    <span className="rh-stat-label">Total Rejected</span>
                    <span className="rh-stat-value">142</span>
                    <span className="rh-stat-subtext positive-growth">+12% from last month</span>
                </div>
                <div className="rh-stat-card">
                    <span className="rh-stat-label">Pending Rework</span>
                    <span className="rh-stat-value">28</span>
                    <span className="rh-stat-subtext needs-attention">Needs attention</span>
                </div>
                <div className="rh-stat-card">
                    <span className="rh-stat-label">Resubmitted</span>
                    <span className="rh-stat-value">15</span>
                    <span className="rh-stat-subtext awaiting-review">Awaiting review</span>
                </div>
            </div>

            {/* Search & Filters */}
            <div className="rh-search-filters-container">
                <div className="rh-search-row">
                    <div className="rh-search-wrapper">
                        <FaSearch className="rh-search-icon" />
                        <input type="text" className="rh-search-input" placeholder="Search by title..." />
                    </div>
                    <div className="rh-search-wrapper">
                        <FaSearch className="rh-search-icon" />
                        <input type="text" className="rh-search-input" placeholder="Search by submitted by..." />
                    </div>
                </div>

                <div className="rh-filters-row">
                    <span className="rh-filter-label">Filters:</span>

                    <button className="rh-dropdown-filter">
                        Date Range: Last 30 Days <FaChevronDown size={10} color="#cbd5e1" />
                    </button>

                    <button className="rh-dropdown-filter">
                        Rejection Reason: All <FaChevronDown size={10} color="#cbd5e1" />
                    </button>

                    <button className="rh-dropdown-filter">
                        Status: Rework Pending <FaChevronDown size={10} color="#cbd5e1" />
                    </button>

                    <button className="btn-clear-all">Clear all</button>
                </div>
            </div>

            {/* Table */}
            <div className="rh-table-container">
                <table className="rh-table">
                    <thead>
                        <tr>
                            <th>Content Title</th>
                            <th>Submitted By</th>
                            <th>Rejection Reason</th>
                            <th>Rejected Date</th>
                            <th>Status</th>
                            <th style={{ textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rejectionList.map((item) => (
                            <tr key={item.id}>
                                <td className="rh-title-cell">
                                    <h4>{item.title}</h4>
                                    <span className="rh-id-text">ID: #{item.id}</span>
                                </td>
                                <td>
                                    <div className="rh-user-cell">
                                        <div className="rh-user-avatar"></div>
                                        <span className="rh-user-name">{item.submittedBy}</span>
                                    </div>
                                </td>
                                <td>
                                    <p className="rh-reason-text">{item.reason}</p>
                                </td>
                                <td>
                                    <span className="rh-date-text">{item.date}</span>
                                </td>
                                <td>
                                    <span className={`status-badge ${item.statusClass}`}>{item.status}</span>
                                </td>
                                <td>
                                    <div className="rh-actions-cell">
                                        {item.isResubmitted ? (
                                            <button className="btn-action-text">Review Again</button>
                                        ) : (
                                            <>
                                                <button className="btn-action-icon"><FaEye /></button>
                                                <button className="btn-action-icon"><FaBell /></button>
                                            </>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="rh-pagination">
                    <span className="showing-result">Showing <strong>1</strong> to <strong>4</strong> of <strong>142</strong> results</span>
                    <div className="pagination-controls">
                        <button className="pg-link disabled">Previous</button>
                        <button className="pg-link">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RejectionHistory;
