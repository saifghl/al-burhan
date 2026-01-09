import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    FaHistory,
    FaPlus,
    FaEyeSlash,
    FaFilter,
    FaChevronDown,
    FaBullhorn,
    FaClipboardList,
    FaHandHoldingHeart,
    FaFutbol,
    FaEye,
    FaCheck,
    FaTimes,
    FaSearch,
    FaBell,
    FaDownload
} from 'react-icons/fa';
import AdminMobileNav from '../AdminDonation/AdminMobileNav';
import './ContentApprovalQueue.css';
import './RejectionHistory.css'; // Import RejectionHistory styles for the table

const ContentApprovalQueue = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.state?.activeTab || 'Needs');

    const handleAuditLog = () => alert("Opening Audit Log...");
    const handleCreateNew = () => alert("Opening 'Create New Content' wizard...");
    const handleFilter = () => alert("Opening filter options...");
    const navigate = useNavigate();

    const handleAction = (action, item) => {
        if (action === 'View') {
            navigate('/admin/content-review');
        } else {
            alert(`${action} action triggered for item: ${item}`);
        }
    };

    // Rejection History Data (Embedded)
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
        <div className="ca-queue-container">
            <AdminMobileNav />
            {/* Header */}
            <div className="ca-header-section">
                <div className="ca-page-title">
                    <span className="ca-breadcrumb">Dashboard / Content Management / Content Approval Queue</span>
                    <h1>Content Approval Queue</h1>
                    <p>Manage visibility and approval workflows for all portal content.</p>
                </div>
                <div className="ca-header-actions">
                    <button className="btn-audit-log" onClick={handleAuditLog}>
                        <FaHistory /> Audit Log
                    </button>
                    <button className="btn-create-new" onClick={handleCreateNew}>
                        <FaPlus /> Create New Content
                    </button>
                </div>
            </div>

            {/* Warning Banner - Hide for Rejected tab */}
            {activeTab !== 'Rejected' && (
                <div className="public-visibility-banner">
                    <FaEyeSlash className="warning-icon" />
                    <div className="banner-content">
                        <h4>Public Visibility Restriction</h4>
                        <p>Items listed in the queue below are currently <strong>hidden</strong> from public portals. They will only become visible after you approve them.</p>
                    </div>
                </div>
            )}

            {/* Stats Grid */}
            <div className="ca-stats-grid">
                <div className="ca-stat-card">
                    <span className="ca-stat-label label-pending">Pending Review</span>
                    <span className="ca-stat-value">12</span>
                </div>
                <div className="ca-stat-card" onClick={() => navigate('/admin/drafts')} style={{ cursor: 'pointer' }}>
                    <span className="ca-stat-label label-drafts">Drafts</span>
                    <span className="ca-stat-value">5</span>
                </div>
                <div className="ca-stat-card" onClick={() => navigate('/admin/published-content')} style={{ cursor: 'pointer' }}>
                    <span className="ca-stat-label label-published">Published Today</span>
                    <span className="ca-stat-value">8</span>
                </div>
                <div className="ca-stat-card" onClick={() => navigate('/admin/rejection-history')} style={{ cursor: 'pointer' }}>
                    <span className="ca-stat-label label-rejected">Rejected</span>
                    <span className="ca-stat-value">2</span>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="ca-content-area">

                {/* Tabs */}
                <div className="ca-tabs-header">
                    <div className="ca-tabs">
                        {[
                            { id: 'Needs', label: 'Needs Approval (12)' },
                            { id: 'Drafts', label: 'Drafts (5)' },
                            { id: 'Recently', label: 'Recently Approved' },
                            { id: 'Rejected', label: 'Rejected' },
                        ].map(tab => (
                            <button
                                key={tab.id}
                                className={`ca-tab ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="ca-filter-bar">
                        {activeTab === 'Rejected' ? (
                            <div className="filter-left">
                                <button className="btn-filter-icon" onClick={() => alert('Exporting log...')}>
                                    <FaDownload /> Export Log
                                </button>
                            </div>
                        ) : (
                            <div className="filter-left">
                                <button className="btn-filter-icon" onClick={handleFilter}>
                                    <FaFilter /> Filter
                                </button>
                                <button className="dropdown-link">
                                    All Types <FaChevronDown size={10} />
                                </button>
                                <button className="dropdown-link">
                                    Any Submitter <FaChevronDown size={10} />
                                </button>
                            </div>
                        )}
                        <span className="showing-count">
                            {activeTab === 'Rejected' ? 'Showing 1-4 of 142' : 'Showing 1-12 of 12'}
                        </span>
                    </div>
                </div>

                {/* Conditional Content Rendering */}
                {activeTab === 'Rejected' ? (
                    /* REJECTION HISTORY CONTENT (Embedded) */
                    <>
                        {/* Stats Cards for Rejection History */}
                        <div className="rh-stats-grid" style={{ marginBottom: '24px' }}>
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

                        <div className="rh-table-container" style={{ boxShadow: 'none', padding: 0 }}>
                            {/* Search & Filters for Rejection */}
                            <div className="rh-search-filters-container" style={{ marginBottom: '16px', marginTop: '0' }}>
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
                    </>
                ) : (
                    /* DEFAULT APPROVAL QUEUE CONTENT */
                    <>
                        <div className="ca-table-container">
                            <table className="ca-table">
                                <thead>
                                    <tr>
                                        <th style={{ width: '30px' }}><input type="checkbox" /></th>
                                        <th>Content Title</th>
                                        <th>Type</th>
                                        <th>Submitted By</th>
                                        <th>Target Portal</th>
                                        <th>Status</th>
                                        <th>Submitted</th>
                                        <th style={{ textAlign: 'right' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Row 1 */}
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>
                                            <div className="title-wrapper">
                                                <div className="type-icon icon-notice"><FaBullhorn /></div>
                                                <div className="title-text">
                                                    <h4>Eid al-Adha Holiday Announcement</h4>
                                                    <span>ID: #NT-2023-84</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="type-badge bg-notice">Notice</span></td>
                                        <td>
                                            <div className="submitter-cell">
                                                <div className="avatar-circle"></div> Admin Alice
                                            </div>
                                        </td>
                                        <td><span className="portal-badge">All Portals</span></td>
                                        <td>
                                            <span className="status-indicator status-pending">
                                                <span className="dot dot-yellow"></span> Pending
                                            </span>
                                        </td>
                                        <td className="date-text">Oct 24, 2023</td>
                                        <td>
                                            <div className="actions-cell">
                                                <button className="btn-icon-action action-view" onClick={() => handleAction('View', '#NT-2023-84')}><FaEye /></button>
                                                <button className="btn-icon-action action-approve" onClick={() => handleAction('Approve', '#NT-2023-84')}><FaCheck /></button>
                                                <button className="btn-icon-action action-reject" onClick={() => handleAction('Reject', '#NT-2023-84')}><FaTimes /></button>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 2 */}
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>
                                            <div className="title-wrapper">
                                                <div className="type-icon icon-result"><FaClipboardList /></div>
                                                <div className="title-text">
                                                    <h4>Q1 Exam Results - Grade 5</h4>
                                                    <span>ID: #RS-2023-12</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="type-badge bg-result">Result</span></td>
                                        <td>
                                            <div className="submitter-cell">
                                                <div className="avatar-circle"></div> Teacher Bob
                                            </div>
                                        </td>
                                        <td><span className="portal-badge">Student Portal</span></td>
                                        <td>
                                            <span className="status-indicator status-pending">
                                                <span className="dot dot-yellow"></span> Pending
                                            </span>
                                        </td>
                                        <td className="date-text">Oct 23, 2023</td>
                                        <td>
                                            <div className="actions-cell">
                                                <button className="btn-icon-action action-view" onClick={() => handleAction('View', '#RS-2023-12')}><FaEye /></button>
                                                <button className="btn-icon-action action-approve" onClick={() => handleAction('Approve', '#RS-2023-12')}><FaCheck /></button>
                                                <button className="btn-icon-action action-reject" onClick={() => handleAction('Reject', '#RS-2023-12')}><FaTimes /></button>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 3 */}
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>
                                            <div className="title-wrapper">
                                                <div className="type-icon icon-report"><FaHandHoldingHeart /></div>
                                                <div className="title-text">
                                                    <h4>Donation Drive Summary</h4>
                                                    <span>ID: #DR-2023-01</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="type-badge bg-report">Donation Report</span></td>
                                        <td>
                                            <div className="submitter-cell">
                                                <div className="avatar-circle"></div> System
                                            </div>
                                        </td>
                                        <td><span className="portal-badge">Public Website</span></td>
                                        <td>
                                            <span className="status-indicator status-draft">
                                                <span className="dot dot-grey"></span> Draft
                                            </span>
                                        </td>
                                        <td className="date-text">Oct 22, 2023</td>
                                        <td>
                                            <div className="actions-cell">
                                                <button className="btn-icon-action action-view" onClick={() => handleAction('View', '#DR-2023-01')}><FaEye /></button>
                                                <button className="btn-icon-action action-approve" onClick={() => handleAction('Approve', '#DR-2023-01')}><FaCheck /></button>
                                                <button className="btn-icon-action action-reject" onClick={() => handleAction('Reject', '#DR-2023-01')}><FaTimes /></button>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 4 */}
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>
                                            <div className="title-wrapper">
                                                <div className="type-icon icon-activity"><FaFutbol /></div>
                                                <div className="title-text">
                                                    <h4>Inter-Madarsa Football Tournament</h4>
                                                    <span>ID: #AC-2023-15</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="type-badge bg-activity">Activity</span></td>
                                        <td>
                                            <div className="submitter-cell">
                                                <div className="avatar-circle"></div> Coach John
                                            </div>
                                        </td>
                                        <td><span className="portal-badge">Student Portal</span></td>
                                        <td>
                                            <span className="status-indicator status-pending">
                                                <span className="dot dot-yellow"></span> Pending
                                            </span>
                                        </td>
                                        <td className="date-text">Oct 21, 2023</td>
                                        <td>
                                            <div className="actions-cell">
                                                <button className="btn-icon-action action-view" onClick={() => handleAction('View', '#AC-2023-15')}><FaEye /></button>
                                                <button className="btn-icon-action action-approve" onClick={() => handleAction('Approve', '#AC-2023-15')}><FaCheck /></button>
                                                <button className="btn-icon-action action-reject" onClick={() => handleAction('Reject', '#AC-2023-15')}><FaTimes /></button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Footer */}
                        <div className="ca-footer">
                            <span className="showing-text">Showing <strong>1</strong> to <strong>4</strong> of <strong>12</strong> results</span>

                            <div className="ca-pagination">
                                <button className="page-nav-btn" onClick={() => alert("Previous page")}>&lt; Previous</button>
                                <button className="page-num active" onClick={() => alert("Page 1")}>1</button>
                                <button className="page-num" onClick={() => alert("Page 2")}>2</button>
                                <button className="page-num" onClick={() => alert("Page 3")}>3</button>
                                <button className="page-nav-btn" onClick={() => alert("Next page")}>Next &gt;</button>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
};

export default ContentApprovalQueue;
