import React from 'react';
import { FaCheck, FaSignInAlt } from 'react-icons/fa'; // Updated import for logout/check icon
import { Link } from 'react-router-dom';
import './Logout.css';

const Logout = () => {
    return (
        <div className="student-logout">
            <div className="logout-card">
                <div className="logout-icon">
                    <FaCheck />
                </div>
                <h2>See You Soon!</h2>
                <p>You have been successfully logged out. <br />Have a wonderful day ahead.</p>

                <Link to="/login" style={{ textDecoration: 'none' }}>
                    {/* Assuming /login is the route, or home / */}
                    <button className="btn-login-again">
                        <FaSignInAlt /> Login Again
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Logout;
