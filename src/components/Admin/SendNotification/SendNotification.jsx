import React, { useState } from 'react';
import './SendNotification.css';
import { FaHistory, FaBold, FaItalic, FaPaperclip, FaBell, FaEnvelope, FaCommentDots, FaSearch, FaPaperPlane, FaClock, FaSave, FaUserGraduate, FaChalkboardTeacher, FaUserTie } from 'react-icons/fa';
import { MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';

const SendNotification = () => {
    const [message, setMessage] = useState('');
    const [recipientType, setRecipientType] = useState('Students'); // Students, Parents, Teachers

    const [channels, setChannels] = useState({
        inApp: true,
        email: false,
        sms: false
    });

    const handleChannelToggle = (channel) => {
        setChannels(prev => ({
            ...prev,
            [channel]: !prev[channel]
        }));
    };

    return (
        <div className="sn-container">
            {/* Header */}
            <div className="sn-header-section">
                <div className="sn-breadcrumb">
                    Home <span>&gt;</span> Communication <span>&gt;</span> <span className="active">Send Notification</span>
                </div>
                <div className="sn-title-row">
                    <div>
                        <h1 className="sn-page-title">Send Notification</h1>
                        <p className="sn-page-subtitle">Compose and broadcast messages to students, parents, and staff.</p>
                    </div>
                    <button className="sn-history-btn">
                        <FaHistory /> View History
                    </button>
                </div>
            </div>

            <div className="sn-content-grid">
                <div className="sn-left-column">
                    {/* Compose Message */}
                    <div className="sn-card">
                        <h2 className="sn-card-title"><span className="sn-icon-pen">✎</span> Compose Message</h2>

                        <div className="sn-form-group">
                            <label>Notification Title</label>
                            <input type="text" placeholder="e.g. Annual sports day announcement" className="sn-input" />
                        </div>

                        <div className="sn-form-group">
                            <div className="sn-label-row">
                                <label>Message Body</label>
                                <span className="sn-char-count">{message.length} / 300 chars</span>
                            </div>
                            <textarea
                                className="sn-textarea"
                                placeholder="Type your Message here..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                maxLength={300}
                            ></textarea>
                            <div className="sn-text-tools">
                                <FaBold className="tool-icon" />
                                <FaItalic className="tool-icon" />
                                <FaPaperclip className="tool-icon" />
                            </div>
                        </div>
                    </div>

                    {/* Delivery Channels */}
                    <div className="sn-card">
                        <h2 className="sn-card-title fa-rotate-270"><span className="sn-icon-send">➤</span> Delivery Channels</h2>
                        <div className="sn-channels-row">
                            {/* In App */}
                            <div
                                className={`sn-channel-card ${channels.inApp ? 'selected' : ''}`}
                                onClick={() => handleChannelToggle('inApp')}
                            >
                                <div className="sn-channel-header">
                                    <div className="sn-channel-icon green"><FaBell /></div>
                                    <div className={`sn-radio ${channels.inApp ? 'checked' : ''}`}></div>
                                </div>
                                <h3>In-App Notification</h3>
                                <p>Default for all users.</p>
                            </div>

                            {/* Email */}
                            <div
                                className={`sn-channel-card ${channels.email ? 'selected' : ''}`}
                                onClick={() => handleChannelToggle('email')}
                            >
                                <div className="sn-channel-header">
                                    <div className="sn-channel-icon blue"><FaEnvelope /></div>
                                    <div className={`sn-radio ${channels.email ? 'checked' : ''}`}></div>
                                </div>
                                <h3>Send via Email</h3>
                                <p>To registered addresses.</p>
                            </div>

                            {/* SMS */}
                            <div
                                className={`sn-channel-card ${channels.sms ? 'selected' : ''}`}
                                onClick={() => handleChannelToggle('sms')}
                            >
                                <div className="sn-channel-header">
                                    <div className="sn-channel-icon dark"><FaCommentDots /></div>
                                    <div className={`sn-radio ${channels.sms ? 'checked' : ''}`}></div>
                                </div>
                                <h3>Send via SMS</h3>
                                <p>May incur carrier fees.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sn-right-column">
                    {/* Target Audience */}
                    <div className="sn-card">
                        <h2 className="sn-card-title"><span className="sn-icon-users">👥</span> Target Audience</h2>

                        <label className="sn-label-sm">Recipient Type</label>
                        <div className="sn-recipient-tabs">
                            <button
                                className={`sn-tab-btn ${recipientType === 'Students' ? 'active green' : ''}`}
                                onClick={() => setRecipientType('Students')}
                            >
                                <FaUserGraduate /> Students
                            </button>
                            <button
                                className={`sn-tab-btn ${recipientType === 'Parents' ? 'active purple' : ''}`}
                                onClick={() => setRecipientType('Parents')}
                            >
                                <FaUserTie /> Parents
                            </button>
                            <button
                                className={`sn-tab-btn ${recipientType === 'Teachers' ? 'active orange' : ''}`}
                                onClick={() => setRecipientType('Teachers')}
                            >
                                <FaChalkboardTeacher /> Teachers
                            </button>
                        </div>

                        <div className="sn-filters-header">
                            <span>Filters</span>
                            <span className="sn-clear-link">Clear All</span>
                        </div>

                        <div className="sn-filter-row">
                            <select className="sn-select"><option>Class</option></select>
                            <select className="sn-select"><option>Section</option></select>
                        </div>

                        <div className="sn-search-box">
                            <FaSearch className="sn-search-icon" />
                            <input type="text" placeholder="Search specific student" />
                        </div>
                    </div>

                    {/* Audience Summary & Actions */}
                    <div className="sn-action-panel">
                        <div className="sn-recipient-summary">
                            <div className="sn-summary-icon"><span className="users-icon">👥</span></div>
                            <div>
                                <div className="sn-summary-count">~145</div>
                                <div className="sn-summary-label">Estimated Recipients</div>
                            </div>
                        </div>

                        <button className="sn-send-btn">
                            <FaPaperPlane /> Send Now
                        </button>

                        <div className="sn-secondary-actions">
                            <button className="sn-btn-outline"><FaClock /> Schedule</button>
                            <button className="sn-btn-outline"><FaSave /> Save Draft</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendNotification;
