import React from 'react';

const AdmissionDetails = () => {
    return (
        <div className="sr-section-card">
            <div className="info-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div className="input-group">
                    <label>Admission Number</label>
                    <input type="text" className="form-input" defaultValue="ADM-2023-0842" />
                </div>
                <div className="input-group">
                    <label>Admission Date</label>
                    <input type="date" className="form-input" defaultValue="2023-09-01" />
                </div>
                <div className="input-group">
                    <label>Enrollment Year</label>
                    <input type="text" className="form-input" defaultValue="2023" />
                </div>
                <div className="input-group">
                    <label>Current Academic Year</label>
                    <input type="text" className="form-input" defaultValue="2023-2024" />
                </div>
            </div>

            <div style={{ marginTop: '20px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '10px' }}>Admission Type</label>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                        <input type="radio" name="admType" defaultChecked /> New Admission
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                        <input type="radio" name="admType" /> Transfer Student
                    </label>
                </div>
            </div>

            <div style={{ marginTop: '25px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '8px' }}>
                    Previous School <span style={{ fontWeight: 400, color: '#94a3b8' }}>(If applicable)</span>
                </label>
                <input type="text" className="form-input" placeholder="Enter previous school name" />
            </div>
        </div>
    );
};

export default AdmissionDetails;
