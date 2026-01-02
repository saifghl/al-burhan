import React, { useState } from 'react';
import {
    FaBars,
    FaFileImport,
    FaEye,
    FaPaperPlane,
    FaDownload,
    FaMosque, // Using FaMosque as a placeholder for the organization icon
    FaQrcode
} from 'react-icons/fa';
import AdminMobileNav from './AdminMobileNav';
import './GenerateReceipt.css';

const GenerateReceipt = () => {
    // Basic state to handle live preview updates (optional but good for a "Live Preview" feature)
    const [formData, setFormData] = useState({
        orgName: 'AL-Noor Institute',
        orgAddress: '123 Islamic Center Drive\nSpringfield, IL 62704',
        donorName: 'Fatima Al-Zahra',
        donorEmail: 'fatima.az@example.com',
        amount: '500.00',
        date: '2023-10-24', // Default to image date for visual match
        purpose: 'General Fund',
        txnId: 'TXN-2024'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleReset = () => {
        setFormData({
            orgName: 'AL-Noor Institute', // Preserve Org defaults
            orgAddress: '123 Islamic Center Drive\nSpringfield, IL 62704',
            donorName: '',
            donorEmail: '',
            amount: '',
            date: new Date().toISOString().split('T')[0], // Reset to today
            purpose: '',
            txnId: ''
        });
    };

    return (
        <div className="generate-receipt-container">
            <AdminMobileNav />
            {/* Header */}
            <div className="receipt-header">
                <div className="receipt-breadcrumb">
                    Dashboard &rsaquo; Receipts &rsaquo; <span>Generator</span>
                </div>
                <div className="receipt-title-row">
                    <div>
                        <h1 className="receipt-page-title">Generate New Receipt</h1>
                        <p className="receipt-subtitle">Create, preview, and send official donation receipts.</p>
                    </div>
                    <div className="receipt-header-actions">
                        <button className="header-action-btn active" onClick={() => alert('Switched to Manual Entry Mode')}>
                            <FaBars /> Manual Entry
                        </button>
                        <button className="header-action-btn" onClick={() => alert('Opening Bulk Import Dialog...')}>
                            <FaFileImport /> Bulk Import
                        </button>
                    </div>
                </div>
            </div>

            <div className="receipt-content">
                {/* Left Column: Form */}
                <div className="receipt-form-card">
                    <div className="form-field">
                        <label className="form-label">Madarsa / Organization</label>
                        <input
                            type="text"
                            name="orgName"
                            className="form-input"
                            value={formData.orgName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-field">
                        <label className="form-label">Donor Name</label>
                        <input
                            type="text"
                            name="donorName"
                            className="form-input"
                            value={formData.donorName}
                            onChange={handleInputChange}
                            placeholder="e.g. Fatima Al-Zahra"
                        />
                    </div>

                    <div className="form-field">
                        <label className="form-label">Email Address</label>
                        <input
                            type="email"
                            name="donorEmail"
                            className="form-input"
                            value={formData.donorEmail}
                            onChange={handleInputChange}
                            placeholder="donor@example.com"
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-field half-width">
                            <label className="form-label">Amount</label>
                            <input
                                type="text"
                                name="amount"
                                className="form-input"
                                value={formData.amount}
                                onChange={handleInputChange}
                                placeholder="₹ 0.0"
                            />
                        </div>
                        <div className="form-field half-width">
                            <label className="form-label">Date</label>
                            <input
                                type="date"
                                name="date"
                                className="form-input"
                                value={formData.date}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-field half-width">
                            <label className="form-label">Purpose</label>
                            <input
                                type="text"
                                name="purpose"
                                className="form-input"
                                value={formData.purpose}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-field half-width">
                            <label className="form-label">Transaction ID</label>
                            <input
                                type="text"
                                name="txnId"
                                className="form-input"
                                value={formData.txnId}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <button className="generate-btn" onClick={() => alert(`Generating receipt for ${formData.donorName}... Email sent to ${formData.donorEmail}!`)}>
                        <FaPaperPlane /> Generate & Email Receipt
                    </button>

                    <div className="form-actions-footer">
                        <button className="preview-pdf-btn" style={{ width: 'auto', flex: 1 }} onClick={() => alert('Generating PDF Preview...')}>
                            <FaDownload /> Preview PDF
                        </button>
                        <button className="reset-link" style={{ width: 'auto', marginLeft: '16px' }} onClick={handleReset}>
                            Reset
                        </button>
                    </div>
                </div>

                {/* Right Column: Live Preview */}
                <div className="live-preview-section">
                    <div className="preview-header">
                        <div className="preview-label">
                            <FaEye style={{ color: '#3b82f6' }} /> Live Preview
                        </div>
                        <span className="ready-badge">Ready to send</span>
                    </div>

                    <div className="preview-container">
                        <div className="receipt-paper">

                            {/* Paper Header */}
                            <div className="receipt-top">
                                <div className="org-block">
                                    <div className="org-logo-placeholder">
                                        <FaMosque />
                                    </div>
                                    <div className="org-info">
                                        <h3>{formData.orgName}</h3>
                                        <p>123 Islamic Center Drive<br />Springfield, IL 62704</p>
                                    </div>
                                </div>
                                <div className="receipt-meta">
                                    <h3>Receipt</h3>
                                    <p># RCT-2023-0891</p>
                                    <p>Date: {formData.date}</p>
                                </div>
                            </div>

                            {/* Received From */}
                            <div className="received-from-box">
                                <span className="box-label">Received From</span>
                                <span className="donor-name-preview">{formData.donorName}</span>
                                <span className="donor-email-preview">{formData.donorEmail}</span>
                            </div>

                            {/* Line Items */}
                            <table className="receipt-table">
                                <thead>
                                    <tr>
                                        <th>Description / Purpose</th>
                                        <th style={{ textAlign: 'center' }}>Ref #</th>
                                        <th style={{ textAlign: 'right' }}>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div style={{ fontWeight: 700, color: '#0f172a' }}>General Donation</div>
                                            <div style={{ color: '#64748b', fontSize: '11px' }}>Contribution to Student Sponsorship Fund</div>
                                        </td>
                                        <td style={{ textAlign: 'center', color: '#64748b' }}>TXN-882910</td>
                                        <td className="amount-col">₹{formData.amount}</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* Summary */}
                            <div className="receipt-summary">
                                <div className="summary-line">
                                    <span>Subtotal</span>
                                    <span>₹{formData.amount}</span>
                                </div>
                                <div className="summary-line total-line">
                                    <span>Total Received</span>
                                    <span className="total-amount">₹{formData.amount}</span>
                                </div>
                            </div>

                            {/* Footer / Signature */}
                            <div className="signature-section">
                                <div className="sig-line">
                                    <img src="" alt="" style={{ height: '30px', display: 'block', margin: '0 auto' }} />
                                    {/* Mock signature placeholder if needed, or just line */}
                                    <svg width="80" height="30" viewBox="0 0 100 40" style={{ display: 'block', margin: '0 auto -10px' }}>
                                        <path d="M10,30 Q30,5 50,30 T90,20" fill="none" stroke="#000" strokeWidth="2" />
                                    </svg>
                                    <div style={{ marginTop: '10px' }}>Authorized Signature</div>
                                </div>
                                <div className="stamp-circle"></div>
                            </div>

                            <div className="receipt-footer-text">
                                Thank you for your generous donation. Al-Noor Institute is a registered 501(c)(3) non-profit organization.
                                <br />No goods or services were provided in exchange for this contribution.
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenerateReceipt;
