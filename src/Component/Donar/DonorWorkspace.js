import React from 'react';
import './DonorWorkspace.css';
import teacherImage from '../../assets/Picture11.png';
import studentImage from '../../assets/Picture12.png';
import parentImage from '../../assets/Picture13.png';
import donorImage from '../../assets/Picture14.png';

const DonorWorkspace = () => {
  const roles = [
    {
      id: 'teacher',
      title: 'Teacher',
      description: 'Classroom management, grading, and assignments',
      image: teacherImage
    },
    {
      id: 'student',
      title: 'Student',
      description: 'Access learning portal, courses, and grades',
      image: studentImage
    },
    {
      id: 'parent',
      title: 'Parent',
      description: 'Monitor progress, attendance, and communications',
      image: parentImage
    },
    {
      id: 'donor',
      title: 'Donor',
      description: 'Contribution dashboard and impact reports',
      image: donorImage,
      highlighted: true
    }
  ];

  const handleRoleSelect = (roleId) => {
    console.log(`Selected role: ${roleId}`);
    // Add navigation logic here
  };

  const handleSignOut = () => {
    console.log('Sign out clicked');
    // Add sign out logic here
  };

  return (
    <div className="workspace-container">
      <header className="workspace-header">
        <div className="logo-container">
          <div className="logo-icon">🕌</div>
          <span className="logo-text">Al Burhan</span>
        </div>
      </header>

      <main className="workspace-main">
        <h1 className="workspace-title">Select your workspace</h1>
        <p className="workspace-subtitle">
          Please select the role you wish to access today to enter your dashboard.
        </p>

        <div className="roles-grid">
          {roles.map((role) => (
            <div
              key={role.id}
              className={`role-card ${role.highlighted ? 'role-card-highlighted' : ''}`}
              onClick={() => handleRoleSelect(role.id)}
            >
              <div className="role-image-container">
                <img src={role.image} alt={role.title} className="role-image" />
              </div>
              <div className="role-content">
                <h3 className="role-title">{role.title}</h3>
                <p className="role-description">{role.description}</p>
              </div>
              <div className="role-arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="workspace-actions">
          <button className="sign-out-btn" onClick={handleSignOut}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 14H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2H6M10 11L14 7M14 7L10 3M14 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Sign Out
          </button>
        </div>

        <div className="support-link">
          <a href="#support">Not seeing your role? Contact Support.</a>
        </div>
      </main>
    </div>
  );
};

export default DonorWorkspace;

