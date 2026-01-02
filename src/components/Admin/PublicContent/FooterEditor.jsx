import React, { useState } from 'react';
import { FaToggleOn, FaToggleOff, FaInfoCircle, FaSave, FaPlus, FaTrash } from 'react-icons/fa';
import './PublicContent.css';

const FooterEditor = () => {
    // About / Description State
    const [aboutHeading, setAboutHeading] = useState('About us');
    const [aboutText, setAboutText] = useState('Dedicated to fostering a nurturing environment for academic excellence and personal growth since 1985.');
    const [isAboutVisible, setIsAboutVisible] = useState(true);

    // Contact Info State
    const [address, setAddress] = useState('123 Education lane, Knowledge city, KC 41002');
    const [phone, setPhone] = useState('+91 (555) 000-0000');
    const [email, setEmail] = useState('abc@madarsa.com');

    // Social Media State
    const [socials, setSocials] = useState({
        facebook: '',
        twitter: '',
        instagram: '',
        youtube: ''
    });

    // Quick Links State
    const [quickLinks, setQuickLinks] = useState([
        { id: 1, label: 'Admission', url: '/admissions' },
        { id: 2, label: 'Academic Calendar', url: '/calendar' },
        { id: 3, label: 'News & Events', url: '/news' },
    ]);

    // Legal Links State
    const [legalLinks, setLegalLinks] = useState([
        { id: 1, label: 'Privacy Policy', url: '/privacy' },
        { id: 2, label: 'Terms of Service', url: '/terms' },
    ]);

    const [copyrightText, setCopyrightText] = useState('© 2024 Al Burhan School. All rights reserved.');

    const updateSocial = (platform, value) => {
        setSocials({ ...socials, [platform]: value });
    };

    const handleLinkChange = (id, field, value, list, setList) => {
        setList(list.map(link => link.id === id ? { ...link, [field]: value } : link));
    };

    const addLink = (list, setList) => {
        const newId = list.length > 0 ? Math.max(...list.map(i => i.id)) + 1 : 1;
        setList([...list, { id: newId, label: '', url: '' }]);
    };

    const deleteLink = (id, list, setList) => {
        setList(list.filter(link => link.id !== id));
    };

    return (
        <div>
            <div className="live-changes-banner">
                <FaInfoCircle className="banner-icon" />
                <div className="banner-text">
                    <h4>Live Changes</h4>
                    <p>Any changes made to the footer sections below will be immediately reflected on the public website upon saving.</p>
                </div>
            </div>

            <div className="editor-grid-2">
                {/* Left Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                    {/* About Short Text */}
                    <div className="editor-card">
                        <div className="card-title">
                            About Short Text
                            <div
                                className={`toggle-switch ${isAboutVisible ? 'toggle-on' : 'toggle-off'}`}
                                onClick={() => setIsAboutVisible(!isAboutVisible)}
                                title="Toggle Visibility"
                            >
                                {isAboutVisible ? <FaToggleOn /> : <FaToggleOff />}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Footer Heading</label>
                            <input
                                type="text"
                                className="form-input"
                                value={aboutHeading}
                                onChange={(e) => setAboutHeading(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Description Text</label>
                            <textarea
                                className="form-textarea"
                                value={aboutText}
                                onChange={(e) => setAboutText(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="editor-card">
                        <div className="card-title">
                            Quick Links
                            <button className="btn-secondary-action" onClick={() => addLink(quickLinks, setQuickLinks)}>
                                <FaPlus /> Add Link
                            </button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {quickLinks.map(link => (
                                <div key={link.id} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <div style={{ color: '#cbd5e1', cursor: 'grab' }}>:::</div>
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="Label"
                                        value={link.label}
                                        onChange={(e) => handleLinkChange(link.id, 'label', e.target.value, quickLinks, setQuickLinks)}
                                    />
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="URL"
                                        value={link.url}
                                        onChange={(e) => handleLinkChange(link.id, 'url', e.target.value, quickLinks, setQuickLinks)}
                                    />
                                    <FaTrash
                                        className="action-icon"
                                        onClick={() => deleteLink(link.id, quickLinks, setQuickLinks)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Legal Links */}
                    <div className="editor-card">
                        <div className="card-title">
                            Legal & Policy Links
                            <button className="btn-secondary-action" onClick={() => addLink(legalLinks, setLegalLinks)}>
                                <FaPlus /> Add Link
                            </button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {legalLinks.map(link => (
                                <div key={link.id} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <div style={{ color: '#cbd5e1', cursor: 'grab' }}>:::</div>
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="Label"
                                        value={link.label}
                                        onChange={(e) => handleLinkChange(link.id, 'label', e.target.value, legalLinks, setLegalLinks)}
                                    />
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="URL"
                                        value={link.url}
                                        onChange={(e) => handleLinkChange(link.id, 'url', e.target.value, legalLinks, setLegalLinks)}
                                    />
                                    <FaTrash
                                        className="action-icon"
                                        onClick={() => deleteLink(link.id, legalLinks, setLegalLinks)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                    {/* Contact Information */}
                    <div className="editor-card">
                        <div className="card-title">Contact Information</div>

                        <div className="form-group">
                            <label className="form-label">Address</label>
                            <textarea
                                className="form-textarea"
                                style={{ minHeight: '60px' }}
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Phone Number</label>
                            <input
                                type="text"
                                className="form-input"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Email Address</label>
                            <input
                                type="text"
                                className="form-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="editor-card">
                        <div className="card-title">Social Media</div>

                        <div className="form-group">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <span style={{ width: '30px', fontWeight: 'bold', color: '#3b5998', background: '#eef2ff', textAlign: 'center', padding: '4px', borderRadius: '4px', fontSize: '12px' }}>FB</span>
                                <input type="text" className="form-input" placeholder="Facebook URL" value={socials.facebook} onChange={(e) => updateSocial('facebook', e.target.value)} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <span style={{ width: '30px', fontWeight: 'bold', color: '#1da1f2', background: '#f0f9ff', textAlign: 'center', padding: '4px', borderRadius: '4px', fontSize: '12px' }}>TW</span>
                                <input type="text" className="form-input" placeholder="Twitter/X URL" value={socials.twitter} onChange={(e) => updateSocial('twitter', e.target.value)} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <span style={{ width: '30px', fontWeight: 'bold', color: '#e1306c', background: '#fdf2f8', textAlign: 'center', padding: '4px', borderRadius: '4px', fontSize: '12px' }}>IG</span>
                                <input type="text" className="form-input" placeholder="Instagram URL" value={socials.instagram} onChange={(e) => updateSocial('instagram', e.target.value)} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ width: '30px', fontWeight: 'bold', color: '#ff0000', background: '#fef2f2', textAlign: 'center', padding: '4px', borderRadius: '4px', fontSize: '12px' }}>YT</span>
                                <input type="text" className="form-input" placeholder="YouTube URL" value={socials.youtube} onChange={(e) => updateSocial('youtube', e.target.value)} />
                            </div>
                        </div>
                    </div>

                    {/* Footer Settings */}
                    <div className="editor-card">
                        <div className="card-title">Footer Settings</div>

                        <div className="form-group">
                            <label className="form-label">Copyright Text</label>
                            <input
                                type="text"
                                className="form-input"
                                value={copyrightText}
                                onChange={(e) => setCopyrightText(e.target.value)}
                            />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                            <div className="form-group" style={{ margin: 0 }}>
                                <span style={{ fontSize: '13px', color: '#64748b' }}>Status</span>
                                <span style={{ marginLeft: '10px', background: '#dcfce7', color: '#166534', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold' }}>Published</span>
                            </div>
                            <button className="btn-primary-action">
                                <FaSave /> Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterEditor;
