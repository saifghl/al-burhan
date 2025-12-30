import React, { useState } from 'react';
import './Admission.css';
import admissionImage from '../../assets/admission.png';
import { FaCheckCircle, FaFileAlt, FaClipboardList, FaSearch, FaPhoneAlt, FaEnvelope, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Admission = () => {
    const [openSection, setOpenSection] = useState('eligibility');

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="admission-page">
            {/* Hero Section */}
            <div className="admission-hero" style={{ backgroundImage: `url(${admissionImage})` }}>
                <div className="hero-content">
                    <div className="academic-badge">Academic Year 2024–2025</div>
                    <h1 className="hero-title">Begin Your Spiritual Journey</h1>
                    <p className="hero-subtitle">
                        “Seek knowledge from the cradle to the grave.”<br />
                        Join a community dedicated to excellence in both religious and modern education.
                    </p>
                    <button className="apply-btn">Apply Now</button>
                </div>
            </div>

            {/* Info Container */}
            <div className="info-container-wrapper">
                <div className="info-main-card">

                    {/* Left: Guidelines & Info */}
                    <div className="info-left">
                        <h2 className="section-title">Guidelines & Info</h2>
                        <div className="accordion">
                            {/* Eligibility Criteria */}
                            <div className="accordion-item">
                                <div
                                    className={`accordion-header ${openSection === 'eligibility' ? 'active' : ''}`}
                                    onClick={() => toggleSection('eligibility')}
                                >
                                    <div className="header-left">
                                        <FaCheckCircle className="header-icon" />
                                        <span>Eligibility Criteria</span>
                                    </div>
                                    {openSection === 'eligibility' ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                                {openSection === 'eligibility' && (
                                    <div className="accordion-content">
                                        <ul>
                                            <li>Minimum age: 5 years for primary.</li>
                                            <li>Basic recitation knowledge preferred.</li>
                                            <li>Guardian interview mandatory.</li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Required Documents */}
                            <div className="accordion-item">
                                <div
                                    className={`accordion-header ${openSection === 'documents' ? 'active' : ''}`}
                                    onClick={() => toggleSection('documents')}
                                >
                                    <div className="header-left">
                                        <FaFileAlt className="header-icon" />
                                        <span>Required Documents</span>
                                    </div>
                                    {openSection === 'documents' ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                                {openSection === 'documents' && (
                                    <div className="accordion-content">
                                        <ul>
                                            <li>Birth Certificate</li>
                                            <li>Previous School Records</li>
                                            <li>Passport Sized Photos</li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Admission Process */}
                            <div className="accordion-item">
                                <div
                                    className={`accordion-header ${openSection === 'process' ? 'active' : ''}`}
                                    onClick={() => toggleSection('process')}
                                >
                                    <div className="header-left">
                                        <FaClipboardList className="header-icon" />
                                        <span>Admission Process</span>
                                    </div>
                                    {openSection === 'process' ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                                {openSection === 'process' && (
                                    <div className="accordion-content">
                                        <p>Our process involves an initial application, followed by an interview and assessment.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right: Track Application */}
                    <div className="info-right">
                        <div className="track-card">
                            <h3 className="track-title"><FaSearch className="track-icon-main" /> Track Application</h3>
                            <p className="track-desc">Enter your Application ID to check the current status of your admission request.</p>

                            <div className="track-input-group">
                                <input type="text" placeholder="Application ID" />
                                <button className="check-btn">Check</button>
                            </div>

                            <div className="help-section">
                                <h4>Need Help?</h4>
                                <p>Contact our admissions office for assistance.</p>
                                <div className="contact-row">
                                    <FaPhoneAlt className="contact-icon-small" />
                                    <span>+1 234 567 890</span>
                                </div>
                                <div className="contact-row">
                                    <FaEnvelope className="contact-icon-small" />
                                    <span>admissions@madarsa.edu</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Online Admission Form */}
            <div className="admission-form-wrapper">
                <div className="admission-form-container">
                    <h2 className="form-head-title">Online Admission Form</h2>
                    <p className="form-head-subtitle">Please fill out the details accurately. Fields marked with <span className="red-asterisk">*</span> are mandatory.</p>

                    {/* Section 1: Student Details */}
                    <div className="form-step-section">
                        <div className="step-badge-row">
                            <span className="step-badge">1</span>
                            <h3 className="step-title">Student Details</h3>
                        </div>
                        <div className="form-grid-row">
                            <div className="form-group-col">
                                <label>Full Name <span className="red-asterisk">*</span></label>
                                <input type="text" placeholder="Enter Your Full Name" className="admission-input" />
                            </div>
                            <div className="form-group-col">
                                <label>Date of Birth <span className="red-asterisk">*</span></label>
                                <div className="date-input-container">
                                    <input type="text" placeholder="dd/mm/yyyy" className="admission-input" />
                                    <span className="calendar-icon">📅</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-grid-row">
                            <div className="form-group-col">
                                <label>Gender <span className="red-asterisk">*</span></label>
                                <select className="admission-select">
                                    <option>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="form-group-col">
                                <label>Nationality</label>
                                <select className="admission-select">
                                    <option>Nationality</option>
                                    <option>Indian</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Guardian Information */}
                    <div className="form-step-section">
                        <div className="step-badge-row">
                            <span className="step-badge">2</span>
                            <h3 className="step-title">Guardian Information</h3>
                        </div>
                        <div className="form-grid-row">
                            <div className="form-group-col">
                                <label>Parent/Guardian name <span className="red-asterisk">*</span></label>
                                <input type="text" placeholder="Enter Guardian Full Name" className="admission-input" />
                            </div>
                            <div className="form-group-col">
                                <label>Relationship</label>
                                <input type="text" placeholder="eg. Father, Uncle" className="admission-input" />
                            </div>
                        </div>
                        <div className="form-grid-row">
                            <div className="form-group-col">
                                <label>Phone Number</label>
                                <input type="text" placeholder="+91 7823050012" className="admission-input" />
                            </div>
                            <div className="form-group-col">
                                <label>Email address</label>
                                <input type="email" placeholder="quardian@gmail.com" className="admission-input" />
                            </div>
                        </div>
                        <div className="form-group-full">
                            <label>Residential address <span className="red-asterisk">*</span></label>
                            <textarea placeholder="Full address including city and zip code" className="admission-textarea"></textarea>
                        </div>
                    </div>

                    {/* Section 3: Document Upload */}
                    <div className="form-step-section">
                        <div className="step-badge-row">
                            <span className="step-badge">3</span>
                            <h3 className="step-title">Document Upload</h3>
                        </div>
                        <div className="upload-grid">
                            <div className="upload-box">
                                <FaFileAlt className="upload-icon-large" />
                                <h4>Birth Certificate</h4>
                                <p>Drag & drop or click to upload</p>
                                <span className="upload-note">PDF, JPG up to 3MB</span>
                            </div>
                            <div className="upload-box">
                                <FaFileAlt className="upload-icon-large" /> {/* Using FaFileAlt as placeholder for generic image icon */}
                                <h4>Student Photograph</h4>
                                <p>Drag & drop or click to upload</p>
                                <span className="upload-note">JPG, PNG up to 2MB</span>
                            </div>
                        </div>
                    </div>

                    {/* Form Actions */}
                    <div className="form-actions-row">
                        <button className="btn-save-draft">Save Draft</button>
                        <button className="btn-submit-application">Submit Application</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Admission;
