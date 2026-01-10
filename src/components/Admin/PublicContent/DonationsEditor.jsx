import React, { useState } from 'react';
import { FaToggleOn, FaToggleOff, FaInfoCircle, FaSave, FaArchive, FaUpload, FaImage, FaTrash, FaPlus } from 'react-icons/fa';
import './PublicContent.css';

const DonationsEditor = () => {
    const [appealHeadline, setAppealHeadline] = useState('Support our mission to education');
    const [appealBody, setAppealBody] = useState('Your generous contribution help us maintain our high standard...');

    // Religious Motivation
    const [verse, setVerse] = useState('"The example of those who spend their wealth in the way of allah is like a seed of grain..."');
    const [contextNote, setContextNote] = useState('Invest in your akhirah by supporting islamic education');
    const [motivationVisible, setMotivationVisible] = useState(true);

    // Funds Data
    const [fundsList, setFundsList] = useState(['', '', '']); // Start with 3 empty slots like screenshot

    const handleFundChange = (index, value) => {
        const newFunds = [...fundsList];
        newFunds[index] = value;
        setFundsList(newFunds);
    };

    const addFund = () => {
        setFundsList([...fundsList, '']);
    };

    const removeFund = (index) => {
        const newFunds = fundsList.filter((_, i) => i !== index);
        setFundsList(newFunds);
    };

    return (
        <div>
            <div className="live-changes-banner" style={{ background: '#eff6ff', borderColor: '#dbeafe' }}>
                <FaInfoCircle className="banner-icon" style={{ color: '#3b82f6' }} />
                <div className="banner-text">
                    <h4 style={{ color: '#1d4ed8' }}>Public Website Changes</h4>
                    <p style={{ color: '#1e40af' }}>Changes made to the donations content will reflect immediately on the public-facing website. Please review all text carefully before publishing.</p>
                </div>
            </div>

            <div className="editor-grid-2" style={{ gridTemplateColumns: '2fr 1fr' }}>
                {/* Left Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>

                    {/* Donation Appeal */}
                    <div className="editor-card">
                        <div className="card-title">
                            Donation Appeal
                            <span style={{ fontSize: '11px', background: '#dcfce7', color: '#166534', padding: '2px 8px', borderRadius: '10px' }}>Published</span>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Headline</label>
                            <input
                                type="text"
                                className="form-input"
                                value={appealHeadline}
                                onChange={e => setAppealHeadline(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Appeal Body Text</label>
                            <textarea
                                className="form-textarea"
                                value={appealBody}
                                onChange={e => setAppealBody(e.target.value)}
                                style={{ minHeight: '150px' }}
                            />
                            <div style={{ textAlign: 'right', fontSize: '11px', color: '#94a3b8', marginTop: '5px' }}>245 characters</div>
                        </div>
                        <div style={{ fontSize: '11px', color: '#cbd5e1' }}>Markdown supported</div>
                    </div>

                    {/* Religious Motivation */}
                    <div className="editor-card">
                        <div className="card-title">
                            Religious Motivation
                            <div
                                className={`toggle-switch ${motivationVisible ? 'toggle-on' : 'toggle-off'}`}
                                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}
                                onClick={() => setMotivationVisible(!motivationVisible)}
                            >
                                <span style={{ color: '#64748b', fontSize: '12px' }}>Visible on site</span>
                                {motivationVisible ? <FaToggleOn style={{ fontSize: '24px' }} /> : <FaToggleOff style={{ fontSize: '24px' }} />}
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Quranic Verse / Hadith</label>
                            <textarea
                                className="form-textarea"
                                value={verse}
                                onChange={e => setVerse(e.target.value)}
                                style={{ borderColor: '#86efac', background: '#f0fdf4' }}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Contextual Note (Optional)</label>
                            <input
                                type="text"
                                className="form-input"
                                value={contextNote}
                                onChange={e => setContextNote(e.target.value)}
                                style={{ borderColor: '#86efac' }}
                            />
                        </div>
                    </div>

                    {/* Where Funds Are Used */}
                    <div className="editor-card">
                        <div className="card-title">Where Funds Are Used</div>
                        <div style={{ background: '#fffbeb', border: '1px solid #fef3c7', padding: '10px', borderRadius: '6px', fontSize: '12px', color: '#92400e', marginBottom: '15px' }}>
                            💡 Listing specific fund allocations increases donor trust by 45%.
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {fundsList.map((fund, i) => (
                                <div key={i} style={{ display: 'flex', gap: '10px' }}>
                                    <div style={{ color: '#cbd5e1', cursor: 'grab', padding: '10px 0' }}>:::</div>
                                    <input
                                        type="text"
                                        className="form-input"
                                        style={{ background: '#f8fafc' }}
                                        value={fund}
                                        onChange={(e) => handleFundChange(i, e.target.value)}
                                    />
                                    <FaTrash
                                        style={{ color: '#475569', marginTop: '12px', cursor: 'pointer' }}
                                        onClick={() => removeFund(i)}
                                    />
                                </div>
                            ))}
                            <button
                                style={{ background: 'none', border: 'none', color: '#64A926', fontWeight: '600', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '5px', marginTop: '10px', cursor: 'pointer' }}
                                onClick={addFund}
                            >
                                <FaPlus /> Add Another Item
                            </button>
                        </div>
                    </div>

                </div>

                {/* Right Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                    {/* Publishing */}
                    <div className="editor-card">
                        <div className="card-title">Publishing</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '10px' }}>
                            <span style={{ color: '#64748b' }}>Status:</span>
                            <span style={{ fontWeight: 'bold', color: '#166534' }}>Published</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '20px' }}>
                            <span style={{ color: '#64748b' }}>Last Edited:</span>
                            <span style={{ color: '#1e293b' }}>Oct 24, 2023 by Admin</span>
                        </div>

                        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                            <button className="btn-secondary-action" style={{ flex: 1, justifyContent: 'center' }}>Save Draft</button>
                            <button className="btn-secondary-action" style={{ flex: 1, justifyContent: 'center' }}>Archive</button>
                        </div>
                        <button className="btn-primary-action" style={{ width: '100%', justifyContent: 'center' }}>
                            Publish Changes
                        </button>
                    </div>

                    {/* Banner Image */}
                    <div className="editor-card">
                        <div className="card-title">Banner Image</div>
                        <div style={{ height: '120px', background: '#f1f5f9', borderRadius: '6px', marginBottom: '15px' }}></div>
                        <div style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '15px' }}>Recommended size: 1920x600px. Max file size: 2MB.</div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button className="btn-secondary-action" style={{ flex: 1, justifyContent: 'center' }}>
                                <FaUpload /> Upload
                            </button>
                            <button className="btn-secondary-action" style={{ flex: 1, justifyContent: 'center' }}>
                                <FaImage /> Library
                            </button>
                        </div>
                    </div>

                    {/* Thank You Message */}
                    <div className="editor-card">
                        <div className="card-title">Thank You Message</div>
                        <p style={{ fontSize: '12px', color: '#94a3b8', margin: '5px 0 10px 0' }}>This message appears after a successful donation.</p>
                        <textarea className="form-textarea" style={{ borderColor: '#86efac' }}></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationsEditor;
