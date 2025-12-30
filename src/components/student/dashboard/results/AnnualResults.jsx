import React from 'react';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const AnnualResults = () => {
    return (
        <div className="annual-view">
            <div style={{ textAlign: 'center', padding: '40px', color: '#7f8c8d' }}>
                <FaGraduationCap style={{ fontSize: '48px', marginBottom: '16px', color: '#bdc3c7' }} />
                <h3>Annual Academic Record</h3>
                <p>Complete annual reports and certificates will be listed here.</p>

                <div style={{ marginTop: '30px', display: 'grid', gap: '15px', maxWidth: '600px', margin: '30px auto' }}>
                    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #eee', display: 'flex', alignItems: 'center' }}>
                        <FaCertificate style={{ fontSize: '24px', color: '#f39c12', marginRight: '15px' }} />
                        <div style={{ textAlign: 'left', flex: 1 }}>
                            <h4 style={{ margin: '0 0 5px 0', color: '#2c3e50' }}>Previous Year (2022-2023)</h4>
                            <p style={{ margin: 0, fontSize: '13px' }}>Final Grade: A | Promoted to Grade 10</p>
                        </div>
                        <button style={{ padding: '8px 15px', border: '1px solid #ddd', background: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}>View</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnnualResults;
