import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPen, FaCheckCircle } from 'react-icons/fa';
import './CreateExam.css';

const CreateExam = () => {
    const navigate = useNavigate();
    return (
        <div className="create-exam-page">
            <div className="ce-breadcrumb">
                Dashboard / Exams / <span>Create Exam</span>
            </div>

            <div className="ce-header">
                <h1>Create New Exam</h1>
                <p>Define the structure and details of the examination. Once created, you can proceed to student allocation and marks entry.</p>
            </div>

            <div className="ce-form-card">
                <div className="ce-card-header">
                    <FaPen className="ce-header-icon" />
                    <h2>Exam Details</h2>
                </div>

                <form className="ce-form">
                    <div className="ce-form-group full-width">
                        <label>Exam Name</label>
                        <input type="text" placeholder="e.g. Mid term Assessment 2024" />
                    </div>

                    <div className="ce-form-row">
                        <div className="ce-form-group half-width">
                            <label>Exam Type</label>
                            <select defaultValue="">
                                <option value="" disabled>Select type(e.g., Written)</option>
                                <option>Written</option>
                                <option>Oral</option>
                                <option>Practical</option>
                            </select>
                        </div>
                        <div className="ce-form-group half-width">
                            <label>Class / Grade</label>
                            <select defaultValue="">
                                <option value="" disabled>Select Class (e.g., Grade 10)</option>
                                <option>Grade 8</option>
                                <option>Grade 9</option>
                                <option>Grade 10</option>
                                <option>Grade 11</option>
                                <option>Grade 12</option>
                            </select>
                        </div>
                    </div>

                    <div className="ce-form-row">
                        <div className="ce-form-group half-width">
                            <label>Subject</label>
                            <select defaultValue="">
                                <option value="" disabled>Select Subject</option>
                                <option>Mathematics</option>
                                <option>Science</option>
                                <option>English</option>
                                <option>History</option>
                                <option>Physics</option>
                            </select>
                        </div>
                        <div className="ce-form-group half-width">
                            <label>Maximum Marks</label>
                            <div className="ce-input-suffix-wrapper">
                                <input type="number" placeholder="e.g., 100" />
                                <span className="suffix">Points</span>
                            </div>
                        </div>
                    </div>

                    <div className="ce-form-group full-width">
                        <label>Exam Date</label>
                        <input type="date" placeholder="mm/dd/yyyy" />
                        <span className="ce-helper-text">Students will see this date in their upcoming schedule.</span>
                    </div>
                </form>

                <div className="ce-form-actions">
                    <button className="ce-btn-ghost">Save as Draft</button>
                    <button className="ce-btn-green" onClick={() => navigate('/admin/enter-marks')}><FaCheckCircle /> Open for Marks Entry</button>
                </div>
            </div>
        </div>
    );
};

export default CreateExam;
