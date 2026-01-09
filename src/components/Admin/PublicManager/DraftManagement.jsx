import React, { useState } from 'react';
import {
    FaPlus,
    FaEyeSlash,
    FaTimes,
    FaSearch,
    FaChevronDown,
    FaFilter,
    FaSortAmountDown,
    FaPen,
    FaFileAlt,
    FaCalendarAlt,
    FaBookOpen
} from 'react-icons/fa';
import AdminMobileNav from '../AdminDonation/AdminMobileNav';
import './DraftManagement.css';

const DraftManagement = () => {
    const [bannerVisible, setBannerVisible] = useState(true);

    // Mock Data
    const drafts = [
        {
            id: 1,
            title: 'Eid al-Fitr Holiday Announcement',
            type: 'Announcement',
            author: 'Admin User',
            lastEdited: '2 hours ago',
            icon: <FaPen />,
            iconClass: 'icon-blue',
            tagClass: 'tag-announcement'
        },
        {
            id: 2,
            title: 'Mathematics Homework - Week 4',
            type: 'Assignments',
            author: 'Sarah Khan',
            lastEdited: 'Yesterday',
            icon: <FaFileAlt />,
            iconClass: 'icon-orange',
            tagClass: 'tag-assignment'
        },
        {
            id: 3,
            title: 'Parent-Teacher Meeting Schedule',
            type: 'Events',
            author: 'Bilal Ahmed',
            lastEdited: '3 days ago',
            icon: <FaCalendarAlt />,
            iconClass: 'icon-green',
            tagClass: 'tag-event'
        },
        {
            id: 4,
            title: 'Quran Syllabus Update 2024',
            type: 'Curriculum',
            author: 'Ahmed Raza',
            lastEdited: 'Oct 24, 2023',
            icon: <FaBookOpen />,
            iconClass: 'icon-pink',
            tagClass: 'tag-curriculum'
        }
    ];

    return (
        <div className="draft-management-container">
            <AdminMobileNav />
            {/* Header */}
            <div className="dm-header-section">
                <div className="dm-page-title">
                    <span className="dm-breadcrumb">Dashboard / Content / <strong>Drafts</strong></span>
                    <h1>Draft Management</h1>
                    <p>Manage and edit incomplete content before publishing.</p>
                </div>
                <button className="btn-create-draft" onClick={() => alert('Creating new draft...')}>
                    <FaPlus /> Create New Draft
                </button>
            </div>

            {/* Warning Banner */}
            {bannerVisible && (
                <div className="dm-warning-banner">
                    <FaEyeSlash className="warning-icon" />
                    <div className="banner-content">
                        <h4>Draft content is hidden</h4>
                        <p>Items listed here are not visible on any public portals until submitted and approved by an administrator.</p>
                    </div>
                    <button className="close-banner-btn" onClick={() => setBannerVisible(false)}>
                        <FaTimes />
                    </button>
                </div>
            )}

            {/* Content Area */}
            <div className="dm-content-area">
                {/* Filters */}
                <div className="dm-filters-bar">
                    <div className="dm-search-wrapper">
                        <FaSearch className="dm-search-icon" />
                        <input type="text" className="dm-search-input" placeholder="Search drafts..." />
                    </div>

                    <div className="dm-dropdown-filter">
                        All modules <FaChevronDown size={10} />
                    </div>

                    <div className="dm-filter-actions">
                        <button className="btn-filter-text"><FaFilter /> Filter</button>
                        <button className="btn-sort-text"><FaSortAmountDown /> Sort</button>
                    </div>
                </div>

                {/* Table */}
                <div className="dm-table-container">
                    <table className="dm-table">
                        <thead>
                            <tr>
                                <th style={{ width: '40px' }}><input type="checkbox" /></th>
                                <th>Title</th>
                                <th>Module</th>
                                <th>Created By</th>
                                <th>Last Edited</th>
                                <th style={{ textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {drafts.map((draft) => (
                                <tr key={draft.id}>
                                    <td><input type="checkbox" /></td>
                                    <td>
                                        <div className="draft-item-wrapper">
                                            <div className={`draft-icon-circle ${draft.iconClass}`}>
                                                {draft.icon}
                                            </div>
                                            <div className="draft-info">
                                                <h4>{draft.title}</h4>
                                                <span className="draft-status"><span className="status-dot"></span> Draft</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`module-tag ${draft.tagClass}`}>{draft.type}</span>
                                    </td>
                                    <td>
                                        <div className="user-info">
                                            <div className="user-avatar"></div>
                                            <span>{draft.author}</span>
                                        </div>
                                    </td>
                                    <td className="time-ago">{draft.lastEdited}</td>
                                    <td style={{ textAlign: 'right' }}>
                                        {/* Actions could be edits, deletes etc. Left blank for now per image but can contain ellipses */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="dm-pagination">
                        <span className="showing-text">Showing <strong>1</strong> to <strong>4</strong> of <strong>12</strong> results</span>
                        <div className="pg-links">
                            <button className="pg-link">Previous</button>
                            <button className="pg-num active">1</button>
                            <button className="pg-num">2</button>
                            <button className="pg-num">3</button>
                            <button className="pg-link">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DraftManagement;
