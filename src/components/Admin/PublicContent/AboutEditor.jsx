import React, { useState } from 'react';
import { FaToggleOn, FaToggleOff, FaInfoCircle, FaImage, FaPlus, FaSave } from 'react-icons/fa';
import './PublicContent.css';

const AboutEditor = () => {
    const [pageVisible, setPageVisible] = useState(true);

    // Page Content State
    const [bannerTitle, setBannerTitle] = useState('About Us');
    const [introHeading, setIntroHeading] = useState('Introduction');
    const [introText, setIntroText] = useState('');
    const [description, setDescription] = useState('');
    const [whoWeAreText, setWhoWeAreText] = useState('We are a community of learners, educators, and parents committed to excellence...');

    // Milestones State
    const [milestones] = useState([
        { id: 1, year: '1985', title: 'Founded', desc: 'The school opened its doors for the first time.' },
        { id: 2, year: '2005', title: 'New Campus', desc: 'Moved to the current state-of-the-art facility.' },
    ]);

    return (
        <div>
            <div className="live-changes-banner">
                <FaInfoCircle className="banner-icon" />
                <div className="banner-text">
                    <h4>Public Website Updates</h4>
                    <p>Changes made here will be reflected immediately on the public website after clicking 'Publish'.</p>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 className="card-title" style={{ margin: 0 }}>About Page Content</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div
                        className={`toggle-switch ${pageVisible ? 'toggle-on' : 'toggle-off'}`}
                        onClick={() => setPageVisible(!pageVisible)}
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}
                    >
                        <span style={{ color: '#64748b' }}>Visibility:</span> {pageVisible ? <FaToggleOn style={{ fontSize: '24px' }} /> : <FaToggleOff style={{ fontSize: '24px' }} />}
                    </div>
                    <button className="btn-secondary-action">Save Draft</button>
                    <button className="btn-primary-action" style={{ padding: '8px 24px' }}>Publish</button>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                {/* Page Banner */}
                <div className="editor-card full-width">
                    <div className="card-title">
                        Page Banner
                        <button style={{ color: '#64A926', border: 'none', background: 'none', fontWeight: '600', cursor: 'pointer' }}>Edit</button>
                    </div>

                    <div style={{
                        background: '#dcfce7',
                        height: '150px',
                        borderRadius: '8px',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundImage: 'linear-gradient(45deg, #dcfce7 25%, #d1fae5 25%, #d1fae5 50%, #dcfce7 50%, #dcfce7 75%, #d1fae5 75%, #d1fae5 100%)',
                        backgroundSize: '20px 20px'
                    }}>
                        <div style={{ background: 'white', padding: '15px 25px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center', cursor: 'pointer' }}>
                            <FaImage style={{ color: '#64A926', fontSize: '24px', marginBottom: '5px' }} />
                            <div style={{ fontWeight: '600', color: '#166534', fontSize: '14px' }}>Click to replace banner image</div>
                            <div style={{ fontSize: '11px', color: '#15803d' }}>PNG, JPG up to 5MB</div>
                        </div>
                    </div>
                </div>

                {/* Introduction */}
                <div className="editor-card full-width">
                    <div className="card-title">Introduction</div>

                    <div className="form-group">
                        <label className="form-label">Main Heading</label>
                        <input
                            type="text"
                            className="form-input"
                            value={introHeading}
                            onChange={(e) => setIntroHeading(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-textarea"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', minHeight: '100px' }}
                        />
                    </div>
                </div>

                {/* Who We Are */}
                <div className="editor-card full-width">
                    <div className="card-title">Who We Are</div>
                    <div className="form-group">
                        <div style={{ border: '1px solid #cbd5e1', borderRadius: '6px', overflow: 'hidden' }}>
                            <div style={{ background: '#f8fafc', padding: '8px 12px', borderBottom: '1px solid #cbd5e1', display: 'flex', gap: '15px', fontSize: '12px', color: '#475569', fontWeight: 'bold' }}>
                                <span>B</span> <span>I</span> <span>U</span> <span>|</span> <span>List</span> <span>Align</span>
                            </div>
                            <textarea
                                className="form-textarea"
                                value={whoWeAreText}
                                onChange={(e) => setWhoWeAreText(e.target.value)}
                                style={{ border: 'none', background: 'white', minHeight: '120px' }}
                            />
                        </div>
                    </div>
                </div>

                {/* History & Milestones */}
                <div className="editor-card full-width">
                    <div className="card-title">
                        History & Milestones
                        <button className="btn-secondary-action" style={{ color: '#64A926', borderColor: 'transparent' }}>
                            <FaPlus /> Add Milestone
                        </button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {milestones.map(ms => (
                            <div key={ms.id} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start', paddingBottom: '15px', borderBottom: '1px solid #f1f5f9' }}>
                                <div style={{ background: '#ecfccb', color: '#65a30d', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold', fontSize: '13px' }}>{ms.year}</div>
                                <div>
                                    <div style={{ fontWeight: '700', fontSize: '14px', color: '#1e293b' }}>{ms.title}</div>
                                    <div style={{ fontSize: '13px', color: '#64748b' }}>{ms.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Right Column / Sidebar for additional widgets could go here if layout changed to grid */}
        </div>
    );
};

export default AboutEditor;
