import React from 'react';
import './DonorPortal.css';

const DonorReviewDonation = () => {
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
                <div className="dp-step-bar-fill dp-step-bar-fill-3" />
              </div>
              <span className="dp-step-text">Step 3 of 4</span>
            </div>
          </div>

          <section className="dp-card-wide dp-review-card">
            <div className="dp-breadcrumb">
              Home <span> / </span> Madarsa Profile <span> / </span> Review Donation
            </div>

            <h1 className="dp-heading-main">Review Your Donation</h1>
            <p className="dp-heading-sub">
              Please review the details below before proceeding to secure payment.
            </p>

            <div className="dp-review-body">
              <div className="dp-review-top">
                <div className="dp-review-org">
                  <div className="dp-review-thumb" />
                  <div>
                    <div className="dp-review-org-name">Al-Huda Institute</div>
                    <div className="dp-review-org-meta">New York, USA</div>
                  </div>
                </div>
              </div>

              <div className="dp-review-grid">
                <div className="dp-review-item">
                  <div className="dp-review-label">Donation Type</div>
                  <div className="dp-review-value">Zakat Eligible</div>
                </div>
                <div className="dp-review-item">
                  <div className="dp-review-label">Date</div>
                  <div className="dp-review-value">October 24, 2023</div>
                </div>
                <div className="dp-review-item">
                  <div className="dp-review-label">Donor Name</div>
                  <div className="dp-review-value">John Doe</div>
                </div>
                <div className="dp-review-item">
                  <div className="dp-review-label">Email</div>
                  <div className="dp-review-value">john.doe@example.com</div>
                </div>
              </div>

              <div className="dp-review-summary">
                <div className="dp-review-row">
                  <span>Subtotal</span>
                  <span>$100.00</span>
                </div>
                <div className="dp-review-row">
                  <span>Processing Fee</span>
                  <span>$0.00</span>
                </div>
                <div className="dp-review-row dp-review-row-total">
                  <span>Total Amount</span>
                  <span className="dp-review-total-amount">$100.00</span>
                </div>
              </div>

              <button type="button" className="dp-primary-btn dp-primary-btn-full dp-confirm-btn">
                <span className="dp-confirm-icon" aria-hidden="true">
                  🔒
                </span>
                Confirm &amp; Pay
              </button>

              <button type="button" className="dp-link-btn-small dp-edit-link">
                ← Edit Details
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DonorReviewDonation;


