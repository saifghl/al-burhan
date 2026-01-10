import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCloudDownloadAlt, FaPlus, FaArrowUp, FaArrowDown, FaUserFriends, FaHandHoldingUsd, FaExclamationTriangle, FaChartPie, FaFileInvoiceDollar, FaRegMoneyBillAlt, FaBullhorn } from 'react-icons/fa';
import './AdminDonationDashboard.css';

const AdminDonationDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="admin-donation-dashboard">
            {/* Header Section */}
            <header className="dashboard-header">
                <div className="header-title">
                    <h1>Dashboard Overview</h1>
                    <p>Overview of donations, donors, and fund allocation.</p>
                </div>
                <div className="header-actions">
                    <button className="btn-export"><FaCloudDownloadAlt /> Export Data</button>
                    {/* New Entry Button Removed */}
                </div>
            </header>

            {/* Stats Overview */}
            <section className="stats-grid">
                <div className="stat-card">
                    <div className="stat-info">
                        <h3>Total Received</h3>
                        <div className="stat-main">
                            <p className="stat-value">₹1,240,500</p>
                            <div className="stat-trend positive-pill">
                                <span className="trend-percent"><FaArrowUp /> +5.2%</span>
                                <span className="trend-label">vs last month</span>
                            </div>
                        </div>
                    </div>
                    <div className="stat-icon-bg icon-blue"></div>
                </div>
                <div className="stat-card">
                    <div className="stat-info">
                        <h3>Total Donors</h3>
                        <div className="stat-main">
                            <p className="stat-value">3,420</p>
                            <div className="stat-trend positive-pill">
                                <span className="trend-percent"><FaArrowUp /> +12.4%</span>
                                <span className="trend-label">vs last month</span>
                            </div>
                        </div>
                    </div>
                    <div className="stat-icon-bg icon-cyan"></div>
                </div>
                <div className="stat-card">
                    <div className="stat-info">
                        <h3>Funds Allocated</h3>
                        <div className="stat-main">
                            <p className="stat-value">₹980,000</p>
                            <div className="stat-trend positive-pill">
                                <span className="trend-percent"><FaArrowUp /> +8.1%</span>
                                <span className="trend-label">vs last month</span>
                            </div>
                        </div>
                    </div>
                    <div className="stat-icon-bg icon-teal"></div>
                </div>
                <div className="stat-card">
                    <div className="stat-info">
                        <h3>Unallocated Balance</h3>
                        <div className="stat-main">
                            <p className="stat-value">₹260,500</p>
                            <div className="stat-trend negative-pill">
                                <span className="trend-percent"><FaArrowDown /> -2.5%</span>
                                <span className="trend-label">vs last month</span>
                            </div>
                        </div>
                    </div>
                    <div className="stat-icon-bg icon-red"><FaExclamationTriangle /></div>
                </div>
            </section>

            {/* Main Content Grid (Charts) */}
            <section className="charts-grid">
                {/* Fund Allocation Donut Chart */}
                <div className="chart-card allocation-card">
                    <div className="chart-header">
                        <h3>Fund Allocation</h3>
                        <span className="badge-year">This Year</span>
                    </div>
                    <p className="chart-subtitle">Distribution across initiatives</p>

                    <div className="donut-chart-container">
                        <div className="donut-chart">
                            <div className="donut-center">
                                <h3>₹980k</h3>
                                <p>Allocated</p>
                            </div>
                        </div>
                        <div className="chart-legend">
                            <div className="legend-item">
                                <span className="dot infrastructure"></span>
                                <span>Infrastructure</span>
                                <span className="percent">40%</span>
                            </div>
                            <div className="legend-item">
                                <span className="dot student-aid"></span>
                                <span>Student Aid</span>
                                <span className="percent">30%</span>
                            </div>
                            <div className="legend-item">
                                <span className="dot food-programs"></span>
                                <span>Food Programs</span>
                                <span className="percent">20%</span>
                            </div>
                            <div className="legend-item">
                                <span className="dot books"></span>
                                <span>Books & Supplies</span>
                                <span className="percent">10%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Donation Trend Line Chart */}
                <div className="chart-card trend-card">
                    <div className="chart-header">
                        <h3>Donation Trend</h3>
                        <div className="chart-toggles">
                            <span className="toggle-option">Weekly</span>
                            <span className="toggle-option active">Monthly</span>
                        </div>
                    </div>
                    <p className="chart-subtitle">Monthly incoming volume</p>

                    <div className="line-chart-container">
                        {/* Placeholder for SVG Line Chart */}
                        <svg viewBox="0 0 500 200" className="line-chart-svg">
                            <defs>
                                <linearGradient id="gradientGreen" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#8cc63f" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#8cc63f" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path fill="url(#gradientGreen)" stroke="none" d="M0,150 L50,140 L100,160 L180,100 L250,120 L330,75 L400,90 L500,20 L500,200 L0,200 Z" />
                            <polyline fill="none" stroke="#8cc63f" strokeWidth="4" points="0,150 50,140 100,160 180,100 250,120 330,75 400,90 500,20" />
                            <circle cx="0" cy="150" r="4" fill="#fff" stroke="#8cc63f" strokeWidth="3" />
                            <circle cx="50" cy="140" r="4" fill="#fff" stroke="#8cc63f" strokeWidth="3" />
                            <circle cx="100" cy="160" r="4" fill="#fff" stroke="#8cc63f" strokeWidth="3" />
                            <circle cx="180" cy="100" r="4" fill="#fff" stroke="#8cc63f" strokeWidth="3" />
                            <circle cx="250" cy="120" r="4" fill="#fff" stroke="#8cc63f" strokeWidth="3" />
                            <circle cx="330" cy="75" r="4" fill="#fff" stroke="#8cc63f" strokeWidth="3" />
                            <circle cx="400" cy="90" r="4" fill="#fff" stroke="#8cc63f" strokeWidth="3" />
                            <circle cx="500" cy="20" r="4" fill="#fff" stroke="#8cc63f" strokeWidth="3" />
                        </svg>
                        <div className="chart-labels">
                            <span>Jan</span>
                            <span>Feb</span>
                            <span>Mar</span>
                            <span>Apr</span>
                            <span>May</span>
                            <span>Jun</span>
                            <span>Jul</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="quick-actions">
                <h3>Quick Actions</h3>
                <div className="actions-grid">
                    <div
                        className="action-card"
                        onClick={() => navigate('/admin/donors')}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="action-icon action-green-light">
                            <FaUserFriends />
                        </div>
                        <h4>View Donors</h4>
                        <p>Manage donor profiles</p>
                    </div>
                    <div className="action-card" onClick={() => navigate('/admin/donation-records')} style={{ cursor: 'pointer' }}>
                        <div className="action-icon action-teal-light">
                            <FaHandHoldingUsd />
                        </div>
                        <h4>View Donations</h4>
                        <p>Review recent transactions</p>
                    </div>
                    <div
                        className="action-card"
                        onClick={() => navigate('/admin/fund-allocation')}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="action-icon action-cyan-light">
                            <FaRegMoneyBillAlt />
                        </div>
                        <h4>Allocate Funds</h4>
                        <p>Distribute unallocated balance</p>
                    </div>
                    <div
                        className="action-card"
                        onClick={() => navigate('/admin/transparency-report')}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="action-icon action-teal-light">
                            <FaBullhorn />
                        </div>
                        <h4>Publish Report</h4>
                        <p>Update public transparency</p>
                    </div>
                </div>
            </section>

            {/* Recent Transactions */}
            <section className="recent-transactions">
                <h3>Recent Transactions</h3>
                <div className="table-responsive">
                    <table className="transactions-table">
                        <thead>
                            <tr>
                                <th>Donor</th>
                                <th>Amount</th>
                                <th>Designation</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Donor">
                                    <div className="donor-cell">
                                        <div className="avatar">SJ</div>
                                        <span>Sarah Jenkins</span>
                                    </div>
                                </td>
                                <td data-label="Amount" className="amount positive">+₹5,000.00</td>
                                <td data-label="Designation"><span className="badge designation-dark">Student Aid</span></td>
                                <td data-label="Date" className="date-cell">24 Oct, 2023</td>
                                <td data-label="Action"><button className="btn-view">View</button></td>
                            </tr>
                            <tr>
                                <td data-label="Donor">
                                    <div className="donor-cell">
                                        <div className="avatar avatar-tc">TC</div>
                                        <span>Tech Corp Inc.</span>
                                    </div>
                                </td>
                                <td data-label="Amount" className="amount positive">+₹25,000.00</td>
                                <td data-label="Designation"><span className="badge designation-dark">Infrastructure</span></td>
                                <td data-label="Date" className="date-cell">23 Oct, 2023</td>
                                <td data-label="Action"><button className="btn-view">View</button></td>
                            </tr>
                            <tr>
                                <td data-label="Donor">
                                    <div className="donor-cell">
                                        <div className="avatar">MC</div>
                                        <span>Michael Chen</span>
                                    </div>
                                </td>
                                <td data-label="Amount" className="amount positive">+₹1,200.00</td>
                                <td data-label="Designation"><span className="badge designation-dark">General</span></td>
                                <td data-label="Date" className="date-cell">23 Oct, 2023</td>
                                <td data-label="Action"><button className="btn-view">View</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default AdminDonationDashboard;
