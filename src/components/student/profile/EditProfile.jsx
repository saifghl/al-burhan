import React from 'react';
import './EditProfile.css';
import { FaTimes, FaSave, FaUserEdit, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/student/profile');
    };

    const handleSave = (e) => {
        e.preventDefault();
        // In a real app, this would submit data to the backend
        console.log("Profile updated");
        navigate('/student/profile');
    };

    return (
        <div className="edit-profile">
            <div className="edit-container">

                <div className="edit-header">
                    <div className="eh-title">
                        <h2>Edit Profile</h2>
                        <p>Update your personal and guardian information</p>
                    </div>
                    <button className="close-btn" onClick={handleCancel}>
                        <FaTimes />
                    </button>
                </div>

                <form onSubmit={handleSave}>

                    {/* Section 1: Personal Details */}
                    <div className="form-section">
                        <div className="section-label">Personal Details</div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" className="form-control" defaultValue="Ahmed Al-Farsi" />
                            </div>
                            <div className="form-group">
                                <label>Date of Birth</label>
                                <input type="date" className="form-control" defaultValue="2010-10-12" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Gender</label>
                                <select className="form-control" defaultValue="Male">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Nationality</label>
                                <input type="text" className="form-control" defaultValue="Omani" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                                <label>Address</label>
                                <textarea className="form-control" rows="3" defaultValue="Villa 45, Street 12, Al-Seeb, Muscat, Oman"></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Guardian Info */}
                    <div className="form-section">
                        <div className="section-label">Guardian Information</div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Guardian Name</label>
                                <input type="text" className="form-control" defaultValue="Ibrahim Al-Farsi" />
                            </div>
                            <div className="form-group">
                                <label>Relationship</label>
                                <select className="form-control" defaultValue="Father">
                                    <option value="Father">Father</option>
                                    <option value="Mother">Mother</option>
                                    <option value="Grandparent">Grandparent</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Contact Number</label>
                                <input type="tel" className="form-control" defaultValue="+968 9988 7766" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" className="form-control" defaultValue="ibrahim.alfarsi@example.com" />
                            </div>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn-cancel" onClick={handleCancel}>Cancel</button>
                        <button type="submit" className="btn-save">
                            <FaSave /> Save Changes
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default EditProfile;
