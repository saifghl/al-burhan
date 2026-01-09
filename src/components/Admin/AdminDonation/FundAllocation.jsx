import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaSearch,
    FaGraduationCap,
    FaUtensils,
    FaBook,
    FaBuilding,
    FaCloudUploadAlt,
    FaFilePdf,
    FaTrash,
    FaCheck,
    FaInfoCircle
} from 'react-icons/fa';
import AdminMobileNav from './AdminMobileNav';
import './FundAllocation.css';

const FundAllocation = () => {
    // State management for form interactions could go here
    // For now, static structure to match the UI
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const categories = [
        { id: 'student', name: 'Student Aid', icon: <FaGraduationCap /> },
        { id: 'food', name: 'Food', icon: <FaUtensils /> },
        { id: 'books', name: 'Books', icon: <FaBook /> },
        { id: 'infrastructure', name: 'Infrastructure', icon: <FaBuilding /> }
    ];

    return (
        <div className="fund-allocation-container">
            <AdminMobileNav />
            {/* Header Steps */}
            <div className="page-header">
                <div className="breadcrumb">
                    Dashboard &rsaquo; <span>Fund Allocation</span>
                </div>
                <h1 className="page-title">Allocate Funds</h1>
                <p className="page-subtitle">Assign incoming donation funds to specific impact categories and track utilization.</p>
            </div>

            <div className="allocation-content">
                {/* Left Column: Form */}
                <div className="left-column">
                    <div className="allocation-form-card">

                        {/* Select Donation Source */}
                        <div className="form-group">
                            <label className="form-label">Select Donation Source</label>
                            <div className="search-input-wrapper">
                                <FaSearch className="search-icon" />
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="search by donar ID"
                                />
                            </div>
                            <p className="helper-text">Only verified donations with available balance are shown.</p>
                        </div>

                        {/* Allocation Category */}
                        <div className="form-group">
                            <label className="form-label">Allocation Category</label>
                            <div className="category-grid">
                                {categories.map(cat => (
                                    <div
                                        key={cat.id}
                                        className={`category-card ${selectedCategory === cat.id ? 'active' : ''}`}
                                        onClick={() => setSelectedCategory(cat.id)}
                                    >
                                        <div className="category-icon">{cat.icon}</div>
                                        <span className="category-name">{cat.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Amount & Date */}
                        <div className="form-group row-group">
                            <div className="half-width">
                                <label className="form-label">Amount to Allocate</label>
                                <input type="text" className="input-field" defaultValue="₹1200" />
                            </div>
                            <div className="half-width">
                                <label className="form-label">Date of Utilization</label>
                                <input type="text" className="input-field" placeholder="dd/mm/yyyy" />
                            </div>
                        </div>

                        {/* Usage Description */}
                        <div className="form-group">
                            <label className="form-label">Usage Description</label>
                            <textarea
                                className="description-area"
                                placeholder="Describe how these fund will be used"
                            ></textarea>
                        </div>

                        {/* Proof of Utilization */}
                        <div className="form-group">
                            <label className="form-label">Proof of Utilization</label>
                            <div className="upload-area">
                                <div className="upload-icon-circle">
                                    <FaCloudUploadAlt style={{ fontSize: '20px' }} />
                                </div>
                                <div className="upload-text">Click to upload or drag and drop</div>
                                <div className="upload-subtext">PDF, PNG, JPG (max. 5MB)</div>
                            </div>

                            <div className="file-list">
                                <div className="file-item">
                                    <div className="file-icon-wrapper">
                                        <FaFilePdf />
                                    </div>
                                    <div className="file-info">
                                        <span className="file-name">invoice_reconstruction_2023.pdf</span>
                                        <span className="file-size">1.2 MB</span>
                                    </div>
                                    <button className="delete-btn" onClick={() => alert('Deleting file...')}>
                                        <FaTrash size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Column: Summary */}
                <div className="summary-column">
                    <div className="summary-card">
                        <div className="summary-header">
                            <span className="summary-title">Allocation Summary</span>
                            <span className="status-badge">Active</span>
                        </div>

                        <div className="form-group">
                            <label className="form-label" style={{ marginBottom: '10px' }}>Source Donation</label>
                            <div className="donor-info-block">
                                <div className="donor-avatar"></div>
                                <div className="donor-details-stack">
                                    <span className="donor-name">John Doe</span>
                                    <span className="donor-id">Donation ID: #4920</span>
                                </div>
                            </div>
                        </div>

                        <div className="summary-details">
                            <div className="summary-row">
                                <span>Total Donation</span>
                                <span className="value">₹5,000.00</span>
                            </div>
                            <div className="summary-row">
                                <span>Previously Allocated</span>
                                <span className="value">-₹0.00</span>
                            </div>
                            <div className="summary-row green-text">
                                <span>Current Allocation</span>
                                <span className="value">-₹1,200.00</span>
                            </div>
                            <div className="summary-row total">
                                <span>Remaining Balance</span>
                                <span>₹3,800.00</span>
                            </div>
                        </div>

                        <div className="progress-section">
                            <div className="progress-label">
                                <span>Utilization</span>
                                <span>24%</span>
                            </div>
                            <div className="progress-bar-bg">
                                <div className="progress-bar-fill" style={{ width: '24%' }}></div>
                            </div>
                        </div>

                        <button className="confirm-btn" onClick={() => navigate('/admin/utilization-history')}>
                            <FaCheck /> Confirm Allocation
                        </button>
                        <button className="save-draft-btn" onClick={() => alert('Draft Saved!')}>
                            Save Draft
                        </button>
                    </div>

                    <div className="approval-card">
                        <FaInfoCircle className="info-icon" />
                        <div className="approval-content">
                            <h4>Need Approval?</h4>
                            <p>Allocations over ₹2,000 require secondary approval from a senior administrator before disbursement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FundAllocation;
