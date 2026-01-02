import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck, FaUserGraduate, FaUserFriends, FaDownload, FaEye, FaEyeSlash } from 'react-icons/fa';
import './PublicRequests.css';

const RegistrationSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="public-requests-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>

            <div className="success-card">
                <div className="success-icon">
                    <FaCheck />
                </div>

                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b', marginBottom: '10px' }}>Registration Completed Successfully</h2>
                <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '30px' }}>Student registration and profile creation have been finalized.</p>

                <div style={{ background: '#f1f5f9', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                    <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '5px' }}>Madarsa ID Reference</div>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b' }}>MAD-2025-0007</div>
                </div>

                <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>

                    {/* Student Login Info */}
                    <div className="credentials-box" style={{ flex: 1, flexDirection: 'column', margin: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: '800', color: '#166534', marginBottom: '10px' }}>
                            <FaUserGraduate /> Student Login
                        </div>
                        <div>
                            <div className="cred-label">Username</div>
                            <div className="cred-val">MAD-2025-0007</div>
                        </div>
                        <div>
                            <div className="cred-label">Password</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div className="cred-val">●●●●●●●●</div>
                                <FaEye style={{ color: '#94a3b8', fontSize: '12px' }} />
                            </div>
                            <div style={{ fontSize: '10px', color: '#cbd5e1', marginTop: '3px' }}>(Student Phone Number)</div>
                        </div>
                    </div>

                    {/* Parent Login Info */}
                    <div className="credentials-box" style={{ flex: 1, flexDirection: 'column', margin: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: '800', color: '#166534', marginBottom: '10px' }}>
                            <FaUserFriends /> Parent Login
                        </div>
                        <div>
                            <div className="cred-label">Username</div>
                            <div className="cred-val">MAD-2025-0007</div>
                        </div>
                        <div>
                            <div className="cred-label">Password</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div className="cred-val">●●●●●●●●</div>
                                <FaEye style={{ color: '#94a3b8', fontSize: '12px' }} />
                            </div>
                            <div style={{ fontSize: '10px', color: '#cbd5e1', marginTop: '3px' }}>(Parent Phone Number)</div>
                        </div>
                    </div>

                </div>

                <div style={{ display: 'flex', gap: '15px' }}>
                    <button className="btn-primary-action btn-full">
                        <FaDownload /> Download Login Details
                    </button>
                    <button className="btn-secondary-action btn-full" style={{ justifyContent: 'center' }} onClick={() => navigate('/admin/public-requests')}>
                        Close
                    </button>
                </div>

            </div>
        </div>
    );
};

export default RegistrationSuccess;
