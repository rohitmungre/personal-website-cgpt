import React from 'react';
import { Link } from 'react-router-dom';
import { FcGallery } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import ThemeToggle from './ThemeToggle.jsx';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-left">
          <Link to="/">Rohit Mungre</Link>
        </div>
        <div className="nav-center">
            <Link to="/photos" className="nav-icon">
                <FcGallery />
            </Link>            
            <Link to="/travel" className="nav-icon">
                <FcSportsMode />
            </Link>            
            <Link to="/travel" className="nav-icon">
                <FcGlobe />
            </Link>            
        </div>
        <div className="nav-right">
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;