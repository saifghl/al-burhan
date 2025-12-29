import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import teacherImg from '../../assets/teacher.png';
import studentImg from '../../assets/student.png';
import parentImg from '../../assets/parent.png';
import donorImg from '../../assets/donar.png';
import './Login.css';

const Login = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
    };

    const handleBackToSelection = () => {
        setSelectedRole(null);
    };

    return (
        <div className="login-page">
            {/* View 1: Workspace Selection */}
            {!selectedRole && (
                <div className="workspace-selection-container">
                    <h1 className="login-heading">Select your workspace</h1>
                    <p className="login-subheading">Please select the role you wish to access today to enter your dashboard.</p>

                    <div className="role-cards-grid">
                        {/* Teacher Card */}
                        <div className="role-card" onClick={() => handleRoleSelect('Teacher')}>
                            <div className="role-img-container">
                                <img src={teacherImg} alt="Teacher" className="role-img" />
                            </div>
                            <div className="role-content">
                                <div className="role-header">
                                    <h3>Teacher</h3>
                                    <BsArrowRight className="arrow-icon" />
                                </div>
                                <p>Classroom management, grading, and assignments</p>
                            </div>
                        </div>

                        {/* Student Card */}
                        <div className="role-card" onClick={() => handleRoleSelect('Student')}>
                            <div className="role-img-container">
                                <img src={studentImg} alt="Student" className="role-img" />
                            </div>
                            <div className="role-content">
                                <div className="role-header">
                                    <h3>Student</h3>
                                    <BsArrowRight className="arrow-icon" />
                                </div>
                                <p>Access learning portal, courses, and grades</p>
                            </div>
                        </div>

                        {/* Parent Card */}
                        <div className="role-card" onClick={() => handleRoleSelect('Parent')}>
                            <div className="role-img-container">
                                <img src={parentImg} alt="Parent" className="role-img" />
                            </div>
                            <div className="role-content">
                                <div className="role-header">
                                    <h3>Parent</h3>
                                    <BsArrowRight className="arrow-icon" />
                                </div>
                                <p>Monitor progress, attendance, and communications</p>
                            </div>
                        </div>

                        {/* Donor Card */}
                        <div className="role-card" onClick={() => handleRoleSelect('Donor')}>
                            <div className="role-img-container">
                                <img src={donorImg} alt="Donor" className="role-img" />
                            </div>
                            <div className="role-content">
                                <div className="role-header">
                                    <h3>Donor</h3>
                                    <BsArrowRight className="arrow-icon" />
                                </div>
                                <p>Contribution dashboard and impact reports</p>
                            </div>
                        </div>
                    </div>

                    <div className="sign-out-container">
                        <button className="btn-sign-out">Sign Out</button>
                        <p className="support-link">Not seeing your role? Contact Support.</p>
                    </div>
                </div>
            )}

            {/* View 2: Login Form */}
            {selectedRole && (
                <div className="login-form-container">
                    <div className="back-link" onClick={handleBackToSelection}>
                        &larr; Back to Selection
                    </div>
                    <h1 className="login-heading">Welcome Back</h1>
                    <p className="login-subheading">Enter your details to access your account.</p>

                    <div className="login-form-box">
                        <div className="form-group">
                            <label>Email or Mobile Number</label>
                            <input type="text" className="login-input" />
                        </div>

                        <div className="form-group">
                            <div className="label-row">
                                <label>Password</label>
                                <Link to="/login/forgot-password" style={{ textDecoration: 'none' }}>
                                    <span className="forgot-password">Forgot Password?</span>
                                </Link>
                            </div>
                            <div className="password-input-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="login-input password-input"
                                />
                                <span className="toggle-password" onClick={togglePasswordVisibility}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>

                        <button className="btn-login-submit">Log In</button>

                        <div className="divider-row">
                            <span className="divider-line"></span>
                            <span className="divider-text">OR</span>
                            <span className="divider-line"></span>
                        </div>

                        <button className="btn-otp-login">Log In via OTP</button>
                    </div>

                    <div className="login-footer-links">
                        <span className="footer-link">Terms of Use</span>
                        <span className="footer-link">Privacy Policy</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
