import React, { useState } from 'react';
import './Attendance.css';
import Class from './Class';
import Namaz from './Namaz';
import { FaCheckCircle, FaTimesCircle, FaPercentage } from 'react-icons/fa';

const Attendance = () => {
    const [activeTab, setActiveTab] = useState('namaz'); // 'class' or 'namaz'

    return (
        <div className="attendance-page">
            <header className="page-header">
                <div className="breadcrumbs">Home / <span>Attendance</span></div>
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
                    <Class type={activeTab} />
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
