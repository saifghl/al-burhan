import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DonationDetailsPage.css';
import MadarsaThumb from '../../assets/Picture27.png'; // Reusing an asset as placeholder
import logoText from '../../assets/logo-text.png';

const DonationDetailsPage = () => {
    const navigate = useNavigate();

    const Icons = {
        ArrowLeft: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>,
        Check: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>,
        Flag: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>,
        Verified: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="#4caf50" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>,
        Leaf: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="#6c9c3e" stroke="none"><path d="M2.05 13.09c.8 0 1.57.14 2.3.4l.2.07c.8.29 1.64.44 2.51.44 2.1 0 4.07-.86 5.5-2.26 1.4-1.37 2.22-3.26 2.25-5.26a.85.85 0 0 1 .53-.78C16.89 5.2 18.25 5 19.5 5c.42 0 .8.27.95.66.15.4.02.85-.32 1.11-1.34 1.03-3.08 1.6-4.88 1.6 0 0-.01 0-.01 0-2.02.04-3.95.86-5.4 2.29-1.46 1.44-3.48 2.33-5.69 2.33-.89 0-1.75-.15-2.57-.45l-.2-.07a7.06 7.06 0 0 1-1.23-.42.85.85 0 0 1-.36-1.14c.15-.31.47-.48.81-.48l1.45.66z"></path></svg>,
        MapPin: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
        Megaphone: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"></path></svg>, // Placeholder for broadcast/campaign
        Download: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>,
        Refresh: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>,
        Info: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>,
        Lock: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
        Search: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
        Bell: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
        Settings: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
    };

    return (
        <div className="donation-details-page-v2">
            {/* Top Navigation Bar */}
            <header className="top-navbar-full">
                <div className="navbar-logo-section">
                    <img src={logoText} alt="Al Burhan" className="brand-logo" style={{ height: '40px' }} />
                </div>

                <div className="navbar-search-section">
                    <div className="search-pill">
                        <Icons.Search />
                        <input type="text" placeholder="Search Donations" />
                    </div>
                </div>

                <div className="navbar-actions-section">
                    <button className="icon-btn-nav" onClick={() => navigate('/notifications')}><Icons.Bell /></button>
                    <button className="icon-btn-nav" onClick={() => navigate('/settings')}><Icons.Settings /></button>
                    <div className="user-avatar-nav" onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>
                        <img src="https://via.placeholder.com/40" alt="User" />
                    </div>
                </div>
            </header>

            <div className="details-body-content">
                <div className="details-nav-breadcrumbs">
                    <span>Home</span> &gt; <span>My Donations</span> &gt; <span className="current">Donation #DN-8293</span>
                </div>

                <div className="page-title-header-row">
                    <div className="title-section-block">
                        <div className="title-row-flex">
                            <h1>Donation #DN-8293</h1>
                            <span className="verified-badge-pill-soft"><Icons.Verified /> Verified</span>
                        </div>
                        <p className="meta-text-subtitle">October 24, 2023 at 10:42 AM • Completed</p>
                    </div>
                    <button className="report-issue-btn-outline">
                        <Icons.Flag /> Report Issue
                    </button>
                </div>

                <div className="details-layout-grid-2col">
                    {/* Left Column */}
                    <div className="details-main-left">
                        {/* Donation Details Card */}
                        <div className="white-card-panel details-info-card">
                            <h3>Donation Details</h3>
                            <div className="info-grid-2x2">
                                <div className="info-item">
                                    <label>Beneficiary</label>
                                    <div className="info-value-row">
                                        <span className="thumb-tiny">🎓</span>
                                        <span className="value-strong">Madarsa Al Burhan</span>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <label>Location</label>
                                    <div className="info-value-row">
                                        <Icons.MapPin />
                                        <span className="value-strong">Mumbai, Maharashtra</span>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <label>Donation Type</label>
                                    <div className="info-value-row">
                                        <Icons.Leaf />
                                        <span className="value-strong">Zakat</span>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <label>Campaign</label>
                                    <div className="info-value-row">
                                        <Icons.Megaphone />
                                        <span className="value-strong">Scholarship Fund 2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Utilization Status Card */}
                        <div className="white-card-panel utilization-status-card">
                            <div className="card-header-flex">
                                <h3>Utilization Status</h3>
                                <span className="status-pill-green-soft">On Track</span>
                            </div>

                            <div className="vertical-timeline-container">
                                <div className="v-timeline-item completed">
                                    <div className="v-node-circle"><Icons.Check /></div>
                                    <div className="v-content">
                                        <h4>Donation Received</h4>
                                        <span>October 24, 2023 • 10:42 AM</span>
                                    </div>
                                </div>
                                <div className="v-timeline-item completed">
                                    <div className="v-node-circle"><Icons.Check /></div>
                                    <div className="v-content">
                                        <h4>Funds Verified & Cleared</h4>
                                        <span>October 25, 2023 • 09:15 AM</span>
                                    </div>
                                </div>
                                <div className="v-timeline-item active">
                                    <div className="v-node-circle pulse">⇌</div>
                                    <div className="v-content">
                                        <h4>Allocated to Student Fees</h4>
                                        <span>November 01, 2023 • Allocation ID #AL-992</span>
                                        <div className="timeline-highlight-box">
                                            <span className="highlight-label">Impact Update:</span>
                                            <p>Your contribution has been assigned to cover textbook costs for 3 students in Grade 5.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="v-timeline-item future">
                                    <div className="v-node-dot"></div>
                                    <div className="v-content">
                                        <h4>Final Utilization Report</h4>
                                        <span>Expected: December 2023</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Live Map Card */}
                        <div className="white-card-panel map-visual-card">
                            {/* Placeholder for Live Map - using an iframe or image could work */}
                            <div className="live-map-container">
                                <iframe
                                    title="Madarsa Location"
                                    width="100%"
                                    height="250"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                                    src="https://www.openstreetmap.org/export/embed.html?bbox=72.8258%2C18.9750%2C72.8335%2C18.9800&amp;layer=mapnik&amp;marker=18.9775%2C72.8296"
                                    style={{ border: 0, borderRadius: '8px', opacity: 0.8 }}
                                ></iframe>
                                <div className="map-overlay-card">
                                    <div className="map-pin-pulse"></div>
                                    <div className="map-info-text">Madarsa Al-Burhan Campus<br />Mumbai</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <aside className="details-sidebar-right">
                        <div className="white-card-panel summary-amount-card">
                            <span className="label-text-gray">Total Donation</span>
                            <div className="large-amount-display">₹8,500.00</div>
                            <div className="secure-badge-sm"><Icons.Lock /> Secure Transaction</div>

                            <div className="summary-breakdown-list">
                                <div className="sb-row">
                                    <span>Subtotal</span>
                                    <span>₹8,500.00</span>
                                </div>
                                <div className="sb-row">
                                    <span>Processing Fee</span>
                                    <span>Covered</span>
                                </div>
                                <div className="sb-row total-highlight">
                                    <span>Net Amount</span>
                                    <span>₹8,500.00</span>
                                </div>
                            </div>

                            <div className="payment-method-display">
                                <span className="label-text-gray-xs">Payment Method</span>
                                <div className="pm-flex-row">
                                    <div className="visa-icon-box"></div>
                                    <div className="pm-text-block">
                                        <div className="pm-main-text">Visa ending in 4242</div>
                                        <div className="pm-sub-text">Exp 12/26</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="cta-btn-primary-green" onClick={() => navigate('/donation')}>
                            <Icons.Refresh /> Repeat Donation
                        </button>

                        <button className="cta-btn-secondary-white">
                            <Icons.Download /> Download Receipt
                        </button>

                        <div className="help-support-card">
                            <div className="help-icon-title">
                                <Icons.Info /> <strong>Need help?</strong>
                            </div>
                            <p>If you have questions about this transaction or the impact report, please contact our donor support team.</p>
                            <button className="link-text-green">Contact Support</button>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default DonationDetailsPage;
