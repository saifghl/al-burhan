import React from 'react';
import {
    FaPlus,
    FaSearch,
    FaChevronDown,
    FaCalendarAlt,
    FaEye,
    FaShareAlt,
    FaEyeSlash
} from 'react-icons/fa';
import AdminMobileNav from '../AdminDonation/AdminMobileNav';
import './PublishedContent.css';

const PublishedContent = () => {
    // Mock Data
    const contentList = [
        {
            id: 'PUB-2024-089',
            title: 'Ramadan Holiday Announcement',
            module: 'Announcements',
            moduleClass: 'pill-announcement',
            portals: ['Student', 'Staff'],
            date: '12 Mar 2024'
        },
        {
            id: 'PUB-2024-082',
            title: 'Term 2 Exam Schedule',
            module: 'Academics',
            moduleClass: 'pill-academics',
            portals: ['Parent'],
            date: '10 Mar 2024'
        },
        {
            id: 'PUB-2024-075',
            title: 'New Hifz Guidelines',
            module: 'Curriculum',
            moduleClass: 'pill-curriculum',
            portals: ['Staff', 'Student'],
            date: '05 Mar 2024'
        },
        {
            id: 'PUB-2024-061',
            title: 'Annual Sports Day Photos',
            module: 'Gallery',
            moduleClass: 'pill-gallery',
            portals: ['Public'],
            date: '28 Feb 2024'
        },
        {
            id: 'PUB-2024-055',
            title: 'Updated Cafeteria Menu',
            module: 'Facilities',
            moduleClass: 'pill-facilities',
            portals: ['Student', 'Parent'],
            date: '20 Feb 2024'
        }
    ];

    return (
        <div className="published-content-container">
            <AdminMobileNav />
            {/* Header */}
            <div className="pc-header-section">
                <div className="pc-page-title">
                    <span className="pc-breadcrumb">Dashboard / Content / <strong>Published</strong></span>
                    <h1>Published Content</h1>
                    <p>Manage live content visibility, approval workflow, and lifecycle status across all portals.</p>
                </div>
                <button className="btn-add-content" onClick={() => alert('Creating new content...')}>
                    <FaPlus /> Add New Content
                </button>
            </div>

            {/* Filters */}
            <div className="pc-filters-bar">
                <div className="pc-search-wrapper">
                    <FaSearch className="pc-search-icon" />
                    <input type="text" className="pc-search-input" placeholder="" />
                </div>

                <div className="pc-dropdown-filter">
                    All modules <FaChevronDown size={10} color="#cbd5e1" />
                </div>

                <div className="pc-dropdown-filter">
                    All portals <FaChevronDown size={10} color="#cbd5e1" />
                </div>

                <div className="pc-date-filter">
                    <FaCalendarAlt color="#64A926" /> Date
                </div>
            </div>

            {/* Table */}
            <div className="pc-table-container">
                <table className="pc-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Module</th>
                            <th>Portal Visibility</th>
                            <th>Published Date</th>
                            <th style={{ textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contentList.map((item) => (
                            <tr key={item.id}>
                                <td className="title-cell">
                                    <h4>{item.title}</h4>
                                    <span className="id-text">ID: #{item.id}</span>
                                </td>
                                <td>
                                    <span className={`module-pill ${item.moduleClass}`}>{item.module}</span>
                                </td>
                                <td>
                                    <div className="portal-tags">
                                        {item.portals.map(p => (
                                            <span key={p} className="portal-tag">{p}</span>
                                        ))}
                                    </div>
                                </td>
                                <td>
                                    <div className="date-cell">
                                        <span className="dot-green"></span>
                                        {item.date}
                                    </div>
                                </td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="btn-icon-action action-view"><FaEye /></button>
                                        <button className="btn-icon-action action-share"><FaShareAlt /></button>
                                        <button className="btn-icon-action action-hide"><FaEyeSlash /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pc-pagination">
                    <span className="showing-result">Showing <strong>1</strong> to <strong>5</strong> of <strong>24</strong> results</span>
                    <div className="pagination-controls">
                        <button className="pg-text">Previous</button>
                        <button className="pg-number active">1</button>
                        <button className="pg-number">2</button>
                        <button className="pg-number">3</button>
                        <button className="pg-text" style={{ color: '#64A926' }}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublishedContent;
