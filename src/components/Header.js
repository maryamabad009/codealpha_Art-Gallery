import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../store/searchSlice';
import './Header.css';
import { FaSearch, FaBars } from 'react-icons/fa'; 
import logo from '../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Header = ({ scrollToSection, heroRef, galleryRef, aboutRef, contactRef }) => {
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Gallery Logo" className="logo-image" />
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={() => scrollToSection(heroRef)}><a href="#hero">Home</a></li>
          <li onClick={() => scrollToSection(galleryRef)}><a href="#gallery">Gallery</a></li>
          <li onClick={() => scrollToSection(aboutRef)}><a href="#about">About</a></li>
          <li onClick={() => scrollToSection(contactRef)}><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="search-container">
        <div className="search-icon" onClick={toggleSearch}>
          <FaSearch />
        </div>
        <div className={`search-bar ${showSearch ? 'show' : ''}`}>
          <input
            type="text"
            placeholder="Search images..."
            onChange={handleSearchChange}
            onBlur={() => setShowSearch(false)} 
          />
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <FaBars />
      </div>
    </header>
  );
};

export default Header;
