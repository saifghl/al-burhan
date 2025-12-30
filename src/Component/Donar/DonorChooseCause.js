import React from 'react';
import './DonorPortal.css';

const DonorChooseCause = () => {
  const causes = [
    'Zakat',
    'Sadaqah',
    'Education Support',
    'Orphan Sponsorship',
    'Teacher Salary',
    'General Donation',
  ];

  return (
    <div className="dp-page dp-page-with-sidebar">
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

      <div className="dp-layout dp-layout-wide">
        <main className="dp-content dp-content-wide">
          <div className="dp-step-header">
            <button type="button" className="dp-link-btn-small">
              ← Back
            </button>
            <div className="dp-step-progress">
              <div className="dp-step-bar">
                <div className="dp-step-bar-fill" />
              </div>
              <span className="dp-step-text">Step 1 of 4</span>
            </div>
          </div>

          <section className="dp-card-wide">
            <h1 className="dp-heading-main">Where would you like your donation to go?</h1>
            <p className="dp-heading-sub">
              Choose a specific cause to support the Madarsa&apos;s needs. Your contribution
              makes a direct impact.
            </p>

            <div className="dp-cause-grid">
              {causes.map((cause, index) => (
                <button
                  key={cause}
                  type="button"
                  className={`dp-cause-card ${index === 2 ? 'dp-cause-card-selected' : ''}`}
                >
                  <div className="dp-cause-image" />
                  <div className="dp-cause-body">
                    <div className="dp-cause-title-row">
                      <span className="dp-cause-title">{cause}</span>
                      {index === 2 && (
                        <span className="dp-cause-check" aria-hidden="true">
                          ✓
                        </span>
                      )}
                    </div>
                    <p className="dp-cause-text">
                      Short description about how this category helps students and teachers.
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="dp-why-panel">
              <div className="dp-why-icon" aria-hidden="true" />
              <div>
                <div className="dp-why-title">Why your choice matters</div>
                <div className="dp-why-text">
                  Your specific allocation ensures transparency and helps Madarsas plan their
                  academic year effectively. Each category has a distinct impact on the
                  ecosystem.
                </div>
              </div>
              <button type="button" className="dp-link-btn-small dp-why-link">
                Read impact report →
              </button>
            </div>

            <div className="dp-step-footer">
              <button type="button" className="dp-secondary-btn">
                Back
              </button>
              <button type="button" className="dp-primary-btn dp-primary-btn-compact">
                Next: Select Amount
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DonorChooseCause;


