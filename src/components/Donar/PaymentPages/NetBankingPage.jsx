import React from 'react';

const NetBankingPage = () => {
    return (
        <div className="netbanking-form">
            <h4>Select Bank</h4>
            <p className="method-desc">Choose your bank to complete the payment securely.</p>

            <div className="bank-grid">
                <div className="bank-option">HDFC</div>
                <div className="bank-option">ICICI</div>
                <div className="bank-option">SBI</div>
                <div className="bank-option">Axis</div>
            </div>

            <div className="form-group">
                <label>Other Bank</label>
                <select className="bank-select">
                    <option>Select a bank</option>
                    <option>Kotak Mahindra Bank</option>
                    <option>Punjab National Bank</option>
                    <option>Yes Bank</option>
                    <option>Bank of Baroda</option>
                </select>
            </div>
        </div>
    );
};

export default NetBankingPage;
