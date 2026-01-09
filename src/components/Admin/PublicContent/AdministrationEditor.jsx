import React, { useState } from 'react';
import { FaInfoCircle, FaPlus, FaPen, FaTrash } from 'react-icons/fa';
import ToggleSwitch from './ToggleSwitch';
import './PublicContent.css';

const AdministrationEditor = () => {
    const [introText, setIntroText] = useState('Our admission team is dedicated to fostering a support and rigorous acadamic environment...');

    const [members, setMembers] = useState([
        { id: 1, name: 'Dr. Eleanor Rigby', role: 'Principal', quote: 'Education is not the filling of a pail, but the lighting of a fire.', image: 'user_placeholder', visible: true },
        { id: 2, name: 'Marcus Aurelius', role: 'Vice Principal', quote: 'Focused on student discipline and curriculum development.', image: 'user_placeholder', visible: true },
        { id: 3, name: 'Sarah Connor', role: 'Athletic Director', quote: 'Championing physical education and team sports.', image: 'user_placeholder', visible: true },
        { id: 4, name: 'John Titor', role: 'Head of Science', quote: 'Exploring the boundaries of physics and time.', image: 'user_placeholder', visible: true },
    ]);

    const addMember = () => {
        const name = prompt("Name:");
        const role = prompt("Role:");
        if (name && role) {
            setMembers([...members, { id: Date.now(), name, role, quote: 'New member quote', image: 'user_placeholder', visible: true }]);
        }
    };

    const deleteMember = (id) => {
        setMembers(members.filter(m => m.id !== id));
    };

    const toggleMemberVisibility = (id) => {
        setMembers(members.map(m => m.id === id ? { ...m, visible: !m.visible } : m));
    };

    return (
        <div>
            <div className="live-changes-banner" style={{ background: '#eff6ff', borderColor: '#dbeafe' }}>
                <FaInfoCircle className="banner-icon" style={{ color: '#3b82f6' }} />
                <div className="banner-text">
                    <h4 style={{ color: '#1d4ed8' }}>Public Visibility Notice</h4>
                    <p style={{ color: '#1e40af' }}>Changes made in this section are reflected immediately on the "Administration" page of the public website. Please ensure all information is verified before publishing.</p>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

                {/* Page Introduction */}
                <div className="editor-card full-width" style={{ position: 'relative' }}>
                    <div className="card-title">
                        Page Introduction
                    </div>
                    <button style={{ position: 'absolute', top: '24px', right: '24px', color: '#64748b', fontSize: '13px', background: 'none', border: 'none', fontWeight: '600', cursor: 'pointer' }}>Edit Content</button>

                    <div className="form-group">
                        <label className="form-label">Introduction Text</label>
                        <textarea
                            className="form-textarea"
                            value={introText}
                            onChange={(e) => setIntroText(e.target.value)}
                            style={{ borderColor: '#64A926', minHeight: '80px' }}
                        />
                    </div>
                </div>

                {/* Administration Members */}
                <div>
                    <div className="card-title" style={{ marginBottom: '15px' }}>
                        Administration Members
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button className="btn-secondary-action">
                                Reorder Display
                            </button>
                            <button className="btn-primary-action" onClick={addMember}>
                                <FaPlus /> Add New Member
                            </button>
                        </div>
                    </div>
                    <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px' }}>Manage the cards displayed on the administration page.</div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
                        {members.map(member => (
                            <div key={member.id} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div style={{ display: 'flex', gap: '15px' }}>
                                        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#e2e8f0', overflow: 'hidden' }}>
                                            {/* Placeholder for avatar */}
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                                {member.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', color: '#1e293b' }}>{member.name}</h4>
                                            <span style={{ fontSize: '13px', color: '#64A926', fontWeight: '600' }}>{member.role}</span>
                                            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#64748b', lineHeight: '1.4', fontStyle: 'italic' }}>
                                                "{member.quote}"
                                            </p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <FaPen style={{ color: '#94a3b8', cursor: 'pointer', fontSize: '14px' }} />
                                        <FaTrash
                                            style={{ color: '#94a3b8', cursor: 'pointer', fontSize: '14px' }}
                                            onClick={() => deleteMember(member.id)}
                                        />
                                    </div>
                                </div>
                                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#64748b' }}>
                                    <span>Office Hours: Mon-Fri, 9AM - 4PM</span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => toggleMemberVisibility(member.id)}>
                                        <span>Public Visibility</span>
                                        <ToggleSwitch
                                            checked={member.visible}
                                            onChange={() => toggleMemberVisibility(member.id)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdministrationEditor;
