import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaUserFriends, FaCalendarAlt, FaChevronRight } from 'react-icons/fa';
import './PublicRequests.css';

const StudentRegistrationForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock Form State - Pre-filled from request
    const [formData, setFormData] = useState({
        studentName: 'Ahmed Hassan',
        dob: '2015-05-15',
        gender: 'male',
        class: 'Class 1',
        section: 'Section A',
        studentPhone: '+91 0985435845',
        address: '123 green street, pune',
        parentName: 'Hassan Ali',
        parentPhone: '+91 0985435845',
        parentEmail: 'hassan@gmail.com'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        navigate(`/admin/public-requests/${id}/generate-id`);
    };

    return (
        <div className="public-requests-container">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <span className="breadcrumb-item" onClick={() => navigate('/admin')}>Dashboard</span>
                <span className="breadcrumb-separator">›</span>
                <span className="breadcrumb-item" onClick={() => navigate('/admin/public-requests')}>Admissions</span>
                <span className="breadcrumb-separator">›</span>
                <span className="breadcrumb-current">Student Details</span>
            </div>

            <div style={{ marginBottom: '25px' }}>
                <h1 className="page-title">Student Details</h1>
                <p className="page-subtitle">Review and edit student and parent details before creating Madarsa ID.</p>
            </div>

            <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '30px' }}>

                {/* Student Info Section */}
                <div className="form-section">
                    <div className="info-card-header" style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '15px' }}>
                        <FaUserGraduate style={{ color: '#64A926' }} /> Student Information
                    </div>

                    <div className="form-row">
                        <div className="form-group full">
                            <label className="filter-label form-label-required">Student Full Name</label>
                            <input type="text" className="filter-input" name="studentName" value={formData.studentName} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group full">
                            <label className="filter-label form-label-required">Date of Birth</label>
                            <div className="filter-input-wrapper">
                                <input type="text" className="filter-input" name="dob" value={formData.dob} onChange={handleChange} placeholder="DD / MM / YYYY" />
                                <FaCalendarAlt className="filter-icon" style={{ left: 'auto', right: '12px', color: '#64A926' }} />
                            </div>
                        </div>
                        <div className="form-group full">
                            <label className="filter-label form-label-required">Gender</label>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', height: '42px' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => setFormData({ ...formData, gender: 'male' })}>
                                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: '1px solid #e2e8f0', background: formData.gender === 'male' ? '#64A926' : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {formData.gender === 'male' && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'white' }}></div>}
                                    </div>
                                    <span>Male</span>
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => setFormData({ ...formData, gender: 'female' })}>
                                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: '1px solid #e2e8f0', background: formData.gender === 'female' ? '#64A926' : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {formData.gender === 'female' && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'white' }}></div>}
                                    </div>
                                    <span>Female</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group full">
                            <label className="filter-label form-label-required">Class</label>
                            <input type="text" className="filter-input" name="class" value={formData.class} onChange={handleChange} />
                        </div>
                        <div className="form-group full">
                            <label className="filter-label">Section</label>
                            <input type="text" className="filter-input" name="section" value={formData.section} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group full">
                            <label className="filter-label form-label-required">Student Phone Number</label>
                            <input type="text" className="filter-input" name="studentPhone" value={formData.studentPhone} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group full">
                            <label className="filter-label">Residential Address</label>
                            <textarea className="filter-input" style={{ minHeight: '80px', resize: 'none' }} name="address" value={formData.address} onChange={handleChange} />
                        </div>
                    </div>
                </div>

                {/* Parent Info Section */}
                <div className="form-section">
                    <div className="info-card-header" style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '15px' }}>
                        <FaUserFriends style={{ color: '#64A926' }} /> Parent / Guardian Information
                    </div>

                    <div className="form-row">
                        <div className="form-group full">
                            <label className="filter-label form-label-required">Parent / Guardian Name</label>
                            <input type="text" className="filter-input" name="parentName" value={formData.parentName} onChange={handleChange} />
                        </div>
                        <div className="form-group full">
                            <label className="filter-label form-label-required">Parent Phone Number</label>
                            <input type="text" className="filter-input" name="parentPhone" value={formData.parentPhone} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group full">
                            <label className="filter-label">Parent Email (Optional)</label>
                            <input type="text" className="filter-input" name="parentEmail" value={formData.parentEmail} onChange={handleChange} />
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                    <button className="btn-secondary-action" style={{ padding: '10px 25px' }} onClick={() => navigate(-1)}>Cancel</button>
                    <button className="btn-primary-action" style={{ padding: '10px 25px', display: 'flex', alignItems: 'center', gap: '8px' }} onClick={handleSave}>
                        Save & Continue <FaChevronRight style={{ fontSize: '12px' }} />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default StudentRegistrationForm;
