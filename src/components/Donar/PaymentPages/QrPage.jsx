import React from 'react';

const Icons = {
    Qr: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
};

const QrPage = () => {
    return (
        <div className="qr-form">
            <h4>Scan QR Code</h4>
            <p className="method-desc">Open your UPI app and scan the code below to pay.</p>

            <div className="qr-display">
                <div className="qr-placeholder" style={{
                    width: '180px', height: '180px', background: 'white', border: '1px solid #e5e7eb',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px auto', borderRadius: '12px'
                }}>
                    <Icons.Qr />
                    {/* In a real app, a QR image would be here */}
                </div>
                <p>Scan to pay ₹5,000</p>
                <div className="timer-badge">Expires in 04:59</div>
            </div>
        </div>
    );
};

export default QrPage;
