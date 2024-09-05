import React from 'react';
import './About.css';
import artImage from '../images/back-view.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="heading-container">
        <div className="heading-line"></div>
        <h1 className="about-heading">About Our Gallery</h1>
        <div className="heading-line"></div>
      </div>
      <div className="content-container">
        <div className="introduction">
          <h2>Introduction</h2>
          <p>
            Welcome to our gallery! We showcase a collection of stunning images that capture the beauty of the world around us. Our purpose is to provide an inspiring platform for art and photography enthusiasts to explore and enjoy.
          </p>
          <h2>Mission Statement</h2>
          <p>
            Our mission is to curate and present captivating visual stories through our gallery. We aim to inspire creativity, appreciation for art, and connect people through the power of imagery.
          </p>
        </div>
        <div className="art-image-container">
          <img src={artImage} alt="Art" className="art-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
