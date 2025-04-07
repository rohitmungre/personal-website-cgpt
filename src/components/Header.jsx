import React from 'react';
import { Link } from 'react-router-dom';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { Palette } from 'lucide-react';
import { Images } from 'lucide-react';
import CollectionsIcon from '@mui/icons-material/Collections';
import { FcGallery } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";
import { Dumbbell } from 'lucide-react';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { FcGlobe } from "react-icons/fc";
import ExploreIcon from '@mui/icons-material/Explore';
import { MapPinCheck } from 'lucide-react';
import { FlaskConical } from 'lucide-react';
import ScienceIcon from '@mui/icons-material/Science';
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
                <ColorLensIcon />
            </Link>            
            <Link to="/photos" className="nav-icon">
                <CollectionsIcon />
            </Link>            
            <Link to="/fitness" className="nav-icon">
                <FitnessCenterIcon />
            </Link>            
            <Link to="/travel" className="nav-icon">
                <ExploreIcon />
            </Link>            
            <Link to="/travel" className="nav-icon">
                <ScienceIcon />
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