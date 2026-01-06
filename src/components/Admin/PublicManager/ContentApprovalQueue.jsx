import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    FaTimes
} from 'react-icons/fa';
import AdminMobileNav from '../AdminDonation/AdminMobileNav';
import './ContentApprovalQueue.css';

const ContentApprovalQueue = () => {
    const [activeTab, setActiveTab] = useState('Needs Approval');

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

            {/* Warning Banner */}
            <div className="public-visibility-banner">
                <FaEyeSlash className="warning-icon" />
                <div className="banner-content">
                    <h4>Public Visibility Restriction</h4>
                    <p>Items listed in the queue below are currently <strong>hidden</strong> from public portals. They will only become visible after you approve them.</p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="ca-stats-grid">
                <div className="ca-stat-card">
                    <span className="ca-stat-label label-pending">Pending Review</span>
                    <span className="ca-stat-value">12</span>
                </div>
                <div className="ca-stat-card">
                    <span className="ca-stat-label label-drafts">Drafts</span>
                    <span className="ca-stat-value">5</span>
                </div>
                <div className="ca-stat-card">
                    <span className="ca-stat-label label-published">Published Today</span>
                    <span className="ca-stat-value">8</span>
                </div>
                <div className="ca-stat-card">
                    <span className="ca-stat-label label-rejected">Rejected</span>
                    <span className="ca-stat-value">2</span>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="ca-content-area">

                {/* Tabs */}
                <div className="ca-tabs-header">
                    <div className="ca-tabs">
                        {['Needs Approval (12)', 'Drafts (5)', 'Recently Approved', 'Rejected'].map(tab => (
                            <button
                                key={tab}
                                className={`ca-tab ${activeTab === tab.split(' ')[0] ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.split(' ')[0])}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="ca-filter-bar">
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
                        <span className="showing-count">Showing 1-12 of 12</span>
                    </div>
                </div>

                {/* Table */}
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

            </div>
        </div>
    );
};

export default ContentApprovalQueue;
