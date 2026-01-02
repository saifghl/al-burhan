import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaIdCard, FaExclamationTriangle, FaSave } from 'react-icons/fa';
import './PublicRequests.css';

const MadarsaIdGeneration = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [madarsaId, setMadarsaId] = useState('');

    const handleSave = () => {
        navigate(`/admin/public-requests/${id}/success`);
    };

    return (
        <div className="public-requests-container">
            {/* Header with Back Link */}
            <div style={{ marginBottom: '10px' }}>
                <span style={{ color: '#64A926', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', fontWeight: '500' }} onClick={() => navigate(-1)}>
                    <FaArrowLeft style={{ fontSize: '10px' }} /> Back to Admissions
                </span>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 className="page-title" style={{ justifyContent: 'center' }}>Create Madarsa ID</h1>
                <p className="page-subtitle">Assign a unique ID to finalize registration for the student.</p>
            </div>

            <div className="id-gen-card">

                <h4 style={{ fontSize: '12px', color: '#64A926', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Student Summary</h4>
                <div className="student-summary">
                    <div>
                        <label style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginBottom: '3px' }}>Student Name</label>
                        <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e293b' }}>Ahmed Ali</div>
                    </div>
                    <div>
                        <label style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginBottom: '3px' }}>Class</label>
                        <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e293b' }}>Class 5</div>
                    </div>
                    <div>
                        <label style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginBottom: '3px' }}>Section</label>
                        <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e293b' }}>Section A</div>
                    </div>
                    <div>
                        <label style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginBottom: '3px' }}>Guardian Phone</label>
                        <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e293b' }}>+92 300 1234567</div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="filter-label form-label-required">Madarsa Student ID</label>
                    <div className="filter-input-wrapper">
                        <FaIdCard className="filter-icon" />
                        <input
                            type="text"
                            className="filter-input"
                            placeholder="e.g. MAD-2025-0007"
                            value={madarsaId}
                            onChange={(e) => setMadarsaId(e.target.value)}
                        />
                    </div>
                    <p style={{ fontSize: '11px', color: '#94a3b8', marginTop: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <FaInfoCircleIcon /> This ID will be used as the Login ID for both Student and Parent portals.
                    </p>
                </div>

                <div className="notice-box">
                    <FaExclamationTriangle className="notice-icon" />
                    <div className="notice-text">
                        <h5>Important Notice</h5>
                        <p>Madarsa ID cannot be changed once saved. Please verify the ID against official records before proceeding.</p>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
                    <button className="btn-secondary-action" style={{ padding: '10px 25px' }} onClick={() => navigate(-1)}>Back</button>
                    <button className="btn-primary-action" style={{ padding: '10px 25px', display: 'flex', alignItems: 'center', gap: '8px' }} onClick={handleSave}>
                        <FaSave /> Save Student & Create Login
                    </button>
                </div>

            </div>
        </div>
    );
};

// Helper Icon
const FaInfoCircleIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>
);

export default MadarsaIdGeneration;
