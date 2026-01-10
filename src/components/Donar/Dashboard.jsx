import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import LogoutModal from './LogoutModal';

import { FiMenu, FiHome, FiClock, FiLogOut, FiSearch, FiBell, FiSettings, FiCheck, FiFileText, FiHeart, FiTrendingUp, FiCalendar, FiCreditCard, FiUser, FiArrowRight, FiChevronRight, FiMonitor, FiEdit } from 'react-icons/fi';
import { FaPiggyBank, FaUtensils, FaGraduationCap } from 'react-icons/fa';
import logoText from '../../assets/logo-text.png';

// Images (using placeholders or imports if available, here using standard paths/placeholders)
// Assuming UserAvatar is not imported, using a placeholder or local asset if defined previously.
// For now, I'll use a placeholder for the avatar as in the previous code.

const Dashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    navigate('/');
  };

  return (
    <div className="dashboard-layout">
      {/* ----------------- Sidebar ----------------- */}
      <aside className={`left-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <img src={logoText} alt="Al Burhan" className="brand-logo" style={{ height: '40px' }} />
        </div>

        <div className="sidebar-menu">
          <div className="menu-group">
            <span className="menu-label">Menu</span>
            <a href="#home" className="menu-item active" onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
              <FiHome /> Home
            </a>
            <a href="#history" className="menu-item" onClick={(e) => { e.preventDefault(); navigate('/donation-history'); }}>
              <FiClock /> Donation History
            </a>
          </div>
        </div>

        <div className="sidebar-footer">
          <a href="#logout" className="menu-item logout" onClick={handleLogoutClick}>
            <FiLogOut /> Sign Out
          </a>
        </div>
      </aside>

      {/* ----------------- Main Content ----------------- */}
      <main className="dashboard-main">

        {/* Header */}
        <header className="dashboard-header">
          <div className="mobile-menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FiMenu />
          </div>
          <h2 className="section-title">Overview</h2>

          <div className="header-actions">
            <div className="search-bar">
              <FiSearch />
              <input type="text" placeholder="Search projects..." />
            </div>

            <button className="icon-btn" onClick={() => navigate('/notifications')}>
              <FiBell />
              <span className="badge">3</span>
            </button>
            <button className="icon-btn" onClick={() => navigate('/settings')}>
              <FiSettings />
            </button>

            <div className="user-avatar" onClick={() => navigate('/profile')}>
              <img src="https://via.placeholder.com/40" alt="Profile" />
            </div>
          </div>
        </header>

        <div className="dashboard-content-wrapper">

          {/* 1. Welcome Card */}
          <div className="welcome-card">
            <div className="welcome-text">
              <div className="verified-badge">
                <span className="check-icon"><FiCheck /></span> Verified Donor
              </div>
              <h1>Welcome back, Ahmed</h1>
              <p>Your generosity is creating lasting change. Here is your impact at a glance.</p>
            </div>
            <div className="welcome-actions">
              <div className="view-receipts-link" onClick={() => navigate('/tax-documents')}>
                <span className="icon"><FiFileText /></span> View Receipts
              </div>
              <button className="donate-now-btn" onClick={() => navigate('/make-donation')}>
                <span className="icon"><FiHeart /></span> Donate Now
              </button>
            </div>
          </div>

          {/* 2. Donation Summary (3 Cards - Full Width Row) */}
          <h3 className="section-heading">Donation Summary</h3>
          <div className="stats-grid">

            {/* Card 1: Lifetime */}
            <div className="stat-card">
              <div className="stat-top-row">
                <div className="stat-icon green-bg"><FaPiggyBank /></div>
                <div className="stat-trend"><FiTrendingUp /> +12%</div>
              </div>
              <span className="stat-label">Total Lifetime Donations</span>
              <div className="stat-value">₹12,450</div>
            </div>

            {/* Card 2: Current Year */}
            <div className="stat-card">
              <div className="stat-top-row">
                <div className="stat-icon blue-bg"><FiCalendar /></div>
              </div>
              <span className="stat-label">Current Year Total</span>
              <div className="stat-value">₹1,200</div>
            </div>

            {/* Card 3: Last Donation */}
            <div className="stat-card">
              <div className="stat-top-row">
                <div className="stat-icon purple-bg"><FiCreditCard /></div>
                <span className="stat-date">2 days ago</span>
              </div>
              <span className="stat-label">Last Donation</span>
              <div className="stat-value">
                ₹100 <span className="stat-subtext">to Al-Huda Academy</span>
              </div>
            </div>
          </div>



          {/* 3. Split Content: Impact (Left) vs Quick Actions (Right) */}
          <div className="content-grid">

            {/* Left Column */}
            <div className="content-left">



              {/* Your Impact Section - Aligned with Grid */}
              <div className="impact-header-row">
                <h3 className="section-heading" style={{ marginTop: 0 }}>Your Impact</h3>
                <div className="view-all-link" onClick={() => navigate('/utilization-report')}>
                  View Impact Report <FiArrowRight />
                </div>
              </div>

              <div className="impact-grid">
                <div className="impact-card">
                  <div className="impact-icon orange-bg" style={{ borderRadius: '50%', width: '60px', height: '60px', marginBottom: '15px' }}>
                    <FaGraduationCap />
                  </div>
                  <div className="impact-number">5</div>
                  <div className="impact-label">Students Supported</div>
                </div>

                <div className="impact-card">
                  <div className="impact-icon teal-bg" style={{ borderRadius: '50%', width: '60px', height: '60px', marginBottom: '15px' }}>
                    <FaUtensils />
                  </div>
                  <div className="impact-number">200</div>
                  <div className="impact-label">Meals Sponsored</div>
                </div>

                <div className="impact-card">
                  <div className="impact-icon purple-bg" style={{ borderRadius: '50%', width: '60px', height: '60px', marginBottom: '15px' }}>
                    <FiUser />
                  </div>
                  <div className="impact-number">2</div>
                  <div className="impact-label">Teachers Assisted</div>
                </div>
              </div>

              {/* Recent Donations Table */}
              <div className="recent-header-row">
                <h3 className="section-heading">Recent Donations</h3>
                <span className="view-all-link" onClick={() => navigate('/donation-history')}>View All</span>
              </div>

              <div className="recent-donations-table-container">
                <table className="recent-donations-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Organization</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="date-col">Oct 24, 2023</td>
                      <td>
                        <div className="org-cell">
                          <div className="org-icon"></div> Al-Huda Academy
                        </div>
                      </td>
                      <td className="amount-col">₹100.00</td>
                      <td><span className="status-badge completed">Completed</span></td>
                    </tr>
                    <tr>
                      <td className="date-col">Oct 10, 2023</td>
                      <td>
                        <div className="org-cell">
                          <div className="org-icon"></div> City Madarsa Fund
                        </div>
                      </td>
                      <td className="amount-col">₹250.00</td>
                      <td><span className="status-badge completed">Completed</span></td>
                    </tr>
                    <tr>
                      <td className="date-col">Sep 28, 2023</td>
                      <td>
                        <div className="org-cell">
                          <div className="org-icon"></div> Global Education Initiative
                        </div>
                      </td>
                      <td className="amount-col">₹50.00</td>
                      <td><span className="status-badge completed">Completed</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
            {/* End Left Column */}

            {/* Right Column: Quick Actions */}
            <div className="content-right">
              <h3 className="section-heading" style={{ marginTop: 0 }}>Quick Actions</h3>

              <div className="quick-actions-list">
                <div className="action-item" onClick={() => navigate('/tax-documents')}>
                  <div className="action-icon green-light-bg"><FiFileText /></div>
                  <div className="action-details">
                    <div className="action-title">Tax Receipts</div>
                    <div className="action-subtitle">Download for 2023</div>
                  </div>
                  <div className="action-arrow"><FiChevronRight /></div>
                </div>

                <div className="action-item" onClick={() => navigate('/utilization-report')}>
                  <div className="action-icon green-light-bg"><FiMonitor /></div>
                  <div className="action-details">
                    <div className="action-title">Transparency</div>
                    <div className="action-subtitle">View fund distribution</div>
                  </div>
                  <div className="action-arrow"><FiChevronRight /></div>
                </div>

                <div className="action-item" onClick={() => navigate('/profile')}>
                  <div className="action-icon green-light-bg"><FiEdit /></div>
                  <div className="action-details">
                    <div className="action-title">Update Profile</div>
                    <div className="action-subtitle">Manage preferences</div>
                  </div>
                  <div className="action-arrow"><FiChevronRight /></div>
                </div>
              </div>

              <button className="utilization-report-btn" onClick={() => navigate('/utilization-report')}>
                Utilization Report
              </button>
            </div>
            {/* End Right Column */}

          </div>
        </div>

      </main>

      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onLogout={handleConfirmLogout}
      />
    </div>
  );
};

export default Dashboard;
