import React from 'react';
import { FaFolderOpen, FaBriefcaseMedical, FaExclamationTriangle, FaPaperclip, FaFilePdf, FaImage, FaCloudUploadAlt, FaSave } from 'react-icons/fa';

const SpecialRecords = () => {
    return (
        <div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, marginTop: 0, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#64A926' }}>📂</span> Special Records
            </h3>

            {/* Health Records Section */}
            <div style={{ background: '#fef2f2', border: '1px solid #fee2e2', borderRadius: '8px', padding: '15px 20px', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: '#991b1b', fontWeight: 600 }}>
                <FaBriefcaseMedical /> Health Records
            </div>

            <div style={{ marginBottom: '30px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '8px' }}>Medical Conditions</label>
                    <textarea
                        className="form-input"
                        rows="2"
                        placeholder="List any chronic medical conditions (e.g., Asthma, Diabetes)..."
                        style={{ resize: 'none' }}
                    ></textarea>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '8px' }}>Allergies</label>
                        <textarea
                            className="form-input"
                            rows="2"
                            placeholder="e.g., Peanuts, Penicillin..."
                            style={{ resize: 'none' }}
                        ></textarea>
                    </div>
                    <div>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '8px' }}>Emergency Instructions</label>
                        <textarea
                            className="form-input"
                            rows="2"
                            placeholder="Specific actions to take in case of emergency..."
                            style={{ resize: 'none' }}
                        ></textarea>
                    </div>
                </div>
            </div>

            {/* Special Notes Section */}
            <div style={{ background: '#fffbeb', border: '1px solid #fef3c7', borderRadius: '8px', padding: '15px 20px', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: '#92400e', fontWeight: 600 }}>
                <FaExclamationTriangle /> Special Notes & Remarks
            </div>

            <div style={{ marginBottom: '30px' }}>
                <div style={{ marginBottom: '20px', position: 'relative' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '8px' }}>Disciplinary Notes</label>
                    <textarea
                        className="form-input"
                        rows="2"
                        placeholder="Log any disciplinary actions or incidents..."
                        style={{ resize: 'none' }}
                    ></textarea>
                    <span style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '10px', color: '#94a3b8' }}>Last updated: Never</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '8px' }}>Academic Support Required</label>
                        <textarea
                            className="form-input"
                            rows="2"
                            placeholder="Details on remedial classes or extra attention needed..."
                            style={{ resize: 'none' }}
                        ></textarea>
                    </div>
                    <div>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '8px' }}>Counselor Remarks</label>
                        <textarea
                            className="form-input"
                            rows="2"
                            placeholder="Observations from school counselor..."
                            style={{ resize: 'none' }}
                        ></textarea>
                    </div>
                </div>
            </div>

            {/* Documents & Attachments */}
            <div style={{ background: '#f0f9ff', border: '1px solid #e0f2fe', borderRadius: '8px', padding: '15px 20px', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: '#075985', fontWeight: 600 }}>
                <FaPaperclip /> Documents & Attachments
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '8px' }}>Medical Certificate</label>
                    <div style={{
                        border: '2px dashed #cbd5e1',
                        borderRadius: '8px',
                        padding: '30px',
                        textAlign: 'center',
                        background: '#f8fafc',
                        cursor: 'pointer'
                    }}>
                        <FaFilePdf style={{ fontSize: '24px', color: '#94a3b8', marginBottom: '10px' }} />
                        <div style={{ fontSize: '13px', color: '#64A926', fontWeight: 600 }}>Upload a file <span style={{ color: '#94a3b8', fontWeight: 400 }}>or drag and drop</span></div>
                        <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '5px' }}>PDF, PNG, JPG up to 10MB</div>
                    </div>
                </div>

                <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '8px' }}>Legal / Special Documents</label>
                    <div style={{
                        border: '2px dashed #cbd5e1',
                        borderRadius: '8px',
                        padding: '30px',
                        textAlign: 'center',
                        background: '#f8fafc',
                        cursor: 'pointer'
                    }}>
                        <FaFolderOpen style={{ fontSize: '24px', color: '#94a3b8', marginBottom: '10px' }} />
                        <div style={{ fontSize: '13px', color: '#64A926', fontWeight: 600 }}>Upload a file <span style={{ color: '#94a3b8', fontWeight: 400 }}>or drag and drop</span></div>
                        <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '5px' }}>PDF, DOCX up to 10MB</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SpecialRecords;
