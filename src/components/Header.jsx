import React from 'react';
import { Link } from 'react-router-dom';
import { Palette } from 'lucide-react';
import { Images } from 'lucide-react';
import { FcGallery } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";
import { Dumbbell } from 'lucide-react';
import { FcGlobe } from "react-icons/fc";
import { MapPinCheck } from 'lucide-react';
import { FlaskConical } from 'lucide-react';
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
            <Link to="/art" className="nav-icon">
                <Palette />
            </Link>            
            <Link to="/photos" className="nav-icon">
                <Images />
            </Link>            
            <Link to="/travel" className="nav-icon">
                <Dumbbell />
            </Link>            
            <Link to="/travel" className="nav-icon">
                <MapPinCheck />
            </Link>            
            <Link to="/travel" className="nav-icon">
                <FlaskConical />
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