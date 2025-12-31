import React from 'react';
import './Fees.css';
import { FaDownload, FaAward, FaCreditCard, FaInfoCircle, FaShieldAlt } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

const Fees = () => {
    const navigate = useNavigate();
    return (
        <div className="student-fees">

            {/* --- Header --- */}
            <div className="fees-header">
                <div className="fh-left">
                    <div className="breadcrumb"><span onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>Back</span> / Fees Details</div>
                    <h2>Fees & Scholarship Details</h2>
                    <span className="fh-year">Academic Year: 2023-2024 / 1445 AH</span>
                </div>
                <button className="download-stmt-btn">
                    <FaDownload /> Download Statement
                </button>
            </div>

            {/* --- Student Info Card --- */}
            <div className="fees-student-card">
                <div className="fsc-left">
                    <div className="fsc-avatar"></div>
                    <div className="fsc-info">
                        <h3>Ahmed Raza <span className="active-tag">Active Student</span></h3>
                        <p>Roll No: 4521</p>
                    </div>
                </div>

                <div className="fsc-stats">
                    <div className="stat-item">
                        <span className="stat-label">Class</span>
                        <span className="stat-val">Hifz - Year 2</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Section</span>
                        <span className="stat-val">Boy's Wing A</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Guardian</span>
                        <span className="stat-val">Mohd. Raza</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Last Payment</span>
                        <span className="stat-val">15 Feb, 2024</span>
                    </div>
                </div>
            </div>

            {/* --- Main Grid --- */}
            <div className="fees-grid">

                {/* Left Col: Fee Breakdown */}
                <div className="fee-breakdown-card">
                    <div className="fb-header">
                        <h3>Fee Breakdown (March 2024)</h3>
                        <span className="cycle-badge">Monthly Cycle</span>
                    </div>

                    <div className="fee-table-header">
                        <span>Description</span>
                        <span>Amount</span>
                    </div>

                    <div className="fee-item">
                        <div className="fi-info">
                            <h4>Monthly Tuition Fee</h4>
                            <p>Standard education charges</p>
                        </div>
                        <div className="fi-amount">₹50.00</div>
                    </div>

                    <div className="fee-item">
                        <div className="fi-info">
                            <h4>Boarding & Lodging</h4>
                            <p>Hostel facility charges</p>
                        </div>
                        <div className="fi-amount">₹120.00</div>
                    </div>

                    <div className="fee-item">
                        <div className="fi-info">
                            <h4>Exam Fee</h4>
                            <p>Mid-term assessment</p>
                        </div>
                        <div className="fi-amount">₹15.00</div>
                    </div>

                    <div className="fee-item">
                        <div className="fi-info">
                            <h4>Library & Material</h4>
                        </div>
                        <div className="fi-amount">₹5.00</div>
                    </div>

                    <div className="fee-divider"></div>

                    <div className="fee-subtotal">
                        <span>Subtotal</span>
                        <span>₹190.00</span>
                    </div>

                    <div className="admin-note">
                        <FaInfoCircle className="note-icon" />
                        <div className="note-cnt">
                            <h4>Note from Administration</h4>
                            <p>Please ensure all dues are cleared by the 10th of every month to avoid late fee penalties. For any discrepancies in the fee structure, please visit the accounts office between 8 AM - 1 PM.</p>
                        </div>
                    </div>

                </div>

                {/* Right Col: Scholarship & Payment */}
                <div className="fees-right-col">

                    <div className="scholarship-card">
                        <FaAward className="sc-bg-icon" />
                        <div className="sc-header">
                            <FaAward className="sc-icon" />
                            <h3>Scholarship Applied</h3>
                        </div>

                        <span className="sc-status">Active</span>

                        <div className="sc-row">
                            <span className="sc-label">Type</span>
                            <span className="sc-val">Merit-Based (Partial)</span>
                        </div>
                        <div className="sc-row">
                            <span className="sc-label">Sponsor</span>
                            <span className="sc-val">Community Zakat Fund</span>
                        </div>
                        <div className="sc-row">
                            <span className="sc-label">Validity</span>
                            <span className="sc-val">Until Dec 2024</span>
                        </div>

                        <br />
                        <div className="sc-row">
                            <span className="sc-label">Discount Amount</span>
                            <span className="sc-val discount">-₹40.00</span>
                        </div>
                    </div>

                    <div className="payment-summary">
                        <div className="ps-title">Payment Summary</div>
                        <div className="ps-row">
                            <span className="ps-label">Total Fees</span>
                            <span className="ps-val">₹190.00</span>
                        </div>
                        <div className="ps-row">
                            <span className="ps-label">Scholarship Adjustment</span>
                            <span className="ps-val deduction">-₹40.00</span>
                        </div>

                        <div className="net-payable">
                            <span className="np-label">Net Payable</span>
                            <span className="np-amount">₹150.00</span>
                        </div>

                        <button className="pay-btn">
                            <FaCreditCard /> Make Payment Now
                        </button>
                        <span className="secure-note"><FaShieldAlt /> Secure payment powered by Stripe</span>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Fees;
