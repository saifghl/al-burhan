import React from 'react';
import { FaCloudUploadAlt, FaCloudDownloadAlt, FaSearch, FaEye, FaSort } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './DonationRecords.css';

const DonationRecords = () => {
    const navigate = useNavigate();

    // Mock Data based on the image
    const donations = [
        { id: '#DN-8492', donor: 'Sarah Jenkins', avatar: 'SJ', amount: '₹500.00', method: 'Credit Card (Stripe)', date: 'Oct 24, 2023', category: 'Education Fund', status: 'Allocated' },
        { id: '#DN-8491', donor: 'Michael Chen', avatar: 'MC', amount: '₹1,200.00', method: 'Bank Transfer', date: 'Oct 23, 2023', category: '-', status: 'Pending' },
        { id: '#DN-8490', donor: 'Alice Larson', avatar: 'AL', amount: '₹250.00', method: 'PayPal', date: 'Oct 23, 2023', category: 'Medical Relief', status: 'Allocated' },
        { id: '#DN-8489', donor: 'Robert King', avatar: 'RK', amount: '₹5,000.00', method: 'Wire Transfer', date: 'Oct 22, 2023', category: 'Infrastructure', status: 'Allocated' },
        { id: '#DN-8488', donor: 'Emily Miller', avatar: 'EM', amount: '₹100.00', method: 'Credit Card', date: 'Oct 22, 2023', category: '-', status: 'Pending' },
    ];

    const handleViewDonor = () => {
        // Using window.location to match DonorManagement pattern and ensure navigation
        window.location.href = '/admin/donors/1';
    };

    return (
        <div className="donation-records-page">
            {/* ... (Header, Stats, Controls remain unchanged) ... */}

            {/* HEADER and STATS skipped for brevity in replace block, assuming allowMultiple=true or careful range targeting if I was replacing whole file. 
               BUT here I will target the imports and the specific table setup.
               Actually, I will just replace the top part to add hook and the map part to add onClick.
            */}

            {/* Header */}
            <div className="dr-header">
                <div className="dr-header-text">
                    <h1>Donation Records</h1>
                    <p>Manage and track all incoming donation records and their allocation status.</p>
                </div>
                <div className="dr-header-actions">
                    <button className="btn-dr-white"><FaCloudUploadAlt /> Import</button>
                    <button className="btn-dr-green"><FaCloudDownloadAlt /> Export CSV</button>
                </div>
            </div>

            {/* Stats Row */}
            <div className="dr-stats-row">
                <div className="dr-stat-card">
                    <span className="dr-stat-label">Total Donations (YTD)</span>
                    <h2>₹1,245,890.00</h2>
                </div>
                <div className="dr-stat-card">
                    <span className="dr-stat-label">Pending Allocation</span>
                    <h2 className="text-orange">₹45,200.00</h2>
                </div>
                <div className="dr-stat-card">
                    <span className="dr-stat-label">Avg. Donation</span>
                    <h2 className="text-green">₹325.00</h2>
                </div>
            </div>

            {/* Controls Filter Row */}
            <div className="dr-controls-row">
                <div className="dr-control-group search-group">
                    <label>Search Donor or ID</label>
                    <div className="dr-search-bar">
                        <FaSearch />
                        <input type="text" placeholder="" />
                    </div>
                </div>

                <div className="dr-control-group category-group">
                    <label>Allocation Category</label>
                    <select className="dr-select">
                        <option></option>
                        <option>Education Fund</option>
                        <option>Medical Relief</option>
                        <option>Infrastructure</option>
                    </select>
                </div>

                <div className="dr-control-group date-group">
                    <label>Date Range</label>
                    <div className="dr-date-inputs">
                        <input type="text" placeholder="dd/mm/yyyy" className="dr-input" />
                        <input type="text" placeholder="dd/mm/yyyy" className="dr-input" />
                        <button className="btn-dr-apply">Apply</button>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="dr-table-container">
                <table className="dr-table">
                    <thead>
                        <tr>
                            <th>Donation ID <FaSort className="sort-icon" /></th>
                            <th>Donor Name</th>
                            <th>Amount</th>
                            <th>Payment Mode</th>
                            <th>Date <FaSort className="sort-icon" /></th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donations.map((item, index) => (
                            <tr key={index}>
                                <td data-label="Donation ID" className="fw-bold text-slate-500">{item.id}</td>
                                <td data-label="Donor Name">
                                    <div className="dr-donor-cell" onClick={handleViewDonor} style={{ cursor: 'pointer' }}>
                                        <div className="dr-avatar-sm">{item.avatar}</div>
                                        <span className="fw-bold">{item.donor}</span>
                                    </div>
                                </td>
                                <td data-label="Amount" className="fw-bold">{item.amount}</td>
                                <td data-label="Payment Mode" className="text-slate-500">{item.method}</td>
                                <td data-label="Date" className="text-slate-500">{item.date}</td>
                                <td data-label="Category" className="text-slate-500">{item.category}</td>
                                <td data-label="Status">
                                    <span className={`dr-badge ${item.status.toLowerCase()}`}>
                                        <span className="dot"></span> {item.status}
                                    </span>
                                </td>
                                <td data-label="Actions">
                                    <button className="btn-icon-eye" onClick={() => navigate('/admin/fund-allocation')}><FaEye /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="dr-pagination">
                <span className="dr-pg-info">Showing <strong>1</strong> to <strong>5</strong> of <strong>1,248</strong> results</span>
                <div className="dr-pg-numbers">
                    <span className="pg-text">Previous</span>
                    <button className="pg-btn active">1</button>
                    <button className="pg-btn">2</button>
                    <button className="pg-btn">3</button>
                    <span className="pg-dots">...</span>
                    <button className="pg-btn">12</button>
                    <span className="pg-text">Next</span>
                </div>
            </div>
        </div>
    );
};

export default DonationRecords;
