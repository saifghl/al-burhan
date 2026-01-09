import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaUser, FaSave } from 'react-icons/fa';
import './StudentRecords.css';

// Sub-components
import ProfileDetails from './ProfileDetails';
import AdmissionDetails from './AdmissionDetails';
import ClassSubject from './ClassSubject';
import FeeCategory from './FeeCategory';
import StatusManagement from './StatusManagement';
import SpecialRecords from './SpecialRecords';

const StudentProfile = () => {
    const { studentId } = useParams();
    const [activeTab, setActiveTab] = useState('profile');

    // Mock Data
    const student = {
        name: 'Zaid Ahmed',
        id: 'MDR-2023-054',
        class: 'Class 5-B',
        rollNo: 12,
        house: 'Green House',
        status: 'Active'
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'profile': return <ProfileDetails />;
            case 'admission': return <AdmissionDetails />;
            case 'class': return <ClassSubject />;
            case 'fee': return <FeeCategory />;
            case 'status': return <StatusManagement />;
            case 'records': return <SpecialRecords />;
            default: return <div className="sr-section-card">Content coming soon...</div>;
        }
    };

    return (
        <div className="student-records-container">
            {/* Breadcrumbs */}
            <div style={{ marginBottom: '20px', fontSize: '13px', color: '#64748b' }}>
                <Link to="/admin-dashboard" style={{ textDecoration: 'none', color: '#64748b' }}>Dashboard</Link> /
                <Link to="/admin/student-records" style={{ textDecoration: 'none', color: '#64748b', margin: '0 5px' }}>Students</Link> /
                <span style={{ color: '#64A926', fontWeight: 600, marginLeft: '5px' }}>Student Profile</span>
            </div>

            <div className="sr-title" style={{ marginBottom: '25px' }}>
                <h1>Student Profile</h1>
            </div>

            {/* Profile Header */}
            <div className="sr-profile-header">
                <div className="profile-avatar-lg">
                    <FaUser />
                    <div className="status-dot"></div>
                </div>

                <div className="profile-info" style={{ flex: 1 }}>
                    <h1>
                        {student.name}
                        <span className="status-badge status-active" style={{ fontSize: '12px', verticalAlign: 'middle' }}>
                            {student.status}
                        </span>
                    </h1>

                    <div className="profile-stats">
                        <div className="stat-item">
                            <div className="label">Madarsa ID</div>
                            <div className="value">{student.id}</div>
                        </div>
                        <div className="stat-item">
                            <div className="label">Class</div>
                            <div className="value">{student.class}</div>
                        </div>
                        <div className="stat-item">
                            <div className="label">Roll No</div>
                            <div className="value">{student.rollNo}</div>
                        </div>
                        <div className="stat-item">
                            <div className="label">House</div>
                            <div className="value">{student.house}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="sr-tabs-container">
                <div className="sr-tab-nav">
                    <button
                        className={`tab-btn ${activeTab === 'profile' ? 'sr-tab-active' : ''}`}
                        onClick={() => setActiveTab('profile')}
                    >
                        Profile Details
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'admission' ? 'sr-tab-active' : ''}`}
                        onClick={() => setActiveTab('admission')}
                    >
                        Admission Details
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'class' ? 'sr-tab-active' : ''}`}
                        onClick={() => setActiveTab('class')}
                    >
                        Class & Subject
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'fee' ? 'sr-tab-active' : ''}`}
                        onClick={() => setActiveTab('fee')}
                    >
                        Fee Category
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'status' ? 'sr-tab-active' : ''}`}
                        onClick={() => setActiveTab('status')}
                    >
                        Status Management
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'records' ? 'sr-tab-active' : ''}`}
                        onClick={() => setActiveTab('records')}
                    >
                        Special Records
                    </button>
                </div>
            </div>

            {/* Tab Content */}
            <div className="sr-tab-content">
                {renderTabContent()}
            </div>

            {/* Action Footer */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', marginTop: '30px' }}>
                <button className="btn-reset" style={{ border: 'none' }}>Cancel</button>
                <button className="btn-add-student">
                    <FaSave /> Save Changes
                </button>
            </div>
        </div>
    );
};

export default StudentProfile;
