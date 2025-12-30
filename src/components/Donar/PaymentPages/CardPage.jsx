import React from 'react';

const Icons = {
    Card: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>,
    Lock: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
};

const CardPage = () => {
    return (
        <div className="card-form">
            <h4>Enter Card Details</h4>
            <div className="card-logos">
                <div className="card-logo-placeholder" style={{ background: '#f3f4f6', border: '1px solid #e5e7eb' }}></div>
                <div className="card-logo-placeholder" style={{ background: '#f3f4f6', border: '1px solid #e5e7eb' }}></div>
            </div>

            <div className="form-group">
                <label>Card Number</label>
                <input type="text" placeholder="0000 0000 0000 0000" />
                <span className="input-icon"><Icons.Card /></span>
            </div>

            <div className="form-row">
                <div className="form-group half">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" />
                </div>
                <div className="form-group half">
                    <label>CVV <span className="info-tooltip" title="3 digits on back">?</span></label>
                    <input type="text" placeholder="123" />
                </div>
            </div>

            <div className="form-group">
                <label>Name on Card</label>
                <input type="text" placeholder="John Doe" />
            </div>

            <div className="save-card-option">
                <input type="checkbox" id="saveCard" />
                <label htmlFor="saveCard">Securely save this card for future donations</label>
            </div>

            <div className="security-note">
                <Icons.Lock /> Your payment details are encrypted and processed securely.
            </div>
        </div>
    );
};

export default CardPage;
