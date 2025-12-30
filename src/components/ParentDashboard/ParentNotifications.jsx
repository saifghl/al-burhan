import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ParentNotifications.css';
import './ParentDashboard.css'; // Shared styles for header/nav
import pProfile from '../../assets/p-profile.png';
import logoText from '../../assets/logo-text.png';
import { FaBell, FaCog, FaSearch, FaChevronLeft, FaChevronRight, FaCalendarAlt, FaHeadset, FaClock, FaHome, FaChartLine, FaMoneyBillWave, FaUser, FaSignOutAlt } from 'react-icons/fa';
import LogoutModal from './LogoutModal';

const ParentNotifications = () => {
    const navigate = useNavigate();
    const [showLogout, setShowLogout] = useState(false);
    const [filter, setFilter] = useState('All');

    const handleLogout = () => {
        navigate('/login');
    };

    const notices = [
        {
            id: 1,
            tag: 'Exams',
            tagColor: 'yellow',
            time: '2 hours ago',
            title: 'Mid-Term Examination Schedule Released',
            desc: 'Please review the attached schedule for the upcoming Fall mid-terms. Ensure your child is prepared for all subjects listed.',
            date: 'Nov 05, 2023'
        },
        {
            id: 2,
            tag: 'Religious Programs',
            tagColor: 'green',
            time: '', /* No time shown in design for this one? Or maybe just omitted */
            title: 'Annual Quran Recitation Competition',
            desc: 'Parents are invited to attend the finals of the recitation contest. Students from grades 5-10 will be participating.',
            date: 'Nov 12, 2023'
        },
        {
            id: 3,
            tag: 'Events',
            tagColor: 'blue',
            time: '',
            title: 'Parent-Teacher Meeting Fall 2023',
            desc: 'Book your slots for the upcoming PTM. It is mandatory for at least one parent to attend to discuss student progress.',
            date: 'Oct 28, 2023'
        },
        {
            id: 4,
            tag: 'General',
            tagColor: 'gray',
            time: '',
            title: 'Winter Uniform Policy Update',
            desc: 'Effective from November 1st, all students must wear the full winter uniform. Click to see the detailed uniform code.',
            date: 'Nov 01, 2023'
        },
        {
            id: 5,
            tag: 'Religious Programs',
            tagColor: 'green',
            time: '',
            title: 'Seerah Workshop for Juniors',
            desc: 'A workshop dedicated to learning about the life of the Prophet (PBUH) will be held this Friday after Jummah prayer.',
            date: 'Oct 27, 2023'
        }
    ];

    return (
        <div className="parent-notifications-page">
            {/* Header - Reused */}
            <header className="pd-header">
                <div className="pd-logo">
                    <img src={logoText} alt="Al Burhan" className="logo-img" />
                </div>
                <div className="pd-header-actions">
                    {/* Active Bell */}
                    <Link to="/login/parent-dashboard/notifications" className="icon-btn active-n"><FaBell /></Link>
                    <Link to="/login/parent-dashboard/settings" className="icon-btn"><FaCog /></Link>
                    <button className="icon-btn" onClick={() => setShowLogout(true)}><FaSignOutAlt /></button>
                    <div className="header-profile">
                        <img src={pProfile} alt="Profile" />
                    </div>
                </div>
            </header>

            <div className="pn-container">
                <div className="pn-top-row">
                    <div>
                        <h1>Announcements & Notices</h1>
                        <p>Stay updated with the latest news, exam schedules, and events.</p>
                    </div>
                    <div className="pn-search-bar">
                        <FaSearch />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>

                <div className="pn-filters">
                    {['All', 'Exams', 'Events', 'General', 'Religious Programs'].map(f => (
                        <button
                            key={f}
                            className={`filter-pill ${filter === f ? 'active' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="pn-content-layout">
                    {/* Left: Notices Grid */}
                    <div className="pn-notices-grid">
                        {notices.map(notice => (
                            <div key={notice.id} className="notice-card">
                                <div className="nc-top">
                                    <span className={`nc-tag ${notice.tagColor}`}>{notice.tag}</span>
                                    {notice.time && <span className="nc-time"><FaClock /> {notice.time}</span>}
                                </div>
                                <h3>{notice.title}</h3>
                                <p>{notice.desc}</p>
                                <div className="nc-footer">
                                    <div className="nc-date">
                                        <FaCalendarAlt /> {notice.date}
                                    </div>
                                    <a href="#" className="read-details">Read Details</a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Sidebar */}
                    <div className="pn-sidebar">
                        {/* Calendar Widget */}
                        <div className="sidebar-calendar">
                            <div className="sc-header">
                                <button><FaChevronLeft /></button>
                                <h4>October 2023</h4>
                                <button><FaChevronRight /></button>
                            </div>
                            <div className="sc-grid">
                                <span className="day-name">S</span><span className="day-name">M</span><span className="day-name">T</span>
                                <span className="day-name">W</span><span className="day-name">T</span><span className="day-name">F</span><span className="day-name">S</span>

                                {/* Mock Calendar Grid for Oct 2023 (starts Sun) */}
                                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                                <span>1</span><span>2</span><span>3</span><span>4</span><span className="green-circle">5</span><span>6</span><span>7</span>
                                <span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span>
                                <span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span>
                                <span>22</span><span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span>
                                <span>29</span><span>30</span><span>31</span>
                            </div>
                            <div className="sc-legend">
                                <span className="legend-dot green"></span> Events
                                <span className="legend-dot orange"></span> Exams
                            </div>
                        </div>

                        {/* Help Widget */}
                        <div className="help-widget">
                            <div className="hw-content">
                                <div className="hw-icon"><FaHeadset /></div>
                                <div className="hw-text">
                                    <h4>Need Help?</h4>
                                    <p>Contact administration if you have questions about specific notices.</p>
                                </div>
                            </div>
                            <button className="contact-admin-full-btn">Contact Admin</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Nav */}
            <div className="pd-bottom-nav">
                <Link to="/login/parent-dashboard" className="nav-item">
                    <FaHome />
                    <span>Home</span>
                </Link>
                <Link to="/login/parent-dashboard/progress" className="nav-item">
                    <FaChartLine />
                    <span>Progress</span>
                </Link>
                <Link to="/login/parent-dashboard/attendance" className="nav-item">
                    <FaCalendarAlt />
                    <span>Attend</span>
                </Link>
                <Link to="/login/parent-dashboard/fees" className="nav-item">
                    <FaMoneyBillWave />
                    <span>Fees</span>
                </Link>
                <Link to="/login/parent-dashboard/profile" className="nav-item">
                    <FaUser />
                    <span>Profile</span>
                </Link>
            </div>
            {showLogout && <LogoutModal onClose={() => setShowLogout(false)} onLogout={handleLogout} />}
        </div>
    );
};

export default ParentNotifications;
