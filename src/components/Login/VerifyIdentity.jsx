import React, { useState } from 'react';
import { FaLock, FaArrowLeft } from 'react-icons/fa';
import './Login.css';

const VerifyIdentity = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <div className="login-page">
            <div className="verify-container">
                <div className="navbar-simple-verify">
                    <span className="help-text">Help</span>
                </div>

                <div className="verify-box">
                    <div className="lock-icon-circle">
                        <FaLock className="lock-icon" />
                    </div>

                    <h2 className="verify-heading">Verify Identity</h2>
                    <p className="verify-subtext">
                        Enter the 6-digit code sent to<br />
                        <strong>user@example.com</strong>
                    </p>

                    <div className="otp-inputs-row">
                        {otp.map((data, index) => {
                            return (
                                <input
                                    className="otp-field"
                                    type="text"
                                    name="otp"
                                    maxLength="1"
                                    key={index}
                                    value={data}
                                    onChange={e => handleChange(e.target, index)}
                                    onFocus={e => e.target.select()}
                                />
                            );
                        })}
                    </div>

                    <div className="timer-text">
                        Resend code in <span className="timer-count">00:30</span>
                    </div>

                    <button className="btn-verify">Verify &rarr;</button>

                    <p className="resend-link">Didn't receive the email? <span className="click-to-resend">Click to resend</span></p>

                    <div className="back-login-link">
                        <FaArrowLeft className="back-icon" /> Back to login
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyIdentity;
