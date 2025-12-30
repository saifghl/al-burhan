import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Class = ({ type = 'class' }) => { // type can be 'class' or 'namaz' to reuse calendar if needed
    // Mock calendar data
    const days = [
        { date: 1, status: 'present' }, { date: 2, status: 'present' }, { date: 3, status: 'absent' },
        { date: 4, status: 'present' }, { date: 5, status: 'present' },
        // ... filling some dummy data
        { date: 8, status: 'half' }, { date: 9, status: 'present' }, { date: 10, status: 'present' },
        { date: 11, status: 'present' }, { date: 12, status: 'present' },
        { date: 15, status: 'absent' }, { date: 16, status: 'present' }, { date: 17, status: 'present' },
        { date: 18, status: 'present' }, { date: 19, status: 'present' },
        { date: 22, status: 'present', isToday: true },
    ];

    // Helper to generate calendar grid
    const renderCalendar = () => {
        let grid = [];
        // Just a static 31 day layout for demo, starting from Sunday for Oct 2023 (actually Oct starts Sun)
        // padding for start of month
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
                    {dayData?.status === 'half' && <span className="mark">½</span>}
                    {dayData?.isToday && <span className="today-label">Today</span>}
                </div>
            );
        }
        return grid;
    };

    return (
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
    );
};

export default Class;
