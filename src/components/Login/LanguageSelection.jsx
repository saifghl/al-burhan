import React, { useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import englishImg from '../../assets/english.png'; // Updated image import
import './Login.css'; // Utilizing shared Login styles

const LanguageSelection = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    return (
        <div className="login-page">
            <div className="language-selection-container">
                <div className="navbar-simple">
                    {/* Logo would go here if needed, design shows simple header */}
                    <span className="help-text">Help</span>
                </div>

                <div className="content-wrapper">
                    <h1 className="welcome-heading">
                        Welcome / <span className="urdu-text">خوش آمدید</span>
                    </h1>
                    <p className="welcome-subtext">Please select your preferred language to continue setting up your account.</p>

                    <div className="language-cards-row">
                        {/* English Card */}
                        <div
                            className={`language-card ${selectedLanguage === 'English' ? 'active' : ''}`}
                            onClick={() => setSelectedLanguage('English')}
                        >
                            <img src={englishImg} alt="English" className="lang-bg-img" />
                            {/* Overlay Content */}
                            <div className="lang-content">
                                <span className="lang-label">English</span>
                                {selectedLanguage === 'English' && <BsCheckCircleFill className="check-icon" />}
                            </div>
                        </div>

                        {/* Urdu Card */}
                        <div
                            className={`language-card ${selectedLanguage === 'Urdu' ? 'active' : ''}`}
                            onClick={() => setSelectedLanguage('Urdu')}
                        >
                            <img src={englishImg} alt="Urdu" className="lang-bg-img" />
                            {/* Overlay Content */}
                            <div className="lang-content">
                                <span className="lang-label urdu-label">اردو</span>
                                {selectedLanguage === 'Urdu' && <BsCheckCircleFill className="check-icon" />}
                            </div>
                        </div>
                    </div>

                    <button className="btn-next">Next &rarr;</button>
                    <p className="skip-link">Skip for now</p>
                </div>
            </div>
        </div>
    );
};

export default LanguageSelection;
