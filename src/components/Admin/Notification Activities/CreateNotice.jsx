import React, { useState } from 'react';
import { FaPlay, FaCloudUploadAlt, FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, FaLink, FaImage } from 'react-icons/fa';
import './CreateNotice.css';

const CreateNotice = () => {
    const [targetAudience, setTargetAudience] = useState({
        student: true,
        parent: false,
        teacher: false,
        public: false
    });

    const handleAudienceChange = (key) => {
        setTargetAudience(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="create-notice-container">
            {/* Header */}
            <div className="cn-header-row">
                <div className="cn-header-info">
                    <h1>Create New Notice</h1>
                    <p>Draft and publish important announcements to student and staff portals.</p>
                </div>
                <div className="cn-header-actions">
                    <button className="cn-btn-cancel">Cancel</button>
                    <button className="cn-btn-draft">Save Draft</button>
                    <button className="cn-btn-publish">
                        <FaPlay className="btn-icon" /> Publish Notice
                    </button>
                </div>
            </div>

            <div className="cn-content-grid">
                {/* Main Form Area */}
                <div className="cn-main-card">
                    <div className="cn-form-group">
                        <label>Notice Title <span className="required">*</span></label>
                        <input type="text" placeholder="e.g. Ramadan Holiday Schedule 2024" className="cn-input" />
                    </div>

                    <div className="cn-form-group">
                        <label>Content <span className="required">*</span></label>
                        <div className="cn-editor-container">
                            <div className="cn-editor-toolbar">
                                <button className="toolbar-btn"><FaBold /></button>
                                <button className="toolbar-btn"><FaItalic /></button>
                                <button className="toolbar-btn"><FaUnderline /></button>
                                <span className="toolbar-separator">|</span>
                                <button className="toolbar-btn"><FaListUl /></button>
                                <button className="toolbar-btn"><FaListOl /></button>
                                <span className="toolbar-separator">|</span>
                                <button className="toolbar-btn"><FaLink /></button>
                                <button className="toolbar-btn"><FaImage /></button>
                            </div>
                            <textarea
                                className="cn-textarea"
                                placeholder="Type your notice detail here..."
                                rows="12"
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="cn-sidebar">
                    {/* Target Audience Card */}
                    <div className="cn-side-card">
                        <h3 className="cn-card-title">
                            <span className="card-icon-dot target"></span> Target Audience
                        </h3>
                        <div className="cn-audience-list">
                            <label className="checkbox-row">
                                <span className={`custom-radio ${targetAudience.student ? 'checked' : ''}`}></span>
                                <input
                                    type="checkbox"
                                    checked={targetAudience.student}
                                    onChange={() => handleAudienceChange('student')}
                                    hidden
                                />
                                Student Portal
                            </label>
                            <label className="checkbox-row">
                                <span className={`custom-radio ${targetAudience.parent ? 'checked' : ''}`}></span>
                                <input
                                    type="checkbox"
                                    checked={targetAudience.parent}
                                    onChange={() => handleAudienceChange('parent')}
                                    hidden
                                />
                                Parent Portal
                            </label>
                            <label className="checkbox-row">
                                <span className={`custom-radio ${targetAudience.teacher ? 'checked' : ''}`}></span>
                                <input
                                    type="checkbox"
                                    checked={targetAudience.teacher}
                                    onChange={() => handleAudienceChange('teacher')}
                                    hidden
                                />
                                Teacher Portal
                            </label>
                            <label className="checkbox-row">
                                <span className={`custom-radio ${targetAudience.public ? 'checked' : ''}`}></span>
                                <input
                                    type="checkbox"
                                    checked={targetAudience.public}
                                    onChange={() => handleAudienceChange('public')}
                                    hidden
                                />
                                Public Website
                            </label>
                        </div>
                    </div>

                    {/* Schedule Card */}
                    <div className="cn-side-card">
                        <h3 className="cn-card-title">
                            <span className="card-icon-dot schedule"></span> Schedule
                        </h3>
                        <div className="cn-date-group">
                            <label>Publish Date</label>
                            <input type="text" placeholder="DD/MM/YYYY" className="cn-input-date" />
                        </div>
                        <div className="cn-date-group">
                            <label>Expiry Date <span className="optional">(Optional)</span></label>
                            <input type="text" placeholder="DD/MM/YYYY" className="cn-input-date" />
                        </div>
                    </div>

                    {/* Attachments Card */}
                    <div className="cn-side-card">
                        <h3 className="cn-card-title">
                            <span className="card-icon-dot attachment"></span> Attachments
                        </h3>
                        <div className="cn-upload-zone">
                            <div className="upload-icon-circle">
                                <FaCloudUploadAlt />
                            </div>
                            <p>Click to upload or drag and drop</p>
                            <span className="upload-hint">PDF, PNG, JPG (MAX. 10MB)</span>
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="cn-info-box">
                        <span className="info-icon">i</span>
                        <p>Published notices will appear <strong>instantly</strong> on the selected portals upon saving.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateNotice;
