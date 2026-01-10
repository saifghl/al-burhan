import React from 'react';
import { FaBook, FaChalkboardTeacher, FaEdit } from 'react-icons/fa';

const ClassSubject = () => {
    // Initial compulsory subjects
    const [compulsorySubjects, setCompulsorySubjects] = React.useState([
        { icon: "📖", name: "Quranic Studies" },
        { icon: "🈷️", name: "Arabic Language" },
        { icon: "⚖️", name: "Islamic Jurisprudence" },
        { icon: "🧮", name: "Mathematics" },
        { icon: "🧪", name: "Science" },
        { icon: "🌐", name: "English" }
    ]);

    // Available subjects for selection (mock database)
    const allSubjects = [
        { icon: "📖", name: "Quranic Studies" },
        { icon: "🈷️", name: "Arabic Language" },
        { icon: "⚖️", name: "Islamic Jurisprudence" },
        { icon: "🧮", name: "Mathematics" },
        { icon: "🧪", name: "Science" },
        { icon: "🌐", name: "English" },
        { icon: "📜", name: "History" },
        { icon: "🌍", name: "Geography" },
        { icon: "💻", name: "Computer Basics" },
        { icon: "🎨", name: "Arts" }
    ];

    const [electives, setElectives] = React.useState(['Computer Science', 'Islamic Calligraphy']);
    const [inputValue, setInputValue] = React.useState('');
    const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
    const [tempSelectedSubjects, setTempSelectedSubjects] = React.useState([]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            if (electives.length < 3) {
                setElectives([...electives, inputValue.trim()]);
                setInputValue('');
            }
        }
    };

    const removeElective = (indexToRemove) => {
        setElectives(electives.filter((_, index) => index !== indexToRemove));
    };

    const openEditModal = () => {
        setTempSelectedSubjects([...compulsorySubjects]);
        setIsEditModalOpen(true);
    };

    const toggleSubjectSelection = (subject) => {
        const exists = tempSelectedSubjects.find(s => s.name === subject.name);
        if (exists) {
            setTempSelectedSubjects(tempSelectedSubjects.filter(s => s.name !== subject.name));
        } else {
            setTempSelectedSubjects([...tempSelectedSubjects, subject]);
        }
    };

    const saveAllocation = () => {
        setCompulsorySubjects(tempSelectedSubjects);
        setIsEditModalOpen(false);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
            {/* Class Assignment */}
            <div className="sr-section-card">
                <div className="section-header">
                    <FaChalkboardTeacher style={{ color: '#64A926' }} />
                    <h3 className="section-title">Class Assignment</h3>
                </div>

                <div className="info-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr 2fr' }}>
                    {/* ... existing fields ... */}
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
                    <button
                        className="btn-reset"
                        style={{ border: 'none', color: '#64A926', fontSize: '13px' }}
                        onClick={openEditModal}
                    >
                        <FaEdit /> Edit Allocation
                    </button>
                </div>

                <div style={{ marginBottom: '25px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                        <h4 style={{ fontSize: '14px', margin: 0 }}>Compulsory Subjects</h4>
                        <span style={{ fontSize: '11px', background: '#e2e8f0', padding: '2px 8px', borderRadius: '10px' }}>Auto-assigned</span>
                    </div>

                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        {compulsorySubjects.map((subject, idx) => (
                            <SubjectCard key={idx} icon={subject.icon} name={subject.name} />
                        ))}
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
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '10px',
                        background: 'white'
                    }}>
                        {electives.map((subject, index) => (
                            <div key={index} style={{ background: '#f0fdf4', padding: '4px 10px', borderRadius: '15px', fontSize: '12px', color: '#166534', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                {subject} <span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => removeElective(index)}>×</span>
                            </div>
                        ))}
                        {electives.length < 3 ? (
                            <input
                                type="text"
                                placeholder="Type to add subject..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                style={{ border: 'none', outline: 'none', fontSize: '13px', flex: 1, minWidth: '120px' }}
                            />
                        ) : (
                            <span style={{ fontSize: '12px', color: '#cbd5e1', fontStyle: 'italic' }}>Limit reached</span>
                        )}
                    </div>
                    <p style={{ fontSize: '11px', color: '#94a3b8', marginTop: '5px' }}>Maximum 3 electives allowed for Class 5.</p>
                </div>
            </div>

            {/* Edit Allocation Modal */}
            {isEditModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        background: 'white',
                        borderRadius: '12px',
                        width: '500px',
                        maxWidth: '90%',
                        maxHeight: '80vh',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                    }}>
                        <div style={{ padding: '20px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ margin: 0, fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FaEdit style={{ color: '#64A926' }} /> Manage Subject Allocation
                            </h3>
                            <button onClick={() => setIsEditModalOpen(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#94a3b8' }}>&times;</button>
                        </div>

                        <div style={{ padding: '20px', overflowY: 'auto' }}>
                            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px' }}>Select compulsory subjects for this student. These subjects will be marked as auto-assigned.</p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                {allSubjects.map((subject, idx) => {
                                    const isSelected = tempSelectedSubjects.some(s => s.name === subject.name);
                                    return (
                                        <div
                                            key={idx}
                                            onClick={() => toggleSubjectSelection(subject)}
                                            style={{
                                                padding: '12px',
                                                border: isSelected ? '1px solid #64A926' : '1px solid #e2e8f0',
                                                borderRadius: '8px',
                                                background: isSelected ? '#f0fdf4' : 'white',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            <span style={{ fontSize: '20px' }}>{subject.icon}</span>
                                            <span style={{ fontSize: '14px', fontWeight: isSelected ? '600' : '400', color: isSelected ? '#166534' : '#334155' }}>
                                                {subject.name}
                                            </span>
                                            {isSelected && <span style={{ marginLeft: 'auto', color: '#64A926' }}>✓</span>}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div style={{ padding: '20px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                            <button
                                onClick={() => setIsEditModalOpen(false)}
                                style={{ padding: '8px 20px', borderRadius: '6px', border: '1px solid #e2e8f0', background: 'white', cursor: 'pointer', fontWeight: '500' }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={saveAllocation}
                                style={{ padding: '8px 20px', borderRadius: '6px', border: 'none', background: '#64A926', color: 'white', cursor: 'pointer', fontWeight: '600' }}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
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
