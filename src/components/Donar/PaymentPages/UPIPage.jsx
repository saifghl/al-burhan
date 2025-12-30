import React from 'react';

const Icons = {
    Smartphone: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>,
    Lock: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
};

const UPIPage = () => {
    return (
        <div className="upi-form">
            <h4>Enter UPI ID</h4>
            <p className="method-desc">Pay securely using your UPI app (Google Pay, PhonePe, Paytm, etc.)</p>

            <div className="form-group">
                <label>UPI ID</label>
                <input type="text" placeholder="username@upi" />
                <span className="input-icon"><Icons.Smartphone /></span>
            </div>

            <button className="verify-btn">Verify</button>

            <div className="security-note" style={{ marginTop: '20px' }}>
                <Icons.Lock /> Secure payment via your preferred UPI app.
            </div>
        </div>
    );
};

export default UPIPage;
