import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DonationAmountPage.css';
import bannerImg from '../../assets/Picture33.png';
import logoText from '../../assets/logo-text.png';

const DonationAmountPage = () => {
    const navigate = useNavigate();
    const [frequency, setFrequency] = useState('onetime'); // onetime | monthly
    const [selectedAmount, setSelectedAmount] = useState(5000);
    const [customAmount, setCustomAmount] = useState('');

    const Icons = {
        ChevronLeft: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>,
        Bell: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
        Settings: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
        CheckCircle: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="#6c9c3e" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 9 10 15 8 13"></polyline></svg>,
        CheckVerified: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="#6c9c3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
        Book: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>,
        GradCap: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6c9c3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>,
        HeartHand: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e67e22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>,
        ArrowRight: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>,
        Lock: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
    };

    const predefinedAmounts = [
        { value: 2500, label: 'Provides books' },
        { value: 5000, label: 'Sponsors a student' },
        { value: 10000, label: 'Classroom supplies' },
        { value: 25000, label: 'Full Scholarship' }
    ];

    const handleAmountSelect = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value);
        setSelectedAmount(null);
    };

    const finalAmount = customAmount ? customAmount : selectedAmount;

    return (
        <div className="donation-amount-layout">
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
                    <button className="back-link" onClick={() => navigate(-1)}>
                        <Icons.ChevronLeft /> Back
                    </button>
                    <span className="step-counter">Step 2 of 4</span>
                </div>
                <div className="progress-bar-track">
                    <div className="progress-bar-fill" style={{ width: '50%' }}></div>
                </div>
            </div>

            <div className="content-split-layout">
                {/* Left Column: Impact & Info */}
                <div className="left-impact-column">
                    <div className="impact-banner-card">
                        <img src={bannerImg} alt="Classroom" className="banner-bg-img" />
                        <div className="banner-overlay">
                            <div className="verified-badge">
                                <Icons.CheckVerified /> Verified Madarsa
                            </div>
                            <h2>Support Al-Falah Institute</h2>
                            <p>Your contribution helps provide quality education, books, and meals to underprivileged students.</p>
                        </div>
                    </div>

                    <div className="stats-row">
                        <div className="stat-card">
                            <div className="stat-icon-circle blue-bg"><Icons.GradCap /></div>
                            <h4>1,200+</h4>
                            <span>Students Educated</span>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon-circle green-bg"><Icons.Book /></div>
                            <h4>15,000</h4>
                            <span>Books Distributed</span>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon-circle orange-bg"><Icons.HeartHand /></div>
                            <h4>100%</h4>
                            <span>Zakat Policy</span>
                        </div>
                    </div>

                    <div className="impact-description">
                        <p>Al Burhan is committed to nurturing the next generation of Muslim scholars. We blend traditional Islamic sciences with modern educational standards to develop well-rounded individuals who contribute positively to society.</p>
                        <p>Our curriculum is thoughtfully designed to instill strong spiritual values while equipping students with the knowledge and skills needed.</p>
                    </div>
                </div>

                {/* Right Column: Donation Form */}
                <div className="right-form-column">
                    <div className="donation-form-card">
                        <h3>Select Donation Amount</h3>
                        <p className="form-subtitle">Choose a frequency and amount to start supporting.</p>

                        <div className="frequency-toggle">
                            <button
                                className={`toggle-btn ${frequency === 'onetime' ? 'active' : ''}`}
                                onClick={() => setFrequency('onetime')}
                            >
                                One-time
                            </button>
                            <button
                                className={`toggle-btn ${frequency === 'monthly' ? 'active' : ''}`}
                                onClick={() => setFrequency('monthly')}
                            >
                                Monthly <span className="badge-popular">Most Popular</span>
                            </button>
                        </div>

                        <div className="amount-grid">
                            {predefinedAmounts.map((item) => (
                                <button
                                    key={item.value}
                                    className={`amount-btn ${selectedAmount === item.value ? 'selected' : ''}`}
                                    onClick={() => handleAmountSelect(item.value)}
                                >
                                    <span className="amount-value">₹{item.value}</span>
                                    <span className="amount-label">{item.label}</span>
                                    {selectedAmount === item.value && <div className="selected-check"><Icons.CheckCircle /></div>}
                                </button>
                            ))}
                        </div>

                        <div className="custom-amount-field">
                            <label>Custom Amount</label>
                            <div className="input-wrapper">
                                <span className="currency-symbol">₹</span>
                                <input
                                    type="number"
                                    placeholder="Enter amount"
                                    value={customAmount}
                                    onChange={handleCustomAmountChange}
                                />
                                <span className="currency-code">INR</span>
                            </div>
                        </div>

                        <div className="fee-summary">
                            <div className="zakat-eligible-note">
                                <strong>This donation is Zakat eligible</strong>
                                <p>We will ensure funds are used according to Sharia guidelines.</p>
                            </div>
                            <div className="fee-checkbox">
                                <input type="checkbox" id="coverFee" />
                                <label htmlFor="coverFee">Cover transaction fees (₹80.00)</label>
                            </div>
                        </div>

                        <button className="donate-submit-btn" onClick={() => navigate('/review-donation')}>
                            Donate ₹{finalAmount || '0'} <Icons.ArrowRight />
                        </button>

                        <div className="security-note">
                            <Icons.Lock /> Secure 256-bit SSL Encrypted payment
                        </div>
                    </div>
                </div>
            </div>

            <div className="app-footer-link">
                <button className="sign-out-link">Sign Out <Icons.ArrowRight /></button>
            </div>
        </div>
    );
};

export default DonationAmountPage;
