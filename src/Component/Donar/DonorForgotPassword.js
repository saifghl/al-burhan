import React from 'react';
import './DonorFlow.css';

const DonorForgotPassword = () => {
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
        <button type="button" className="df-link-btn">
          Help
        </button>
      </header>

      <main className="df-main">
        <section className="df-card">
          <div className="df-card-icon" aria-hidden="true">
            <div className="df-card-icon-circle">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4C8.68629 4 6 6.68629 6 10V11"
                  stroke="#22C55E"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <rect
                  x="7"
                  y="11"
                  width="10"
                  height="9"
                  rx="2"
                  stroke="#22C55E"
                  strokeWidth="1.7"
                />
                <circle cx="12" cy="15" r="1.5" fill="#22C55E" />
              </svg>
            </div>
          </div>

          <h1 className="df-title">Forgot Password?</h1>
          <p className="df-subtitle">
            Don&apos;t worry, it happens. Please enter the email address or mobile number
            associated with your account.
          </p>

          <form className="df-form" onSubmit={handleSubmit}>
            <div className="df-form-group">
              <label htmlFor="fpEmail">Email or Mobile</label>
              <input
                id="fpEmail"
                type="text"
                placeholder="Enter email or mobile"
                required
              />
            </div>

            <button type="submit" className="df-primary-btn df-primary-btn-full">
              Send Instructions
            </button>
          </form>

          <button type="button" className="df-link-btn df-back-link">
            ← Back to Log In
          </button>

          <p className="df-muted-text df-bottom-caption">
            Protected by reCAPTCHA and subject to the Privacy Policy and Terms of Service.
          </p>
        </section>
      </main>
    </div>
  );
};

export default DonorForgotPassword;


