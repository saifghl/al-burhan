import React, { useState } from 'react';
import './Results.css';
import { FaDownload } from 'react-icons/fa';
import MonthlyResults from './MonthlyResults';
import TermResults from './TermResults';
import AnnualResults from './AnnualResults';

const Results = () => {
    const [activeTab, setActiveTab] = useState('monthly');

    return (
        <div className="results-container">
            <div className="results-header">
                <div>
                    <h2>My Results</h2>
                    <p>Track your academic progress and religious milestones.</p>
                </div>
                <button className="download-btn">
                    <FaDownload /> Download Full Report
                </button>
            </div>

            <div className="results-tabs">
                <button
                    className={`tab-btn ${activeTab === 'monthly' ? 'active' : ''}`}
                    onClick={() => setActiveTab('monthly')}
                >
                    Monthly Results
                </button>
                <button
                    className={`tab-btn ${activeTab === 'term' ? 'active' : ''}`}
                    onClick={() => setActiveTab('term')}
                >
                    Term Results
                </button>
                <button
                    className={`tab-btn ${activeTab === 'annual' ? 'active' : ''}`}
                    onClick={() => setActiveTab('annual')}
                >
                    Annual Results
                </button>
            </div>

            <div className="results-content">
                {activeTab === 'monthly' && <MonthlyResults />}
                {activeTab === 'term' && <TermResults />}
                {activeTab === 'annual' && <AnnualResults />}
            </div>
        </div>
    );
};

export default Results;
