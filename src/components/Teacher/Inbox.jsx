import React, { useState } from 'react';
import './Inbox.css';
import profilePic from '../../assets/Picture16.png'; // Assuming same profile pic usage
import { FaPaperclip, FaFilePdf, FaPaperPlane } from 'react-icons/fa';

const Inbox = () => {
    return (
        <div className="inbox-container">
            <main className="inbox-main-content">
                <header className="inbox-header">
                    <div className="logo-section">
                        <span style={{ color: '#64A926', fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Cherry Swash' }}>Al Burhan</span>
                    </div>
                    {/* Header Icons top right */}
                    <div className="header-actions">
                        <button className="icon-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        </button>
                        <button className="icon-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                        </button>
                        <img src={profilePic} alt="User" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid white' }} />
                    </div>
                </header>

                <div className="inbox-title-section">
                    <h1 className="inbox-page-title">Inbox</h1>
                    <button className="mark-read-btn">Mark all read</button>
                </div>

                <div className="inbox-grid">
                    {/* Left List */}
                    <div className="message-list">
                        <div className="search-bar">
                            <span style={{ marginRight: '10px' }}>🔍</span> Search
                        </div>

                        <div className="message-item active">
                            <div className="msg-header">
                                <span className="msg-sender">Accounting Dept</span>
                                <span className="msg-time">2m ago</span>
                            </div>
                            <div className="msg-subject">Honorarium Payment Processed - Oct 2023</div>
                            <div className="msg-preview">Your honorarium for the month of October has been successfully processed and will reflect...</div>
                            <div style={{ marginTop: '8px' }}><span className="tag-badge" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>Financial</span></div>
                        </div>

                        <div className="message-item">
                            <div className="msg-header">
                                <span className="msg-sender">Principal's Office</span>
                                <span className="msg-time">1h ago</span>
                            </div>
                            <div className="msg-subject">Revised Class Schedule for Grade 10</div>
                            <div className="msg-preview">Please note the changes to the science lab availability starting next week. The new schedule is...</div>
                            <div style={{ marginTop: '8px' }}><span className="tag-badge" style={{ backgroundColor: '#f3f4f6', color: '#374151', fontSize: '0.7rem', padding: '2px 8px' }}>Academic</span></div>
                        </div>

                        <div className="message-item">
                            <div className="msg-header">
                                <span className="msg-sender">HR Department</span>
                                <span className="msg-time">Yesterday</span>
                            </div>
                            <div className="msg-subject">Annual Staff Picnic - RSVP Required</div>
                            <div className="msg-preview">We are excited to announce our annual staff picnic at the City Park. Please confirm your attendance...</div>
                            <div style={{ marginTop: '8px' }}><span className="tag-badge" style={{ backgroundColor: '#f3f4f6', color: '#374151', fontSize: '0.7rem', padding: '2px 8px' }}>Administrative</span></div>
                        </div>

                        <div className="message-item">
                            <div className="msg-header">
                                <span className="msg-sender">IT Support</span>
                                <span className="msg-time">2 days ago</span>
                            </div>
                            <div className="msg-subject">Scheduled System Maintenance</div>
                            <div className="msg-preview">The school management portal will be down for maintenance this Sunday from 2 AM to 4 AM...</div>
                            <div style={{ marginTop: '8px' }}><span className="tag-badge" style={{ backgroundColor: '#f3f4f6', color: '#374151', fontSize: '0.7rem', padding: '2px 8px' }}>System</span></div>
                        </div>
                    </div>

                    {/* Right Detail */}
                    <div className="message-detail">
                        <div className="detail-header">
                            <div>
                                <span className="tag-badge">Financial</span>
                                <h2 className="detail-title">Honorarium Payment Processed - Oct 2023</h2>
                            </div>
                            <div style={{ color: '#6B7280', fontSize: '0.9rem' }}>Oct 24, 2023, 10:42 AM</div>
                        </div>

                        <div className="detail-meta" style={{ marginBottom: '2rem' }}>
                            <div className="sender-avatar-small">AD</div>
                            <div className="sender-info-text">
                                <strong>Accounting Dept</strong>
                                <span>&lt;accounting@schoolmanager.com&gt;</span>
                            </div>
                        </div>

                        <div className="detail-message-body">
                            <p>Dear Staff Member,</p>
                            <br />
                            <p>We are pleased to inform you that your honorarium for the month of <strong>October 2023</strong> has been successfully processed. The funds have been transferred and should reflect in your registered bank account within 1-2 business days, depending on your bank's clearance policies.</p>
                        </div>

                        <div className="transaction-box">
                            <div className="trans-item">
                                <span className="trans-label">Transaction ID</span>
                                <span className="trans-value">TXN-8842-OCT-23</span>
                            </div>
                            <div className="trans-item">
                                <span className="trans-label">Payment Date</span>
                                <span className="trans-value">Oct 24, 2023</span>
                            </div>
                            <div className="trans-item">
                                <span className="trans-label">Amount</span>
                                <span className="trans-value">₹1,250.00</span>
                            </div>
                        </div>

                        <div className="detail-message-body">
                            <p>Please review the attached pay slip for a detailed breakdown of the payment, including any applicable deductions or bonuses.</p>
                            <br />
                            <p>If you notice any discrepancies or have questions regarding this payment, please do not hesitate to contact the finance department by replying to this notification or visiting us during office hours.</p>
                            <br />
                            <p>Best regards,<br />School Finance Team</p>
                        </div>

                        <div className="attachments-section">
                            <div className="attach-title"><FaPaperclip /> Attachments (1)</div>
                            <div className="attachment-card">
                                <FaFilePdf className="pdf-icon" />
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>PaySlip_Oct2023.pdf</div>
                                    <div style={{ fontSize: '0.8rem', color: 'gray' }}>145 KB</div>
                                </div>
                                <div style={{ marginLeft: '10px', color: '#6B7280' }}>⬇</div>
                            </div>
                        </div>

                        <div className="reply-section">
                            <div className="sender-avatar-small" style={{ backgroundColor: '#e5e7eb', color: 'white' }}></div>
                            <div className="reply-input-area">
                                <textarea className="reply-input" placeholder="Reply to Accounting Department..." rows="3"></textarea>
                                <div className="send-btn-container">
                                    <button className="send-btn">Send <FaPaperPlane /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Inbox;
