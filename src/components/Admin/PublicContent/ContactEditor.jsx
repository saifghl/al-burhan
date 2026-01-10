import React, { useState } from 'react';
import { FaInfoCircle, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLink, FaCopy } from 'react-icons/fa';
import ToggleSwitch from './ToggleSwitch';
import './PublicContent.css';

const ContactEditor = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
            <div className="live-changes-banner" style={{ background: '#eff6ff', borderColor: '#dbeafe' }}>
                <FaInfoCircle className="banner-icon" style={{ color: '#3b82f6' }} />
                <div className="banner-text">
                    <h4 style={{ color: '#1d4ed8' }}>Public Changes</h4>
                    <p style={{ color: '#1e40af' }}>Changes made to this contact information will be immediately reflected on the 'Contact Us' page and the site footer.</p>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#64748b' }}>
                    <span style={{ color: '#166534', background: '#dcfce7', padding: '2px 8px', borderRadius: '10px', fontWeight: 'bold', fontSize: '11px' }}>Published</span>
                    <span>Last edited: 2 hours ago by Admin</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
                        <span style={{ color: '#64748b', fontSize: '12px', fontWeight: '600' }}>Visibility</span>
                        <ToggleSwitch
                            checked={isVisible}
                            onChange={(val) => setIsVisible(val)}
                        />
                    </div>
                    <span style={{ color: '#e2e8f0' }}>|</span>
                    <button className="btn-secondary-action" style={{ border: 'none' }}>Draft</button>
                    <button className="btn-secondary-action" style={{ border: 'none' }}>Archive</button>
                    <button className="btn-primary-action">Publish Changes</button>
                </div>
            </div>

            <div className="editor-grid-2" style={{ gridTemplateColumns: '2fr 1fr' }}>
                {/* Left Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>

                    {/* Page Header */}
                    <div className="editor-card">
                        <div className="card-title">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#64A926' }}>T</span> Page Header
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Page Heading</label>
                            <input type="text" className="form-input" defaultValue="Get in Touch" style={{ color: '#334155' }} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Description Text</label>
                            <textarea className="form-textarea" defaultValue="We are here to help answer any questions you may have about our programs" style={{ color: '#334155' }} />
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="editor-card">
                        <div className="card-title">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FaInfoCircle style={{ fontSize: '16px', color: '#166534' }} /> Contact Details
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Physical Address</label>
                            <div style={{ position: 'relative' }}>
                                <FaMapMarkerAlt style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', zIndex: 1 }} />
                                <input type="text" className="form-input" defaultValue="123 green street, pune" style={{ paddingLeft: '35px' }} />
                            </div>
                        </div>

                        <div className="editor-grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                            <div className="form-group">
                                <label className="form-label">Main Phone</label>
                                <div style={{ position: 'relative' }}>
                                    <FaPhone style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%) scaleX(-1)', color: '#94a3b8', zIndex: 1 }} />
                                    <input type="text" className="form-input" defaultValue="+91 648429434" style={{ paddingLeft: '35px' }} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Admissions Phone</label>
                                <div style={{ position: 'relative' }}>
                                    <FaPhone style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%) scaleX(-1)', color: '#94a3b8', zIndex: 1 }} />
                                    <input type="text" className="form-input" defaultValue="+91 648429434" style={{ paddingLeft: '35px' }} />
                                </div>
                            </div>
                        </div>

                        <div className="editor-grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                            <div className="form-group">
                                <label className="form-label">General Email</label>
                                <div style={{ position: 'relative' }}>
                                    <FaEnvelope style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', zIndex: 1 }} />
                                    <input type="text" className="form-input" defaultValue="Sarah@example.com" style={{ paddingLeft: '35px' }} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Support Email</label>
                                <div style={{ position: 'relative' }}>
                                    <FaEnvelope style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', zIndex: 1 }} />
                                    <input type="text" className="form-input" defaultValue="Sarah@example.com" style={{ paddingLeft: '35px' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Integration */}
                    <div className="editor-card">
                        <div className="card-title">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FaMapMarkerAlt style={{ fontSize: '16px', color: '#166534' }} /> Map Integration
                            </div>
                            <span style={{ fontSize: '11px', color: '#64A926', cursor: 'pointer' }}>Test Link</span>
                        </div>

                        <label className="form-label">Google Maps Embed Link (Src)</label>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <input type="text" className="form-input" />
                            <button className="btn-secondary-action"><FaCopy /></button>
                        </div>

                        <div style={{
                            border: '1px solid #64A926', height: '150px', borderRadius: '6px',
                            marginTop: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '12px', fontWeight: 'bold', color: '#166534', gap: '5px'
                        }}>
                            <FaCheckCircle style={{ color: '#64A926' }} /> Map Preview Active
                        </div>
                    </div>

                </div>

                {/* Right Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                    {/* Office Hours */}
                    <div className="editor-card">
                        <div className="card-title">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                {/* Simple clock icon */}
                                🕐 Office Hours
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label" style={{ fontSize: '11px', color: '#94a3b8' }}>Weekdays (Mon-Fri)</label>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <input type="text" className="form-input" defaultValue="8:00 AM" />
                                <span style={{ color: '#cbd5e1' }}>-</span>
                                <input type="text" className="form-input" defaultValue="04:30 PM" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label" style={{ fontSize: '11px', color: '#94a3b8' }}>Saturday</label>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <input type="text" className="form-input" defaultValue="9:00 AM" />
                                <span style={{ color: '#cbd5e1' }}>-</span>
                                <input type="text" className="form-input" defaultValue="1:00 PM" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label" style={{ fontSize: '11px', color: '#94a3b8' }}>Sunday</label>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <input type="text" className="form-input" defaultValue="Closed" style={{ color: '#64748b' }} />
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="editor-card">
                        <div className="card-title">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FaLink style={{ fontSize: '14px' }} /> Social Links
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#dbeafe', color: '#1d4ed8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>f</div>
                                <input type="text" className="form-input" />
                            </div>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#e0f2fe', color: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>@</div>
                                <input type="text" className="form-input" />
                            </div>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#fce7f3', color: '#db2777', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📷</div>
                                <input type="text" className="form-input" />
                            </div>

                            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                                <span style={{ fontSize: '11px', color: '#64A926', cursor: 'pointer' }}>Manage All Social Media</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* Extra helper sub-component for check circle */
const FaCheckCircle = ({ style }) => <span style={{ ...style, fontSize: '14px' }}>✔</span>;

export default ContactEditor;
