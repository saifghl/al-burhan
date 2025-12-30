import React from 'react';
import { FaClock, FaCheck, FaTimes, FaMinus } from 'react-icons/fa';

const Namaz = () => {
    const namazTimes = [
        { name: 'Fajr', status: 'present' },
        { name: 'Dhuhr', status: 'present' },
        { name: 'Asr', status: 'none' }, // none = not yet
        { name: 'Maghrib', status: 'none' },
        { name: 'Isha', status: 'none' },
    ];

    return (
        <div className="summary-widget">
            <div className="widget-header">
                <h3>Today's Namaz</h3>
                <span className="date-badge">Oct 22</span>
            </div>
            <p className="widget-sub">Quick check for daily prayers</p>

            <div className="namaz-list">
                {namazTimes.map((n) => (
                    <div key={n.name} className="namaz-item">
                        <div className="namaz-info">
                            {n.name === 'Fajr' ? <FaClock className="n-icon morning" /> : <FaClock className="n-icon" />}
                            <span>{n.name}</span>
                        </div>
                        <div className="namaz-status">
                            {n.status === 'present' && <div className="status-box present"><FaCheck /></div>}
                            {n.status === 'absent' && <div className="status-box absent"><FaTimes /></div>}
                            {n.status === 'none' && <div className="status-box empty"></div>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Namaz;
