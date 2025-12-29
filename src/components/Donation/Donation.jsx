import React, { useState } from 'react';
import './Donation.css';
import donationImage from '../../assets/donation.png';
import { FaInfoCircle, FaCheckCircle, FaLock, FaShieldAlt } from 'react-icons/fa';
import { MdQrCode2, MdCreditCard } from 'react-icons/md';

const Donation = () => {
    const [donationType, setDonationType] = useState('Sadaqah');
    const [amount, setAmount] = useState(1000);
    const [paymentMethod, setPaymentMethod] = useState('UPI');

    const handleAmountClick = (val) => {
        setAmount(val);
    };

    return (
        <div className="donation-page">
            <div className="donation-container">
                {/* Left Side: Image and Inspiration */}
                <div className="donation-left">
                    <div className="donation-image-container">
                        <img src={donationImage} alt="Invest in their Akhirah" className="donation-image" />
                    </div>
                    <div className="donation-text-content">
                        <h1 className="donation-title">Invest in their Akhirah.<br /><span className="highlight-text">Build your legacy.</span></h1>
                        <p className="donation-desc">
                            Your Zakat and Sadaqah help provide quality Islamic and modern education to underprivileged children. By donating today, you aren't just giving money; you are planting a seed of knowledge that will bloom for generations. Join us in shaping the future of our Ummah.
                        </p>
                        <div className="donation-quote-box">
                            <span className="quote-icon">❝</span>
                            <p className="quote-text">
                                "When a man dies, his deeds come to an end except for three things: Sadaqah Jariyah (ceaseless charity), a knowledge which is beneficial, or a virtuous descendant who prays for him."
                            </p>
                            <p className="quote-source">— Prophet Muhammad (ﷺ)</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Donation Form */}
                <div className="donation-right">
                    <h2 className="form-title">Make a Donation</h2>

                    <div className="form-section">
                        <label className="form-label">I want to donate towards</label>
                        <div className="donation-tabs">
                            {['Zakat', 'Sadaqah', 'General', 'Sponsor'].map((type) => (
                                <button
                                    key={type}
                                    className={`tab-btn ${donationType === type ? 'active' : ''}`}
                                    onClick={() => setDonationType(type)}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                        <div className="info-note">
                            <FaInfoCircle className="info-icon" />
                            <p>Zakat is 2.5% of your total savings. <a href="#">Calculate yours here.</a></p>
                        </div>
                    </div>

                    <div className="form-section">
                        <label className="form-label">Select Amount (INR)</label>
                        <div className="amount-grid">
                            {[500, 1000, 5000, 10000].map((val) => (
                                <button
                                    key={val}
                                    className={`amount-btn ${amount === val ? 'active' : ''}`}
                                    onClick={() => handleAmountClick(val)}
                                >
                                    ₹{val.toLocaleString()}
                                </button>
                            ))}
                            <button
                                className={`amount-btn custom ${amount === 'custom' ? 'active' : ''}`}
                                onClick={() => setAmount('custom')}
                            >
                                ₹ Custom Amount
                            </button>
                        </div>
                        <p className="amount-helper">₹1,000 provides books for one child for a whole year.</p>
                    </div>

                    <div className="form-section">
                        <label className="form-label">Your Details</label>
                        <div className="details-grid">
                            <input type="text" placeholder="Full Name" className="form-input" />
                            <input type="email" placeholder="Email Address" className="form-input" />
                            <input type="tel" placeholder="Phone Number" className="form-input" />
                            <input type="text" placeholder="PAN (Optional for 80G)" className="form-input" />
                        </div>
                        <div className="checkbox-group">
                            <FaCheckCircle className="check-icon" />
                            <span>Email me the 80G tax exemption receipt automatically.</span>
                        </div>
                    </div>

                    <div className="form-section">
                        <label className="form-label">Payment Method</label>
                        <div className="payment-methods">
                            <div
                                className={`payment-option ${paymentMethod === 'UPI' ? 'active' : ''}`}
                                onClick={() => setPaymentMethod('UPI')}
                            >
                                <div className="payment-label"><span className="radio-circle"></span> UPI / QR Code</div>
                                <MdQrCode2 className="payment-icon" />
                            </div>
                            <div
                                className={`payment-option ${paymentMethod === 'Card' ? 'active' : ''}`}
                                onClick={() => setPaymentMethod('Card')}
                            >
                                <div className="payment-label"><span className="radio-circle"></span> Credit / Debit Card</div>
                                <MdCreditCard className="payment-icon" />
                            </div>
                        </div>
                    </div>

                    <button className="btn-donate-submit">
                        Donate ₹{amount !== 'custom' ? amount.toLocaleString() : '...'} Now
                    </button>

                    <div className="form-footer">
                        <div className="footer-badge"><FaLock /> SSL Encrypted</div>
                        <div className="divider">|</div>
                        <div className="footer-badge"><FaShieldAlt /> Tax Benefits</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;
