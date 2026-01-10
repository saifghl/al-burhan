import React, { useState } from 'react';
import { FaInfoCircle, FaPlus, FaPen, FaTrash, FaArrowUp, FaArrowDown } from 'react-icons/fa';
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
        setMembers([...members, {
            id: Date.now(),
            name: 'New Member',
            role: 'New Role',
            quote: 'Inspirational quote goes here...',
            image: 'user_placeholder',
            visible: true
        }]);
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
                            <button className="btn-primary-action" onClick={addMember}>
                                <FaPlus /> Add New Member
                            </button>
                        </div>
                    </div>
                    <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px' }}>Manage the cards displayed on the administration page.</div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
                        {members.map((member, index) => (
                            <div key={member.id} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px', position: 'relative' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div style={{ display: 'flex', gap: '15px', flex: 1 }}>
                                        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#e2e8f0', overflow: 'hidden', flexShrink: 0 }}>
                                            {/* Placeholder for avatar */}
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                                {member.name ? member.name.split(' ').map(n => n[0]).join('').substring(0, 2) : '?'}
                                            </div>
                                        </div>
                                        <div style={{ width: '100%' }}>
                                            <input
                                                type="text"
                                                className="form-input"
                                                value={member.name}
                                                placeholder="Name"
                                                onChange={(e) => setMembers(members.map(m => m.id === member.id ? { ...m, name: e.target.value } : m))}
                                                style={{ marginBottom: '8px', fontWeight: '600', fontSize: '15px', width: '100%' }}
                                            />
                                            <input
                                                type="text"
                                                className="form-input"
                                                value={member.role}
                                                placeholder="Role"
                                                onChange={(e) => setMembers(members.map(m => m.id === member.id ? { ...m, role: e.target.value } : m))}
                                                style={{ marginBottom: '8px', fontSize: '13px', color: '#64A926', fontWeight: '600', width: '100%' }}
                                            />
                                            <textarea
                                                className="form-input"
                                                value={member.quote}
                                                placeholder="Quote"
                                                onChange={(e) => setMembers(members.map(m => m.id === member.id ? { ...m, quote: e.target.value } : m))}
                                                style={{ width: '100%', fontSize: '13px', color: '#64748b', lineHeight: '1.4', fontStyle: 'italic', minHeight: '60px', resize: 'vertical' }}
                                            />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginLeft: '10px' }}>
                                        <button
                                            onClick={() => {
                                                if (index > 0) {
                                                    const newMembers = [...members];
                                                    [newMembers[index], newMembers[index - 1]] = [newMembers[index - 1], newMembers[index]];
                                                    setMembers(newMembers);
                                                }
                                            }}
                                            disabled={index === 0}
                                            style={{ background: 'none', border: 'none', cursor: index === 0 ? 'not-allowed' : 'pointer', color: index === 0 ? '#e2e8f0' : '#94a3b8' }}
                                            title="Move Up"
                                        >
                                            <FaArrowUp />
                                        </button>
                                        <button
                                            onClick={() => deleteMember(member.id)}
                                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#cbd5e1' }}
                                            title="Delete"
                                            onMouseOver={(e) => e.currentTarget.style.color = '#ef4444'}
                                            onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}
                                        >
                                            <FaTrash />
                                        </button>
                                        <button
                                            onClick={() => {
                                                if (index < members.length - 1) {
                                                    const newMembers = [...members];
                                                    [newMembers[index], newMembers[index + 1]] = [newMembers[index + 1], newMembers[index]];
                                                    setMembers(newMembers);
                                                }
                                            }}
                                            disabled={index === members.length - 1}
                                            style={{ background: 'none', border: 'none', cursor: index === members.length - 1 ? 'not-allowed' : 'pointer', color: index === members.length - 1 ? '#e2e8f0' : '#94a3b8' }}
                                            title="Move Down"
                                        >
                                            <FaArrowDown />
                                        </button>
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
