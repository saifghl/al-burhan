import React from 'react';
import './DonorPortal.css';

const DonorSelectAmount = () => {
  const presets = ['$25', '$50', '$100', '$250'];

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
        <main className="dp-content dp-content-wide dp-content-split">
          <div className="dp-step-header">
            <button type="button" className="dp-link-btn-small">
              ← Back
            </button>
            <div className="dp-step-progress">
              <div className="dp-step-bar">
                <div className="dp-step-bar-fill dp-step-bar-fill-2" />
              </div>
              <span className="dp-step-text">Step 2 of 4</span>
            </div>
          </div>

          <section className="dp-amount-layout">
            <div className="dp-amount-hero">
              <div className="dp-amount-image" />
              <div className="dp-amount-hero-info">
                <span className="dp-badge dp-badge-success">Verified Madarsa</span>
                <h1 className="dp-heading-main">Support Al-Falah Institute</h1>
                <p className="dp-heading-sub">
                  Your contribution helps provide quality education, books, and meals to
                  underprivileged students.
                </p>

                <div className="dp-impact-strip">
                  <div className="dp-impact-chip">
                    <div className="dp-impact-chip-label">1,200+</div>
                    <div className="dp-impact-chip-text">Students Educated</div>
                  </div>
                  <div className="dp-impact-chip">
                    <div className="dp-impact-chip-label">15,000</div>
                    <div className="dp-impact-chip-text">Books Distributed</div>
                  </div>
                  <div className="dp-impact-chip">
                    <div className="dp-impact-chip-label">100%</div>
                    <div className="dp-impact-chip-text">Zakat Policy</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dp-amount-panel">
              <h2>Select Donation Amount</h2>
              <p className="dp-heading-sub">
                Choose a frequency and amount to start supporting.
              </p>

              <div className="dp-tab-row">
                <button type="button" className="dp-tab-btn dp-tab-btn-active">
                  One-time
                </button>
                <button type="button" className="dp-tab-btn">
                  Monthly
                  <span className="dp-tab-pill">Most Popular</span>
                </button>
              </div>

              <div className="dp-presets-grid">
                {presets.map((value, index) => (
                  <button
                    key={value}
                    type="button"
                    className={`dp-preset-card ${index === 1 ? 'dp-preset-card-selected' : ''}`}
                  >
                    <div className="dp-preset-amount">{value}</div>
                    <div className="dp-preset-label">
                      {index === 0 && 'Provides books'}
                      {index === 1 && 'Sponsors a student'}
                      {index === 2 && 'Classroom supplies'}
                      {index === 3 && 'Full scholarship'}
                    </div>
                  </button>
                ))}
              </div>

              <div className="dp-custom-amount">
                <label htmlFor="customAmount">Custom Amount</label>
                <div className="dp-custom-row">
                  <span className="dp-custom-prefix">USD</span>
                  <input id="customAmount" type="number" placeholder="Enter amount" />
                </div>
              </div>

              <div className="dp-donation-note">
                <p className="dp-note-line">
                  <strong>This donation is Zakat eligible.</strong> We ensure funds are used
                  according to Sharia guidelines.
                </p>
                <p className="dp-note-line">Cover transaction fees ($1.51)</p>
              </div>

              <button type="button" className="dp-primary-btn dp-primary-btn-full">
                Donate $50
              </button>

              <p className="dp-muted-text dp-secure-text">
                Secure 256-bit SSL encrypted payment.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DonorSelectAmount;


