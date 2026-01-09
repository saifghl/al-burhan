import React, { useState } from 'react';
import { FaInfoCircle, FaImage, FaChevronDown, FaChevronUp, FaPlus, FaGraduationCap, FaFlask, FaBookOpen } from 'react-icons/fa';
import ToggleSwitch from './ToggleSwitch';
import './PublicContent.css';

const HomepageEditor = () => {
    // Section Visibility State
    const [sections, setSections] = useState({
        hero: true,
        stats: true,
        about: true,
        programs: true,
        announcements: true,
        bottomCta: true
    });

    const toggleSection = (section) => {
        setSections({ ...sections, [section]: !sections[section] });
    };

    // Hero Section State
    const [heroData, setHeroData] = useState({
        heading: 'Empowering Future Leaders',
        subheading: 'Providing world-class education with a focus on moral values and academic excellence.',
        ctaText: 'Apply Now',
        ctaLink: '/admission'
    });

    // Program Cards State (Simplified)
    const [programCards] = useState([
        { id: 1, title: 'Early Learning', desc: 'Ages 3-5. Foundation for lifelong learning.', icon: <FaGraduationCap color="#3b82f6" /> },
        { id: 2, title: 'Primary School', desc: 'Grades 1-6. Developing core skills.', icon: <FaBookOpen color="#10b981" /> },
        { id: 3, title: 'High School', desc: 'Grades 7-12. Preparation for university.', icon: <FaFlask color="#a855f7" /> },
    ]);

    // Bottom CTA State
    const [ctaData, setCtaData] = useState({
        heading: 'Ready to join our community?',
        buttonLabel: 'Start Admission Process',
    });

    return (
        <div>
            <div className="live-changes-banner">
                <FaInfoCircle className="banner-icon" />
                <div className="banner-text">
                    <h4>Changes are live</h4>
                    <p>Updates made here will reflect immediately on the public website. Use the "Preview Site" button to verify changes before publishing major updates.</p>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                {/* Hero Section */}
                <div className="editor-card full-width">
                    <div className="card-title">
                        Hero Section
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <ToggleSwitch
                                checked={sections.hero}
                                onChange={() => toggleSection('hero')}
                            />
                            <span style={{ fontSize: '13px', color: '#64748b', verticalAlign: 'middle', marginLeft: '5px' }}>Visible</span>
                        </div>
                    </div>

                    {sections.hero && (
                        <div className="editor-grid-2" style={{ gridTemplateColumns: '1fr 1fr' }}>
                            <div>
                                <div className="form-group">
                                    <label className="form-label">Heading</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        value={heroData.heading}
                                        onChange={(e) => setHeroData({ ...heroData, heading: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Subheading</label>
                                    <textarea
                                        className="form-textarea"
                                        value={heroData.subheading}
                                        onChange={(e) => setHeroData({ ...heroData, subheading: e.target.value })}
                                    />
                                </div>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <div className="form-group" style={{ flex: 1 }}>
                                        <label className="form-label">Primary CTA Text</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            value={heroData.ctaText}
                                            onChange={(e) => setHeroData({ ...heroData, ctaText: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group" style={{ flex: 1 }}>
                                        <label className="form-label">Primary CTA Link</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            value={heroData.ctaLink}
                                            onChange={(e) => setHeroData({ ...heroData, ctaLink: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Banner Image</label>
                                <div style={{
                                    border: '2px dashed #e2e8f0',
                                    borderRadius: '8px',
                                    height: '200px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#f8fafc',
                                    color: '#64748b',
                                    cursor: 'pointer'
                                }}>
                                    <FaImage style={{ fontSize: '32px', marginBottom: '10px', color: '#64A926' }} />
                                    <span style={{ fontSize: '14px', fontWeight: '500' }}>Click to change image</span>
                                    <span style={{ fontSize: '11px', marginTop: '5px' }}>Recommended size: 1920x1080px. Max 2MB.</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                                    <button className="btn-primary-action" style={{ fontSize: '13px', padding: '8px 16px' }}>Save Section</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Collapsed Sections Placeholders */}
                <div className="editor-card full-width" style={{ padding: '15px 24px' }}>
                    <div className="card-title" style={{ margin: 0 }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <ToggleSwitch checked={sections.stats} onChange={() => { }} /> Statistics Counters
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <ToggleSwitch checked={sections.stats} onChange={() => toggleSection('stats')} />
                            <span style={{ fontSize: '13px', color: '#64748b', verticalAlign: 'middle', marginLeft: '5px' }}>Visible</span> <FaChevronDown style={{ fontSize: '14px', marginLeft: '10px', color: '#94a3b8' }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="editor-card full-width" style={{ padding: '15px 24px' }}>
                <div className="card-title" style={{ margin: 0 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <ToggleSwitch checked={sections.about} onChange={() => { }} /> About Preview Text
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ToggleSwitch
                            checked={sections.about}
                            onChange={() => toggleSection('about')}
                        />
                        <span style={{ fontSize: '13px', color: '#64748b', verticalAlign: 'middle', marginLeft: '5px' }}>Visible</span> <FaChevronDown style={{ fontSize: '14px', marginLeft: '10px', color: '#94a3b8' }} />
                    </div>
                </div>
            </div>

            {/* Programs Overview */}
            <div className="editor-card full-width">
                <div className="card-title">
                    Programs Overview
                    <div>
                        <button className="btn-secondary-action" style={{ display: 'inline-flex', marginRight: '15px' }}>
                            <FaPlus /> Add Card
                        </button>
                        <div style={{ display: 'inline-flex', verticalAlign: 'middle', alignItems: 'center' }}>
                            <ToggleSwitch
                                checked={sections.programs}
                                onChange={() => toggleSection('programs')}
                            />
                            <span style={{ fontSize: '13px', color: '#64748b', marginLeft: '5px' }}>Visible</span>
                        </div>
                    </div>
                </div>
                {sections.programs && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                        {programCards.map(card => (
                            <div key={card.id} style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                                <div style={{ width: '40px', height: '40px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', fontSize: '18px' }}>
                                    {card.icon}
                                </div>
                                <h5 style={{ margin: '0 0 8px 0', fontSize: '15px', color: '#1e293b' }}>{card.title}</h5>
                                <p style={{ margin: 0, fontSize: '13px', color: '#64748b', lineHeight: '1.4' }}>{card.desc}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Bottom CTA */}
            <div className="editor-card full-width">
                <div className="card-title">
                    Bottom CTA Message
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ToggleSwitch
                            checked={sections.bottomCta}
                            onChange={() => toggleSection('bottomCta')}
                        />
                        <span style={{ fontSize: '13px', color: '#64748b', verticalAlign: 'middle', marginLeft: '5px' }}>Visible</span> <FaChevronUp style={{ fontSize: '14px', marginLeft: '10px', color: '#94a3b8' }} />
                    </div>
                </div>
                {sections.bottomCta && (
                    <div>
                        <div className="editor-grid-2" style={{ gridTemplateColumns: '1fr 1fr' }}>
                            <div className="form-group">
                                <label className="form-label">Message Heading</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={ctaData.heading}
                                    onChange={(e) => setCtaData({ ...ctaData, heading: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Button Label</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={ctaData.buttonLabel}
                                    onChange={(e) => setCtaData({ ...ctaData, buttonLabel: e.target.value })}
                                />
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                            <button className="btn-primary-action" style={{ fontSize: '13px', padding: '8px 16px' }}>Update CTA</button>
                        </div>
                    </div>
                )}
            </div>

            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <button style={{ background: 'white', border: '1px dashed #cbd5e1', padding: '12px 24px', borderRadius: '8px', color: '#64A926', fontWeight: '600', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <FaPlus /> Add New Homepage Section
                </button>
            </div>

        </div>
    );
};

export default HomepageEditor;
