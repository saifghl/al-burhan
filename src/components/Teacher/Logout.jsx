import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut, FiX } from 'react-icons/fi'; // Using react-icons for cleaner SVG management
import './Logout.css';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform any logout logic here (clearing tokens, etc.)
        // For now, redirect to login or home
        console.log("Teacher logged out");
        navigate('/login');
    };

    const handleStayLoggedIn = () => {
        // Navigate back to the previous page or dashboard
        navigate(-1);
    };

    return (
        <div className="logout-container">
            {/* Background blur is handled by CSS on this container */}

            <div className="logout-card">
                {/* Close Icon */}
                <div className="close-icon" onClick={handleStayLoggedIn}>
                    <FiX />
                </div>

                {/* Icon Circle */}
                <div className="icon-circle">
                    <FiLogOut className="logout-icon-main" />
                </div>

                {/* Text Content */}
                <h2 className="logout-title">Log Out</h2>
                <p className="logout-description">
                    Are you sure you want to log out of your teacher account? You will need to sign in again to manage your classes and reports.
                </p>

                {/* Action Buttons */}
                <div className="logout-actions">
                    <button className="btn-logout-action btn-outline-logout" onClick={handleLogout}>
                        Logout
                    </button>
                    <button className="btn-logout-action btn-primary-logout" onClick={handleStayLoggedIn}>
                        Stay Logged In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Logout;
