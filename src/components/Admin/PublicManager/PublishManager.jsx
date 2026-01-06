import React from 'react';
import {
    FaCloudUploadAlt,
    FaPlus,
    FaEdit,
    FaFileAlt,
    FaCheckCircle,
    FaArchive,
    FaExclamationTriangle,
    FaClock,
    FaSearch,
    FaFilter,
    FaEllipsisV,
    FaChevronDown,
    FaChartBar,
    FaBullhorn,
    FaHandHoldingHeart,
    FaGraduationCap,
    FaArrowUp,
    FaArrowDown
} from 'react-icons/fa';
import AdminMobileNav from '../AdminDonation/AdminMobileNav';
import './PublishManager.css';

const PublishManager = () => {
    return (
        <div className="publish-manager-container">
            <AdminMobileNav />
            {/* Header Steps */}
            <div className="pm-header-section">
                <div className="pm-page-title">
                    <span style={{ color: '#64748b', fontSize: '13px', display: 'block', marginBottom: '8px' }}>Content Management</span>
                    <h1>Publish Manager</h1>
                    <p>Manage content visibility, approvals, and lifecycle status.</p>
                </div>
                <div className="pm-header-actions">
                    <button className="btn-bulk-import" onClick={() => alert('Bulk Import feature coming soon!')}>
                        <FaCloudUploadAlt /> Bulk Import
                    </button>
                    <button className="btn-create-content" onClick={() => alert('Opening content creation form...')}>
                        <FaPlus /> Create New Content
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="pm-stats-grid">
                <div className="pm-stat-card card-draft" onClick={() => alert('Filtering by Draft items')}>
                    <div className="pm-stat-header">
                        <span className="pm-stat-label">Draft Items</span>
                        <div className="pm-stat-icon"><FaEdit /></div>
                    </div>
                    <span className="pm-stat-value">12</span>
                </div>

                <div className="pm-stat-card card-pending" onClick={() => alert('Filtering by Pending items')}>
                    <div className="pm-stat-header">
                        <span className="pm-stat-label">Pending Approval</span>
                        <div className="pm-stat-icon"><FaFileAlt /></div>
                    </div>
                    <span className="pm-stat-value">5</span>
                    <span className="pm-stat-subtext">Requires attention</span>
                </div>

                <div className="pm-stat-card card-published" onClick={() => alert('Filtering by Published content')}>
                    <div className="pm-stat-header">
                        <span className="pm-stat-label">Published Content</span>
                        <div className="pm-stat-icon"><FaCheckCircle /></div>
                    </div>
                    <span className="pm-stat-value">142</span>
                </div>

                <div className="pm-stat-card card-archived" onClick={() => alert('Filtering by Archived content')}>
                    <div className="pm-stat-header">
                        <span className="pm-stat-label">Archived Content</span>
                        <div className="pm-stat-icon"><FaArchive /></div>
                    </div>
                    <span className="pm-stat-value">890</span>
                </div>
            </div>

            {/* Alerts Grid */}
            <div className="pm-alerts-grid">
                <div className="pm-alert-card">
                    <div className="alert-icon-wrapper icon-approval">
                        <FaExclamationTriangle />
                    </div>
                    <div className="alert-content">
                        <h4>Approval Required</h4>
                        <p>5 exam results are awaiting final sign-off before they can be released to the Student Portal.</p>
                        <a href="#" className="alert-action-link link-approval" onClick={(e) => { e.preventDefault(); alert('Navigating to Approval Queue...'); }}>Review Items</a>
                    </div>
                </div>

                <div className="pm-alert-card">
                    <div className="alert-icon-wrapper icon-scheduled">
                        <FaClock />
                    </div>
                    <div className="alert-content">
                        <h4>Scheduled Today</h4>
                        <p>2 notices are scheduled to go live today at 5:00 PM automatically.</p>
                        <a href="#" className="alert-action-link link-scheduled" onClick={(e) => { e.preventDefault(); alert('Viewing Scheduled items...'); }}>View Schedule</a>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="pm-filters-bar">
                <button className="pm-dropdown" onClick={() => alert('Module filter dropdown')}>
                    All modules <FaChevronDown size={10} />
                </button>
                <button className="pm-dropdown" onClick={() => alert('Status filter dropdown')}>
                    All status <FaChevronDown size={10} />
                </button>
                <button className="pm-dropdown" onClick={() => alert('Portal filter dropdown')}>
                    All Portals <FaChevronDown size={10} />
                </button>

                <div className="pm-search-wrapper">
                    <FaSearch color="#94a3b8" />
                    <input
                        type="text"
                        className="pm-search-input"
                        placeholder="Search content..."
                        onKeyPress={(e) => e.key === 'Enter' && alert(`Searching for: ${e.target.value}`)}
                    />
                </div>

                <button className="btn-filters" onClick={() => alert('Opening advanced filters...')}>
                    <FaFilter /> Filters
                </button>
            </div>

            {/* Table */}
            <div className="pm-table-container">
                <table className="pm-table">
                    <thead>
                        <tr>
                            <th style={{ width: '40px' }}><input type="checkbox" onChange={(e) => alert(`Select All: ${e.target.checked}`)} /></th>
                            <th>Content Title</th>
                            <th>Module</th>
                            <th>Target Portal</th>
                            <th>Author</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th style={{ textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" onChange={() => { }} /></td>
                            <td className="content-title-cell">Final Term Math Results</td>
                            <td>
                                <span className="module-badge mod-results">
                                    <FaChartBar size={10} /> Results
                                </span>
                            </td>
                            <td>Parent Portal</td>
                            <td>
                                <div className="author-cell">
                                    <div className="author-avatar"></div> Ahmed K.
                                </div>
                            </td>
                            <td>
                                <span className="status-badge status-pending">
                                    <span className="dot dot-orange"></span> Pending Approval
                                </span>
                            </td>
                            <td>Oct 24, 2023</td>
                            <td style={{ textAlign: 'right' }}>
                                <button className="action-menu-btn" onClick={() => alert('Opening actions for Match Results')}><FaEllipsisV /></button>
                            </td>
                        </tr>

                        <tr>
                            <td><input type="checkbox" /></td>
                            <td className="content-title-cell">Eid Holiday Notice</td>
                            <td>
                                <span className="module-badge mod-notices">
                                    <FaBullhorn size={10} /> Notices
                                </span>
                            </td>
                            <td>Public Website</td>
                            <td>
                                <div className="author-cell">
                                    <div className="author-avatar"></div> Sarah M.
                                </div>
                            </td>
                            <td>
                                <span className="status-badge status-scheduled">
                                    <span className="dot dot-blue"></span> Scheduled
                                </span>
                            </td>
                            <td>Today, 5:00 PM</td>
                            <td style={{ textAlign: 'right' }}>
                                <button className="action-menu-btn"><FaEllipsisV /></button>
                            </td>
                        </tr>

                        <tr>
                            <td><input type="checkbox" /></td>
                            <td className="content-title-cell">Charity Drive Appeal</td>
                            <td>
                                <span className="module-badge mod-donations">
                                    <FaHandHoldingHeart size={10} /> Donations
                                </span>
                            </td>
                            <td>Public Website</td>
                            <td>
                                <div className="author-cell">
                                    <div className="author-avatar"></div> You
                                </div>
                            </td>
                            <td>
                                <span className="status-badge status-draft">
                                    <span className="dot dot-gray"></span> Draft
                                </span>
                            </td>
                            <td>Oct 23, 2023</td>
                            <td style={{ textAlign: 'right' }}>
                                <button className="action-menu-btn"><FaEllipsisV /></button>
                            </td>
                        </tr>

                        <tr>
                            <td><input type="checkbox" /></td>
                            <td className="content-title-cell">Weekly Quiz Schedule</td>
                            <td>
                                <span className="module-badge mod-exams">
                                    <FaGraduationCap size={10} /> Exams
                                </span>
                            </td>
                            <td>Student Portal</td>
                            <td>
                                <div className="author-cell">
                                    <div className="author-avatar"></div> Teacher A.
                                </div>
                            </td>
                            <td>
                                <span className="status-badge status-published">
                                    <span className="dot dot-green"></span> Published
                                </span>
                            </td>
                            <td>Oct 20, 2023</td>
                            <td style={{ textAlign: 'right' }}>
                                <button className="action-menu-btn"><FaEllipsisV /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="pm-pagination">
                    <span>Showing <strong>1</strong> to <strong>4</strong> of <strong>150+</strong> results</span>
                    <div className="pagination-pages">
                        <button className="page-btn prev-btn">Previous</button>
                        <button className="page-btn active">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn">3</button>
                        <button className="page-btn">...</button>
                        <button className="page-btn next-btn">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublishManager;
