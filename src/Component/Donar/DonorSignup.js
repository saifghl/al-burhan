import React from 'react';
import './DonorSignup.css';

const DonorSignup = ({ onGoToLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect with backend / API
    console.log('Create Account clicked');
  };

  return (
    <div className="donor-signup-page">
      {/* Top navigation */}
      <header className="donor-signup-header">
        <div className="donor-signup-logo">
          <div className="logo-icon-box" aria-hidden="true">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="4"
                fill="#22C55E"
                fillOpacity="0.18"
              />
              <path
                d="M8 12.5L10.2 14.5L16 9.5"
                stroke="#22C55E"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="logo-text-main">Donation Manager</span>
        </div>
        <button
          className="login-link"
          type="button"
          onClick={onGoToLogin}
        >
          Login
        </button>
      </header>

      {/* Main content */}
      <main className="donor-signup-main">
        {/* Left marketing / hero side */}
        <section className="signup-hero">
          <p className="hero-kicker">Start Your</p>
          <h1 className="hero-title">
            Impact <span>Journey</span>
          </h1>
          <p className="hero-subtitle">
            Join thousands of donors making a real difference. Track your
            contributions, manage your profile, and see the change you bring to
            the world.
          </p>

          <div className="hero-stats">
            <div className="stat-dots">
              <span className="dot" />
              <span className="dot" />
              <span className="dot active" />
            </div>
            <div className="stat-label">
              <span className="stat-pill">+2k</span>
              <span className="stat-text">Active donors this month</span>
            </div>
          </div>

          <div className="hero-features">
            <div className="feature-card">
              <div className="feature-icon-box" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L6 6V11C6 14.866 8.686 18.218 12 19.25C15.314 18.218 18 14.866 18 11V6L12 4Z"
                    stroke="#16A34A"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 11.5L11.2 12.7L14 10"
                    stroke="#16A34A"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="feature-content">
                <h3>Secure Data</h3>
                <p>Enterprise-grade encryption for your personal information.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="3"
                    stroke="#22C55E"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M8 14.5L10 11.5L13 15.5L16 10"
                    stroke="#22C55E"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 9H10"
                    stroke="#9CA3AF"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="feature-content">
                <h3>Tax Reports</h3>
                <p>Automatic generation of yearly donation receipts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Right form side */}
        <section className="signup-form-wrapper">
          <div className="signup-card">
            <h2>Create an Account</h2>
            <p className="signup-description">
              Please fill in the details below to register as a new donor.
            </p>

            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="label-row">
                  <label htmlFor="address">Address</label>
                  <span className="label-optional">Optional</span>
                </div>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Enter your address"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="password-field">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Create a password"
                      required
                    />
                    <button
                      className="password-toggle"
                      type="button"
                      aria-label="Toggle password visibility"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 12C4.2 8.8 7.3 6.5 12 6.5C16.7 6.5 19.8 8.8 21 12C19.8 15.2 16.7 17.5 12 17.5C7.3 17.5 4.2 15.2 3 12Z"
                          stroke="#9CA3AF"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="2.7"
                          stroke="#9CA3AF"
                          strokeWidth="1.6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm</label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    required
                  />
                </div>
              </div>

              <button className="primary-btn" type="submit">
                Create Account
              </button>
            </form>

            <p className="login-footer">
              Already have an account?{' '}
              <button
                type="button"
                className="login-inline"
                onClick={onGoToLogin}
              >
                Login here
              </button>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DonorSignup;


