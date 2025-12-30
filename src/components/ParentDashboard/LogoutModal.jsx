import React from 'react';
import { FaSignOutAlt, FaTimes } from 'react-icons/fa';
import './LogoutModal.css';

const LogoutModal = ({ onClose, onLogout }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-modal-btn" onClick={onClose}>
                    <FaTimes />
                </button>
                <div className="modal-icon-green">
                    <FaSignOutAlt />
                </div>
                <h2>Log Out</h2>
                <p>Are you sure you want to end your session? You will need to sign in again to access your classes and assignments.</p>
                <div className="modal-actions">
                    <button className="cancel-btn" onClick={onClose}>Cancel</button>
                    <button className="logout-confirm-btn" onClick={onLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
