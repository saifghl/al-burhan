import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentSuccessPage.css';
import logoText from '../../assets/logo-text.png';

const PaymentSuccessPage = () => {
    const navigate = useNavigate();

    const Icons = {
        CheckCircleBig: () => <svg width="80" height="80" viewBox="0 0 24 24" fill="#e8f5e9" stroke="#4caf50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9 12l2 2 4-4" strokeWidth="2.5"></path></svg>,
        Download: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>,
        Heart: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>,
        ArrowRight: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>,
        Card: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>,
        LogOut: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d32f2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>,
        Bell: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
        Settings: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
    };

    return (
        <div className="payment-success-layout">
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

            <main className="success-content-wrapper">
                <div className="success-card-centered">
                    <div className="success-header">
                        <div className="check-icon-wrapper">
                            <Icons.CheckCircleBig />
                        </div>
                        <h1>Payment Successful</h1>
                        <p>Thank you! Your contribution to <strong className="green-text">Madarsa Al-Nur</strong> has been received.</p>
                        <div className="amount-display">₹500.00</div>
                    </div>

                    <div className="transaction-details-box">
                        <div className="detail-row">
                            <span className="label">Transaction ID</span>
                            <span className="value">#TXN-8839201</span>
                        </div>
                        <div className="detail-row">
                            <span className="label">Date</span>
                            <span className="value">Oct 24, 2023, 10:30 AM</span>
                        </div>
                        <div className="detail-row">
                            <span className="label">Payment Method</span>
                            <span className="value icon-value"><Icons.Card /> Visa ending in 4242</span>
                        </div>
                        <div className="detail-row">
                            <span className="label">Purpose</span>
                            <span className="value-badge">Student Sponsorship</span>
                        </div>
                    </div>

                    <div className="action-buttons-stack">
                        <button className="download-btn">
                            <Icons.Download /> Download Receipt (PDF)
                        </button>

                        <div className="secondary-actions">
                            <button className="text-btn" onClick={() => navigate('/donation')}>
                                <Icons.Heart /> Donate Again
                            </button>
                            <button className="text-btn" onClick={() => navigate('/dashboard')}>
                                View Dashboard
                            </button>
                        </div>
                    </div>
                </div>

                <div className="footer-links-row">
                    <span className="footer-link">Need help?</span> • <span className="footer-link">Privacy Policy</span>
                </div>
            </main>

            <div className="app-footer-link">
                <button className="sign-out-link">
                    <Icons.LogOut /> Sign Out
                </button>
            </div>
        </div>
    );
};

export default PaymentSuccessPage;
