import React from 'react';
import './Syllabus.css';
import heroImg from '../../assets/academics2.png';
import Navbar from '../Navbar/Navbar';
import { FaBookOpen, FaPenNib } from 'react-icons/fa';

const Syllabus = () => {
    return (
        <div className="syllabus-page">
            {/* Navbar is typically global, but if needed per page, include it. 
                Assuming App.js handles Navbar, but if this is a standalone full styling 
                matching the screenshot which shows a Navbar, we rely on the main layout.
             */}

            <div className="syllabus-hero" style={{ backgroundImage: `url(${heroImg})` }}>
                <div className="syllabus-hero-content">
                    <span className="syllabus-badge">Excellence in Sacred Knowledge</span>
                    <h1 className="syllabus-title">Proposed Academic Syllabus <br /> & Programs</h1>
                    <p className="syllabus-subtitle">
                        A complete academic framework rooted in the Holy Qur'an, Sunnah, and classical Islamic scholarship, designed for the modern seeker of knowledge.
                    </p>
                    <div className="syllabus-buttons">
                        <button className="syllabus-btn-view">View Syllabus</button>
                        <button className="syllabus-btn-download">Download Prospectus</button>
                    </div>
                </div>
            </div>

            {/* Syllabus Content Container */}
            <div className="syllabus-content-container">

                {/* Dept 1 & 2 Row */}
                <div className="syllabus-dept-row">
                    {/* Dept 1 */}
                    <div className="syllabus-dept-col">
                        <div className="dept-header">
                            <span className="dept-icon-box gold-bg"><FaBookOpen /></span>
                            <h2 className="dept-title">Dept 1: Islamic Studies</h2>
                        </div>

                        <div className="dept-section">
                            <h3 className="dept-subtitle_green"><span className="dot">•</span> Qur’an Studies</h3>
                            <ul className="dept-list">
                                <li><span className="check">✔</span> Qur’an Reading (Nazirah) with Tajweed</li>
                                <li><span className="check">✔</span> Memorization of Qur’an (Partial / Complete Hifz)</li>
                                <li><span className="check">✔</span> Qur’an Translation (Easy Urdu & Arabic)</li>
                                <li><span className="check">✔</span> Tafseer (Jalalayn / Ibn Kathir) & Selected Verses</li>
                                <li><span className="check">✔</span> Uloom-ul-Qur’an: Wahi, Asbab-un-Nuzul, Nasikh & Mansukh</li>
                            </ul>
                        </div>

                        <div className="dept-section">
                            <h3 className="dept-subtitle_grey"><span className="dot">•</span> Hadith Studies</h3>
                            <ul className="dept-list">
                                <li><span className="check">✔</span> Selected Ahadith (40 Ahadith), Riyad-us-Saliheen</li>
                                <li><span className="check">✔</span> Mishkat-ul-Masabih (Selected)</li>
                                <li><span className="check">✔</span> Uloom-ul-Hadith: Sanad & Matn, Jarh wa Ta’deel</li>
                            </ul>
                        </div>

                        <div className="dept-section">
                            <h3 className="dept-subtitle_grey"><span className="dot">•</span> Fiqh & Islamic Law</h3>
                            <ul className="dept-list">
                                <li><span className="check">✔</span> Fiqh of Worship: Purification, Salah, Fasting, Zakah, Hajj</li>
                                <li><span className="check">✔</span> Fiqh of Transactions: Nikah, Trade, Inheritance</li>
                                <li><span className="check">✔</span> Contemporary Issues & Usul-ul-Fiqh</li>
                            </ul>
                        </div>

                        <div className="dept-section">
                            <h3 className="dept-subtitle_grey"><span className="dot">•</span> Aqeedah & Beliefs</h3>
                            <ul className="dept-list">
                                <li><span className="check">✔</span> Basic Islamic Beliefs & Aqeedah Tahawiyyah</li>
                                <li><span className="check">✔</span> Issues of Iman & Kufr, Modern Ideologies</li>
                                <li><span className="check">✔</span> Comparative Religion</li>
                            </ul>
                        </div>
                    </div>

                    {/* Dept 2 */}
                    <div className="syllabus-dept-col">
                        <div className="dept-header">
                            <span className="dept-icon-box gold-bgish"><FaPenNib /></span> {/* Using Pen for Arabic placeholder */}
                            <h2 className="dept-title">Dept 2: Arabic & Literature</h2>
                        </div>

                        <div className="dept-section">
                            <h3 className="dept-subtitle_green"><span className="dot">•</span> Arabic Language (Lughah)</h3>
                            <ul className="dept-list">
                                <li><span className="check">✔</span> Alphabet, Pronunciation & Basic Grammar</li>
                                <li><span className="check">✔</span> Arabic Speaking & Daily Conversation</li>
                                <li><span className="check">✔</span> Writing Essays & Letters, Translation</li>
                            </ul>
                        </div>

                        <div className="dept-section">
                            <h3 className="dept-subtitle_grey"><span className="dot">•</span> Nahw & Sarf (Grammar)</h3>
                            <ul className="dept-list">
                                <li><span className="check">✔</span> Noun, Verb & Particle Analysis</li>
                                <li><span className="check">✔</span> Singular, Dual, Plural, Gender Morphology</li>
                                <li><span className="check">✔</span> Nominal & Verbal Sentences, I’raab (Parsing)</li>
                            </ul>
                        </div>

                        <div className="dept-section">
                            <h3 className="dept-subtitle_grey"><span className="dot">•</span> Arabic Literature</h3>
                            <ul className="dept-list">
                                <li><span className="check">✔</span> Short Stories & Selected Poetry</li>
                                <li><span className="check">✔</span> Khutbahs, Speeches, Seerah Texts</li>
                            </ul>
                        </div>

                        {/* Dept 3: Urdu (Nested in column or separate? Image shows it below Dept 2 part but visually distinct) */}
                        <div className="dept-3-urdu-box">
                            <div className="dept-header-small">
                                <span className="dept-icon-small"><FaPenNib /></span>
                                <h3 className="dept-title-small">Dept 3: Urdu Language</h3>
                            </div>
                            <div className="urdu-tags">
                                <span>Reading & Writing</span>
                                <span>Grammar</span>
                                <span>Islamic Essays</span>
                                <span>Public Speaking</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dept 4: Special Courses */}
                <div className="dept-4-section">
                    <div className="dept-4-header">
                        <h4 className="community-label">Community Education</h4>
                        <h2 className="dept-4-title">Dept 4: Special Courses</h2>
                        <p className="dept-4-desc">Tailored programs for spiritual growth and community development.</p>
                    </div>

                    <div className="dept-4-cards">
                        {/* Card 1 */}
                        <div className="dept-4-card">
                            <div className="card-icon-circle green-light"><span className="gender-icon">♀</span></div>
                            <h3 className="d4-card-title">Alimah / Adult Women</h3>
                            <p className="d4-card-desc">Comprehensive Islamic education tailored for adult women.</p>
                            <ul className="d4-list">
                                <li>Basic Aqeedah & Fiqh</li>
                                <li>Qur'an Translation</li>
                                <li>Islamic Manners</li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="dept-4-card">
                            <div className="card-pop-tag">POPULAR</div>
                            <div className="card-icon-circle pink-light"><span>💖</span></div>
                            <h3 className="d4-card-title">Momina Course</h3>
                            <p className="d4-card-desc">Focused training for young girls on modesty and ethics.</p>
                            <ul className="d4-list red-bullets">
                                <li>Islamic Morals & Ethics</li>
                                <li>Hijab & Modesty</li>
                                <li>Seerah of Sahabiyat</li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="dept-4-card">
                            <div className="card-icon-circle blue-light"><span>🕌</span></div>
                            <h3 className="d4-card-title">Du'aiyah & Spiritual</h3>
                            <p className="d4-card-desc">Spiritual development through supplications and adhkar.</p>
                            <ul className="d4-list blue-bullets">
                                <li>Masnoon Duas</li>
                                <li>Morning & Evening Adhkar</li>
                                <li>Self-Reformation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Dept 5: Alimiyyah Program (Timeline) */}
                <div className="dept-5-section">
                    <div className="d5-header-row">
                        <div>
                            <h2 className="d5-title">Dept 5: Alimiyyah Program</h2>
                            <p className="d5-subtitle">The Dars-e-Nizami Structured Timeline</p>
                        </div>
                        <a href="#" className="d5-download-link">Download Full Curriculum →</a>
                    </div>

                    <div className="d5-timeline">
                        {/* Level 1 */}
                        <div className="d5-timeline-item left-align">
                            <div className="d5-content text-right">
                                <span className="level-label">Level I</span>
                                <h3 className="level-title">Arabic I</h3>
                                <p className="level-desc">Basic Language Skills & Foundation</p>
                            </div>
                            <div className="d5-marker">I</div>
                            <div className="d5-empty"></div>
                        </div>

                        {/* Level 2 */}
                        <div className="d5-timeline-item right-align">
                            <div className="d5-empty"></div>
                            <div className="d5-marker white-bg">II</div>
                            <div className="d5-content text-left">
                                <span className="level-label">Level II</span>
                                <h3 className="level-title">Arabic II</h3>
                                <p className="level-desc">Grammar & Morphology Intensive</p>
                            </div>
                        </div>

                        {/* Level 3 */}
                        <div className="d5-timeline-item left-align">
                            <div className="d5-content text-right">
                                <span className="level-label">Level III</span>
                                <h3 className="level-title">Arabic III</h3>
                                <p className="level-desc">Introduction to Literature & Fiqh</p>
                            </div>
                            <div className="d5-marker white-bg">III</div>
                            <div className="d5-empty"></div>
                        </div>

                        {/* Level 4 */}
                        <div className="d5-timeline-item right-align">
                            <div className="d5-empty"></div>
                            <div className="d5-marker white-bg">IV</div>
                            <div className="d5-content text-left">
                                <span className="level-label">Level IV</span>
                                <h3 className="level-title">Arabic IV</h3>
                                <p className="level-desc">Tafseer & Hadith Studies</p>
                            </div>
                        </div>

                        {/* Level 5 */}
                        <div className="d5-timeline-item left-align">
                            <div className="d5-content text-right">
                                <span className="level-label">Level V</span>
                                <h3 className="level-title">Arabic V</h3>
                                <p className="level-desc">Usul-ul-Fiqh (Principles of Jurisprudence)</p>
                            </div>
                            <div className="d5-marker white-bg">V</div>
                            <div className="d5-empty"></div>
                        </div>

                        {/* Level 6 */}
                        <div className="d5-timeline-item right-align">
                            <div className="d5-empty"></div>
                            <div className="d5-marker white-bg">VI</div>
                            <div className="d5-content text-left">
                                <span className="level-label">Level VI</span>
                                <h3 className="level-title">Arabic VI</h3>
                                <p className="level-desc">Mishkat & Hidayah (Advanced Law)</p>
                            </div>
                        </div>

                        {/* Final Year */}
                        <div className="d5-timeline-item centered-final">
                            <div className="d5-marker final-marker">VII</div>
                            <div className="d5-content text-center">
                                <span className="level-label-final">Final Year</span>
                                <h3 className="level-title-final">Level VII: Daurah-e-Hadith</h3>
                                <p className="level-desc">Comprehensive Study of Major Hadith Books</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dept 6 & 7 Row */}
                <div className="d6-d7-row">
                    {/* Dept 6 */}
                    <div className="dept-6-card">
                        <h2 className="d6-title">Dept 6: Specialization</h2>
                        <p className="d6-subtitle">Post-Alimiyyah Programs (Takhassus)</p>

                        <div className="d6-item">
                            <h3 className="d6-item-title">Takhassus fi-l-Qur'an</h3>
                            <p className="d6-item-desc">Advanced Tafseer, Uloom-ul-Qur'an & Qira'at</p>
                        </div>
                        <div className="d6-item">
                            <h3 className="d6-item-title">Takhassus fi-l-Hadith</h3>
                            <p className="d6-item-desc">Principles of Hadith & Takhrij-ul-Hadith</p>
                        </div>
                        <div className="d6-item">
                            <h3 className="d6-item-title">Takhassus fi-l-Fiqh</h3>
                            <p className="d6-item-desc">Fatwa Writing & Contemporary Jurisprudence</p>
                        </div>
                    </div>

                    {/* Dept 7 */}
                    <div className="dept-7-section">
                        <div className="d7-header">
                            <span className="d7-icon"><FaBookOpen /></span>
                            <h2 className="d7-title">Dept 7: Additional Studies</h2>
                        </div>

                        <div className="d7-grid">
                            <div className="d7-item">
                                <span className="d7-mini-icon">🌱</span>
                                <div>
                                    <h4 className="d7-item-title">Seerah (Detailed)</h4>
                                    <p className="d7-item-desc">Life of the Prophet ﷺ</p>
                                </div>
                            </div>
                            <div className="d7-item">
                                <span className="d7-mini-icon">🏛</span>
                                <div>
                                    <h4 className="d7-item-title">Islamic History</h4>
                                    <p className="d7-item-desc">From Caliphate to Modern Era</p>
                                </div>
                            </div>
                            <div className="d7-item">
                                <span className="d7-mini-icon">💲</span>
                                <div>
                                    <h4 className="d7-item-title">Islamic Economics</h4>
                                    <p className="d7-item-desc">Finance & Trade Ethics</p>
                                </div>
                            </div>
                            <div className="d7-item">
                                <span className="d7-mini-icon">📢</span>
                                <div>
                                    <h4 className="d7-item-title">Dawah & Outreach</h4>
                                    <p className="d7-item-desc">Methods of invitation</p>
                                </div>
                            </div>
                            <div className="d7-item">
                                <span className="d7-mini-icon">🌍</span>
                                <div>
                                    <h4 className="d7-item-title">Islam & Media</h4>
                                    <p className="d7-item-desc">Navigating modern challenges</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Syllabus;
