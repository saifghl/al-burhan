import React from 'react';
import './DonorPortal.css';

const DonorLanguageSelect = () => {
  return (
    <div className="dp-page">
      <header className="dp-topbar">
        <div className="dp-topbar-left">
          <div className="dp-logo-icon" aria-hidden="true">
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
          <span className="dp-logo-text">Al Burhan</span>
        </div>
        <button type="button" className="dp-link-btn">
          Help
        </button>
      </header>

      <main className="dp-main-center">
        <section className="dp-card-large">
          <h1 className="dp-title">
            Welcome <span>/ خوش آمدید</span>
          </h1>
          <p className="dp-subtitle">
            Please select your preferred language to continue setting up your account.
          </p>

          <div className="dp-language-grid">
            <button type="button" className="dp-language-card dp-language-card-selected">
              <div className="dp-language-image dp-language-image-english" />
              <div className="dp-language-footer">
                <span className="dp-language-label">English</span>
                <span className="dp-language-check" aria-hidden="true">
                  ✓
                </span>
              </div>
            </button>

            <button type="button" className="dp-language-card">
              <div className="dp-language-image dp-language-image-urdu" />
              <div className="dp-language-footer">
                <span className="dp-language-label">اردو</span>
              </div>
            </button>
          </div>

          <div className="dp-language-actions">
            <button type="button" className="dp-primary-btn">
              Next
              <span className="dp-primary-icon" aria-hidden="true">
                →
              </span>
            </button>
            <button type="button" className="dp-link-btn-muted">
              Skip for now
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DonorLanguageSelect;


