import React from 'react';
import { FaCheckCircle, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';

const StatusManagement = () => {
    return (
        <div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, marginTop: 0, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#64A926' }}>👥</span> Status Management
            </h3>

            {/* Current Status Banner */}
            <div style={{
                background: '#f0fdf4',
                border: '1px solid #dcfce7',
                borderRadius: '12px',
                padding: '25px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '30px'
            }}>
                <div>
                    <div style={{ fontSize: '12px', color: '#166534', fontWeight: 600, marginBottom: '5px' }}>Current Status</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FaCheckCircle style={{ fontSize: '24px', color: '#166534' }} />
                        <span style={{ fontSize: '28px', fontWeight: 800, color: '#166534' }}>Active</span>
                    </div>
                    <div style={{ fontSize: '11px', color: '#166534', marginTop: '5px' }}>Since: Aug 15, 2023</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ background: 'white', padding: '6px 12px', borderRadius: '6px', fontSize: '11px', color: '#166534', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>💻</span> Portal Access: <span style={{ fontWeight: 700 }}>Enabled</span>
                    </div>
                    <div style={{ background: 'white', padding: '6px 12px', borderRadius: '6px', fontSize: '11px', color: '#166534', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>✅</span> Exam Access: <span style={{ fontWeight: 700 }}>Eligible</span>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '30px', alignItems: 'start' }}>

                {/* Update Form */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 700 }}>Update Student Status</h4>
                        <button className="btn-reset" style={{ border: 'none', color: '#64A926', fontSize: '11px', padding: 0 }}>Reset Form</button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                        <div className="input-group">
                            <label>New Status</label>
                            <select className="form-input">
                                <option>Active</option>
                                <option>Suspended</option>
                                <option>Left</option>
                                <option>Graduated</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label>Effective From Date</label>
                            <div style={{ position: 'relative' }}>
                                <input type="date" className="form-input" defaultValue="2023-11-20" />
                                <FaCalendarAlt style={{ position: 'absolute', right: '10px', top: '12px', color: '#94a3b8', pointerEvents: 'none' }} />
                            </div>
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Status Reason <span style={{ color: '#ef4444' }}>*</span> <span style={{ fontWeight: 400, color: '#94a3b8' }}>(Mandatory if not Active)</span></label>
                        <textarea
                            className="form-input"
                            rows="4"
                            placeholder="Please provide a detailed reason for this status change..."
                            style={{ resize: 'none' }}
                        ></textarea>
                    </div>

                    <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
                        <button className="btn-add-student">
                            <FaCheckCircle /> Save Changes
                        </button>
                        <button className="btn-reset" style={{ border: 'none' }}>Cancel</button>
                    </div>
                </div>

                {/* Rules Info Panel */}
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
                        <FaInfoCircle style={{ color: '#64A926' }} />
                        <h4 style={{ margin: 0, fontSize: '13px', fontWeight: 700, color: '#334155' }}>System Access Rules</h4>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ background: 'white', padding: '12px', borderRadius: '8px', borderLeft: '3px solid #166534' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                <span style={{ fontSize: '12px', fontWeight: 600 }}>Status: Active</span>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
                            </div>
                            <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '11px', color: '#475569' }}>
                                <li>Full Portal Access</li>
                                <li>Can take Exams</li>
                            </ul>
                        </div>

                        <div style={{ background: 'white', padding: '12px', borderRadius: '8px', borderLeft: '3px solid #ea580c' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                <span style={{ fontSize: '12px', fontWeight: 600 }}>Status: Suspended</span>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f97316' }}></div>
                            </div>
                            <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '11px', color: '#475569' }}>
                                <li style={{ color: '#ea580c', listStyle: 'none', marginLeft: '-15px' }}>🚫 Read-only Portal Access</li>
                                <li style={{ color: '#ef4444', listStyle: 'none', marginLeft: '-15px' }}>❌ Exam Access Blocked</li>
                            </ul>
                        </div>

                        <div style={{ background: 'white', padding: '12px', borderRadius: '8px', borderLeft: '3px solid #64748b' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                <span style={{ fontSize: '12px', fontWeight: 600 }}>Status: Inactive / Alumni</span>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#94a3b8' }}></div>
                            </div>
                            <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '11px', color: '#475569' }}>
                                <li style={{ color: '#ef4444', listStyle: 'none', marginLeft: '-15px' }}>🚫 Portal Login Disabled</li>
                                <li style={{ color: '#ef4444', listStyle: 'none', marginLeft: '-15px' }}>🚫 Exam Access Blocked</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusManagement;
