import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import '../Admin.css'; // Use common admin styles
import './PublicContent.css'; // Specific styles for this module

import HeaderEditor from './HeaderEditor';
import FooterEditor from './FooterEditor';
import HomepageEditor from './HomepageEditor';
import AboutEditor from './AboutEditor';
import AdministrationEditor from './AdministrationEditor';
import SubjectsEditor from './SubjectsEditor';
import AdmissionsEditor from './AdmissionsEditor';
import DonationsEditor from './DonationsEditor';
import ContactEditor from './ContactEditor';

const PublicContentManager = () => {
    const [activeTab, setActiveTab] = useState('header');

    const tabs = [
        { id: 'header', label: 'Header', component: HeaderEditor },
        { id: 'footer', label: 'Footer', component: FooterEditor },
        { id: 'homepage', label: 'Homepage', component: HomepageEditor },
        { id: 'about', label: 'About/Legacy', component: AboutEditor },
        { id: 'administration', label: 'Administration', component: AdministrationEditor },
        { id: 'academics', label: 'Academics', component: () => <div>Academics (To be implemented)</div> },
        { id: 'subjects', label: 'Subjects', component: SubjectsEditor },
        { id: 'admissions', label: 'Admissions', component: AdmissionsEditor },
        { id: 'donations', label: 'Donations', component: DonationsEditor },
        { id: 'contact', label: 'Contact', component: ContactEditor },
    ];

    const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || HeaderEditor;

    return (
        <div className="public-content-manager">
            <div className="pcm-header">
                <div>
                    <div className="pcm-breadcrumb">Dashboard / CMS</div>
                    <h1 className="pcm-title">Public Content Manager</h1>
                    <p className="pcm-subtitle">Manage the content displayed on your public school website.</p>
                </div>
                <button className="btn-preview">
                    <FaEye /> Preview Site
                </button>
            </div>

            <div className="pcm-tabs">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`pcm-tab ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="pcm-content-area">
                <ActiveComponent />
            </div>
        </div>
    );
};

export default PublicContentManager;
