import React, { useState } from 'react';
import { FaToggleOn, FaToggleOff, FaCheckCircle, FaFileAlt, FaPlus, FaImage, FaCircle } from 'react-icons/fa';
import './PublicContent.css';

const AdmissionsEditor = () => {
    // General Info State
    const [headerStatus, setHeaderStatus] = useState(true);
    const [headline, setHeadline] = useState('Admission Page Headline');
    const [introText, setIntroText] = useState('');

    // Eligibility Data
    const [criteria, setCriteria] = useState([
        "Minimum GPA of 3.0 or equivalent in previous academic records.",
        "Proficiency in English language (TOEFL/IELTS for international students).",
        "Letter of recommendation from previous school principal or counselor."
    ]);

    // Required Docs Data
    const [docs, setDocs] = useState([
        "Birth Certificate",
        "Immunization Records",
        "Previous Year Report Card",
        "Passport Size Photos (2)",
        "Transfer Certificate"
    ]);

    // Process Steps
    const [steps, setSteps] = useState([
        { id: 1, title: 'Online Application', desc: 'Submit the initial application form via our portal.' },
        { id: 2, title: 'Document Submission', desc: 'Upload necessary academic and personal documents.' },
        { id: 3, title: 'Assessment & Interview', desc: 'Scheduled test for student and interaction with parents.' },
    ]);

    const addCriteria = () => {
        const newCriteria = prompt("Enter new eligibility criteria:");
        if (newCriteria) setCriteria([...criteria, newCriteria]);
    };

    const addDoc = () => {
        const newDoc = prompt("Enter new required document:");
        if (newDoc) setDocs([...docs, newDoc]);
    };

    const addStep = () => {
        const title = prompt("Enter Step Title:");
        const desc = prompt("Enter Step Description:");
        if (title && desc) {
            setSteps([...steps, { id: steps.length + 1, title, desc }]);
        }
    };

    return (
        <div>
            <div className="editor-card full-width" style={{ marginTop: '0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 className="card-title" style={{ margin: 0 }}>General Information & Banner</h3>
                    <div
                        className={`toggle-switch ${headerStatus ? 'toggle-on' : 'toggle-off'}`}
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}
                        onClick={() => setHeaderStatus(!headerStatus)}
                    >
                        <span style={{ color: '#64748b' }}>Status: {headerStatus ? <b>Published</b> : 'Hidden'}</span>
                        {headerStatus ? <FaToggleOn style={{ fontSize: '24px' }} /> : <FaToggleOff style={{ fontSize: '24px' }} />}
                    </div>
                </div>

                <div className="editor-grid-2">
                    <div>
                        <div className="form-group">
                            <label className="form-label">Admission Page Headline</label>
                            <input type="text" className="form-input" value={headline} onChange={(e) => setHeadline(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Introduction Text</label>
                            <textarea className="form-textarea" value={introText} onChange={(e) => setIntroText(e.target.value)} style={{ minHeight: '120px' }}></textarea>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                            <button className="btn-primary-action">Save Changes</button>
                            <button className="btn-secondary-action">Discard</button>
                        </div>
                    </div>

                    <div>
                        <label className="form-label">Banner Image</label>
                        <div style={{
                            background: '#e7e5e4',
                            height: '180px',
                            borderRadius: '100px / 90px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Mocking the oval image look from screenshot */}
                            <div style={{ textAlign: 'center', zIndex: 2 }}>
                                <div style={{ background: 'white', width: '40px', height: '40px', borderRadius: '50%', margin: '0 auto 10px auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <FaImage style={{ color: '#64A926' }} />
                                </div>
                                <div style={{ color: 'white', fontWeight: 'bold', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Click to replace banner</div>
                                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '11px' }}>Size: PNG or TIF (max 800x400px)</div>
                            </div>
                            {/* Overlay for effect */}
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="editor-grid-2">
                {/* Eligibility Criteria */}
                <div className="editor-card">
                    <div className="card-title">
                        Eligibility Criteria
                        <FaPlus style={{ color: '#64A926', cursor: 'pointer', fontSize: '14px' }} onClick={addCriteria} />
                    </div>
                    <p style={{ fontSize: '12px', color: '#94a3b8', margin: '-15px 0 15px 0' }}>Define what qualifies a student for admission.</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {criteria.map((item, i) => (
                            <div key={i} style={{ background: '#f1f5f9', padding: '12px 15px', borderRadius: '6px', display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '13px', color: '#334155' }}>
                                <FaCheckCircle style={{ color: '#64748b', marginTop: '3px', flexShrink: 0 }} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Required Docs */}
                <div className="editor-card">
                    <div className="card-title">
                        Required Docs
                        <span style={{ fontSize: '12px', color: '#64A926', cursor: 'pointer' }} onClick={addDoc}>Edit List</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {docs.map((doc, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#334155' }}>
                                <FaFileAlt style={{ color: '#64748b' }} />
                                {doc}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Admission Process Steps */}
            <div className="editor-card full-width">
                <div className="card-title">
                    Admission Process Steps
                    <button className="btn-secondary-action" style={{ fontSize: '12px', padding: '4px 10px' }} onClick={addStep}>
                        <FaPlus /> Add Step
                    </button>
                </div>
                <p style={{ fontSize: '12px', color: '#94a3b8', margin: '-15px 0 20px 0' }}>The timeline displayed to parents.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingLeft: '10px' }}>
                    {steps.map((step, i) => (
                        <div key={step.id} style={{ display: 'flex', gap: '15px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{
                                    width: '24px', height: '24px', borderRadius: '50%',
                                    border: '2px solid #64A926', background: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <div style={{ width: '10px', height: '10px', background: '#64A926', borderRadius: '50%' }}></div>
                                </div>
                                {i !== steps.length - 1 && <div style={{ width: '2px', height: '100%', background: '#e2e8f0', margin: '5px 0' }}></div>}
                            </div>
                            <div style={{ paddingBottom: '10px' }}>
                                <h5 style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#1e293b' }}>{step.id}. {step.title}</h5>
                                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
                <span style={{ fontSize: '12px', color: '#94a3b8', alignSelf: 'center' }}>Last saved: Today at 10:42 AM</span>
                <button className="btn-secondary-action">Save as Draft</button>
                <button className="btn-primary-action">Publish Changes</button>
            </div>
        </div>
    );
};

export default AdmissionsEditor;
