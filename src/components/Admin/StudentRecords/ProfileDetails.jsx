import React from 'react';
import { FaUser, FaHome } from 'react-icons/fa';

const ProfileDetails = () => {
    return (
        <div>
            {/* Personal Information */}
            <div className="sr-section-card">
                <div className="section-header">
                    <FaUser style={{ color: '#64A926' }} />
                    <h3 className="section-title">Personal Information</h3>
                </div>

                <div className="info-grid">
                    <div className="info-item">
                        <label>Date of Birth</label>
                        <div className="value">15 August 2012</div>
                    </div>
                    <div className="info-item">
                        <label>Gender</label>
                        <div className="value">Male</div>
                    </div>
                    <div className="info-item">
                        <label>Blood Group</label>
                        <div className="value">O+</div>
                    </div>
                    <div className="info-item">
                        <label>Nationality</label>
                        <div className="value">Indian</div>
                    </div>
                    <div className="info-item">
                        <label>Mother Tongue</label>
                        <div className="value">Urdu</div>
                    </div>
                    <div className="info-item">
                        <label>Religion</label>
                        <div className="value">Islam</div>
                    </div>
                </div>

                <h4 style={{ fontSize: '14px', fontWeight: 700, margin: '20px 0 15px', color: '#1e293b' }}>Family Information</h4>
                <div style={{ borderTop: '1px solid #e2e8f0', margin: '0 0 20px' }}></div>

                <div className="info-grid">
                    <div className="info-item">
                        <label>Father's Name</label>
                        <div className="value">Ahmed Raza</div>
                    </div>
                    <div className="info-item">
                        <label>Father's Occupation</label>
                        <div className="value">Business Owner</div>
                    </div>
                    <div className="info-item">
                        <label>Father's Contact</label>
                        <div className="value">+91 98765 43210</div>
                    </div>
                    <div className="info-item">
                        <label>Mother's Name</label>
                        <div className="value">Fatima Bee</div>
                    </div>
                    <div className="info-item">
                        <label>Mother's Occupation</label>
                        <div className="value">Homemaker</div>
                    </div>
                    <div className="info-item">
                        <label>Emergency Contact</label>
                        <div className="value">+91 98765 43210 (Father)</div>
                    </div>
                </div>
            </div>

            {/* Address Details */}
            <div className="sr-section-card">
                <div className="section-header">
                    <FaHome style={{ color: '#64A926' }} />
                    <h3 className="section-title">Address Details</h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <label style={{ fontSize: '12px', fontWeight: 600, color: '#64748b' }}>Permanent Address</label>
                            <span style={{ fontSize: '16px', color: '#64748b' }}>📍</span>
                        </div>
                        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5', color: '#334155' }}>
                            House No. 45/B, Green Garden Colony,<br />
                            Near Jama Masjid, Civil Lines,<br />
                            Lucknow, Uttar Pradesh - 226001
                        </p>
                    </div>

                    <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <label style={{ fontSize: '12px', fontWeight: 600, color: '#64748b' }}>Correspondence Address</label>
                            <span style={{ fontSize: '16px', color: '#64748b' }}>✉️</span>
                        </div>
                        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5', color: '#334155' }}>
                            Same as Permanent Address
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;
