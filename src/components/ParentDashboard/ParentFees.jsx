import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ParentFees.css';
import './ParentDashboard.css'; // Shared styles
import pProfile from '../../assets/p-profile.png';
import logoText from '../../assets/logo-text.png';
import { FaBell, FaCog, FaMoneyBillWave, FaFileInvoiceDollar, FaHandHoldingHeart, FaHistory, FaDownload, FaHome, FaChartLine, FaCalendarAlt, FaUser, FaSignOutAlt, FaQuestionCircle, FaCheckCircle, FaWallet, FaInfoCircle, FaPrint } from 'react-icons/fa';
import LogoutModal from './LogoutModal';

const ParentFees = () => {
    const navigate = useNavigate();
    const [showLogout, setShowLogout] = useState(false);

    const handleLogout = () => {
        navigate('/login');
    };
    return (
        <div className="parent-fees-page">
            {/* Header - Reused */}
            <header className="pd-header">
                <div className="pd-logo">
                    <img src={logoText} alt="Al Burhan" className="logo-img" />
                </div>
                <div className="pd-header-actions">
                    <Link to="/parent-dashboard/notifications" className="icon-btn"><FaBell /></Link>
                    <Link to="/parent-dashboard/settings" className="icon-btn"><FaCog /></Link>
                    <button className="icon-btn" onClick={() => setShowLogout(true)}><FaSignOutAlt /></button>
                    <div className="header-profile">
                        <img src={pProfile} alt="Profile" />
                    </div>
                </div>
            </header>

            <div className="pf-container">
                {/* Page Title Row */}
                <div className="pf-title-row">
                    <div>
                        <h1>Fees & Sponsorship</h1>
                        <p className="academic-year">Academic Year 2023-2024</p>
                    </div>
                    <button className="support-btn"><FaQuestionCircle /> Financial Support</button>
                </div>

                {/* Top Stats Cards */}
                <div className="pf-stats-grid">
                    <div className="pf-stat-card">
                        <div className="pf-card-top">
                            <span className="pf-label">Current Month Status</span>
                            <span className="month-badge">OCTOBER</span>
                        </div>
                        <div className="pf-main-stat">
                            <h2>Paid</h2>
                            <FaCheckCircle className="stat-icon-check" />
                        </div>
                        <p className="pf-sub">Payment received on Oct 2, 2023</p>
                    </div>

                    <div className="pf-stat-card">
                        <div className="pf-card-top">
                            <span className="pf-label">Next Due Date</span>
                            <div className="icon-circle orange"><FaCalendarAlt /></div>
                        </div>
                        <div className="pf-main-stat">
                            <h2>Nov 5, 2023</h2>
                        </div>
                        <p className="pf-sub">Invoice will be generated on Nov 1</p>
                    </div>

                    <div className="pf-stat-card">
                        <div className="pf-card-top">
                            <span className="pf-label">Monthly Net Payable</span>
                            <div className="icon-circle blue"><FaWallet /></div>
                        </div>
                        <div className="pf-main-stat">
                            <h2>$150.00</h2>
                            <span className="old-price">$200.00</span>
                        </div>
                        <p className="pf-sub green-text"><FaCheckCircle /> 25% Sponsorship Applied</p>
                    </div>
                </div>

                <div className="pf-content-grid">
                    {/* Left Column: Sponsorship & Questions */}
                    <div className="pf-left-col">
                        <div className="sponsorship-card">
                            <div className="card-header">
                                <h3>Sponsorship Details</h3>
                                <span className="status-badge active">ACTIVE</span>
                            </div>

                            <div className="sponsorship-chart-area">
                                <div className="circular-chart-green">
                                    <div className="inner-circle">
                                        <strong>25%</strong>
                                        <span>Covered</span>
                                    </div>
                                </div>
                            </div>

                            <div className="fund-row">
                                <div className="fund-info">
                                    <div className="icon-box green"><FaHandHoldingHeart /></div>
                                    <div>
                                        <h4>Zakat Fund</h4>
                                        <span>Need-based aid</span>
                                    </div>
                                </div>
                                <div className="fund-amount">-$50.00</div>
                            </div>

                            <div className="info-box">
                                <FaInfoCircle />
                                <p>This coverage is applied automatically to your monthly invoice. No action is required from your side.</p>
                            </div>
                        </div>

                        <div className="questions-card">
                            <h3>Questions about fees?</h3>
                            <p>Our administration office is here to help with any financial inquiries or payment plans.</p>
                            <button className="contact-admin-btn">Contact Admin</button>
                        </div>
                    </div>

                    {/* Right Column: Fee History */}
                    <div className="pf-right-col">
                        <div className="history-card">
                            <div className="card-header">
                                <h3>Fee History</h3>
                                <a href="#" className="view-all-link">View All</a>
                            </div>

                            <div className="history-table-container">
                                <table className="history-table">
                                    <thead>
                                        <tr>
                                            <th>Month</th>
                                            <th>Total Fee</th>
                                            <th>Sponsorship</th>
                                            <th>Net Paid</th>
                                            <th>Status</th>
                                            <th>Receipt</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="month-cell">
                                                    <strong>October 2023</strong>
                                                    <span>Tuition Fee</span>
                                                </div>
                                            </td>
                                            <td>$200.00</td>
                                            <td className="green-text">-$50.00</td>
                                            <td><strong>$150.00</strong></td>
                                            <td><span className="status-pill paid">• PAID</span></td>
                                            <td><button className="icon-only-btn"><FaDownload /></button></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="month-cell">
                                                    <strong>September 2023</strong>
                                                    <span>Tuition Fee</span>
                                                </div>
                                            </td>
                                            <td>$200.00</td>
                                            <td className="green-text">-$50.00</td>
                                            <td><strong>$150.00</strong></td>
                                            <td><span className="status-pill paid">• PAID</span></td>
                                            <td><button className="icon-only-btn"><FaDownload /></button></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="month-cell">
                                                    <strong>August 2023</strong>
                                                    <span>Tuition Fee</span>
                                                </div>
                                            </td>
                                            <td>$200.00</td>
                                            <td className="green-text">-$50.00</td>
                                            <td><strong>$150.00</strong></td>
                                            <td><span className="status-pill paid">• PAID</span></td>
                                            <td><button className="icon-only-btn"><FaDownload /></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="table-footer">
                                <span>Showing last 3 months</span>
                                <div className="pagination">
                                    <button className="page-btn">‹</button>
                                    <button className="page-btn">›</button>
                                </div>
                            </div>
                        </div>

                        <div className="receipt-action-card">
                            <div className="receipt-info">
                                <h3>October 2023 Tuition Receipt</h3>
                                <p>Transaction ID: #AB-2023-10-892</p>
                            </div>
                            <div className="receipt-btns">
                                <button className="action-btn primary"><FaDownload /> Download PDF</button>
                                <button className="action-btn secondary"><FaPrint /> Print</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Nav */}
            <div className="pd-bottom-nav">
                <Link to="/parent-dashboard" className="nav-item">
                    <FaHome />
                    <span>Home</span>
                </Link>
                <Link to="/parent-dashboard/progress" className="nav-item">
                    <FaChartLine />
                    <span>Progress</span>
                </Link>
                <Link to="/parent-dashboard/attendance" className="nav-item">
                    <FaCalendarAlt />
                    <span>Attend</span>
                </Link>
                <Link to="/parent-dashboard/fees" className="nav-item active">
                    <FaMoneyBillWave />
                    <span>Fees</span>
                </Link>
                <Link to="/parent-dashboard/profile" className="nav-item">
                    <FaUser />
                    <span>Profile</span>
                </Link>
            </div>
            {showLogout && <LogoutModal onClose={() => setShowLogout(false)} onLogout={handleLogout} />}
        </div>
    );
};

export default ParentFees;
