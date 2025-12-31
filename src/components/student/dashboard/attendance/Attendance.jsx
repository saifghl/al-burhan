import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Attendance.css';
import Class from './Class';
import Namaz from './Namaz';
import { FaCheckCircle, FaTimesCircle, FaPercentage } from 'react-icons/fa';

const Attendance = () => {
    const [activeTab, setActiveTab] = useState('namaz'); // 'class' or 'namaz'
    const navigate = useNavigate();

    return (
        <div className="attendance-page">
            <header className="page-header">
                <div className="breadcrumbs"><span onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>Back</span> / <span>Attendance</span></div>
                <h1>My Attendance Dashboard</h1>
                <p>Track your academic presence and daily prayers.</p>
            </header>

            <div className="dashboard-controls">
                <div className="toggle-container">
                    <button
                        className={`toggle-btn ${activeTab === 'class' ? 'active' : ''}`}
                        onClick={() => setActiveTab('class')}
                    >
                        Class Attendance
                    </button>
                    <button
                        className={`toggle-btn ${activeTab === 'namaz' ? 'active' : ''}`}
                        onClick={() => setActiveTab('namaz')}
                    >
                        Namaz Attendance
                    </button>
                </div>
            </div>

            <div className="attendance-grid">
                <div className="main-content">
                    {activeTab === 'class' ? (
                        <div className="subjects-overview">
                            <div className="overall-stats-card">
                                <h3>Overall Attendance</h3>
                                <div className="overall-circle">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                               a 15.9155 15.9155 0 0 1 0 31.831
                                               a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                        <path className="circle"
                                            strokeDasharray="87.5, 100"
                                            d="M18 2.0845
                                               a 15.9155 15.9155 0 0 1 0 31.831
                                               a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                        <text x="18" y="20.35" className="percentage">87.5%</text>
                                    </svg>
                                </div>
                                <p>You are doing great! Keep it up.</p>
                            </div>

                            <div className="subject-list">
                                <h3>Subject-wise Breakdown</h3>
                                {[
                                    { id: 'quran-studies', name: "Qur'an Studies", percent: 92, present: 22, total: 24, color: '#64A926' },
                                    { id: 'hadith', name: "Hadith Studies", percent: 85, present: 17, total: 20, color: '#3498db' },
                                    { id: 'fiqh', name: "Fiqh & Law", percent: 78, present: 14, total: 18, color: '#f39c12' },
                                    { id: 'arabic', name: "Arabic Language", percent: 95, present: 19, total: 20, color: '#9b59b6' },
                                ].map(sub => (
                                    <div key={sub.id} className="subject-attendance-card" onClick={() => navigate(`/student/attendance/subject/${sub.id}`)}>
                                        <div className="sac-header">
                                            <h4>{sub.name}</h4>
                                            <span className="sac-percent" style={{ color: sub.color }}>{sub.percent}%</span>
                                        </div>
                                        <div className="sac-progress">
                                            <div className="sac-fill" style={{ width: `${sub.percent}%`, backgroundColor: sub.color }}></div>
                                        </div>
                                        <div className="sac-footer">
                                            <span>{sub.present}/{sub.total} Classes Attended</span>
                                            <span className="view-details">View Calendar &rarr;</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* Namaz Component handles its own layout, but we wrap it to fit grid if needed, or just render directly */
                        <div className="namaz-wrapper">
                            {/* Assuming Namaz uses full width or compatible layout */}
                            <div className="overall-stats-card" style={{ marginBottom: '20px' }}>
                                <h3>Prayer Consistency</h3>
                                {/* Similar graph or summary for Namaz can go here if requested, or keep simple */}
                                <div className="overall-circle">
                                    {/* Simplified generic version for namaz demo */}
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className="circle" strokeDasharray="92, 100" stroke="#f39c12" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <text x="18" y="20.35" className="percentage">92%</text>
                                    </svg>
                                </div>
                            </div>
                            <Namaz />
                        </div>
                    )}
                </div>

                <aside className="side-content">
                    {/* Monthly Summary Widget */}
                    <div className="summary-widget">
                        <h3>Monthly Summary</h3>

                        <div className="stat-row present">
                            <div className="icon-box"><FaCheckCircle /></div>
                            <div className="stat-info">
                                <span className="label">Total Present</span>
                                <span className="value">14 Days</span>
                            </div>
                        </div>

                        <div className="stat-row absent">
                            <div className="icon-box"><FaTimesCircle /></div>
                            <div className="stat-info">
                                <span className="label">Total Absent</span>
                                <span className="value">2 Days</span>
                            </div>
                        </div>

                        <div className="stat-row rate">
                            <div className="icon-box"><FaPercentage /></div>
                            <div className="stat-info">
                                <span className="label">Attendance Rate</span>
                                <span className="value">87.5%</span>
                            </div>
                        </div>
                    </div>

                    {/* Namaz List Widget - Keeping it always visible or conditional? 
                Figma shows "Today's Namaz" on the right sidebar. 
                I will include it permanently based on the design. 
            */}
                    <Namaz />

                    {/* Weekly Prayer Consistency Graph */}
                    <div className="summary-widget graph-widget">
                        <h3>Weekly Prayer Consistency</h3>
                        <div className="bar-chart">
                            {[
                                { day: 'M', val: 60 },
                                { day: 'T', val: 80 },
                                { day: 'W', val: 50 },
                                { day: 'T', val: 70 },
                                { day: 'F', val: 90 },
                                { day: 'S', val: 40 },
                                { day: 'S', val: 20 },
                            ].map((d, i) => (
                                <div key={i} className="bar-col">
                                    <div className="bar-track">
                                        <div className="bar-fill" style={{ height: `${d.val}%` }}></div>
                                    </div>
                                    <span className="bar-label">{d.day}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </aside>
            </div>
        </div>
    );
};

export default Attendance;
