import React, { useState } from 'react';
import './Home.css';
import { FaBookOpen, FaBullhorn, FaCheckCircle, FaClock, FaUserGraduate, FaLock } from 'react-icons/fa';

const AttendanceDonut = ({ percent = 92, size = 120, stroke = 12 }) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width={size} height={size} className="donut">
      <defs>
        <linearGradient id="donutGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#64A926" />
          <stop offset="100%" stopColor="#4E8B1E" />
        </linearGradient>
      </defs>
      <g transform={`translate(${size / 2}, ${size / 2})`}>
        <circle r={radius} fill="transparent" stroke="#f0f7ef" strokeWidth={stroke} />
        <circle
          r={radius}
          fill="transparent"
          stroke="url(#donutGrad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          transform={`rotate(-90)`}
        />
        <text x="0" y="8" textAnchor="middle" className="donut-text">{percent}%</text>
      </g>
    </svg>
  );
};

const Home = () => {
  const [prayers, setPrayers] = useState([
    { name: 'Fajr', time: '05:15 AM', completed: true },
    { name: 'Dhuhr', time: '12:30 PM', completed: true },
    { name: 'Asr', time: '03:45 PM', completed: false },
    { name: 'Maghrib', time: '06:10 PM', completed: false },
    { name: 'Isha', time: '07:45 PM', completed: false }
  ]);

  const togglePrayer = (index) => {
    const updated = [...prayers];
    updated[index].completed = !updated[index].completed;
    setPrayers(updated);
  };

  return (
    <div className="student-home">
      {/* Header Section */}
      <header className="hero">
        <div className="hero-left">
          <div className="user-profile-card">
            <div className="avatar-large">AA</div>
            <div className="user-text">
              <p className="greeting">Assalamu Alaikum,</p>
              <h2 className="user-name">Ahmed Ali</h2>
              <div className="user-meta">
                <span className="badge">Grade 10</span>
                <p className="dot">•</p>
                <span className="badge">Section A</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="date-widget">
            <div className="date-icon"><FaClock /></div>
            <div className="date-info">
              <div className="today-label">Today</div>
              <div className="date-val">12 October 2023</div>
              <div className="hijri-val">27 Rabi Al-Awwal 1445</div>
            </div>
          </div>
        </div>
      </header>

      {/* Prayer Tracker Row */}
      <section className="prayer-section">
        <div className="section-head">
          <h3><FaClock className="icon-gap" />Prayer Tracker</h3>
          <span className="upcoming-prayer">Next: Asr at 3:45 PM</span>
        </div>
        <div className="prayers-list">
          {prayers.map((p, i) => (
            <div
              key={p.name}
              className={`prayer-box ${p.completed ? 'active' : ''}`}
              onClick={() => togglePrayer(i)}
              style={{ cursor: 'pointer' }}
            >
              <div className="p-time">{p.time}</div>
              <div className="p-name">{p.name}</div>
              <div className="p-status">
                {p.completed ? (
                  <FaCheckCircle className="status-icon done" />
                ) : (
                  <div className="status-icon empty" style={{ borderColor: '#ccc' }}></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Grid: Left (Classes/Announce) & Right (Attendance/Perf) */}
      <div className="dashboard-grid">
        <div className="grid-left">
          {/* Today's Classes */}
          <div className="card classes-card">
            <div className="card-header">
              <h3>Today's Classes</h3>
              <button className="link-btn">View Full Schedule</button>
            </div>

            <div className="class-row main-class">
              <div className="class-img-box">
                <img src="https://via.placeholder.com/150x100" alt="Quranic" />
              </div>
              <div className="class-details">
                <div className="cd-head">
                  <h4>Quranic Studies</h4>
                  <span className="live-tag">Live Now</span>
                </div>
                <p className="cd-time">10:00 AM - 11:00 AM • Ustad Bilal</p>
                <div className="cd-actions">
                  <button className="btn-primary">Join Class</button>
                  <button className="btn-outline">View Materials</button>
                </div>
              </div>
            </div>

            <div className="class-row main-class">
              <div className="class-img-box mini">
                <img src="https://via.placeholder.com/100x80" alt="Hadith" />
              </div>
              <div className="class-details">
                <h4>Hadith Studies</h4>
                <p className="cd-time">11:15 AM - 12:15 PM • Mr. Sarah</p>
                <div className="class-status-text">Starts in 45m</div>
              </div>
            </div>
          </div>

          {/* Announcements */}
          <div className="card announcements-card">
            <div className="card-header">
              <h3>Announcements</h3>
              <FaBullhorn className="header-icon" />
            </div>
            <ul className="announce-list">
              <li>
                <span className="bullet warning"></span>
                <div>
                  <h4>School Trip Registration Deadline</h4>
                  <p>Please submit your permission slips for the science museum trip by this Thursday.</p>
                </div>
              </li>
              <li>
                <span className="bullet info"></span>
                <div>
                  <h4>Quran Recitation Competition</h4>
                  <p>Sign-ups are now open for the annual recitation competition.</p>
                </div>
              </li>
            </ul>
            <div className="card-footer-link">View All Announcements</div>
          </div>
        </div>

        <div className="grid-right">
          {/* Attendance */}
          <div className="card attendance-card">
            <div className="card-header">
              <h3>Attendance Summary</h3>
            </div>
            <div className="attn-body">
              <AttendanceDonut percent={92} size={140} stroke={12} />
              <div className="attn-legend">
                <div className="l-item"><span className="dot present"></span> Present <b>23 Days</b></div>
                <div className="l-item"><span className="dot late"></span> Late <b>2 Days</b></div>
                <div className="l-item"><span className="dot absent"></span> Absent <b>0 Days</b></div>
              </div>
            </div>
          </div>

          {/* Performance */}
          <div className="card performance-card">
            <div className="card-header">
              <h3>Performance</h3>
              <span className="term-badge">Week 5</span>
            </div>
            <div className="perf-body">
              <div className="grade-circle">A</div>
              <div className="perf-info">
                <h4>Overall Grade</h4>
                <p>Excellent Progress</p>
              </div>
            </div>
            <p className="quote">"Ahmed has shown remarkable improvement in Tajweed this week."</p>
            <div className="card-footer-link">View Detailed Report</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
