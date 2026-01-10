import React, { useState } from 'react';
import { FaTrash, FaMdDragIndicator, FaPlus, FaInfoCircle } from 'react-icons/fa';
import ToggleSwitch from './ToggleSwitch';
import logo from '../../../assets/logo.png'; // Using small logo for preview
import './PublicContent.css';

const HeaderEditor = () => {
    // Branding State
    const [siteName, setSiteName] = useState('Al Burhan');
    const [ctaLabel, setCtaLabel] = useState('Admin Portal');
    const [headerCta, setHeaderCta] = useState('Donate Now');

    // Navigation Menu State
    const [menuItems, setMenuItems] = useState([
        { id: 1, label: 'Home', slug: '/', visible: true },
        { id: 2, label: 'About', slug: '/about', visible: true },
        { id: 3, label: 'Administration', slug: '/administration', visible: true },
        { id: 4, label: 'Academics', slug: '/academics', visible: true },
        { id: 5, label: 'Subjects', slug: '/subjects', visible: true },
        { id: 6, label: 'Admissions', slug: '/admission', visible: true },
        { id: 7, label: 'Donations', slug: '/donation', visible: false },
    ]);

    const toggleVisibility = (id) => {
        setMenuItems(menuItems.map(item =>
            item.id === id ? { ...item, visible: !item.visible } : item
        ));
    };

    const deleteItem = (id) => {
        setMenuItems(menuItems.filter(item => item.id !== id));
    };

    const addLink = () => {
        const newId = menuItems.length > 0 ? Math.max(...menuItems.map(i => i.id)) + 1 : 1;
        setMenuItems([...menuItems, { id: newId, label: 'New Link', slug: '/new-link', visible: true }]);
    };

    return (
        <div>
            <div className="live-changes-banner">
                <FaInfoCircle className="banner-icon" />
                <div className="banner-text">
                    <h4>Live Changes</h4>
                    <p>Changes made here are reflected immediately on the public website after publishing.</p>
                </div>
            </div>

            <div className="editor-grid-2">
                {/* Branding Section */}
                <div className="editor-card">
                    <div className="card-title">Branding</div>

                    <div className="form-group">
                        <label className="form-label">School Logo</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <img src={logo} alt="Logo Preview" style={{ height: '60px', width: 'auto', border: '1px solid #e2e8f0', padding: '5px', borderRadius: '4px' }} />
                            <button className="btn-secondary-action">Change Logo</button>
                        </div>
                        <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '5px' }}>Recommended: 200x200px PNG or SVG</p>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Site Name</label>
                        <input
                            type="text"
                            className="form-input"
                            value={siteName}
                            onChange={(e) => setSiteName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Login/Register Button Label</label>
                        <input
                            type="text"
                            className="form-input"
                            value={ctaLabel}
                            onChange={(e) => setCtaLabel(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Header CTA Button Text</label>
                        <input
                            type="text"
                            className="form-input"
                            value={headerCta}
                            onChange={(e) => setHeaderCta(e.target.value)}
                        />
                    </div>
                </div>

                {/* Navigation Menu Section */}
                <div className="editor-card">
                    <div className="card-title">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                            <h3 className="section-title" style={{ margin: 0 }}>Navigation Menu</h3>
                            <button className="btn-secondary-action" onClick={addLink}>
                                <FaPlus /> Add Link
                            </button>
                        </div>
                    </div>

                    <table className="editor-table">
                        <thead>
                            <tr>
                                <th style={{ width: '40px' }}></th>
                                <th>Label</th>
                                <th>URL Slug</th>
                                <th style={{ textAlign: 'center' }}>Visible</th>
                                <th style={{ textAlign: 'center' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menuItems.map((item) => (
                                <tr key={item.id}>
                                    <td style={{ color: '#cbd5e1', cursor: 'grab' }}>:::</td>
                                    <td>
                                        <input
                                            type="text"
                                            className="form-input"
                                            style={{ padding: '6px 10px', width: '120px' }}
                                            value={item.label}
                                            onChange={(e) => {
                                                const newLabel = e.target.value;
                                                setMenuItems(menuItems.map(i => i.id === item.id ? { ...i, label: newLabel } : i));
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <span style={{ color: '#64748b', fontSize: '13px' }}>{item.slug}</span>
                                    </td>
                                    <td style={{ textAlign: 'center' }}>
                                        <div>
                                            <ToggleSwitch
                                                checked={item.visible}
                                                onChange={() => toggleVisibility(item.id)}
                                            />
                                        </div>
                                    </td>
                                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                        <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', width: '100%' }}>
                                            <FaTrash
                                                className="action-icon"
                                                onClick={() => deleteItem(item.id)}
                                                title="Delete Link"
                                                style={{ fontSize: '18px', width: '18px', height: '18px', margin: '0 auto' }}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
                <span style={{ fontSize: '12px', color: '#94a3b8', alignSelf: 'center' }}>Last saved: Today at 10:42 AM</span>
                <button className="btn-secondary-action">Discard Changes</button>
                <button className="btn-primary-action">Publish Changes</button>
            </div>
        </div>
    );
};

export default HeaderEditor;
