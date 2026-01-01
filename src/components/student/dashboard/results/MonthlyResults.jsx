import React from 'react';
import { FaChartBar, FaCheckCircle, FaTrophy, FaBook, FaLanguage, FaFlask, FaPencilAlt, FaQuran, FaAlignLeft } from 'react-icons/fa';

const MonthlyResults = () => {
    return (
        <div className="monthly-view">
            {/* Overview Stats */}
            <div className="stats-row">
                <div className="stat-card">
                    <div className="stat-icon"><FaChartBar /></div>
                    <div className="stat-content">
                        <h3>88%</h3>
                        <p>Overall Average</p>
                        <span className="stat-trend positive">+2% from last month</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon"><FaCheckCircle /></div>
                    <div className="stat-content">
                        <h3>95%</h3>
                        <p>Attendance</p>
                        <span className="stat-trend">19/20 Days Present</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon"><FaTrophy /></div>
                    <div className="stat-content">
                        <h3>5th</h3>
                        <p>Class Ranking</p>
                        <span className="stat-trend positive">Top 10% of class</span>
                    </div>
                </div>
            </div>

            {/* Month Header */}
            <div className="section-title">
                <h3>October 2023 Performance</h3>
                <a href="#" className="view-past">View Past Months &gt;</a>
            </div>

            {/* Subject Cards */}
            <div className="subjects-grid">
                <SubjectCard
                    title="Quranic Studies"
                    score={95}
                    grade="A+"
                    icon={<FaQuran />}
                    remarks="Excellent recitation. Memorization of Surah Al-Mulk is perfect."
                />
                <SubjectCard
                    title="Arabic Language"
                    score={78}
                    grade="B+"
                    icon={<FaLanguage />}
                    remarks="Good effort. Needs more practice in grammar rules."
                />
                <SubjectCard
                    title="Alimah Course"
                    score={88}
                    grade="A"
                    icon={<FaBook />}
                    remarks="Strong understanding of concepts volume 1."
                />
                <SubjectCard
                    title="Takhassus fi-l-Qur'an"
                    score={74}
                    grade="B"
                    icon={<FaFlask />}
                    remarks="Participates well in class discussions. Dates need memorization."
                />
                <SubjectCard
                    title="Arabic Language"
                    score={91}
                    grade="A+"
                    icon={<FaPencilAlt />}
                    remarks="Creative writing has improved. Grammar needs slight attention."
                />
                <SubjectCard
                    title="Hadith Studies"
                    score={82}
                    grade="A-"
                    icon={<FaAlignLeft />}
                    remarks="Great logic building skills. Project work was outstanding."
                />
            </div>
        </div>
    );
};

const SubjectCard = ({ title, score, grade, icon, remarks }) => {
    return (
        <div className="subject-card">
            <div className="sub-header">
                <div className="sub-icon">{icon}</div>
                <div className="sub-name">{title}</div>
                <div className={`grade-badge ${grade.replace('+', '-plus').replace('-', '-minus')}`}>{grade}</div>
            </div>
            <div className="sub-score">
                <span className="score-big">{score}</span>
                <span className="score-total">/100</span>
            </div>
            <div className="sub-remarks">
                <span className="remark-icon">❝</span>
                {remarks}
            </div>
        </div>
    );
};

export default MonthlyResults;
