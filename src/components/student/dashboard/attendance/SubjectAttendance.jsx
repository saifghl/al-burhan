import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaArrowLeft } from 'react-icons/fa';
import './Attendance.css'; // Reusing global attendance styles

const SubjectAttendance = () => {
    const { subjectId } = useParams();
    const navigate = useNavigate();

    // Mock data based on subjectId
    const subjectName = subjectId ? subjectId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : "Subject Details";

    // Mock calendar data - in real app, fetch based on subjectId
    const days = [
        { date: 1, status: 'present' }, { date: 2, status: 'present' }, { date: 3, status: 'absent' },
        { date: 4, status: 'present' }, { date: 5, status: 'present' },
        { date: 8, status: 'present' }, { date: 9, status: 'present' }, { date: 10, status: 'present' },
        { date: 15, status: 'absent' }, { date: 16, status: 'present' }, { date: 17, status: 'present' },
        { date: 22, status: 'present', isToday: true },
    ];

    const renderCalendar = () => {
        let grid = [];
        // Padding for month start (assuming Oct 1st is Sun for simplicity or matching prev demo)
        for (let i = 0; i < 0; i++) grid.push(<div key={`pad-${i}`} className="cal-day empty"></div>);

        for (let i = 1; i <= 31; i++) {
            const dayData = days.find(d => d.date === i);
            let statusClass = '';
            if (dayData) statusClass = dayData.status;

            grid.push(
                <div key={i} className={`cal-day ${statusClass} ${dayData?.isToday ? 'today' : ''}`}>
                    <span className="day-num">{i}</span>
                    {dayData?.status === 'present' && <span className="mark">✓</span>}
                    {dayData?.status === 'absent' && <span className="mark">×</span>}
                    {dayData?.isToday && <span className="today-label">Today</span>}
                </div>
            );
        }
        return grid;
    };

    return (
        <div className="attendance-page">
            <header className="page-header">
                <div className="breadcrumbs">
                    <span onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>Back</span> / <span onClick={() => navigate('/student/attendance')} style={{ cursor: 'pointer', color: '#64A926' }}>Attendance</span> / <span>{subjectName}</span>
                </div>
                <h1>{subjectName} Attendance</h1>
                <p>Detailed view of your presence in lectures.</p>
            </header>

            <div className="attendance-grid">
                <div className="main-content">
                    <div className="calendar-card">
                        <div className="cal-header">
                            <h3>October 2023</h3>
                            <div className="cal-nav">
                                <button><FaChevronLeft /></button>
                                <button><FaChevronRight /></button>
                            </div>
                        </div>

                        <div className="cal-grid-header">
                            <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                        </div>

                        <div className="cal-grid">
                            {renderCalendar()}
                        </div>

                        <div className="cal-footer">
                            <div className="legend-item"><span className="dot present"></span> Present</div>
                            <div className="legend-item"><span className="dot absent"></span> Absent</div>
                        </div>
                    </div>
                </div>

                <aside className="side-content">
                    <div className="summary-widget">
                        <h3>Subject Stats</h3>
                        <div className="stat-row rate">
                            <div className="stat-info" style={{ width: '100%' }}>
                                <span className="label">Attendance Percentage</span>
                                <div className="progress-bar-container" style={{ marginTop: '10px', height: '10px', background: '#eef8ff', borderRadius: '5px' }}>
                                    <div className="progress-fill" style={{ width: '85%', background: '#3498db', height: '100%', borderRadius: '5px' }}></div>
                                </div>
                                <span className="value" style={{ display: 'block', textAlign: 'right', marginTop: '5px' }}>85%</span>
                            </div>
                        </div>
                        <div className="stat-row present">
                            <div className="stat-info">
                                <span className="label">Days Present</span>
                                <span className="value">17</span>
                            </div>
                        </div>
                        <div className="stat-row absent">
                            <div className="stat-info">
                                <span className="label">Days Absent</span>
                                <span className="value">3</span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default SubjectAttendance;
