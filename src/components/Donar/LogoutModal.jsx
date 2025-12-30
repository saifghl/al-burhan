import React from 'react';
import './LogoutModal.css';

const Icons = {
    LogOut: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>,
    Close: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
};

const LogoutModal = ({ isOpen, onClose, onLogout }) => {
    if (!isOpen) return null;

    return (
        <div className="logout-modal-overlay">
            <div className="logout-modal-card">
                <button className="modal-close-btn" onClick={onClose}><Icons.Close /></button>

                <div className="modal-icon-wrapper">
                    <Icons.LogOut />
                </div>

                <h2 className="modal-title">Log Out</h2>
                <p className="modal-message">
                    Are you sure you want to log out of your donor account? You will need to sign in again to manage your contribution.
                </p>

                <div className="modal-actions">
                    <button className="btn-logout-outline" onClick={onLogout}>Logout</button>
                    <button className="btn-stay-green" onClick={onClose}>Stay Logged In</button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
