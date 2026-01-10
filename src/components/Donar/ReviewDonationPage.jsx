import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ReviewDonationPage.css';
import logoText from '../../assets/logo-text.png';
import MadarsaImg from '../../assets/Picture33.png';

const ReviewDonationPage = () => {
    const navigate = useNavigate();

    // Mock Data - In a real app, this would come from Context or State
    const donationDetails = {
        madarsaName: 'Al-Huda Institute',
        location: 'New York, USA',
        type: 'Zakat Eligible',
        date: 'October 24, 2023',
        donorName: 'John Doe',
        email: 'john.doe@example.com',
        subtotal: 100.00,
        processingFee: 0.00,
        total: 100.00
    };

    const Icons = {
        Bell: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
        Settings: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
        ChevronLeft: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>,
        ArrowLeft: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>,
        Calendar: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6c9c3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
        User: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6c9c3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
        Mail: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6c9c3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
        Leaf: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="#6c9c3e" stroke="none"><path d="M2.05 13.09c.8 0 1.57.14 2.3.4l.2.07c.8.29 1.64.44 2.51.44 2.1 0 4.07-.86 5.5-2.26 1.4-1.37 2.22-3.26 2.25-5.26a.85.85 0 0 1 .53-.78C16.89 5.2 18.25 5 19.5 5c.42 0 .8.27.95.66.15.4.02.85-.32 1.11-1.34 1.03-3.08 1.6-4.88 1.6 0 0-.01 0-.01 0-2.02.04-3.95.86-5.4 2.29-1.46 1.44-3.48 2.33-5.69 2.33-.89 0-1.75-.15-2.57-.45l-.2-.07a7.06 7.06 0 0 1-1.23-.42.85.85 0 0 1-.36-1.14c.15-.31.47-.48.81-.48l1.45.66z"></path></svg>,
        Lock: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
        MapPin: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
    };

    return (
        <div className="review-page">
            <header className="wizard-header">
                <div className="brand-section">
                    <img src={logoText} alt="Al Burhan" className="brand-logo" style={{ height: '40px' }} />
                </div>
                <div className="header-actions">
                    <button className="icon-btn"><Icons.Bell /></button>
                    <button className="icon-btn" onClick={() => navigate('/settings')}><Icons.Settings /></button>
                    <div className="user-avatar">
                        <img src="https://via.placeholder.com/40" alt="User" />
                    </div>
                </div>
            </header>

            {/* Wizard Progress Header */}
            <div className="wizard-progress-container">
                <div className="wizard-nav-row">
                    <button className="back-link" onClick={() => navigate('/donation-amount')}>
                        <Icons.ChevronLeft /> Back
                    </button>
                    <span className="step-counter">Step 3 of 4</span>
                </div>
                <div className="progress-bar-track">
                    <div className="progress-bar-fill" style={{ width: '75%' }}></div>
                </div>
            </div>

            <main className="review-content">
                <div className="breadcrumbs">
                    <span>Home</span> / <span>Madarsa Profile</span> / <span className="current">Review Donation</span>
                </div>

                <div className="page-title-block">
                    <h1>Review Your Donation</h1>
                    <p>Please review the details below before proceeding to secure payment.</p>
                </div>

                <div className="review-card">
                    <div className="org-support-header">
                        <img src={MadarsaImg} alt="Madarsa" className="org-thumb" />
                        <div className="org-info">
                            <span className="support-label">Supporting</span>
                            <h2>{donationDetails.madarsaName}</h2>
                            <span className="location-text"><Icons.MapPin /> {donationDetails.location}</span>
                        </div>
                    </div>

                    <div className="donation-details-grid">
                        <div className="detail-item">
                            <label>Donation Type</label>
                            <div className="value-with-icon">
                                <Icons.Leaf /> {donationDetails.type}
                            </div>
                        </div>
                        <div className="detail-item">
                            <label>Date</label>
                            <div className="value-with-icon">
                                <Icons.Calendar /> {donationDetails.date}
                            </div>
                        </div>
                        <div className="detail-item">
                            <label>Donor Name</label>
                            <div className="value-with-icon">
                                <Icons.User /> {donationDetails.donorName}
                            </div>
                        </div>
                        <div className="detail-item">
                            <label>Email</label>
                            <div className="value-with-icon">
                                <Icons.Mail /> {donationDetails.email}
                            </div>
                        </div>
                    </div>

                    <div className="payment-summary-block">
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{donationDetails.subtotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Processing Fee</span>
                            <span>₹{donationDetails.processingFee.toFixed(2)}</span>
                        </div>
                        <div className="summary-row total-row">
                            <span>Total Amount</span>
                            <span className="total-amount">₹{donationDetails.total.toFixed(2)}</span>
                        </div>
                    </div>

                    <button className="confirm-pay-btn" onClick={() => navigate('/donation-payment')}>
                        <Icons.Lock /> Confirm & Pay
                    </button>

                    <button className="edit-details-btn" onClick={() => navigate('/donation-amount')}>
                        <Icons.ArrowLeft /> Edit Details
                    </button>
                </div>
            </main>

            <div className="app-footer-link">
                <button className="sign-out-link">Sign Out <span className="icon-arrow-right">→</span></button>
            </div>

        </div>
    );
};

export default ReviewDonationPage;
