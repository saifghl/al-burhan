import React from 'react';
import { FaMoneyBillWave, FaEye, FaCheck, FaClock } from 'react-icons/fa';

const FeeCategory = () => {
    return (
        <div>
            {/* Fee Category Header */}
            <div className="sr-section-card">
                <div className="section-header" style={{ justifyContent: 'space-between', borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FaMoneyBillWave style={{ color: '#64A926' }} />
                        <h3 className="section-title">Fee Category Details</h3>
                    </div>
                    <button className="btn-reset" style={{ border: 'none', fontSize: '12px', gap: '5px' }}>
                        <FaEye /> View Only
                    </button>
                </div>
            </div>

            {/* Fee Info - Flex Layout */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                <div className="sr-section-card" style={{ flex: 1, marginBottom: 0 }}>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: '#64748b' }}>Fee Category Name</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0 20px' }}>
                        <span style={{ color: '#64A926', fontSize: '18px' }}>📥</span>
                        <span style={{ fontWeight: 700, fontSize: '16px' }}>Scholarship - Merit Based</span>
                    </div>

                    <label style={{ fontSize: '12px', fontWeight: 600, color: '#64748b' }}>Discount / Concession</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                        <span style={{ color: '#64A926', fontSize: '18px' }}>%</span>
                        <span style={{ fontWeight: 600, color: '#166534' }}>25% Off Tuition Fee</span>
                    </div>
                </div>

                <div className="sr-section-card" style={{ flex: 1, marginBottom: 0, background: '#f8fafc' }}>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: '#64748b', marginBottom: '10px', display: 'block' }}>Linked Fee Structure</label>
                    <div style={{
                        background: 'white',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ width: '30px', height: '30px', background: '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📄</div>
                            <div>
                                <div style={{ fontSize: '13px', fontWeight: 700 }}>Standard 2023-24</div>
                                <div style={{ fontSize: '11px', color: '#94a3b8' }}>Yearly Academic Plan</div>
                            </div>
                        </div>
                        <span style={{ fontSize: '12px', color: '#64A926', fontWeight: 600, cursor: 'pointer' }}>View Structure →</span>
                    </div>

                    <label style={{ fontSize: '12px', fontWeight: 600, color: '#64748b', marginTop: '20px', marginBottom: '10px', display: 'block' }}>Current Fee Status</label>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: '#fffbeb',
                        color: '#b45309',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontWeight: 600,
                        fontSize: '13px',
                        border: '1px solid #fde68a'
                    }}>
                        <FaClock /> Payment Pending
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748b', marginTop: '5px' }}>Next due date: 15th Nov, 2023</div>
                </div>
            </div>

            {/* Fee Breakdown Table */}
            <h4 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 15px 5px' }}>Fee Breakdown Summary (View Only)</h4>
            <div className="sr-table-container">
                <table className="sr-table">
                    <thead>
                        <tr>
                            <th>Fee Type</th>
                            <th>Due Date</th>
                            <th style={{ textAlign: 'right' }}>Amount</th>
                            <th style={{ textAlign: 'center' }}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Term 1 Tuition</td>
                            <td>Aug 15, 2023</td>
                            <td style={{ textAlign: 'right', fontWeight: 600 }}>$450.00</td>
                            <td style={{ textAlign: 'center' }}><StatusPill status="Paid" /></td>
                        </tr>
                        <tr>
                            <td>Lab Fees</td>
                            <td>Sep 01, 2023</td>
                            <td style={{ textAlign: 'right', fontWeight: 600 }}>$50.00</td>
                            <td style={{ textAlign: 'center' }}><StatusPill status="Paid" /></td>
                        </tr>
                        <tr>
                            <td>Term 2 Tuition</td>
                            <td>Nov 15, 2023</td>
                            <td style={{ textAlign: 'right', fontWeight: 600 }}>$450.00</td>
                            <td style={{ textAlign: 'center' }}><StatusPill status="Pending" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const StatusPill = ({ status }) => {
    const isPaid = status === 'Paid';
    return (
        <span style={{
            background: isPaid ? '#dcfce7' : '#fffbeb',
            color: isPaid ? '#166534' : '#b45309',
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '11px',
            fontWeight: 700
        }}>
            {status}
        </span>
    );
};

export default FeeCategory;
