import React, { useRef } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Create refs for each section
  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to the respective section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} heroRef={heroRef} galleryRef={galleryRef} aboutRef={aboutRef} contactRef={contactRef} />
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={galleryRef}>
        <Gallery />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
