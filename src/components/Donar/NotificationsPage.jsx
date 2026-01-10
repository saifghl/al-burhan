import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NotificationsPage.css';
import UserAvatar from '../../assets/Picture33.png'; // Assuming same user avatar
import logoText from '../../assets/logo-text.png';

const NotificationsPage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('All');

    const tabs = ['All', 'Transactional', 'Updates', 'Promotions'];

    // Mock Notification Data matching the design image
    const notifications = [
        {
            id: 1,
            type: 'transactional',
            status: 'new',
            title: 'Donation Successful',
            amount: '₹50.00',
            recipient: 'Madarsa Al-Nur',
            message: 'You donated ₹50.00 to Madarsa Al-Nur. Thank you for your support!',
            time: '2 hours ago',
            actionLabel: 'View Receipt',
            actionLink: '/tax-documents', // or donation history
            iconType: 'receipt-green'
        },
        {
            id: 2,
            type: 'promotions',
            status: 'unread',
            title: 'Ramadan Appeal 2024',
            message: 'We are 80% towards our goal of providing Iftar for 500 students. Help us cross the finish line!',
            time: '5 hours ago',
            actionLabel: 'Donate Now',
            actionLink: '/urgent-appeal',
            actionBtnClass: 'btn-green-solid',
            iconType: 'heart-orange'
        },
        {
            id: 3,
            type: 'updates',
            status: 'read',
            title: 'Monthly Impact Report: Oct 2023',
            message: 'See how your contribution helped 20 students access books and uniforms this month.',
            time: '1 day ago',
            actionLabel: 'Read Report',
            actionLink: '/utilization-report',
            iconType: 'pie-blue'
        },
        {
            id: 4,
            type: 'updates',
            status: 'read',
            title: 'Message from Headmaster Ahmed',
            message: '"Assalamu Alaikum, we cannot thank you enough for the new library books..."',
            time: '3 days ago',
            actionLabel: 'Read Message',
            actionLink: '#',
            iconType: 'msg-red'
        },
        {
            id: 5,
            type: 'updates',
            status: 'read',
            title: 'Security Alert',
            message: 'A new login was detected from Chrome on Windows.',
            time: '1 week ago',
            actionLabel: 'Review Activity',
            actionLink: '/profile',
            iconType: 'shield-gray',
            isFaded: true // Visual cue for older/less important
        }
    ];

    const filteredNotifications = activeTab === 'All'
        ? notifications
        : notifications.filter(n => n.type.toLowerCase() === activeTab.toLowerCase());

    const Icons = {
        Bell: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
        Settings: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
        CheckDouble: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L7 17l-5-5"></path><path d="M22 10l-7.5 7.5L13 16"></path></svg>,
        Receipt: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
        Heart: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>,
        PieChart: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>,
        MessageCircle: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>,
        Shield: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
        ArrowRight: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    };

    const getIcon = (type) => {
        switch (type) {
            case 'receipt-green': return <div className="notif-icon-box green"><Icons.Receipt /></div>;
            case 'heart-orange': return <div className="notif-icon-box orange"><Icons.Heart /></div>;
            case 'pie-blue': return <div className="notif-icon-box blue"><Icons.PieChart /></div>;
            case 'msg-red': return <div className="notif-icon-box red"><Icons.MessageCircle /></div>;
            case 'shield-gray': return <div className="notif-icon-box gray"><Icons.Shield /></div>;
            default: return <div className="notif-icon-box gray"><Icons.Bell /></div>;
        }
    };

    return (
        <div className="donation-details-page-v2">
            {/* Reuse Top Navbar structure */}
            <header className="top-navbar-full">
                <div className="navbar-logo-section">
                    <img src={logoText} alt="Al Burhan" className="brand-logo" style={{ height: '40px' }} />
                </div>

                <div className="navbar-spacer"></div>

                <div className="navbar-actions-section">
                    <button className="icon-btn-nav active"><Icons.Bell /></button>
                    <button className="icon-btn-nav" onClick={() => navigate('/settings')}><Icons.Settings /></button>
                    <div className="user-avatar-nav" onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>
                        <img src={UserAvatar} alt="User" />
                    </div>
                </div>
            </header>

            <div className="details-body-content notifications-page-body">
                <div className="page-header-row">
                    <div className="titles">
                        <h1>Notifications</h1>
                        <p>Manage your updates and donation activity.</p>
                    </div>
                    <button className="mark-read-btn">
                        <Icons.CheckDouble /> Mark all as read
                    </button>
                </div>

                <div className="notif-tabs-bar">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="notifications-list">
                    {filteredNotifications.map((note) => (
                        <div key={note.id} className={`notif-card ${note.status === 'new' ? 'new-highlight' : ''}`}>
                            {note.status === 'new' && <div className="new-strip"></div>}

                            <div className="notif-content-wrapper">
                                <div className="notif-icon-col">
                                    {getIcon(note.iconType)}
                                </div>

                                <div className="notif-main-col">
                                    <div className="notif-header">
                                        <h4>{note.title}</h4>
                                        {note.status === 'new' && <span className="badge-new">New</span>}
                                    </div>
                                    <p className="notif-msg">{note.message}</p>
                                    <span className="notif-time">{note.time}</span>
                                </div>

                                <div className="notif-action-col">
                                    {note.actionBtnClass ? (
                                        <button
                                            className="cta-btn-green-action"
                                            onClick={() => navigate(note.actionLink)}
                                        >
                                            {note.actionLabel} <Icons.ArrowRight />
                                        </button>
                                    ) : (
                                        <button
                                            className="cta-link-btn"
                                            onClick={() => navigate(note.actionLink)}
                                        >
                                            {note.actionLabel}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NotificationsPage;
