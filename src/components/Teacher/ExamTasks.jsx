import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MdArrowDropDown,
    MdFormatListBulleted,
    MdGridView,
    MdCloudUpload,
    MdErrorOutline,
    MdCheckCircle,
    MdVisibility,
    MdNotifications,
    MdSettings,
    MdBook as MdSubject,
    MdClass,
    MdBook
} from 'react-icons/md';
import { FaBars } from 'react-icons/fa';
import './ExamTasks.css';
import Sidebar from './Sidebar';
import profilePic from '../../assets/Picture16.png';

const ExamTasks = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const tasks = [
        {
            id: 1,
            title: "Qur'an Oral Exam - Term 1",
            class: "Hifz Class A",
            subject: "Tajweed",
            dateHijri: "12th Rajab 1445",
            dateGregorian: "Jan 24, 2024",
            status: "Pending Evaluation",
            icon: <MdBook />,
            type: "pending",
            action: "Upload Result"
        },
        {
            id: 2,
            title: "Mid-Term Fiqh Written Test",
            class: "Alim Course Year 1",
            subject: "Fiqh",
            dateHijri: "10th Rajab 1445",
            dateGregorian: "Jan 22, 2024",
            status: "Result Upload Pending",
            icon: <MdErrorOutline />,
            type: "overdue",
            isOverdue: true,
            action: "Upload Now"
        },
        {
            id: 3,
            title: "Seerah Monthly Quiz",
            class: "Primary Class B",
            subject: "Islamic History",
            dateHijri: "15th Rajab 1445",
            dateGregorian: "Jan 27, 2024",
            status: "Review Marks",
            icon: <MdFormatListBulleted />,
            type: "review",
            action: "Review"
        },
        {
            id: 4,
            title: "Annual Hifz Revision",
            class: "Hifz Class A",
            subject: "Qur'an",
            dateHijri: "1st Rajab 1445",
            dateGregorian: "",
            status: "Marks Submitted",
            icon: <MdCheckCircle />,
            type: "completed",
            action: "Details"
        }
    ];

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="exam-tasks-wrapper">
            <button className="sidebar-mobile-toggle" onClick={toggleSidebar}>
                <FaBars />
            </button>

            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <main className="main-content">
                <header className="content-header">
                    <div className="header-left">
                        <h1>Exam Tasks</h1>
                        <p className="subtitle">Manage your pending evaluations and result uploads for the current term.</p>
                    </div>
                    <div className="header-right header-actions">
                        <div className="sort-section">
                            <span>Sort by:</span>
                            <span className="sort-value">Date (Ascending) <MdArrowDropDown /></span>
                        </div>
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginLeft: '20px' }}>
                            <MdNotifications size={22} color="#718096" />
                            <MdSettings size={22} color="#718096" />
                            <img src={profilePic} alt="User" className="user-avatar" />
                        </div>
                    </div>
                </header>

                <div className="filters-bar-card">
                    <div className="filter-group-row">
                        <div className="filter-item">
                            <span>Class:</span>
                            <button className="filter-select-btn">All <MdArrowDropDown /></button>
                        </div>
                        <div className="filter-item">
                            <span>Subject:</span>
                            <button className="filter-select-btn">All <MdArrowDropDown /></button>
                        </div>
                        <div className="filter-item status-filter">
                            <span>Status:</span>
                            <button className="filter-select-btn active">Pending Actions <MdArrowDropDown /></button>
                        </div>
                    </div>
                    <div className="view-toggle">
                        <div className="toggle-group">
                            <MdFormatListBulleted className="toggle-icon active" />
                            <MdGridView className="toggle-icon" />
                        </div>
                    </div>
                </div>

                <div className="task-list">
                    {tasks.map(task => (
                        <div key={task.id} className={`task-card ${task.isOverdue ? 'overdue' : ''} ${task.type === 'completed' ? 'completed' : ''}`}>
                            <div className={`task-icon-wrap bg-${task.type === 'pending' ? 'green' : task.type === 'overdue' ? 'red' : task.type === 'review' ? 'blue' : 'grey'}-soft`}>
                                {task.icon}
                            </div>
                            <div className="task-info">
                                <h3>{task.title} {task.isOverdue && <span className="overdue-tag">Overdue</span>}</h3>
                                <div className="task-meta">
                                    <span className="meta-item"><MdClass size={14} /> {task.class}</span>
                                    <span className="meta-item">|</span>
                                    <span className="meta-item"><MdSubject size={14} /> {task.subject}</span>
                                </div>
                            </div>
                            <div className="task-date">
                                <span className="date-hijri">{task.dateHijri}</span>
                                <span className="date-gregorian">{task.dateGregorian}</span>
                            </div>
                            <div className={`status-label ${task.isOverdue ? 'upload-pending' : task.type === 'completed' ? 'submitted' : ''}`}>
                                {task.status}
                            </div>
                            <div className="task-action">
                                <Link to="/results-entry" style={{ textDecoration: 'none' }}>
                                    <button className={`action-btn btn-${task.type === 'pending' ? 'upload' : task.type === 'overdue' ? 'overdue' : task.type === 'review' ? 'review' : 'details'}`}>
                                        {task.type === 'pending' ? <MdCloudUpload /> : task.type === 'review' ? null : task.type === 'completed' ? null : <MdCloudUpload />}
                                        {task.type === 'review' && <span style={{ marginRight: '10px', color: '#3182CE', fontWeight: 'normal' }}>Review Marks</span>}
                                        {task.action === 'Review' ? <span><MdVisibility /> Review</span> : task.action}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="load-more">
                    <button className="load-btn">Load More Tasks</button>
                </div>
            </main>
        </div>
    );
};

export default ExamTasks;
