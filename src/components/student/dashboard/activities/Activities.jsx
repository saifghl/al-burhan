import React from 'react';
import './Activities.css';
import { FaDownload, FaCheckCircle, FaTrophy, FaFlag, FaBookOpen, FaFlask, FaCalculator, FaChevronRight, FaFilePdf, FaMedal, FaStar, FaLock, FaMapMarkerAlt, FaBolt } from 'react-icons/fa';

const Activities = () => {
    return (
        <div className="student-activities">
            {/* Header */}
            <div className="act-header">
                <div className="act-title">
                    <h2>My Activities</h2>
                    <p>Track your academic and religious milestones. Join competitions and earn trophies to showcase on your profile.</p>
                </div>
                <div className="act-controls">
                    <select className="term-select">
                        <option>Current Term</option>
                        <option>Term 1 (Fall)</option>
                        <option>Term 2 (Spring)</option>
                    </select>
                    <button className="btn-download-report">
                        <FaDownload /> Download Report
                    </button>
                </div>
            </div>

            {/* Stats Row */}
            <div className="stats-row">
                <div className="stat-card">
                    <div className="stat-info">
                        <h4>Activities Completed</h4>
                        <div className="stat-value">
                            12 <span className="stat-sub positive">+2 this week</span>
                        </div>
                    </div>
                    <div className="stat-icon green">
                        <FaCheckCircle />
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-info">
                        <h4>Trophies Won</h4>
                        <div className="stat-value">
                            5 <span className="stat-sub neutral">Lifetime Total</span>
                        </div>
                        <span className="stat-sub" style={{ fontSize: '10px', color: '#95a5a6' }}>New trophy at 8 activities</span>
                    </div>
                    <div className="stat-icon gold">
                        <FaTrophy />
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-info">
                        <h4>Active Competitions</h4>
                        <div className="stat-value">
                            2 <span className="stat-sub" style={{ color: '#3498db', fontSize: '13px', fontWeight: '600' }}>Pending results</span>
                        </div>
                    </div>
                    <div className="stat-icon blue">
                        <FaFlag />
                    </div>
                </div>
            </div>

            {/* Main Layout */}
            <div className="act-grid">

                {/* Left Column */}
                <div className="act-left">

                    {/* Upcoming & Recent */}
                    <div className="section-header">
                        <h3>Upcoming & Recent</h3>
                        <div className="filter-tabs">
                            <button className="ft-btn active">All</button>
                            <button className="ft-btn">Academic</button>
                            <button className="ft-btn">Religious</button>
                        </div>
                    </div>

                    <div className="upcoming-list">
                        <div className="event-card">
                            <div className="ec-icon">
                                <FaBookOpen style={{ color: '#2ecc71' }} />
                            </div>
                            <div className="ec-content">
                                <h4>Quran Recitation Circle</h4>
                                <p>Mosque Hall A • Brother Ahmed</p>
                                <div className="ec-tags">
                                    <span className="ec-tag">Religious</span>
                                </div>
                            </div>
                            <div className="ec-time">
                                <span className="time-badge soon">Today, 4:00 PM</span>
                                <FaChevronRight className="ec-arrow" />
                            </div>
                        </div>

                        <div className="event-card">
                            <div className="ec-icon">
                                <FaFlask style={{ color: '#9b59b6' }} />
                            </div>
                            <div className="ec-content">
                                <h4>Science Fair Preparation</h4>
                                <p>Lab 3 • Ms. Robinson</p>
                                <div className="ec-tags">
                                    <span className="ec-tag">Academic</span>
                                </div>
                            </div>
                            <div className="ec-time">
                                <span className="time-badge tomorrow">Tomorrow, 2:00 PM</span>
                                <FaChevronRight className="ec-arrow" />
                            </div>
                        </div>

                        <div className="event-card" style={{ opacity: 0.7 }}>
                            <div className="ec-icon">
                                <FaCalculator style={{ color: '#e74c3c' }} />
                            </div>
                            <div className="ec-content">
                                <h4>Math Olympiad Qualifier</h4>
                                <p>Main Auditorium</p>
                                <div className="ec-tags">
                                    <span className="ec-tag">Academic</span>
                                    <span className="ec-tag" style={{ background: '#e8f8f5', color: '#1abc9c' }}>Passed</span>
                                </div>
                            </div>
                            <div className="ec-time">
                                <span className="time-badge" style={{ color: '#95a5a6' }}>Completed</span>
                                <FaChevronRight className="ec-arrow" />
                            </div>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '13px', fontWeight: '700', color: '#2c3e50', cursor: 'pointer' }}>View All History</div>
                    </div>


                    {/* Certificates & Awards */}
                    <div className="section-header" style={{ marginTop: '50px' }}>
                        <h3>Certificates & Awards</h3>
                        <span style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: '700', cursor: 'pointer' }}>View All</span>
                    </div>

                    <div className="cert-grid">
                        <div className="cert-card">
                            <div className="cc-thumb">
                                <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1887&auto=format&fit=crop" alt="cert" />
                            </div>
                            <div className="cc-content">
                                <h4>Excellence in Biology</h4>
                                <p>Fall 2023</p>
                                <a href="#" className="btn-dl-pdf"><FaFilePdf /> Download PDF</a>
                            </div>
                        </div>

                        <div className="cert-card">
                            <div className="cc-thumb">
                                <img src="https://images.unsplash.com/photo-1544928147-79a2e746b5bd?q=80&w=2070&auto=format&fit=crop" alt="cert" />
                            </div>
                            <div className="cc-content">
                                <h4>Juz Amma Completion</h4>
                                <p>Winter 2023</p>
                                <a href="#" className="btn-dl-pdf"><FaFilePdf /> Download PDF</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="act-right">

                    {/* Active Competitions Widget */}
                    <div className="competition-card">
                        <div className="comp-header">
                            <FaFlag style={{ fontSize: '20px' }} />
                            <h4>Active Competitions</h4>
                        </div>

                        <div className="comp-list">
                            <div className="comp-item">
                                <div className="comp-info">
                                    <h5>Annual Quran Recitation</h5>
                                    <p>Round 1</p>
                                </div>
                                <span className="comp-status">Registered</span>
                            </div>

                            <div className="comp-item">
                                <div className="comp-info">
                                    <h5>District Spelling Bee</h5>
                                    <p>Final Round</p>
                                </div>
                                <span className="comp-status warn">2 Days Left</span>
                            </div>
                        </div>

                        <button className="btn-browse-comp">Browse All Competitions</button>
                    </div>

                    {/* Trophy Case */}
                    <div className="trophy-case">
                        <h3>Trophy Case</h3>
                        <div className="tc-display">
                            <FaTrophy className="trophy silver" />
                            <FaTrophy className="trophy gold" />
                            <FaTrophy className="trophy bronze" />
                        </div>
                        <span className="tc-subtitle">Keep participating to fill your shelf!</span>
                    </div>

                    {/* Badges */}
                    <div className="section-header">
                        <h3>Badges</h3>
                        <span style={{ fontSize: '12px', color: '#95a5a6' }}>12/50 Unlocked</span>
                    </div>

                    <div className="badges-grid">
                        <div className="badge-item unlocked"><FaBookOpen /></div>
                        <div className="badge-item unlocked"><FaMapMarkerAlt /></div>
                        <div className="badge-item unlocked"><FaBolt /></div>
                        <div className="badge-item unlocked"><FaStar /></div>
                        <div className="badge-item"><FaLock /></div>
                        <div className="badge-item"><FaLock /></div>
                        <div className="badge-item"><FaLock /></div>
                        <div className="badge-item"><FaLock /></div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Activities;
