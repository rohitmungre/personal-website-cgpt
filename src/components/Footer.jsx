import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-container">
        <div className="footer-left">&copy; {new Date().getFullYear()} Rohit Mungre</div>
        <div className="footer-right">Crafting code & coffee ☕</div>
      </nav>
    </footer>
  );
}

export default Footer;
