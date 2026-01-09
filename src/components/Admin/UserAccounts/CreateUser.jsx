import React, { useState } from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaUserFriends, FaCheckCircle, FaExclamationCircle, FaLock, FaCopy, FaEye, FaEyeSlash, FaPlus } from 'react-icons/fa';
import ToggleSwitch from '../PublicContent/ToggleSwitch'; // Reusing the toggle
import { Link } from 'react-router-dom';
import './UserAccounts.css';

const CreateUser = () => {
    const [selectedRole, setSelectedRole] = useState('student');

    // Shared State
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dob: '',
        password: 'TempPass123!',
        username: '',
        // Student specific
        enrollmentYear: '2024',
        academicYear: '2024-2025',
        grade: '',
        section: '',
        rollNumber: '',
        // Teacher specific
        department: '',
        designation: '',
        joiningDate: '',
        teacherPermissions: ['attendance', 'results'],
        // Settings
        portalAccess: true,
        examAccess: true,
        resultVisibility: false,
        feePayments: true,
        notifications: true,
        viewResults: true,
        viewAttendance: true
    });

    const [uiState, setUiState] = useState({
        autoGenerate: true,
        showPassword: false,
        requireChange: true
    });

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const toggleTeacherPermission = (permissionId) => {
        setFormData(prev => {
            const current = prev.teacherPermissions || [];
            if (current.includes(permissionId)) {
                return { ...prev, teacherPermissions: current.filter(p => p !== permissionId) };
            } else {
                return { ...prev, teacherPermissions: [...current, permissionId] };
            }
        });
    };

    const toggleAutoGenerate = (checked) => {
        setUiState(prev => ({ ...prev, autoGenerate: checked }));
        if (checked) {
            setFormData(prev => ({ ...prev, password: 'TempPass123!' })); // Reset or generate logic
        } else {
            setFormData(prev => ({ ...prev, password: '' }));
        }
    };

    const renderIdentitySection = () => (
        <div className="form-section">
            <div className="form-section-title">
                <span>Identity Information</span>
            </div>
            <div className="input-row">
                <div className="input-group">
                    <label>First Name</label>
                    <input type="text" name="firstName" placeholder="e.g. John" value={formData.firstName} onChange={handleInputChange} />
                </div>
                <div className="input-group">
                    <label>Last Name</label>
                    <input type="text" name="lastName" placeholder="e.g. Doe" value={formData.lastName} onChange={handleInputChange} />
                </div>
            </div>
            <div className="input-row">
                <div className="input-group">
                    <label>Email Address <span style={{ color: 'red' }}>*</span></label>
                    <input type="email" name="email" placeholder="student@school.edu" value={formData.email} onChange={handleInputChange} />
                    {/* Error state example from screenshot */}
                    {/* <div style={{ color: '#dc2626', fontSize: '11px', marginTop: '4px' }}>Please enter a valid email address.</div> */}
                </div>
                <div className="input-group">
                    <label>Mobile Number</label>
                    <input type="text" name="phone" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleInputChange} />
                </div>
            </div>
            {selectedRole !== 'teacher' && (
                <div className="input-row">
                    <div className="input-group">
                        <label>Date of Birth</label>
                        <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} />
                    </div>
                </div>
            )}
            {selectedRole === 'teacher' && (
                <div className="input-row">
                    <div className="input-group">
                        <label>Employee ID</label>
                        <input type="text" placeholder="e.g. TCH-2023-045" />
                    </div>
                </div>
            )}
        </div>
    );

    const renderCredentialsSection = () => (
        <div className="form-section" style={{ marginTop: '30px' }}>
            <div className="form-section-title">
                <FaLock style={{ color: '#64A926' }} />
                <span>Account Credentials</span>
                <span style={{ fontSize: '12px', color: '#64748b', marginLeft: 'auto', fontWeight: 'normal', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Auto-generate password
                    <ToggleSwitch
                        checked={uiState.autoGenerate}
                        onChange={toggleAutoGenerate}
                    />
                </span>
            </div>
            <div className="input-row">
                <div className="input-group">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="e.g. jdoe2024"
                        style={{ background: 'white' }}
                    />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <div style={{ position: 'relative' }}>
                        <input
                            type={uiState.showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            readOnly={uiState.autoGenerate}
                            placeholder={uiState.autoGenerate ? "Auto-generated" : "Enter password"}
                            style={{ background: uiState.autoGenerate ? '#f1f5f9' : 'white' }}
                        />
                        {uiState.showPassword ? (
                            <FaEyeSlash
                                style={{ position: 'absolute', right: '10px', top: '12px', color: '#64748b', cursor: 'pointer' }}
                                onClick={() => setUiState(prev => ({ ...prev, showPassword: false }))}
                            />
                        ) : (
                            <FaEye
                                style={{ position: 'absolute', right: '10px', top: '12px', color: '#64748b', cursor: 'pointer' }}
                                onClick={() => setUiState(prev => ({ ...prev, showPassword: true }))}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b', marginTop: '10px', cursor: 'pointer' }}
                onClick={() => setUiState(prev => ({ ...prev, requireChange: !prev.requireChange }))}
            >
                <FaCheckCircle style={{ color: uiState.requireChange ? '#64A926' : '#cbd5e1' }} /> Require user to change password on first login
            </div>
        </div>
    );

    const renderStudentConfig = () => (
        <div className="form-section" style={{ marginTop: '30px' }}>
            <div className="form-section-title">
                <span>Student Configuration</span>
            </div>
            <div className="input-row">
                <div className="input-group">
                    <label>Link Student Record</label>
                    <div style={{ position: 'relative' }}>
                        <FaSearch style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }} />
                        <input type="text" placeholder="Search by student ID or name..." style={{ paddingLeft: '35px' }} />
                    </div>
                </div>
            </div>
            <div className="input-row">
                <div className="input-group">
                    <label>Enrollment Year</label>
                    <input type="text" value={formData.enrollmentYear} onChange={handleInputChange} />
                </div>
                <div className="input-group">
                    <label>Academic Year</label>
                    <input type="text" value={formData.academicYear} onChange={handleInputChange} />
                </div>
                <div className="input-group">
                    <label>Grade / Class</label>
                    <input type="text" placeholder="e.g. Grade 10" />
                </div>
            </div>
            <div className="input-row">
                <div className="input-group">
                    <label>Section / Batch</label>
                    <input type="text" placeholder="e.g. Section A" />
                </div>
                <div className="input-group">
                    <label>Roll Number</label>
                    <input type="text" placeholder="e.g. 1045" />
                </div>
            </div>

            {/* Access Controls */}
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
                <h4 style={{ margin: '0 0 15px 0', fontSize: '14px', color: '#1e293b' }}>Access Controls</h4>
                <div className="permission-row">
                    <div>
                        <div style={{ fontWeight: '600', fontSize: '13px' }}>Student Portal Access</div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>Allow student to log in to the student dashboard.</div>
                    </div>
                    <ToggleSwitch checked={formData.portalAccess} onChange={(v) => setFormData({ ...formData, portalAccess: v })} />
                </div>
                <div className="permission-row">
                    <div>
                        <div style={{ fontWeight: '600', fontSize: '13px' }}>Exam Module Access</div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>Enable online exams and quiz submissions.</div>
                    </div>
                    <ToggleSwitch checked={formData.examAccess} onChange={(v) => setFormData({ ...formData, examAccess: v })} />
                </div>
                <div className="permission-row" style={{ borderBottom: 'none' }}>
                    <div>
                        <div style={{ fontWeight: '600', fontSize: '13px' }}>Result Visibility</div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>Student can view published report cards.</div>
                    </div>
                    <ToggleSwitch checked={formData.resultVisibility} onChange={(v) => setFormData({ ...formData, resultVisibility: v })} />
                </div>
            </div>
        </div>
    );

    const renderTeacherConfig = () => (
        <div className="form-section" style={{ marginTop: '30px' }}>
            <div className="form-section-title">
                <span>Teacher Configuration</span>
            </div>
            <div className="input-row">
                <div className="input-group">
                    <label>Department</label>
                    <select>
                        <option>Select Department</option>
                        <option>Science</option>
                        <option>Maths</option>
                    </select>
                </div>
                <div className="input-group">
                    <label>Designation</label>
                    <select>
                        <option>Select Designation</option>
                        <option>Senior Teacher</option>
                    </select>
                </div>
                <div className="input-group">
                    <label>Joining Date</label>
                    <input type="date" />
                </div>
            </div>

            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
                <h4 style={{ margin: '0 0 15px 0', fontSize: '14px', color: '#1e293b' }}>Module Permissions</h4>
                <div className="permissions-grid">
                    {[
                        { id: 'attendance', name: 'Attendance', desc: 'Take and edit student attendance' },
                        { id: 'results', name: 'Result Entry', desc: 'Upload and manage grade sheets' },
                        { id: 'notes', name: 'Student Notes', desc: 'Add behavioral remarks' },
                        { id: 'exams', name: 'Exams', desc: 'Create contests and exam schedules' }
                    ].map(mod => {
                        const isSelected = formData.teacherPermissions && formData.teacherPermissions.includes(mod.id);
                        return (
                            <div
                                key={mod.id}
                                onClick={() => toggleTeacherPermission(mod.id)}
                                style={{
                                    background: isSelected ? '#dcfce7' : 'white',
                                    border: isSelected ? '1px solid #86efac' : '1px solid #e2e8f0',
                                    padding: '15px',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                            >
                                <div style={{ fontWeight: '600', fontSize: '13px', color: isSelected ? '#166534' : '#1e293b', marginBottom: '4px' }}>{mod.name}</div>
                                <div style={{ fontSize: '11px', color: isSelected ? '#15803d' : '#64748b' }}>{mod.desc}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    const renderParentConfig = () => (
        <div className="form-section" style={{ marginTop: '30px' }}>
            <div className="form-section-title">
                <span>Parent Configuration</span>
            </div>
            <div className="input-row">
                <div className="input-group">
                    <label>Link Students</label>
                    <div style={{ position: 'relative', marginBottom: '15px' }}>
                        <FaSearch style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }} />
                        <input type="text" placeholder="Search by name or ID..." style={{ width: '100%', paddingLeft: '35px' }} />
                    </div>
                </div>
            </div>

            {/* Linked Students List */}
            <div style={{ marginBottom: '25px' }}>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', marginBottom: '10px' }}>Linked Students (2)</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {/* Student Card 1 */}
                    <div style={{ border: '1px solid #e2e8f0', borderRadius: '6px', padding: '15px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', background: 'white' }}>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#d1d5db' }}></div>
                            <div>
                                <div style={{ fontWeight: '600', color: '#1e293b' }}>Alice Doe</div>
                                <div style={{ fontSize: '12px', color: '#64748b' }}>Class 5A • ID: #8821</div>
                                <div style={{ marginTop: '8px' }}>
                                    <select style={{ padding: '4px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '12px', background: 'white' }}>
                                        <option>Father</option>
                                        <option>Mother</option>
                                        <option>Guardian</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div style={{ cursor: 'pointer', color: '#94a3b8' }}>✕</div>
                    </div>

                    {/* Student Card 2 */}
                    <div style={{ border: '1px solid #e2e8f0', borderRadius: '6px', padding: '15px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', background: 'white' }}>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', fontWeight: 'bold' }}>MD</div>
                            <div>
                                <div style={{ fontWeight: '600', color: '#1e293b' }}>Marcus Doe</div>
                                <div style={{ fontSize: '12px', color: '#64748b' }}>Class 2B • ID: #9942</div>
                                <div style={{ marginTop: '8px' }}>
                                    <select style={{ padding: '4px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '12px', background: 'white' }}>
                                        <option>Father</option>
                                        <option>Mother</option>
                                        <option>Guardian</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div style={{ cursor: 'pointer', color: '#94a3b8' }}>✕</div>
                    </div>
                </div>
            </div>

            {/* Access Controls */}
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
                <h4 style={{ margin: '0 0 15px 0', fontSize: '14px', color: '#1e293b' }}>Access Permissions</h4>
                <div className="permission-row">
                    <div style={{ fontWeight: '600', fontSize: '13px' }}>View Attendance</div>
                    <ToggleSwitch checked={formData.viewAttendance} onChange={(v) => setFormData({ ...formData, viewAttendance: v })} />
                </div>
                <div className="permission-row">
                    <div style={{ fontWeight: '600', fontSize: '13px' }}>View Results</div>
                    <ToggleSwitch checked={formData.viewResults} onChange={(v) => setFormData({ ...formData, viewResults: v })} />
                </div>
                <div className="permission-row">
                    <div style={{ fontWeight: '600', fontSize: '13px' }}>Notifications</div>
                    <ToggleSwitch checked={formData.notifications} onChange={(v) => setFormData({ ...formData, notifications: v })} />
                </div>
                <div className="permission-row" style={{ borderBottom: 'none' }}>
                    <div style={{ fontWeight: '600', fontSize: '13px' }}>Fee Payments</div>
                    <ToggleSwitch checked={formData.feePayments} onChange={(v) => setFormData({ ...formData, feePayments: v })} />
                </div>
            </div>
        </div>
    );

    const FaSearch = ({ style }) => <span style={style}>🔍</span>;

    return (
        <div className="user-accounts-container" style={{ padding: '0 30px 30px 0' }}>
            <div style={{ marginBottom: '30px' }}>
                <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '10px' }}>
                    <Link to="/admin/user-accounts" style={{ color: '#64748b', textDecoration: 'none' }}>User Management</Link> / <span style={{ color: '#64A926', fontWeight: 'bold' }}>Create {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}</span>
                </div>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e293b', margin: '0 0 10px 0' }}>create {selectedRole === 'student' ? 'Student Account' : selectedRole === 'teacher' ? 'New Teacher' : 'Parent Account'}</h1>
                <p style={{ color: '#64748b', margin: 0 }}>Enter the details below to onboard a new {selectedRole}.</p>
            </div>

            <div className="role-selector">
                <div
                    className={`role-card ${selectedRole === 'student' ? 'active' : ''}`}
                    onClick={() => handleRoleSelect('student')}
                >
                    <FaUserGraduate style={{ fontSize: '24px', color: selectedRole === 'student' ? '#166534' : '#64748b', marginBottom: '8px' }} />
                    <div style={{ fontWeight: '600', color: selectedRole === 'student' ? '#166534' : '#475569' }}>Student</div>
                </div>
                <div
                    className={`role-card ${selectedRole === 'teacher' ? 'active' : ''}`}
                    onClick={() => handleRoleSelect('teacher')}
                >
                    <FaChalkboardTeacher style={{ fontSize: '24px', color: selectedRole === 'teacher' ? '#166534' : '#64748b', marginBottom: '8px' }} />
                    <div style={{ fontWeight: '600', color: selectedRole === 'teacher' ? '#166534' : '#475569' }}>Teacher</div>
                </div>
                <div
                    className={`role-card ${selectedRole === 'parent' ? 'active' : ''}`}
                    onClick={() => handleRoleSelect('parent')}
                >
                    <FaUserFriends style={{ fontSize: '24px', color: selectedRole === 'parent' ? '#166534' : '#64748b', marginBottom: '8px' }} />
                    <div style={{ fontWeight: '600', color: selectedRole === 'parent' ? '#166534' : '#475569' }}>Parent</div>
                </div>
            </div>

            <div className="create-user-container">
                {renderIdentitySection()}
                {renderCredentialsSection()}
                {selectedRole === 'student' && renderStudentConfig()}
                {selectedRole === 'teacher' && renderTeacherConfig()}
                {selectedRole === 'parent' && renderParentConfig()}
            </div>

            <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
                <Link to="/admin/user-accounts">
                    <button className="btn-export" style={{ border: 'none', background: 'transparent' }}>Cancel</button>
                </Link>
                <button className="btn-create">
                    <FaPlus /> Create {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)} Account
                </button>
            </div>
        </div>
    );
};

export default CreateUser;
