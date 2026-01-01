import React, { useState } from 'react';
import './Notifications.css';
import { FaThumbtack, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const Notifications = () => {
    const [filter, setFilter] = useState('All');

    const filters = ['All', 'Exams', 'Events', 'General', 'Religious Programs'];

    // Placeholder data
    const notices = [
        {
            id: 1,
            title: "Special Ramzan Lecture Series",
            date: "Mar 12, 2024",
            desc: "Join us for a special series of evening lectures focusing on the spiritual significance of Ramzan.",
            image: "https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=2070&auto=format&fit=crop",
            category: "Religious Programs"
        },
        {
            id: 2,
            title: "Annual Science Fair Registration",
            date: "Nov 05, 2023",
            desc: "Registration for the 2023 Science Fair is now open. Students from all departments are encouraged to participate.",
            image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=2070&auto=format&fit=crop",
            category: "Events"
        },
        {
            id: 3,
            title: "Main Library Renovation Notice",
            date: "Oct 20, 2023",
            desc: "The main library will be closed for renovation from Oct 25th to Oct 30th. Study halls A and B will remain open.",
            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
            category: "General"
        },
        {
            id: 4,
            title: "Mathematics Midterm Results",
            date: "Dec 10, 2023",
            desc: "The results for the Fall 2023 Mathematics Midterm have been published. Log in to the student portal to view.",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
            category: "Exams"
        },
        {
            id: 5,
            title: "Annual Sports Day 2024",
            date: "Jan 15, 2024",
            desc: "Get ready for the biggest sports event of the year! Sign ups for track, football, and team sports begin next week.",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop",
            category: "Events"
        },
        {
            id: 6,
            title: "Campus Wi-Fi Maintenance",
            date: "Oct 18, 2023",
            desc: "Scheduled maintenance for the campus Wi-Fi network will take place this Sunday from 2 AM to 6 AM.",
            image: null, /* No image for simple notice, or placeholder */
            category: "General"
        }
    ];

    const filteredNotices = filter === 'All'
        ? notices
        : notices.filter(n => n.category === filter || (filter === 'General' && !n.category)); // Simple fallback

    return (
        <div className="student-notifications">
            <div className="notif-header">
                <h2>Notice Board</h2>
                <p>Stay updated with the latest announcements, exam schedules, and religious programs.</p>
            </div>

            {/* Filters */}
            <div className="notif-filters">
                {filters.map(f => (
                    <button
                        key={f}
                        className={`filter-pill ${filter === f ? 'active' : ''}`}
                        onClick={() => setFilter(f)}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Pinned Section */}
            {(filter === 'All' || filter === 'Exams') && (
                <div className="pinned-section">
                    <div className="section-title">
                        <FaThumbtack /> Pinned Notice
                    </div>

                    <div className="pinned-card">
                        <div className="pc-content">
                            <span className="tag urgent">Urgent</span>
                            <div className="notice-date">
                                <FaCalendarAlt /> Oct 24, 2023
                            </div>
                            <h3>Urgent: Final Exam Schedule Change</h3>
                            <p>The final exam for Islamic Studies has been rescheduled to Oct 25th due to unforeseen circumstances. Please check the updated timetable immediately to avoid any confusion.</p>

                            <div className="pc-actions">
                                <button className="btn-read">Read Full Notice</button>
                                <button className="btn-outline">Download Schedule</button>
                            </div>
                        </div>
                        <div className="pc-image">
                            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" alt="Exam" />
                        </div>
                    </div>
                </div>
            )}

            {/* Grid Section */}
            <div className="recent-updates">
                <div className="section-title">
                    Recent Updates
                </div>

                <div className="notif-grid">
                    {filteredNotices.map((notice) => (
                        <div className="notif-card" key={notice.id}>
                            <div className="nc-image">
                                {notice.image ? (
                                    <img src={notice.image} alt={notice.title} />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bdc3c7' }}>No Image</div>
                                )}
                            </div>
                            <div className="nc-content">
                                <div className="notice-date">
                                    <FaCalendarAlt /> {notice.date}
                                </div>
                                <h4>{notice.title}</h4>
                                <p>{notice.desc}</p>
                                <a href="#" className="read-more">Read Details <FaArrowRight /></a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="load-more-container">
                    <button className="btn-load-more">Load more notices</button>
                </div>
            </div>

        </div>
    );
};

export default Notifications;
