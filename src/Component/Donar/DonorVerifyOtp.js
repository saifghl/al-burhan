import React from 'react';
import './DonorFlow.css';

const DonorVerifyOtp = () => {
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
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="5"
                  y="9"
                  width="14"
                  height="10"
                  rx="2"
                  stroke="#22C55E"
                  strokeWidth="1.7"
                />
                <path
                  d="M9 9V7C9 5.34315 10.3431 4 12 4V4C13.6569 4 15 5.34315 15 7V9"
                  stroke="#22C55E"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <h1 className="df-title">Verify Identity</h1>
          <p className="df-subtitle">
            Enter the 6-digit code sent to <span className="df-bold">user@example.com</span>
          </p>

          <form className="df-form df-otp-form" onSubmit={handleSubmit}>
            <div className="df-otp-row">
              {Array.from({ length: 6 }).map((_, index) => (
                <input key={index} type="text" maxLength="1" className="df-otp-input" />
              ))}
            </div>

            <div className="df-otp-footer">
              <span className="df-otp-timer">
                Resend code in <span className="df-otp-timer-highlight">00:30</span>
              </span>
            </div>

            <button type="submit" className="df-primary-btn df-primary-btn-full">
              Verify
              <span className="df-primary-icon" aria-hidden="true">
                →
              </span>
            </button>
          </form>

          <div className="df-otp-links">
            <span className="df-muted-text">Didn&apos;t receive the email?</span>
            <button type="button" className="df-link-btn">
              Click to resend
            </button>
          </div>

          <button type="button" className="df-link-btn df-back-link">
            ← Back to login
          </button>
        </section>
      </main>
    </div>
  );
};

export default DonorVerifyOtp;


