import React from 'react';
import { FaTimes, FaDownload, FaUserCircle } from 'react-icons/fa';
import './AttendanceHistoryModal.css';

const AttendanceHistoryModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const historyData = [
        {
            date: 'Oct 24, 2023',
            day: 'Tuesday',
            status: 'Present',
            inTime: '08:00 AM',
            outTime: '04:00 PM',
            hours: '8h 00m',
            markedBy: 'James Wilson',
            lastUpdated: '2 mins ago'
        },
        {
            date: 'Oct 23, 2023',
            day: 'Wednesday',
            status: 'Present',
            inTime: '08:12 AM',
            outTime: '04:15 PM',
            hours: '8h 03m',
            markedBy: 'James Wilson',
            lastUpdated: '1 day ago'
        },
        {
            date: 'Oct 22, 2023',
            day: 'Monday',
            status: 'Absent',
            inTime: 'Not marked',
            outTime: 'Not marked',
            hours: '-',
            markedBy: 'System Auto',
            lastUpdated: '2 days ago'
        },
    ];

    return (
        <div className="ahm-overlay">
            <div className="ahm-container">
                <div className="ahm-header">
                    <div>
                        <h2>Attendance History</h2>
                        <div className="ahm-sub-header">
                            <FaUserCircle className="user-icon" />
                            <span>History records for <strong>Sarah Jenkins (EMP-2049)</strong></span>
                        </div>
                    </div>
                    <button className="ahm-close-icon" onClick={onClose}><FaTimes /></button>
                </div>

                <div className="ahm-body">
                    <table className="ahm-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Status</th>
                                <th>In Time</th>
                                <th>Out Time</th>
                                <th>Total Hrs</th>
                                <th>Marked By</th>
                                <th style={{ textAlign: 'right' }}>Last Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historyData.map((row, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="ahm-date-cell">
                                            <span className="ahm-date">{row.date}</span>
                                            <span className="ahm-day">{row.day}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`ahm-status ${row.status.toLowerCase()}`}>
                                            <span className="dot"></span> {row.status}
                                        </span>
                                    </td>
                                    <td className="ahm-time">{row.inTime}</td>
                                    <td className="ahm-time">{row.outTime}</td>
                                    <td>{row.hours}</td>
                                    <td>
                                        <div className="ahm-marked-by">
                                            <div className="marker-avatar">{row.markedBy.split(' ').map(n => n[0]).join('')}</div>
                                            {row.markedBy}
                                        </div>
                                    </td>
                                    <td style={{ textAlign: 'right', color: '#888' }}>{row.lastUpdated}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="ahm-footer">
                    <span className="ahm-showing">Showing recent 3 records</span>
                    <div className="ahm-footer-actions">
                        <button className="ahm-btn-close" onClick={onClose}>Close</button>
                        <button className="ahm-btn-export"><FaDownload /> Export History</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttendanceHistoryModal;
