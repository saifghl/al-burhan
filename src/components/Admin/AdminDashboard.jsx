import React from 'react';
import {
    FaUserPlus,
    FaCheckCircle,
    FaUpload,
    FaPencilAlt,
    FaDollarSign,
    FaUserGraduate,
    FaChalkboardTeacher,
    FaUserFriends,
    FaHandHoldingHeart,
    FaCalendarCheck,
    FaChalkboard,
    FaChartBar,
    FaGlobeAmericas
} from 'react-icons/fa';
import './Admin.css';

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <div className="dashboard-header">
                <div className="header-title">
                    <h1>System Overview</h1>
                    <p>Real-time insights into your school's digital ecosystem.</p>
                </div>
                <div className="system-status">
                    <span className="status-dot"></span>
                    <span>System Online | Last updated: Just now</span>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="section-title">Quick Actions</div>
            <div className="quick-actions-grid">
                <button className="action-btn primary btn-create-user"><FaUserPlus /> Create User</button>
                <button className="action-btn btn-approve"><FaCheckCircle /> Approve Admission</button>
                <button className="action-btn btn-publish"><FaUpload /> Publish Result</button>
                <button className="action-btn btn-update"><FaPencilAlt /> Update Page</button>
                <button className="action-btn btn-allocate"><FaDollarSign /> Allocate Donation</button>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-trend">+5%</div>
                    <div className="stat-icon-wrapper" style={{ backgroundColor: '#eff6ff', color: '#3b82f6' }}>
                        <FaUserGraduate />
                    </div>
                    <div>
                        <div className="stat-label">Total Students</div>
                        <div className="stat-value">1,240</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-trend" style={{ backgroundColor: '#f3f4f6', color: '#9ca3af' }}>0%</div>
                    <div className="stat-icon-wrapper" style={{ backgroundColor: '#fdf2f8', color: '#ec4899' }}>
                        <FaChalkboardTeacher />
                    </div>
                    <div>
                        <div className="stat-label">Total Teachers</div>
                        <div className="stat-value">85</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-trend">+2%</div>
                    <div className="stat-icon-wrapper" style={{ backgroundColor: '#fff7ed', color: '#f97316' }}>
                        <FaUserFriends />
                    </div>
                    <div>
                        <div className="stat-label">Total Parents</div>
                        <div className="stat-value">900</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-trend">+12%</div>
                    <div className="stat-icon-wrapper" style={{ backgroundColor: '#fef2f2', color: '#ef4444' }}>
                        <FaHandHoldingHeart />
                    </div>
                    <div>
                        <div className="stat-label">Total Donors</div>
                        <div className="stat-value">45</div>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid">
                {/* Left Column: Academics and Requests */}
                <div className="grid-left-col">
                    {/* Academics */}
                    <div className="card-header">
                        <h3>Academics</h3>
                        <a href="/admin/academics" className="card-action">View All</a>
                    </div>
                    <div className="academics-row" style={{ marginBottom: '35px' }}>
                        <div className="academic-box">
                            <div className="box-title" style={{ color: '#059669', background: '#d1fae5', width: 'fit-content', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: '600' }}>
                                event_available
                            </div>
                            <span className="small-stat-text">Attendance Today</span>
                            <span className="big-stat">98% <span style={{ fontSize: '14px', color: '#059669' }}>+2%</span></span>
                            <div style={{ height: '4px', background: '#e5e7eb', marginTop: '8px', borderRadius: '2px' }}>
                                <div style={{ width: '98%', height: '100%', background: '#059669', borderRadius: '2px' }}></div>
                            </div>
                        </div>

                        <div className="academic-box">
                            <div className="box-title" style={{ color: '#3b82f6', background: '#dbeafe', width: 'fit-content', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: '600' }}>
                                class
                            </div>
                            <span className="small-stat-text">Classes Running</span>
                            <span className="big-stat">12 <span style={{ fontSize: '14px', fontWeight: '400', color: '#6b7280' }}>Active</span></span>
                            <span className="small-stat-text" style={{ fontSize: '11px', color: '#059669' }}>● All systems normal</span>
                        </div>
                        <div className="academic-box">
                            <div className="box-title" style={{ color: '#a855f7', background: '#f3e8ff', width: 'fit-content', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: '600' }}>
                                assignment_turned_in
                            </div>
                            <span className="small-stat-text">Results This Month</span>
                            <span className="big-stat">5 <span style={{ fontSize: '14px', fontWeight: '400', color: '#059669' }}>Published</span></span>
                            <div style={{ display: 'flex', gap: '2px', marginTop: '5px' }}>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#d1d5db' }}></div>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#d1d5db' }}></div>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#d1d5db' }}></div>
                                <span style={{ fontSize: '10px', color: '#6b7280', marginLeft: '4px' }}>+2</span>
                            </div>
                        </div>
                    </div>

                    {/* Requests */}
                    <div className="content-card">
                        <div className="card-header">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <h3>Requests</h3>
                                <span style={{ background: '#ef4444', color: 'white', fontSize: '11px', padding: '2px 6px', borderRadius: '10px', fontWeight: 'bold' }}>5 New</span>
                            </div>
                        </div>
                        <div className="requests-list">
                            <div className="request-item">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="req-avatar" style={{ background: '#dbeafe', color: '#3b82f6' }}>JD</div>
                                    <div className="req-info">
                                        <h4>John Doe</h4>
                                        <p>New Admission Request • Grade 5</p>
                                    </div>
                                </div>
                                <span className="req-action">View</span>
                            </div>
                            <div className="request-item">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="req-avatar" style={{ background: '#ffedd5', color: '#f97316' }}>SM</div>
                                    <div className="req-info">
                                        <h4>Sarah Miller</h4>
                                        <p>New Contact Message • General Inquiry</p>
                                    </div>
                                </div>
                                <span className="req-action">Reply</span>
                            </div>
                            <div className="request-item">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="req-avatar" style={{ background: '#dbeafe', color: '#3b82f6' }}>AL</div>
                                    <div className="req-info">
                                        <h4>Alex Lee</h4>
                                        <p>New Admission Request • Kindergarten</p>
                                    </div>
                                </div>
                                <span className="req-action">View All Requests</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Public Website & Donations */}
                <div className="grid-right-col" style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                    {/* Public Website */}
                    <div className="content-card" style={{ height: 'auto' }}>
                        <div className="card-header">
                            <h3>Public Website</h3>
                            <a href="/" className="card-action">Manage</a>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ background: '#dbeafe', padding: '8px', borderRadius: '8px', color: '#3b82f6' }}><FaGlobeAmericas /></div>
                                <span style={{ fontWeight: '600', fontSize: '14px', color: '#1f2937' }}>Live Site Status</span>
                            </div>
                            <span style={{ background: '#dcfce7', color: '#166534', fontSize: '11px', padding: '2px 8px', borderRadius: '12px', fontWeight: 'bold' }}>Active</span>
                        </div>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <div style={{ flex: 1, background: '#f8fafc', padding: '10px', borderRadius: '8px' }}>
                                <span style={{ display: 'block', fontSize: '11px', color: '#6b7280' }}>Published Pages</span>
                                <span style={{ fontSize: '16px', fontWeight: '700', color: '#1f2937' }}>124</span>
                            </div>
                            <div style={{ flex: 1, background: '#fff7ed', padding: '10px', borderRadius: '8px' }}>
                                <span style={{ display: 'block', fontSize: '11px', color: '#6b7280', position: 'relative' }}>
                                    Pending Updates
                                    <span style={{ width: '6px', height: '6px', background: '#f97316', borderRadius: '50%', position: 'absolute', top: '2px', right: '-8px' }}></span>
                                </span>
                                <span style={{ fontSize: '16px', fontWeight: '700', color: '#1f2937' }}>3</span>
                            </div>
                        </div>
                    </div>

                    {/* Donations */}
                    <div className="content-card" style={{ flex: 1 }}>
                        <div className="card-header">
                            <h3>Donations & Funds</h3>
                            <div style={{ width: '30px', height: '16px', background: '#e5e7eb', borderRadius: '10px' }}></div>
                        </div>
                        <div className="donation-summary">
                            <span style={{ fontSize: '13px', color: '#6b7280' }}>Total Collected</span>
                            <span className="donation-total">₹5,00,000</span> {/* RUPEE SYMBOL */}
                            <div style={{ fontSize: '12px', color: '#059669', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>Goal: ₹8,00,000 (62%)</span>
                                <div style={{ background: '#dcfce7', padding: '6px', borderRadius: '50%', color: '#059669' }}><FaDollarSign /></div>
                            </div>

                            <span style={{ fontSize: '13px', color: '#4b5563', fontWeight: '600' }}>Fund Allocation</span>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '11px', color: '#9ca3af', marginBottom: '5px' }}>Total: ₹5,00k</div>
                            <div className="progress-bar-container">
                                <div className="progress-fill" style={{ width: '62%' }}></div>
                            </div>
                            <div className="funds-legend">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#64A926' }}></div>
                                    <span>Allocated (₹3,00k)</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#d1d5db' }}></div>
                                    <span>Unallocated (₹2,00k)</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '25px' }}>
                            <a href="/admin/donations" style={{ fontSize: '13px', color: '#4b5563', textDecoration: 'none', fontWeight: '500' }}>View Detailed Financial Report</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
