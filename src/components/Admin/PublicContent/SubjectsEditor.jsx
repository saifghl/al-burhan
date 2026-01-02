import React, { useState } from 'react';
import { FaInfoCircle, FaPlus, FaSearch, FaSort, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import './PublicContent.css';

const SubjectsEditor = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Mock Data based on screenshot
    const [subjects, setSubjects] = useState([
        { id: 1, name: "Qur'an Studies", code: "QS-101", category: "Islamic Studies", level: "All Levels", dept: "Dept. of Islamic Studies", status: "Active", visible: true, color: "#dcfce7", char: "Q", textCol: "#166534" },
        { id: 2, name: "Hadith Studies", code: "HS-102", category: "Islamic Studies", level: "Advanced Level", dept: "Dept. of Islamic Studies", status: "Active", visible: true, color: "#dcfce7", char: "H", textCol: "#166534" },
        { id: 3, name: "Arabic Language & Literature", code: "ARB-201", category: "Languages", level: "Intermediate", dept: "Dept. of Arabic", status: "Active", visible: true, color: "#d1fae5", char: "A", textCol: "#047857" },
        { id: 4, name: "Alimiyyah / Dars-e-Nizami", code: "DN-500", category: "Core Program", level: "Full Time", dept: "Alimiyyah Program", status: "Review Needed", visible: false, color: "#dbeafe", char: "D", textCol: "#1e40af" },
        { id: 5, name: "Alimah / Adult Women", code: "SPC-305", category: "Special Courses", level: "Women's Section", dept: "Short Courses", status: "Active", visible: true, color: "#fce7f3", char: "A", textCol: "#9d174d" },
        { id: 6, name: "Takhassus fi-l-Fiqh", code: "TK-701", category: "Specialization", level: "Post-Graduate", dept: "Specialization Programs", status: "Draft", visible: false, color: "#e0e7ff", char: "T", textCol: "#3730a3" },
        { id: 7, name: "Urdu Language", code: "URD-101", category: "Languages", level: "Beginner", dept: "Dept. of Urdu", status: "Active", visible: true, color: "#ffedd5", char: "U", textCol: "#9a3412" },
    ]);

    return (
        <div>
            <div className="live-changes-banner" style={{ background: '#eff6ff', borderColor: '#bfdbfe' }}>
                <FaInfoCircle className="banner-icon" style={{ color: '#2563eb' }} />
                <div className="banner-text">
                    <h4 style={{ color: '#1e40af' }}>Live Content:</h4>
                    <p style={{ color: '#1d4ed8' }}>Any changes made here will be reflected immediately on the public website "Academics &gt; Subjects" page. Please review all drafts before publishing.</p>
                </div>
            </div>

            <div className="editor-card full-width" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', marginBottom: '20px' }}>
                <div style={{ position: 'relative', width: '300px' }}>
                    <FaSearch style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                    <input
                        type="text"
                        placeholder="Search subjects..."
                        style={{ width: '100%', padding: '10px 10px 10px 35px', borderRadius: '6px', border: 'none', background: '#f1f5f9', outline: 'none' }}
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <button className="btn-secondary-action" style={{ border: 'none', background: 'transparent' }}>
                        <FaSort /> Reorder List
                    </button>
                    <button className="btn-primary-action">
                        <FaPlus /> Add Subject
                    </button>
                </div>
            </div>

            <div className="editor-card full-width" style={{ padding: 0, overflow: 'hidden' }}>
                <table className="editor-table">
                    <thead>
                        <tr style={{ background: '#f8fafc' }}>
                            <th style={{ paddingLeft: '24px' }}>Subject Name / Code</th>
                            <th>Category</th>
                            <th>Levels / Department</th>
                            <th>Status</th>
                            <th>Visibility</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subjects.map(subject => (
                            <tr key={subject.id}>
                                <td style={{ paddingLeft: '24px' }}>
                                    <div style={{ display: 'flex', items: 'center', gap: '15px' }}>
                                        <div style={{
                                            width: '40px', height: '40px', borderRadius: '8px',
                                            background: subject.color, color: subject.textCol,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontWeight: 'bold', fontSize: '16px'
                                        }}>
                                            {subject.char}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: '600', color: '#1e293b' }}>{subject.name}</div>
                                            <div style={{ fontSize: '12px', color: '#64748b' }}>{subject.code}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span style={{ background: '#f1f5f9', padding: '4px 10px', borderRadius: '15px', fontSize: '12px', fontWeight: '500', color: '#475569' }}>
                                        {subject.category}
                                    </span>
                                </td>
                                <td>
                                    <div style={{ fontWeight: '500', fontSize: '13px', color: '#334155' }}>{subject.level}</div>
                                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>{subject.dept}</div>
                                </td>
                                <td>
                                    <span style={{
                                        background: subject.status === 'Active' ? '#dcfce7' : subject.status === 'Draft' ? '#f1f5f9' : '#fef9c3',
                                        color: subject.status === 'Active' ? '#166534' : subject.status === 'Draft' ? '#475569' : '#854d0e',
                                        padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold'
                                    }}>
                                        {subject.status}
                                    </span>
                                </td>
                                <td>
                                    <div
                                        className={`toggle-switch ${subject.visible ? 'toggle-on' : 'toggle-off'}`}
                                        style={{ fontSize: '28px', cursor: 'pointer' }}
                                        onClick={() => {
                                            const updatedSubjects = subjects.map(s =>
                                                s.id === subject.id ? { ...s, visible: !s.visible } : s
                                            );
                                            setSubjects(updatedSubjects);
                                        }}
                                    >
                                        {subject.visible ? <FaToggleOn /> : <FaToggleOff />}
                                    </div>
                                </td>
                                <td>
                                    {/* Action placeholder */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div style={{ padding: '15px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0' }}>
                    <span style={{ fontSize: '13px', color: '#64748b' }}>Showing 1 to 7 of 24 subjects</span>
                    <div style={{ display: 'flex', gap: '5px' }}>
                        <span style={{ fontSize: '13px', cursor: 'pointer', color: '#64748b' }}>Previous</span>
                        <span style={{ background: '#e2e8f0', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', fontSize: '12px', fontWeight: '600' }}>1</span>
                        <span style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', fontSize: '12px', cursor: 'pointer' }}>2</span>
                        <span style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', fontSize: '12px', cursor: 'pointer' }}>3</span>
                        <span style={{ fontSize: '13px', cursor: 'pointer', color: '#64748b', marginLeft: '5px' }}>Next</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubjectsEditor;
