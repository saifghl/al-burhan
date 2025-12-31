import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaFilePdf, FaHeadphones, FaVideo, FaSearch, FaBookOpen } from 'react-icons/fa';
import './StudyMaterial.css';

const StudyMaterial = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('all');

    const tabs = [
        { id: 'all', label: 'All', icon: null },
        { id: 'quran', label: "Qur'an Studies", icon: <FaBookOpen /> },
        { id: 'hadith', label: "Hadith Studies", icon: <FaBookOpen /> }, // Using generic for now, can swap
        { id: 'fiqh', label: "Fiqh", icon: <FaBookOpen /> },
        { id: 'arabic', label: "Arabic", icon: <FaBookOpen /> },
    ];

    const materials = [
        {
            id: 1,
            type: 'video',
            category: 'quran',
            title: 'Surah Al-Mulk - Tafseer Part 1',
            description: 'Detailed explanation of the first 10 verses focusing on linguistics.',
            meta: '45 mins',
            date: 'Live Class • Starts at 5:00 PM', // Reusing field for variation if needed, or specific type
            action: 'Watch'
        },
        {
            id: 2,
            type: 'pdf',
            category: 'quran',
            title: 'Tajweed Rules Summary Sheet',
            description: 'A quick reference guide for Noon Sakinah and Tanween rules.',
            meta: '2.4 MB',
            action: 'Download'
        },
        {
            id: 3,
            type: 'audio',
            category: 'arabic', // Just assigning categories for filtering test
            title: 'Morning Adhkar Recitation',
            description: 'Recorded by Sheikh Al-Sudais for daily practice.',
            meta: '12 mins',
            action: 'Listen'
        },
        {
            id: 4,
            type: 'live',
            category: 'fiqh',
            title: 'Zoom Class: Fiqh of Salah',
            description: 'Weekly live session. Password: 123456',
            meta: 'Starts at 5:00 PM',
            action: 'Join'
        }
    ];

    const filteredMaterials = activeTab === 'all'
        ? materials
        : materials.filter(m => m.category === activeTab || (activeTab === 'quran' && m.category === 'quran')); // simplistic filter

    const renderIcon = (type) => {
        switch (type) {
            case 'video': return <div className="material-icon video"><FaPlay /></div>;
            case 'pdf': return <div className="material-icon pdf"><FaFilePdf /></div>;
            case 'audio': return <div className="material-icon audio"><FaHeadphones /></div>;
            case 'live': return <div className="material-icon live"><FaVideo /></div>;
            default: return <div className="material-icon"><FaBookOpen /></div>;
        }
    };

    const renderBadge = (type, meta) => {
        let label = '';
        let className = 'badge';
        switch (type) {
            case 'video': label = 'Video Lecture'; className += ' purple'; break;
            case 'pdf': label = 'PDF Document'; className += ' red'; break;
            case 'audio': label = 'Audio Recitation'; className += ' yellow'; break;
            case 'live': label = 'Live Class'; className += ' blue'; break;
            default: label = 'Resource';
        }
        return (
            <div className="meta-row">
                <span className={className}>{label}</span>
                <span className="meta-info">• {meta}</span>
            </div>
        );
    };

    const getActionBtnClass = (type) => {
        switch (type) {
            case 'video': return 'action-btn watch';
            case 'pdf': return 'action-btn download';
            case 'audio': return 'action-btn listen';
            case 'live': return 'action-btn join';
            default: return 'action-btn';
        }
    };

    return (
        <div className="study-material-container">
            <div className="breadcrumb-nav">
                <span onClick={() => navigate(-1)} className="breadcrumb-link">Back</span> &gt; <span className="current">Study Material</span>
            </div>

            <div className="header-section">
                <h1>Study Material</h1>
                <p>Access notes, lectures, and digital resources for your classes.</p>
            </div>

            <div className="search-bar-container">
                {/* Placeholder for search functionality if needed, visually just a container or empty for now as per design which had tabs mainly */}
            </div>

            <div className="tabs-container">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.icon && <span className="tab-icon">{tab.icon}</span>}
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="materials-list-header">
                <h3>Recent Uploads</h3>
                <a href="#" className="view-all-link">View All</a>
            </div>

            <div className="materials-list">
                {filteredMaterials.map(item => (
                    <div key={item.id} className="material-card">
                        <div className="material-left">
                            {renderIcon(item.type)}
                            <div className="material-info">
                                {renderBadge(item.type, item.meta)}
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <div className="material-right">
                            <button className={getActionBtnClass(item.type)}>
                                {item.type === 'video' && <FaPlay style={{ marginRight: '8px' }} />}
                                {item.type === 'pdf' && <FaFilePdf style={{ marginRight: '8px' }} />}
                                {item.type === 'audio' && <FaPlay style={{ marginRight: '8px' }} />}
                                {item.type === 'live' && <FaVideo style={{ marginRight: '8px' }} />}
                                {item.action}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudyMaterial;
