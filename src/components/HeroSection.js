import React from 'react';
import './HeroSection.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'animate.css'; // Import Animate.css
import backgroundImage from '../images/background.png'; // Adjust the path to your image

const HeroSection = () => {
  return (
    <section 
      className="hero-section" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-content animate__animated animate__fadeIn"> {/* Add animation classes */}
        <h2>Welcome to the Image Gallery</h2>
        <p>Unleash your creativity with our stunning visual collection!</p>
        <button className="cta-button">Explore Gallery</button>
      </div>
    </section>
  );
};

export default HeroSection;
