import React, { useState } from 'react';
import './UploadActivity.css';
import { FaCloudUploadAlt, FaEye, FaMobileAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const UploadActivity = () => {
    const navigate = useNavigate();
    const [activityDetails, setActivityDetails] = useState({
        title: '',
        category: 'Event',
        date: '',
        description: ''
    });

    const [visibility, setVisibility] = useState({
        student: true,
        parent: true,
        teacher: false,
        public: false
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setActivityDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleVisibilityToggle = (key) => {
        setVisibility(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <div className="upload-activity-container">
            <div className="ua-header">
                <h1 className="ua-title">Upload Activity</h1>
                <p className="ua-subtitle">Create and broadcast new activities, events, or achievements to portals.</p>
                <div className="ua-header-actions">
                    <button className="ua-btn-secondary">Save Draft</button>
                    <button className="ua-btn-primary">Publish Activity</button>
                </div>
            </div>

            <div className="ua-content-grid">
                <div className="ua-main-column">
                    {/* Activity Details Card */}
                    <div className="ua-card">
                        <h2 className="ua-card-title">📝 Activity Details</h2>

                        <div className="ua-form-group">
                            <label>Activity Title *</label>
                            <input
                                type="text"
                                name="title"
                                value={activityDetails.title}
                                onChange={handleInputChange}
                                placeholder="e.g. Annual Quran Recitation competition"
                                className="ua-input"
                            />
                        </div>

                        <div className="ua-form-row">
                            <div className="ua-form-group half">
                                <label>Category *</label>
                                <select
                                    name="category"
                                    value={activityDetails.category}
                                    onChange={handleInputChange}
                                    className="ua-select"
                                >
                                    <option value="Event">Event</option>
                                    <option value="Notice">Notice</option>
                                    <option value="Achievement">Achievement</option>
                                </select>
                            </div>
                            <div className="ua-form-group half">
                                <label>Activity Date *</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={activityDetails.date}
                                    onChange={handleInputChange}
                                    className="ua-input"
                                />
                            </div>
                        </div>

                        <div className="ua-form-group">
                            <label>Description</label>
                            <div className="ua-rich-text-editor">
                                <div className="ua-rte-toolbar">
                                    <span>B</span> <span>I</span> <span>list</span> <span>link</span>
                                </div>
                                <textarea
                                    name="description"
                                    value={activityDetails.description}
                                    onChange={handleInputChange}
                                    placeholder="Describe the detail of activity"
                                    className="ua-textarea"
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Media Gallery Card */}
                    <div className="ua-card">
                        <h2 className="ua-card-title">🖼️ Media Gallery</h2>
                        <div className="ua-upload-area">
                            <div className="ua-upload-placeholder">
                                <FaCloudUploadAlt className="ua-upload-icon" />
                                <h3>Click to upload or drag and drop</h3>
                                <p>SVG, PNG, JPG or GIF (max. 10MB)</p>
                                <button className="ua-browse-btn">Browse Files</button>
                            </div>
                        </div>
                        <div className="ua-upload-actions">
                            <button className="ua-add-btn">Add</button>
                        </div>
                    </div>
                </div>

                <div className="ua-side-column">
                    {/* Visibility Settings Card */}
                    <div className="ua-card">
                        <h2 className="ua-card-title">👁️ Visibility Settings</h2>
                        <div className="ua-visibility-list">
                            <div className="ua-visibility-item">
                                <div className="ua-vis-icon blue">🎓</div>
                                <div className="ua-vis-info">
                                    <h4>Student Portal</h4>
                                    <p>Visible to all students</p>
                                </div>
                                <label className="ua-toggle">
                                    <input
                                        type="checkbox"
                                        checked={visibility.student}
                                        onChange={() => handleVisibilityToggle('student')}
                                    />
                                    <span className="ua-slider round"></span>
                                </label>
                            </div>

                            <div className="ua-visibility-item">
                                <div className="ua-vis-icon purple">👨‍👩‍👧</div>
                                <div className="ua-vis-info">
                                    <h4>Parent Portal</h4>
                                    <p>Visible to parents</p>
                                </div>
                                <label className="ua-toggle">
                                    <input
                                        type="checkbox"
                                        checked={visibility.parent}
                                        onChange={() => handleVisibilityToggle('parent')}
                                    />
                                    <span className="ua-slider round"></span>
                                </label>
                            </div>

                            <div className="ua-visibility-item">
                                <div className="ua-vis-icon green">👤</div>
                                <div className="ua-vis-info">
                                    <h4>Teacher Portal</h4>
                                    <p>Internal updates</p>
                                </div>
                                <label className="ua-toggle">
                                    <input
                                        type="checkbox"
                                        checked={visibility.teacher}
                                        onChange={() => handleVisibilityToggle('teacher')}
                                    />
                                    <span className="ua-slider round"></span>
                                </label>
                            </div>

                            <div className="ua-visibility-item">
                                <div className="ua-vis-icon orange">🌐</div>
                                <div className="ua-vis-info">
                                    <h4>Public Website</h4>
                                    <p>Show on homepage</p>
                                </div>
                                <label className="ua-toggle">
                                    <input
                                        type="checkbox"
                                        checked={visibility.public}
                                        onChange={() => handleVisibilityToggle('public')}
                                    />
                                    <span className="ua-slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Preview Card */}
                    <div className="ua-card">
                        <h2 className="ua-card-title">Mobile Preview</h2>
                        <div className="ua-mobile-mockup">
                            <div className="ua-mobile-header">
                                <FaMobileAlt /> Activity Feed
                            </div>
                            <div className="ua-mobile-screen">
                                <div className="ua-mock-post">
                                    <div className="ua-mock-img"></div>
                                    <div className="ua-mock-lines"></div>
                                    <div className="ua-mock-lines"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadActivity;
