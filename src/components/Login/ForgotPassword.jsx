import React from 'react';
import { FaChartBar, FaArrowLeft } from 'react-icons/fa'; // Using icon as placeholder for the graphic
import { Link } from 'react-router-dom';
import './Login.css';

const ForgotPassword = () => {
    return (
        <div className="login-page">
            <div className="forgot-password-container">
                <div className="navbar-simple-verify">
                    <span className="help-text">Help</span>
                </div>

                <div className="forgot-box">
                    <div className="icon-circle-light">
                        {/* Placeholder for the specific icon in image, using a chart-like icon */}
                        <FaChartBar className="chart-icon" />
                    </div>

                    <h2 className="verify-heading">Forgot Password?</h2>
                    <p className="verify-subtext">
                        Don't worry, it happens. Please enter the email address or mobile number associated with your account.
                    </p>

                    <div className="form-group-forgot">
                        <label>Email or Mobile</label>
                        <input type="text" className="login-input" />
                    </div>

                    <button className="btn-verify">Send Instructions</button>

                    <Link to="/login" className="back-login-link centered-link">
                        <FaArrowLeft className="back-icon" /> Back to Log In
                    </Link>
                </div>

                <p className="recaptcha-text">
                    Protected by reCAPTCHA and subject to the Privacy Policy and Terms of Service.
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
