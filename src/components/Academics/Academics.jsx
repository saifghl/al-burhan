import React from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaBookOpen, FaPenNib } from 'react-icons/fa';
import heroImg from '../../assets/academics1.png';
import './Academics.css';

const Academics = () => {
    return (
        <div className="academics-page">
            {/* Hero Section */}
            <div className="academics-hero" style={{ backgroundImage: `url(${heroImg})` }}>
                <div className="academics-hero-overlay">
                    <div className="academics-hero-content">
                        <span className="academics-hero-top-label">Excellence in Education</span>
                        <h1 className="academics-hero-title">Academics at Al-Burhan</h1>
                        <p className="academics-hero-subtitle">
                            Nurturing Minds, Cultivating Faith. A comprehensive approach blending traditional wisdom of the Dars-e-Nizami with modern academic excellence.
                        </p>
                        <div className="academics-hero-buttons">
                            <Link to="/academics/syllabus" className="academics-btn-download">
                                <FaDownload /> Download Syllabus
                            </Link>
                            <button className="academics-btn-admissions">Admissions</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="academics-content-container">

                {/* Curriculum Overview */}
                <div className="overview-section">
                    <div className="overview-header-group">
                        <div className="green-bar-marker"></div>
                        <div className="overview-titles">
                            <h2 className="overview-main-title">Curriculum Overview</h2>
                            <p className="overview-subtitle">Bridging Tradition and Modernity</p>
                        </div>
                    </div>


                    <p className="overview-text">
                        Our curriculum is meticulously designed to develop students who are deeply grounded in Islamic knowledge while being academically competent in modern disciplines. By integrating classical Islamic education with contemporary learning standards, we ensure our students grow intellectually, spiritually, and ethically. This balanced approach enables students to confidently navigate the modern world with strong faith, critical thinking, and moral integrity.
                    </p>
                </div>

                {/* Initial Subject Cards (Restored & Fixed) */}
                <div className="academics-intro-cards-grid">
                    {/* Card 1 */}
                    <div className="academics-intro-card">
                        <div className="academics-icon-circle green-light-bg">
                            <FaBookOpen className="academics-icon green-icon" />
                        </div>
                        <h3 className="academics-card-title">Islamic studies</h3>
                        <p className="academics-card-desc">
                            A deep dive into the sacred sciences including Tafseer (Exegesis), Hadith (Prophetic Traditions), Fiqh (Jurisprudence), and classical Arabic literature to build a strong theological foundation.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="academics-intro-card">
                        <div className="academics-icon-circle blue-light-bg">
                            <FaPenNib className="academics-icon blue-icon" />
                        </div>
                        <h3 className="academics-card-title">Urdu Language</h3>
                        <p className="academics-card-desc">
                            This department helps students understand and express Islamic knowledge through correct Urdu language, grammar, and literary skills.
                        </p>
                    </div>
                </div>



                {/* Subjects Offered Section */}
                <div className="academics-section-centered">
                    <h2 className="academics-main-title">Subjects Offered</h2>
                    <p className="academics-section-subtitle">
                        A diverse range of subjects ensuring holistic development for every student
                    </p>
                </div>

                <div className="academics-subjects-grid">
                    <div className="academics-subject-card">
                        <div className="academics-icon-circle green-light-bg">
                            <FaBookOpen className="academics-icon green-icon" />
                        </div>
                        <h3 className="academics-card-title">Islamic Studies</h3>
                        <p className="academics-card-desc">
                            This department focuses on imparting authentic knowledge of the Qur'an and Sunnah while strengthening faith, character, and understanding of Islamic law.
                        </p>
                    </div>

                    <div className="academics-subject-card">
                        <div className="academics-icon-circle green-light-bg">
                            <FaPenNib className="academics-icon green-icon" />
                        </div>
                        <h3 className="academics-card-title">Arabic Language & Literature</h3>
                        <p className="academics-card-desc">
                            Islamic Studies focuses on imparting authentic knowledge of the Qur'an, Hadith, Fiqh, and Islamic beliefs to build strong faith, understanding, and character.
                        </p>
                    </div>

                    <div className="academics-subject-card">
                        <div className="academics-icon-circle green-light-bg">
                            <FaPenNib className="academics-icon green-icon" />
                        </div>
                        <h3 className="academics-card-title">Urdu Language</h3>
                        <p className="academics-card-desc">
                            This department helps students understand and express Islamic knowledge through correct Urdu language, grammar, and literary skills.
                        </p>
                    </div>

                    <div className="academics-subject-card">
                        <div className="academics-icon-circle green-light-bg">
                            <FaBookOpen className="academics-icon green-icon" />
                        </div>
                        <h3 className="academics-card-title">Special Courses</h3>
                        <p className="academics-card-desc">
                            Special Courses are designed to address specific spiritual, educational, and practical needs, offering focused Islamic learning for women, girls, and personal development.
                        </p>
                    </div>

                    <div className="academics-subject-card">
                        <div className="academics-icon-circle green-light-bg">
                            <FaPenNib className="academics-icon green-icon" />
                        </div>
                        <h3 className="academics-card-title">Alimiyyah / Dars-e-Nizami</h3>
                        <p className="academics-card-desc">
                            Alimiyyah / Dars-e-Nizami is a comprehensive, traditional Islamic scholarship program that develops deep expertise in Arabic, Tafseer, Hadith, Fiqh, and Islamic sciences.
                        </p>
                    </div>

                    <div className="academics-subject-card">
                        <div className="academics-icon-circle green-light-bg">
                            <FaBookOpen className="academics-icon green-icon" />
                        </div>
                        <h3 className="academics-card-title">Specialization Programs (Post-Alimiyyah)</h3>
                        <p className="academics-card-desc">
                            Specialization Programs (Post-Alimiyyah) offer advanced, focused training in Qur'an, Hadith, or Fiqh for scholars seeking subject-matter mastery and research excellence.
                        </p>
                    </div>

                    <div className="academics-subject-card card-span-center">
                        <div className="academics-icon-circle green-light-bg">
                            <FaPenNib className="academics-icon green-icon" />
                        </div>
                        <h3 className="academics-card-title">Additional Islamic Studies & Urdu</h3>
                        <p className="academics-card-desc">
                            Additional Islamic Studies & Urdu focuses on Islamic history, Seerah, contemporary issues, and strengthening Urdu language skills for effective understanding, communication, and outreach.
                        </p>
                    </div>
                </div>

                {/* Methodology & Languages Split Section */}
                <div className="academics-split-section">
                    {/* Teaching Methodology */}
                    <div className="academics-methodology">
                        <h2 className="academics-section-title">Teaching Methodology</h2>
                        <p className="academics-section-desc">Our educational philosophy revolves around three core pillars designed to nurture the whole student.</p>

                        <div className="academics-timeline">
                            <div className="academics-timeline-item">
                                <div className="timeline-marker">1</div>
                                <div className="timeline-content">
                                    <h4 className="timeline-title">Ta'leem (Knowledge)</h4>
                                    <p className="timeline-text">Imparting authentic knowledge through structured curriculum and expert instruction.</p>
                                </div>
                            </div>
                            <div className="academics-timeline-item">
                                <div className="timeline-marker">2</div>
                                <div className="timeline-content">
                                    <h4 className="timeline-title">Tarbiyah (Training)</h4>
                                    <p className="timeline-text">Character building and spiritual development through mentorship and environment.</p>
                                </div>
                            </div>
                            <div className="academics-timeline-item">
                                <div className="timeline-marker">3</div>
                                <div className="timeline-content">
                                    <h4 className="timeline-title">Tatbeeq (Application)</h4>
                                    <p className="timeline-text">Encouraging students to apply their knowledge in daily life and community service.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Languages of Instruction */}
                    <div className="academics-languages">
                        <h2 className="academics-section-title">Languages of Instruction</h2>
                        <p className="academics-section-desc">We ensure our students are linguistically proficient to access global knowledge and connect with their heritage.</p>

                        <div className="academics-lang-list">
                            <div className="academics-lang-card lang-en">
                                <span className="lang-code">EN</span>
                                <div className="lang-info">
                                    <h4 className="lang-title">English (Global)</h4>
                                    <p className="lang-text">Medium for modern sciences & international communication.</p>
                                </div>
                            </div>
                            <div className="academics-lang-card lang-ur">
                                <span className="lang-code-green">UR</span>
                                <div className="lang-info">
                                    <h4 className="lang-title">Urdu (Cultural)</h4>
                                    <p className="lang-text">Connecting students with regional scholarly heritage.</p>
                                </div>
                            </div>
                            <div className="academics-lang-card lang-ar">
                                <span className="lang-code-gold">AR</span>
                                <div className="lang-info">
                                    <h4 className="lang-title">Arabic (Sacred)</h4>
                                    <p className="lang-text">Special emphasis on Arabic grammar and vocabulary to enable direct understanding of Quranic and classical Islamic texts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Academics;
