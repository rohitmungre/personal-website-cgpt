import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-image">
        <img src="/images/dp.jpg" alt="Profile" className="profile-pic" />
      </div>
      <div className="home-content">
        <h3>Hi there!</h3>
        <p>I am a quantitative software developer based in London, United Kingdom.</p>
        <p>My interests span technology, trading strategies, music, art, and cooking.</p>
        <p>I reached my peak weight (117Kgs) in Q3 2023, after which I have put conscious efforts into my health and have lost 31Kgs so far.</p>
        <p>Travelled to 17 countries so far 🌍 🇬🇧 🇫🇷 🇩🇪 🇪🇸 🇮🇹 🇺🇸 🇯🇵 🇦🇺 🇨🇦 🇳🇱 🇧🇷 🇨🇭 🇸🇪 🇦🇹 🇳🇴 🇦🇷 🇸🇬</p>
        <p>Recently started to learn Rust and have been hooked onto it.</p>
        <p>My home setup: <a href="https://github.com/yourusername" target="_blank">GitHub</a></p>
        <p>Social: 
          <a href="https://instagram.com/yourhandle" target="_blank">Instagram</a> | 
          <a href="https://facebook.com/yourhandle" target="_blank">Facebook</a> | 
          <a href="https://github.com/yourhandle" target="_blank">GitHub</a> | 
          <a href="https://twitter.com/yourhandle" target="_blank">Twitter</a> | 
          <a href="https://pinterest.com/yourhandle" target="_blank">Pinterest</a> | 
          <a href="https://medium.com/@yourhandle" target="_blank">Medium</a>
        </p>
      </div>
    </div>
  );
}

export default Home;
