import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaBookOpen, FaBook } from 'react-icons/fa';
import './SubjectDetail.css';

const SubjectDetail = () => {
    const { subjectId } = useParams();
    const navigate = useNavigate();
    const [subject, setSubject] = useState(null);

    // Mock Data mimicking an API response
    // API INTEGRATION POINT: Replace this with a fetch call
    const subjectsData = {
        'quran-studies': {
            title: "Qur'an Studies",
            tag: "Core Subject",
            description: "A comprehensive journey through the Holy Qur'an, focusing on correct recitation, memorization, and deep understanding of the divine message.",
            topics: [
                "Nazirah with Tajweed",
                "Partial / Complete Hifz",
                "Qur'an Translation (Urdu & Arabic)",
                "Tafseer (Jalalayn / Ibn Kathir)",
                "Uloom-ul-Qur'an",
                "Makki & Madani",
                "Nasikh & Mansukh"
            ]
        },
        // Fallback for demo purposes if other IDs are clicked
        'default': {
            title: "Islamic Studies",
            tag: "Core Subject",
            description: "An in-depth study of Islamic theology, history, and jurisprudence to build a strong foundation in faith and practice.",
            topics: [
                "Fiqh (Jurisprudence)",
                "Seerah (Life of Prophet)",
                "Hadith Studies",
                "Islamic History",
                "Aqeedah (Creed)"
            ]
        }
    };

    useEffect(() => {
        // Simulate API fetch delay
        const data = subjectsData[subjectId] || subjectsData['default'];
        setSubject(data);
    }, [subjectId]);

    if (!subject) return <div className="loading">Loading...</div>;

    return (
        <div className="subject-detail-container">
            <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

            <div className="subject-card">
                <div className="card-header">
                    <span className="subject-tag">{subject.tag}</span>
                    <FaBookOpen className="subject-icon-top" />
                </div>

                <h1 className="subject-title">{subject.title}</h1>
                <p className="subject-description">{subject.description}</p>

                <div className="topics-section">
                    <h3><FaBook className="topic-icon" /> Topics Covered</h3>
                    <div className="topics-list">
                        {subject.topics.map((topic, index) => (
                            <span key={index} className="topic-badge">{topic}</span>
                        ))}
                    </div>
                </div>

                <div className="card-footer">
                    <button className="study-material-btn"><FaBookOpen /> Study Material</button>
                </div>
            </div>
        </div>
    );
};

export default SubjectDetail;
