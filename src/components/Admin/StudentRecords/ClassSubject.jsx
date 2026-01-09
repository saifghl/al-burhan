import React from 'react';
import { FaBook, FaChalkboardTeacher, FaEdit } from 'react-icons/fa';

const ClassSubject = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Class Assignment */}
            <div className="sr-section-card">
                <div className="section-header">
                    <FaChalkboardTeacher style={{ color: '#64A926' }} />
                    <h3 className="section-title">Class Assignment</h3>
                </div>

                <div className="info-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr 2fr' }}>
                    <div className="input-group">
                        <label>Class</label>
                        <div className="form-input" style={{ background: '#f1f5f9' }}>Class 5</div>
                    </div>
                    <div className="input-group">
                        <label>Section</label>
                        <div className="form-input" style={{ background: '#f1f5f9' }}>Section B</div>
                    </div>
                    <div className="input-group">
                        <label>Roll Number</label>
                        <div className="form-input" style={{ background: '#f1f5f9' }}>12</div>
                    </div>
                    <div className="input-group">
                        <label>Class Teacher</label>
                        <div className="form-input" style={{ background: '#f1f5f9', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaUserStart /> Ustadha Ayesha
                        </div>
                    </div>
                </div>
            </div>

            {/* Subject Allocation */}
            <div className="sr-section-card">
                <div className="section-header" style={{ justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FaBook style={{ color: '#64A926' }} />
                        <h3 className="section-title">Subject Allocation</h3>
                    </div>
                    <button className="btn-reset" style={{ border: 'none', color: '#64A926', fontSize: '13px' }}>
                        <FaEdit /> Edit Allocation
                    </button>
                </div>

                <div style={{ marginBottom: '25px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                        <h4 style={{ fontSize: '14px', margin: 0 }}>Compulsory Subjects</h4>
                        <span style={{ fontSize: '11px', background: '#e2e8f0', padding: '2px 8px', borderRadius: '10px' }}>Auto-assigned</span>
                    </div>

                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <SubjectCard icon="📖" name="Quranic Studies" />
                        <SubjectCard icon="🈷️" name="Arabic Language" />
                        <SubjectCard icon="⚖️" name="Islamic Jurisprudence" />
                        <SubjectCard icon="🧮" name="Mathematics" />
                        <SubjectCard icon="🧪" name="Science" />
                        <SubjectCard icon="🌐" name="English" />
                    </div>
                </div>

                <div>
                    <h4 style={{ fontSize: '14px', margin: '0 0 15px 0' }}>Optional Subjects / Electives</h4>
                    <label style={{ fontSize: '12px', color: '#64748b', display: 'block', marginBottom: '8px' }}>Selected Electives</label>
                    <div style={{
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        padding: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        background: 'white'
                    }}>
                        <div style={{ background: '#f0fdf4', padding: '4px 10px', borderRadius: '15px', fontSize: '12px', color: '#166534', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            Computer Science <span>×</span>
                        </div>
                        <div style={{ background: '#f0fdf4', padding: '4px 10px', borderRadius: '15px', fontSize: '12px', color: '#166534', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            Islamic Calligraphy <span>×</span>
                        </div>
                        <input type="text" placeholder="Type to add subject..." style={{ border: 'none', outline: 'none', fontSize: '13px', flex: 1 }} />
                    </div>
                    <p style={{ fontSize: '11px', color: '#94a3b8', marginTop: '5px' }}>Maximum 3 electives allowed for Class 5.</p>
                </div>
            </div>
        </div>
    );
};

// Helper for UI
const FaUserStart = () => <span style={{ fontSize: '12px' }}>👤</span>;

const SubjectCard = ({ icon, name }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '12px 20px',
        background: '#f8fafc',
        borderRadius: '8px',
        border: '1px solid #f1f5f9',
        minWidth: '180px'
    }}>
        <span style={{ fontSize: '18px' }}>{icon}</span>
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>{name}</span>
    </div>
);

export default ClassSubject;
