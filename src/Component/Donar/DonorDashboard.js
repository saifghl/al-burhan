import React from 'react';
import './DonorPortal.css';

const DonorDashboard = () => {
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
        <div className="dp-topbar-right">
          <input
            className="dp-search-input"
            placeholder="Search projects..."
            aria-label="Search projects"
          />
          <div className="dp-topbar-icons">
            <span className="dp-icon-circle" aria-hidden="true">
              ⚙
            </span>
            <span className="dp-icon-circle dp-icon-avatar" aria-hidden="true">
              A
            </span>
          </div>
        </div>
      </header>

      <div className="dp-layout">
        <aside className="dp-sidebar">
          <button type="button" className="dp-sidebar-toggle">
            Menu
          </button>
          <nav className="dp-sidebar-nav">
            <button type="button" className="dp-sidebar-item dp-sidebar-item-active">
              Home
            </button>
            <button type="button" className="dp-sidebar-item">
              Donation History
            </button>
          </nav>
          <button type="button" className="dp-signout-btn">
            Sign Out
          </button>
        </aside>

        <main className="dp-content">
          <section className="dp-section-header-card">
            <div>
              <div className="dp-badge-row">
                <span className="dp-badge dp-badge-success">Verified Donor</span>
              </div>
              <h1 className="dp-heading-main">Welcome back, Ahmed</h1>
              <p className="dp-heading-sub">
                Your generosity is creating lasting change. Here is your impact at a glance.
              </p>
            </div>
            <div className="dp-header-actions">
              <button type="button" className="dp-link-btn">
                View Receipts
              </button>
              <button type="button" className="dp-primary-btn dp-primary-btn-compact">
                Donate Now
              </button>
            </div>
          </section>

          <section className="dp-grid dp-grid-summary">
            <div className="dp-summary-card">
              <div className="dp-summary-label">Total Lifetime Donations</div>
              <div className="dp-summary-value">$12,450</div>
              <div className="dp-summary-meta dp-summary-meta-inline">
                <span className="dp-badge-mini dp-badge-outline">+12%</span>
              </div>
            </div>
            <div className="dp-summary-card">
              <div className="dp-summary-label">Current Year Total</div>
              <div className="dp-summary-value">$1,200</div>
            </div>
            <div className="dp-summary-card">
              <div className="dp-summary-label">Last Donation</div>
              <div className="dp-summary-value">$100</div>
              <div className="dp-summary-meta">Al-Huda Academy • 2 days ago</div>
            </div>
          </section>

          <section className="dp-grid dp-grid-two">
            <div className="dp-panel">
              <div className="dp-panel-header">
                <h2>Your Impact</h2>
                <button type="button" className="dp-link-btn-small">
                  View Impact Report →
                </button>
              </div>
              <div className="dp-impact-grid">
                <div className="dp-impact-card">
                  <div className="dp-impact-icon dp-impact-orange" />
                  <div className="dp-impact-count">5</div>
                  <div className="dp-impact-label">Students Supported</div>
                </div>
                <div className="dp-impact-card">
                  <div className="dp-impact-icon dp-impact-green" />
                  <div className="dp-impact-count">200</div>
                  <div className="dp-impact-label">Meals Sponsored</div>
                </div>
                <div className="dp-impact-card">
                  <div className="dp-impact-icon dp-impact-purple" />
                  <div className="dp-impact-count">2</div>
                  <div className="dp-impact-label">Teachers Assisted</div>
                </div>
              </div>
            </div>

            <div className="dp-panel">
              <div className="dp-panel-header">
                <h2>Quick Actions</h2>
              </div>
              <div className="dp-quick-actions">
                <button type="button" className="dp-quick-item">
                  <span className="dp-quick-icon dp-quick-icon-green" />
                  <div>
                    <div className="dp-quick-title">Tax Receipts</div>
                    <div className="dp-quick-sub">Download for 2023</div>
                  </div>
                </button>
                <button type="button" className="dp-quick-item">
                  <span className="dp-quick-icon dp-quick-icon-blue" />
                  <div>
                    <div className="dp-quick-title">Transparency</div>
                    <div className="dp-quick-sub">View fund distribution</div>
                  </div>
                </button>
                <button type="button" className="dp-quick-item">
                  <span className="dp-quick-icon dp-quick-icon-yellow" />
                  <div>
                    <div className="dp-quick-title">Update Profile</div>
                    <div className="dp-quick-sub">Manage preferences</div>
                  </div>
                </button>
              </div>
            </div>
          </section>

          <section className="dp-panel dp-panel-wide">
            <div className="dp-panel-header">
              <h2>Recent Donations</h2>
              <button type="button" className="dp-link-btn-small">
                View All
              </button>
            </div>
            <div className="dp-table">
              <div className="dp-table-row dp-table-head">
                <span>Date</span>
                <span>Organization</span>
                <span>Amount</span>
                <span>Status</span>
              </div>
              <div className="dp-table-row">
                <span>Oct 24, 2023</span>
                <span>Al-Huda Academy</span>
                <span>$100.00</span>
                <span className="dp-status dp-status-success">Completed</span>
              </div>
              <div className="dp-table-row">
                <span>Oct 10, 2023</span>
                <span>City Madarsa Fund</span>
                <span>$250.00</span>
                <span className="dp-status dp-status-success">Completed</span>
              </div>
              <div className="dp-table-row">
                <span>Sep 28, 2023</span>
                <span>Global Education Initiative</span>
                <span>$50.00</span>
                <span className="dp-status dp-status-success">Completed</span>
              </div>
            </div>
          </section>

          <section className="dp-utilization">
            <button type="button" className="dp-primary-btn dp-util-btn">
              Utilization Report
            </button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DonorDashboard;


