import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DonationPage.css';

// Import Images
import zakatImg from '../../assets/Picture27.png';
import sadaqahImg from '../../assets/Picture28.png';
import educationImg from '../../assets/Picture30.png';
import orphanImg from '../../assets/Picture29.png';
import teacherImg from '../../assets/Picture31.png';
import generalImg from '../../assets/Picture32.png';

const DonationPage = () => {
    const navigate = useNavigate();
    const [selectedCause, setSelectedCause] = useState('zakat'); // Default selection to make button active

    // Local Icons for this specific page
    const Icons = {
        ChevronLeft: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>,
        Search: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
        Bell: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
        Settings: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
        Info: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>,
        CheckCircle: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="#6c9c3e" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 9 10 15 8 13"></polyline></svg>,
        CheckCircleOutline: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ddd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>,
        Lightbulb: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6c9c3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2v1"></path><path d="M12 2A7 7 0 0 0 5 9c0 5.48 4.6 7 7 7s7-1.52 7-7a7 7 0 0 0-7-7z"></path><path d="M12 2v1"></path></svg>,
        ArrowRight: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>,
    };

    const causes = [
        {
            id: 'zakat',
            title: 'Zakat',
            desc: 'Obligatory alms for the needy, purifying your wealth.',
            image: zakatImg
        },
        {
            id: 'sadaqah',
            title: 'Sadaqah',
            desc: 'Voluntary charity for ongoing rewards and community aid.',
            image: sadaqahImg
        },
        {
            id: 'education',
            title: 'Education Support',
            desc: 'Books, supplies, and facility upgrades for better learning.',
            image: educationImg
        },
        {
            id: 'orphan',
            title: 'Orphan Sponsorship',
            desc: 'Full financial and emotional support for a student in need.',
            image: orphanImg
        },
        {
            id: 'teacher',
            title: 'Teacher Salary',
            desc: 'Support the educators shaping the future generation.',
            image: teacherImg
        },
        {
            id: 'general',
            title: 'General Donation',
            desc: 'Flexible funds for immediate needs and maintenance.',
            image: generalImg
        }
    ];

    const handleSelect = (id) => {
        setSelectedCause(id);
    };

    const handleNext = () => {
        if (selectedCause) {
            navigate('/donation-amount');
        }
    };

    return (
        <div className="donation-wizard-layout">
            {/* Top Header Row */}
            <header className="wizard-header">
                <div className="brand-section">
                    <span className="brand-logo-icon">🏰</span>
                    <span className="brand-name">Al Burhan</span>
                </div>
                <div className="header-actions">
                    <button className="icon-btn"><Icons.Bell /></button>
                    <button className="icon-btn"><Icons.Settings /></button>
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
                    <span className="step-counter">Step 1 of 4</span>
                </div>
                <div className="progress-bar-track">
                    <div className="progress-bar-fill" style={{ width: '25%' }}></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="wizard-content">
                <h1 className="wizard-title">Where would you like your donation to go?</h1>
                <p className="wizard-subtitle">Choose a specific cause to support the Madarsa's needs. Your contribution makes a direct impact.</p>

                {/* Grid */}
                <div className="causes-grid">
                    {causes.map((cause) => (
                        <div
                            key={cause.id}
                            className={`cause-card ${selectedCause === cause.id ? 'selected' : ''}`}
                            onClick={() => handleSelect(cause.id)}
                        >
                            <div className="card-image">
                                <img src={cause.image} alt={cause.title} />
                                {selectedCause === cause.id && (
                                    <div className="card-selected-badge">
                                        <Icons.CheckCircle />
                                    </div>
                                )}
                            </div>
                            <div className="card-details">
                                <div className="card-title-row">
                                    <h3>{cause.title}</h3>
                                    <div className="info-icon">
                                        <Icons.Info />
                                    </div>
                                </div>
                                <p className="card-desc">{cause.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Block */}
                <div className="info-choice-block">
                    <div className="info-icon-wrapper">
                        <Icons.Lightbulb />
                    </div>
                    <div className="info-text-content">
                        <h4>Why your choice matters</h4>
                        <p>Your specific allocation ensures transparency and helps Madarsas plan their academic year effectively. Each category has a distinct impact on the ecosystem.</p>
                    </div>
                    <div className="read-more-link">
                        Read impact report <Icons.ArrowRight />
                    </div>
                </div>

                {/* Bottom Nav */}
                <div className="wizard-footer-nav">
                    <button className="footer-back-btn" onClick={() => navigate(-1)}>Back</button>
                    <button
                        className={`footer-next-btn ${selectedCause ? 'active' : 'disabled'}`}
                        onClick={handleNext}
                        disabled={!selectedCause}
                    >
                        Next: Select Amount <Icons.ArrowRight />
                    </button>
                </div>
            </div>

            {/* Footer Link */}
            <div className="app-footer-link">
                <button className="sign-out-link">Sign Out <Icons.ArrowRight /></button>
            </div>
        </div>
    );
};

export default DonationPage;
