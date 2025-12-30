import React from 'react';
import './DonorFlow.css';

const DonorLogin = ({
  onGoToSignup,
  onForgotPassword,
  onLoginViaOtp,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="df-page">
      <header className="df-header">
        <div className="df-logo">
          <div className="df-logo-icon" aria-hidden="true">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 9L12 4L20 9V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V9Z"
                stroke="#22C55E"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 20V12H14V20"
                stroke="#22C55E"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="df-logo-text">Al Burhan</span>
        </div>
        <div className="df-header-right">
          <span className="df-header-text">Don&apos;t have an account?</span>
          <button
            type="button"
            className="df-pill-btn df-pill-btn-outline"
            onClick={onGoToSignup}
          >
            Sign Up
          </button>
        </div>
      </header>

      <main className="df-main">
        <section className="df-card df-card-small">
          <h1 className="df-title">Welcome Back</h1>
          <p className="df-subtitle">Enter your details to access your account.</p>

          <form className="df-form" onSubmit={handleSubmit}>
            <div className="df-form-group">
              <label htmlFor="loginEmail">Email or Mobile Number</label>
              <input
                id="loginEmail"
                type="text"
                placeholder="Enter email or mobile"
                required
              />
            </div>

            <div className="df-form-group">
              <div className="df-label-row">
                <label htmlFor="loginPassword">Password</label>
                <button
                  type="button"
                  className="df-link-btn"
                  onClick={onForgotPassword}
                >
                  Forgot Password?
                </button>
              </div>
              <div className="df-password-field">
                <input
                  id="loginPassword"
                  type="password"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  className="df-password-toggle"
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
                      stroke="#16A34A"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="2.7"
                      stroke="#16A34A"
                      strokeWidth="1.6"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <button type="submit" className="df-primary-btn">
              Log In
            </button>

            <div className="df-or-divider">
              <span />
              <span className="df-or-text">OR</span>
              <span />
            </div>

            <button
              type="button"
              className="df-secondary-btn"
              onClick={onLoginViaOtp}
            >
              <span className="df-secondary-icon" aria-hidden="true">
                ■
              </span>
              Log in via OTP
            </button>
          </form>

          <div className="df-card-footer">
            <button type="button" className="df-link-btn-muted">
              Terms of Use
            </button>
            <span className="df-footer-dot">•</span>
            <button type="button" className="df-link-btn-muted">
              Privacy Policy
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DonorLogin;


