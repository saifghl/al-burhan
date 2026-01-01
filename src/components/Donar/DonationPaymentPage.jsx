import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DonationPaymentPage.css';
import MadarsaThumb from '../../assets/Picture33.png'; // Using placeholder
import CardPage from './PaymentPages/CardPage';
import UPIPage from './PaymentPages/UPIPage';
import NetBankingPage from './PaymentPages/NetBankingPage';
import QrPage from './PaymentPages/QrPage';

const DonationPaymentPage = () => {
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('card');

    const Icons = {
        Bell: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
        Settings: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
        ArrowLeft: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>,
        ArrowRight: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>,
        Lock: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
        Card: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>,
        Bank: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>, // Placeholder icon
        Smartphone: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>,
        Qr: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
        Leaf: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="#2e7d32" stroke="none"><path d="M2.05 13.09c.8 0 1.57.14 2.3.4l.2.07c.8.29 1.64.44 2.51.44 2.1 0 4.07-.86 5.5-2.26 1.4-1.37 2.22-3.26 2.25-5.26a.85.85 0 0 1 .53-.78C16.89 5.2 18.25 5 19.5 5c.42 0 .8.27.95.66.15.4.02.85-.32 1.11-1.34 1.03-3.08 1.6-4.88 1.6 0 0-.01 0-.01 0-2.02.04-3.95.86-5.4 2.29-1.46 1.44-3.48 2.33-5.69 2.33-.89 0-1.75-.15-2.57-.45l-.2-.07a7.06 7.06 0 0 1-1.23-.42.85.85 0 0 1-.36-1.14c.15-.31.47-.48.81-.48l1.45.66z"></path></svg>
    };

    return (
        <div className="payment-page">
            {/* Header */}
            <header className="donation-header">
                <div className="logo-container">
                    <span className="brand-icon">🏰</span>
                    <span className="brand-text">Al Burhan</span>
                </div>
                <div className="header-actions">
                    <button className="icon-btn" onClick={() => navigate('/notifications')}><Icons.Bell /></button>
                    <button className="icon-btn" onClick={() => navigate('/settings')}><Icons.Settings /></button>
                    <div className="user-avatar" onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>
                        <img src="https://via.placeholder.com/40" alt="User" />
                    </div>
                </div>
            </header>

            <main className="payment-container">
                {/* Navigation Breadcrumb/Back */}
                <div className="nav-row">
                    <button className="back-link" onClick={() => navigate('/review-donation')}>
                        <Icons.ArrowLeft /> Back
                    </button>
                    <div className="step-indicator">Step 4 of 4</div>
                </div>

                {/* Progress Bar */}
                <div className="progress-bar-container">
                    <div className="progress-bar filled" style={{ width: '100%' }}></div>
                </div>

                <div className="back-link-small" onClick={() => navigate('/review-donation')}>
                    <Icons.ArrowLeft /> Back to Madarsa Profile
                </div>

                <div className="page-header-content">
                    <h1>Complete your Donation</h1>
                    <p>Securely complete your contribution to Madarsa Al-Nur.</p>
                </div>

                <div className="payment-split-layout">
                    {/* Left: Payment Methods */}
                    <div className="payment-methods-section">
                        <h3>Select Payment Method</h3>

                        <div className="methods-container">
                            <div className="methods-sidebar">
                                <button className={`method-tab ${paymentMethod === 'card' ? 'active' : ''}`} onClick={() => setPaymentMethod('card')}>
                                    <Icons.Card /> Card
                                </button>
                                <button className={`method-tab ${paymentMethod === 'upi' ? 'active' : ''}`} onClick={() => setPaymentMethod('upi')}>
                                    <Icons.Smartphone /> UPI
                                </button>
                                <button className={`method-tab ${paymentMethod === 'netbanking' ? 'active' : ''}`} onClick={() => setPaymentMethod('netbanking')}>
                                    <Icons.Bank /> Net Banking
                                </button>
                                <button className={`method-tab ${paymentMethod === 'qr' ? 'active' : ''}`} onClick={() => setPaymentMethod('qr')}>
                                    <Icons.Qr /> QR Code
                                </button>
                            </div>

                            <div className="method-content">
                                {paymentMethod === 'card' && <CardPage />}
                                {paymentMethod === 'upi' && <UPIPage />}
                                {paymentMethod === 'netbanking' && <NetBankingPage />}
                                {paymentMethod === 'qr' && <QrPage />}
                            </div>
                        </div>
                    </div>

                    {/* Right: Summary */}
                    <div className="summary-sidebar">
                        <div className="summary-card">
                            <h3>Donation Summary</h3>

                            <div className="summary-org-header">
                                <img src={MadarsaThumb} alt="Madarsa" className="summary-thumb" />
                                <div className="summary-org-details">
                                    <h4>Madarsa Al-Nur</h4>
                                    <span className="org-category">General Education Fund</span>
                                    <div className="verified-badge-small">
                                        <span>✓</span> Verified Madarsa
                                    </div>
                                </div>
                            </div>

                            <div className="summary-breakdown">
                                <div className="breakdown-row">
                                    <span>Donation Amount</span>
                                    <span>₹5,000.00</span>
                                </div>
                                <div className="breakdown-row success">
                                    <span>Platform Fee (0%)</span>
                                    <span>Free</span>
                                </div>
                                <div className="breakdown-row">
                                    <span>Transaction Fee</span>
                                    <span>₹0.00</span>
                                </div>
                            </div>

                            <div className="summary-total">
                                <span>Total Payable</span>
                                <span className="total-value">₹5,000</span>
                            </div>

                            <button className="final-pay-btn" onClick={() => navigate('/payment-success')}>
                                Donate ₹5,000 <Icons.ArrowRight />
                            </button>

                            <div className="terms-text">
                                By donating, you agree to our Terms and Privacy Policy
                            </div>

                            <div className="payment-trust-logos">
                                <div className="trust-logo"></div>
                                <div className="trust-logo"></div>
                                <div className="trust-logo"></div>
                            </div>
                        </div>

                        <div className="sadaqah-promo">
                            <div className="promo-header">
                                <Icons.Leaf /> Make this a monthly Sadaqah?
                            </div>
                            <p>Support Madarsa Al-Nur continuously with an automated monthly donation.</p>
                            <button className="promo-btn">Setup Recurring Donation</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DonationPaymentPage;
