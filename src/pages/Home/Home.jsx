import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-section">
                <h1>Welcome to Al Burhan</h1>
                <p>Empowering Education, Building the Future.</p>
                <button className="cta-button">Learn More</button>
            </div>
            {/* Add more sections here as needed */}
        </div>
    );
};

export default Home;
