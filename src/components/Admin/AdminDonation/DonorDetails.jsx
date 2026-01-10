import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaEdit, FaPlus, FaDollarSign, FaCalendarAlt, FaChartLine, FaFilter, FaCloudDownloadAlt, FaEye, FaArrowRight, FaBan, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './DonorDetails.css';

const DonorDetails = () => {
    const { id } = useParams();

    // Mock Data (Sarah Jenkins from image)
    const donor = {
        name: 'Sarah Jenkins',
        id: '#839201',
        memberSince: 'Jan 2021',
        status: 'Active',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        email: 'sarah.j@example.com',
        phone: '(555) 123-4567',
        addressLines: ['123 Maple Ave', 'Springfield, IL 62704'],
        prefs: ['Email', 'SMS'],
        stats: {
            total: '₹4,250.00',
            totalTrend: '+12%',
            lastDate: 'Oct 24, 2023',
            lastMeta: '2 months ago',
            avg: '₹150.00'
        }
    };

    const donations = [
        { id: '#D-83920', date: 'Oct 24, 2023', purpose: 'Annual Fund', type: 'Recurring • CC ****4242', amount: '₹500.00', status: 'Success' },
        { id: '#D-83411', date: 'Sep 15, 2023', purpose: 'Disaster Relief', type: 'One-time • PayPal', amount: '₹250.00', status: 'Success' },
        { id: '#D-82109', date: 'Aug 01, 2023', purpose: 'Gala Ticket', type: 'Event • CC ****4242', amount: '₹1,000.00', status: 'Success' },
        { id: '#D-81992', date: 'Jul 20, 2023', purpose: 'Annual Fund', type: 'Recurring • CC ****4242', amount: '₹500.00', status: 'Failed' },
        { id: '#D-78801', date: 'May 12, 2023', purpose: 'Spring Campaign', type: 'One-time • ACH', amount: '₹2,000.00', status: 'Success' },
    ];

    return (
        <div className="donor-details-page">
            {/* Breadcrumbs */}
            <div className="dd-breadcrumbs">
                <Link to="/admin/donors">Donors</Link> &gt; <span className="current">{donor.name}</span>
            </div>

            {/* Profile Header */}
            <header className="dd-header-card">
                <div className="dd-profile-info">
                    <img src={donor.avatar} alt={donor.name} className="dd-avatar-lg" />
                    <div>
                        <div className="dd-name-row">
                            <h1>{donor.name}</h1>
                        </div>
                        <div className="dd-meta-row">
                            <span><i className="icon-id"></i> Donor ID: {donor.id}</span>
                            <span className="dot">•</span>
                            <span><FaCalendarAlt /> Member since {donor.memberSince}</span>
                            <span className="dot">•</span>
                            <span className="dd-status-badge active">{donor.status}</span>
                        </div>
                    </div>
                </div>
                <div className="dd-header-actions">
                    <button className="btn-outline"><FaEdit /> Edit Profile</button>
                    {/* New Donation button removed */}
                </div>
            </header>

            {/* Stats Row */}
            <section className="dd-stats-row">
                <div className="dd-stat-card">
                    <div className="dd-stat-icon green-bg"><FaDollarSign /></div>
                    <div className="dd-stat-content">
                        <span className="dd-stat-label">Total Donated</span>
                        <div className="dd-stat-value-row">
                            <h2>{donor.stats.total}</h2>
                            <span className="dd-trend positive">{donor.stats.totalTrend}</span>
                        </div>
                        <span className="dd-stat-sub">Lifetime contribution</span>
                    </div>
                </div>
                <div className="dd-stat-card">
                    <div className="dd-stat-icon green-bg"><FaCalendarAlt /></div>
                    <div className="dd-stat-content">
                        <span className="dd-stat-label">Last Donation</span>
                        <h2>{donor.stats.lastDate}</h2>
                        <span className="dd-stat-sub">{donor.stats.lastMeta}</span>
                    </div>
                </div>
                <div className="dd-stat-card">
                    <div className="dd-stat-icon green-bg"><FaChartLine /></div>
                    <div className="dd-stat-content">
                        <span className="dd-stat-label">Average Donation</span>
                        <h2>{donor.stats.avg}</h2>
                        <span className="dd-stat-sub">Per transaction</span>
                    </div>
                </div>
            </section>

            {/* Main Content Grid */}
            <div className="dd-content-grid">

                {/* Left Sidebar */}
                <aside className="dd-sidebar">
                    {/* Contact Details */}
                    <div className="dd-card contact-card">
                        <h3>Contact Details</h3>

                        <div className="contact-item">
                            <label>Email Address</label>
                            <a href={`mailto:${donor.email}`}>{donor.email}</a>
                        </div>

                        <div className="contact-item">
                            <label>Phone Number</label>
                            <p>{donor.phone}</p>
                        </div>

                        <div className="contact-item">
                            <label>Mailing Address</label>
                            <p>
                                {donor.addressLines[0]}<br />
                                {donor.addressLines[1]}
                            </p>
                        </div>

                        <div className="contact-item">
                            <label>Communication Prefs</label>
                            <div className="pref-tags">
                                {donor.prefs.map(p => <span key={p} className="tag">{p}</span>)}
                            </div>
                        </div>
                    </div>

                    {/* Admin Actions */}
                    <div className="dd-card danger-card">
                        <h3 className="danger-text">Admin Actions</h3>
                        <p>Disabling this account will prevent future logins and recurring donations.</p>
                        <button className="btn-danger-outline"><FaBan /> Disable Account</button>
                    </div>
                </aside>

                {/* Right Content - History */}
                <main className="dd-main-content">
                    <div className="dd-card history-card">
                        <div className="card-header">
                            <h3>Donation History</h3>
                            <div className="card-actions">
                                <button className="btn-text"><FaFilter /> Filter</button>
                                <button className="btn-text"><FaCloudDownloadAlt /> Export CSV</button>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="dd-table">
                                <thead>
                                    <tr>
                                        <th>ID & Date</th>
                                        <th>Purpose</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Receipt</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {donations.map((d, i) => (
                                        <tr key={i}>
                                            <td data-label="ID & Date">
                                                <div className="cell-id-date">
                                                    <span className="fw-bold">{d.id}</span>
                                                    <span className="text-muted">{d.date}</span>
                                                </div>
                                            </td>
                                            <td data-label="Purpose">
                                                <div className="cell-purpose">
                                                    <span className="fw-bold">{d.purpose}</span>
                                                    <span className="text-muted small">{d.type}</span>
                                                </div>
                                            </td>
                                            <td data-label="Amount"><span className="fw-bold">{d.amount}</span></td>
                                            <td data-label="Status">
                                                <span className={`dd-badge ${d.status.toLowerCase()}`}>
                                                    {d.status === 'Success' ? <FaCheckCircle /> : <FaTimesCircle />} {d.status}
                                                </span>
                                            </td>
                                            <td data-label="Receipt">
                                                {d.status === 'Success' ? (
                                                    <div className="receipt-actions">
                                                        <button className="btn-icon" onClick={() => window.location.href = '/admin/donations'}><FaEye /></button>
                                                        <button className="btn-icon"><FaCloudDownloadAlt /></button>
                                                    </div>
                                                ) : <span className="text-muted small">N/A</span>}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="dd-pagination">
                            <span>Showing 1-5 of 24 donations</span>
                            <div className="dd-pg-controls">
                                <button className="btn-text" disabled>Previous</button>
                                <button className="btn-text">Next</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DonorDetails;
