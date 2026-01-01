import React from 'react';
import { FaChartLine, FaFileAlt } from 'react-icons/fa';

const TermResults = () => {
    return (
        <div className="term-view">
            <div style={{ textAlign: 'center', padding: '40px', color: '#7f8c8d' }}>
                <FaChartLine style={{ fontSize: '48px', marginBottom: '16px', color: '#bdc3c7' }} />
                <h3>Term Results Overview</h3>
                <p>Your term performance reports will be available here after the term exams.</p>
                <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <div className="subject-card" style={{ maxWidth: '300px', textAlign: 'left', opacity: 0.7 }}>
                        <div className="sub-header">
                            <div className="sub-icon"><FaFileAlt /></div>
                            <div className="sub-name">Term 1 (Example)</div>
                            <div className="grade-badge A-plus">A</div>
                        </div>
                        <div className="sub-score">
                            <span className="score-big">89</span>
                            <span className="score-total">/100</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermResults;
