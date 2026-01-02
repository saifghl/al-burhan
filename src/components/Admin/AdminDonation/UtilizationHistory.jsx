import React from 'react';
import {
    FaSearch,
    FaPlus,
    FaFileCsv,
    FaCalendarAlt,
    FaEye,
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa';
import AdminMobileNav from './AdminMobileNav';
import './UtilizationHistory.css';

const UtilizationHistory = () => {
    // Mock Data based on image
    const utilizationData = [
        { id: '#AL-9382', category: 'Medical', amount: '$5,200.00', description: 'Bulk purchase of antibiotics and first aid kits...', date: 'Oct 24, 2023' },
        { id: '#AL-9383', category: 'Logistics', amount: '$1,250.00', description: 'Truck rental for delivery of food supplies...', date: 'Oct 23, 2023' },
        { id: '#AL-9345', category: 'Food', amount: '$3,400.00', description: 'Procurement of rice and grain sacks', date: 'Oct 21, 2023' },
        { id: '#AL-9211', category: 'Shelter', amount: '$8,900.00', description: 'Emergency tents setup for camp 4', date: 'Oct 20, 2023' },
        { id: '#AL-9102', category: 'Medical', amount: '$750.00', description: 'Vaccine refrigeration unit maintenance', date: 'Oct 18, 2023' },
    ];

    const getBadgeClass = (category) => {
        switch (category) {
            case 'Medical': return 'badge-medical';
            case 'Logistics': return 'badge-logistics';
            case 'Food': return 'badge-food';
            case 'Shelter': return 'badge-shelter';
            default: return '';
        }
    };

    return (
        <div className="utilization-history-container">
            <AdminMobileNav />
            {/* Header Section */}
            <div className="history-header">
                <div className="history-breadcrumb">
                    Dashboard / Financials / <span>History</span>
                </div>
                <div className="history-title-row">
                    <div>
                        <h1 className="history-page-title">Utilization History</h1>
                        <p className="history-subtitle">Track and verify the usage of allocated donation funds</p>
                    </div>
                    <div className="history-actions">
                        <button className="btn-csv" onClick={() => alert('Exporting data to CSV...')}>
                            <FaFileCsv /> Export CSV
                        </button>
                        <button className="btn-add-record" onClick={() => alert('Opening Add Record Modal...')}>
                            <FaPlus /> Add New Record
                        </button>
                    </div>
                </div>
            </div>

            {/* Filters Section */}
            <div className="filters-bar">
                <div className="search-wrapper">
                    <FaSearch className="search-icon-inside" />
                    <input
                        type="text"
                        className="filter-search-input"
                        placeholder="Search..."
                        onKeyPress={(e) => e.key === 'Enter' && alert(`Searching history for: ${e.target.value}`)}
                    />
                </div>

                <div className="filter-group">
                    <label className="filter-label">Allocation Category</label>
                    <select className="filter-select" onChange={(e) => alert(`Filtering by category: ${e.target.value}`)}>
                        <option>All Categories</option>
                        <option>Medical</option>
                        <option>Food</option>
                        <option>Logistics</option>
                    </select>
                </div>

                <div className="filter-group">
                    {/* Image shows 'Allocation Category' again but icon is Calendar, so likely Date Range */}
                    <label className="filter-label">Date Range</label>
                    <div className="filter-date-wrapper">
                        <input type="date" className="filter-select" placeholder="Select dates" onChange={(e) => alert(`Filtering by date: ${e.target.value}`)} />
                    </div>
                </div>

                <button className="clear-filters-btn" onClick={() => {
                    document.querySelectorAll('input').forEach(input => input.value = '');
                    document.querySelectorAll('select').forEach(select => select.selectedIndex = 0);
                    alert('Filters cleared');
                }}>Clear Filters</button>
            </div>

            {/* Table Section */}
            <div className="table-container">
                <table className="utilization-table">
                    <thead>
                        <tr>
                            <th>Allocation ID</th>
                            <th>Category</th>
                            <th>Amount Used</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Proof</th>
                        </tr>
                    </thead>
                    <tbody>
                        {utilizationData.map((row, index) => (
                            <tr key={index}>
                                <td className="id-cell">{row.id}</td>
                                <td>
                                    <span className={`category-badge ${getBadgeClass(row.category)}`}>
                                        {row.category}
                                    </span>
                                </td>
                                <td className="amount-cell">{row.amount}</td>
                                <td>{row.description}</td>
                                <td className="date-cell">{row.date}</td>
                                <td>
                                    <button className="proof-btn" onClick={() => alert(`Viewing proof for transaction ${row.id}`)}>
                                        <FaEye />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="pagination-footer">
                    <div className="rows-per-page">
                        <span>Rows per page:</span>
                        <select style={{ border: 'none', color: '#334155', fontWeight: '500' }} onChange={(e) => alert(`Rows per page set to: ${e.target.value}`)}>
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                        </select>
                    </div>
                    <div className="page-nav">
                        <span>1-5 of 128</span>
                        <button className="nav-arrow" onClick={() => alert('Previous Page')}><FaChevronLeft /></button>
                        <button className="nav-arrow" onClick={() => alert('Next Page')}><FaChevronRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UtilizationHistory;
