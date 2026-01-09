import React from 'react';
import {
    FaSearch,
    FaChevronDown,
    FaCalendarAlt,
    FaEye,
    FaHistory,
    FaDownload,
    FaShieldAlt,
    FaUserGraduate,
    FaBook,
    FaFileInvoiceDollar,
    FaCalendarCheck,
    FaInfoCircle,
    FaExchangeAlt,
    FaClock,
    FaLock
} from 'react-icons/fa';
import AdminMobileNav from '../AdminDonation/AdminMobileNav';
import './ArchiveRepository.css';

const ArchiveRepository = () => {
    // Mock Data based on image
    const archiveList = [
        {
            id: 1,
            title: 'Annual Fee Structure 2021',
            icon: <FaShieldAlt />,
            module: 'Finance',
            moduleClass: 'pill-finance',
            date: '12 Jan 2023',
            reason: 'Deprecated Policy',
            reasonIcon: <FaInfoCircle />
        },
        {
            id: 2,
            title: 'Student: Ahmed Ali',
            icon: <FaUserGraduate />,
            module: 'Admissions',
            moduleClass: 'pill-admissions',
            date: '05 Feb 2023',
            reason: 'Transferred',
            reasonIcon: <FaExchangeAlt />
        },
        {
            id: 3,
            title: 'Curriculum Update v1.2',
            icon: <FaBook />,
            module: 'Academics',
            moduleClass: 'pill-academics',
            date: '10 Mar 2023',
            reason: 'Version Control',
            reasonIcon: <FaHistory />
        },
        {
            id: 4,
            title: 'Q4 2022 Expenses',
            icon: <FaFileInvoiceDollar />,
            module: 'Finance',
            moduleClass: 'pill-finance',
            date: '01 Apr 2023',
            reason: 'Period Closed',
            reasonIcon: <FaLock />
        },
        {
            id: 5,
            title: 'Summer Camp 2022',
            icon: <FaCalendarCheck />,
            module: 'Events',
            moduleClass: 'pill-events',
            date: '15 Aug 2022',
            reason: 'Expired',
            reasonIcon: <FaClock />
        }
    ];

    return (
        <div className="archive-repository-container">
            <AdminMobileNav />
            {/* Header */}
            <div className="ar-header-section">
                <div className="ar-page-title">
                    <span className="ar-breadcrumb">Dashboard / Content / <strong>Archive</strong></span>
                    <h1>Archive Repository</h1>
                    <p>View and manage content that has been removed from active portals. <span className="read-only-text">Read-only</span> items are stored here for compliance and historical reference.</p>
                </div>
                <button className="btn-export-log" onClick={() => alert('Exporting log...')}>
                    <FaDownload /> Export Log
                </button>
            </div>

            {/* Filters */}
            <div className="ar-filters-bar">
                <div className="ar-search-wrapper">
                    <FaSearch className="ar-search-icon" />
                    <input type="text" className="ar-search-input" placeholder="" />
                </div>

                <div className="ar-dropdown-filter">
                    All modules <FaChevronDown size={10} color="#64A926" />
                </div>

                <div className="ar-date-filter">
                    Last 30 days <FaCalendarAlt color="#64A926" />
                </div>
            </div>

            {/* Table */}
            <div className="ar-table-container">
                <table className="ar-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Module</th>
                            <th>Archived Date</th>
                            <th>Reason</th>
                            <th style={{ textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {archiveList.map((item) => (
                            <tr key={item.id}>
                                <td className="title-cell">
                                    <div className="archive-item-wrapper">
                                        <div className="archive-icon-box">
                                            {item.icon}
                                        </div>
                                        <div className="archive-title">
                                            <h4>{item.title}</h4>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className={`module-pill ${item.moduleClass}`}>{item.module}</span>
                                </td>
                                <td>
                                    <span className="date-text">{item.date}</span>
                                </td>
                                <td>
                                    <div className="reason-cell">
                                        {item.reasonIcon} {item.reason}
                                    </div>
                                </td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="btn-icon-action action-view"><FaEye /></button>
                                        <button className="btn-icon-action action-history"><FaHistory /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="ar-pagination">
                    <span className="showing-result">Showing <strong>1</strong> to <strong>5</strong> of <strong>124</strong> results</span>
                    <div className="pagination-controls">
                        <button className="pg-nav">&lt;</button>
                        <button className="pg-num active">1</button>
                        <button className="pg-num">2</button>
                        <button className="pg-num">3</button>
                        <button className="pg-num">...</button>
                        <button className="pg-num">12</button>
                        <button className="pg-nav">&gt;</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArchiveRepository;
