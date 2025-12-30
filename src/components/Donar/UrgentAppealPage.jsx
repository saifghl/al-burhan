import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UrgentAppealPage.css';
import '../Donar/Dashboard.css'; // Shared layout styles
import UserAvatar from '../../assets/Picture33.png'; // User Avatar
import CampaignImg1 from '../../assets/Picture37.png'; // Assuming these are the provided assets
import CampaignImg2 from '../../assets/Picture38.png';
import MadarsaLogo from '../../assets/Picture27.png'; // Placeholder for Madarsa Logo
import LogoutModal from './LogoutModal';

// Outline Icons
const Icons = {
    ArrowLeft: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>,
    MoreVertical: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>,
    Check: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>,
    Flash: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
    FileText: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
    Download: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>,
    Share: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>,
    Heart: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>,
    Bell: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
    Settings: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
    SignOut: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
};

const UrgentAppealPage = () => {
    const navigate = useNavigate();
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleConfirmLogout = () => {
        navigate('/');
    };

    // Campaign Data
    const campaign = {
        title: "Urgent Appeal: Winter Blanket Drive for Students",
        raised: 1750,
        goal: 5000,
        currency: "₹"
    };

    const percentage = (campaign.raised / campaign.goal) * 100;

    return (
        <div className="ua-layout-standalone">
            <main className="ua-main full-width">
                <header className="ua-header-standalone">
                    <div className="logo-section">
                        <div className="logo-icon">
                            <span style={{ fontSize: '24px' }}>🏰</span>
                        </div>
                        <span className="logo-text" style={{ fontWeight: 'bold', fontSize: '20px', marginLeft: '10px', color: '#6c9c3e' }}>Al Burhan</span>
                    </div>
                    <div className="header-right" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <div className="icon-btn" onClick={() => navigate('/notifications')} style={{ cursor: 'pointer' }}><Icons.Bell /></div>
                        <div className="icon-btn" onClick={() => navigate('/settings')}><Icons.Settings /></div>
                        <div className="user-avatar-small" onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>
                            <img src={UserAvatar} alt="User" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                        </div>
                    </div>
                </header>

                <div className="ua-content-container">
                    <div className="ua-breadcrumbs">
                        <a href="/notifications" onClick={(e) => { e.preventDefault(); navigate('/notifications'); }}>Notifications</a>
                        <span>/</span>
                        <span className="current">Urgent Appeal Details</span>
                    </div>

                    <div className="ua-card">
                        <div className="ua-header">
                            <div className="ua-campaign-info">
                                <div className="ua-avatar">
                                    <img src={MadarsaLogo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                                    <div className="ua-avatar-check"><Icons.Check /></div>
                                </div>
                                <div className="ua-meta">
                                    <h3>Al-Falah Madarsa</h3>
                                    <p>Campaign ID: #Win2024-AFM • 2 hours ago</p>
                                </div>
                            </div>
                            <button className="ua-options-btn"><Icons.MoreVertical /></button>
                        </div>

                        <div className="ua-tags">
                            <span className="ua-tag urgent"><Icons.Flash /> Urgent</span>
                            <span className="ua-tag fundraiser">Fundraiser</span>
                        </div>

                        <h1 className="ua-title">{campaign.title}</h1>

                        <div className="ua-body">
                            <p><strong>Assalamu Alaikum,</strong></p>
                            <p>We hope this message finds you in the best of health and iman. As winter approaches rapidly in the northern regions, we are launching an urgent campaign to ensure the well-being of our 200 resident students.</p>
                            <p>Many of our students come from underprivileged backgrounds and lack adequate winter gear. The temperature has already dropped significantly, and our current dormitory bedding is insufficient to keep them warm during the freezing nights ahead.</p>
                            <p>Our goal is to raise <strong>{campaign.currency}{campaign.goal.toLocaleString()}</strong> by the end of this week to procure:</p>
                            <ul className="ua-target-list">
                                <li>200 Heavy Thermal Blankets</li>
                                <li>Heaters for the main dormitory halls</li>
                                <li>Winter socks and caps for each student</li>
                            </ul>
                            <p>Your support can provide warmth and comfort to a seeker of knowledge. "The believer's shade on the Day of Resurrection will be his charity." (Tirmidhi)</p>
                        </div>

                        <span className="ua-subtitle">Campaign Images</span>
                        <div className="ua-images-grid">
                            <div className="ua-img-box"><img src={CampaignImg1} alt="Student Illustration" /></div>
                            <div className="ua-img-box"><img src={CampaignImg2} alt="Blankets Stack" /></div>
                        </div>

                        <span className="ua-subtitle">Attachments</span>
                        <div className="ua-attachment-card">
                            <div className="ua-att-left">
                                <div className="ua-pdf-icon"><Icons.FileText /></div>
                                <div className="ua-att-info">
                                    <h4>Winter_Budget_Breakdown_2024.pdf</h4>
                                    <p>1.2 MB • PDF Document</p>
                                </div>
                            </div>
                            <button className="ua-download-btn"><Icons.Download /></button>
                        </div>
                    </div>
                </div>

                {/* Fixed Footer */}
                <div className="ua-fixed-footer">
                    <div className="ua-progress-section">
                        <div className="ua-progress-bar">
                            <div className="ua-progress-fill" style={{ width: `${percentage}%` }}></div>
                        </div>
                        <div className="ua-progress-labels">
                            <span className="ua-raised">{campaign.currency}{campaign.raised.toLocaleString()} raised</span>
                            <span className="ua-goal">Goal: {campaign.currency}{campaign.goal.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className="ua-actions">
                        <button className="ua-share-btn"><Icons.Share /> Share</button>
                        <button className="ua-donate-btn" onClick={() => navigate('/donation')}>
                            Donate Now
                        </button>
                    </div>
                </div>

                <div className="bottom-signout-row-ua">
                    <button className="signout-link" onClick={() => setShowLogoutModal(true)}>
                        <Icons.SignOut /> Sign Out
                    </button>
                </div>

                <LogoutModal
                    isOpen={showLogoutModal}
                    onClose={() => setShowLogoutModal(false)}
                    onLogout={handleConfirmLogout}
                />
            </main>
        </div>
    );
};

export default UrgentAppealPage;
