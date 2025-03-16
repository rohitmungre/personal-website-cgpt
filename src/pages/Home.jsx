import React from 'react';
import './Home.css';

const paragraphs = [
  "I am a quantitative software developer based in London, United Kingdom.",
  "Currently I work at Onyx Capital Group, where I can be seen programming and sometimes crunching numbers.",
  "I am a quantitative software developer based in London, United Kingdom.",
  "I am a quantitative software developer based in London, United Kingdom.",
  "I am a quantitative software developer based in London, United Kingdom.",
  "I am a quantitative software developer based in London, United Kingdom.",
  "Previously developed quantitative analytical/trading systems for an investment bank ",
  "My interests span technology, trading strategies, music, art, and cooking.",
  "I reached my peak weight (117Kgs) in Q3 2023, after which I have put conscious efforts into my health and have lost 31Kgs so far.",
  "Travelled to 17 countries so far 🌍 🇬🇧 🇫🇷 🇩🇪 🇪🇸 🇮🇹 🇺🇸 🇯🇵 🇦🇺 🇨🇦 🇳🇱 🇧🇷 🇨🇭 🇸🇪 🇦🇹 🇳🇴 🇦🇷 🇸🇬.",
  "Recently started to learn Rust and have been hooked onto it.",
  "My home setup: GitHub",
  "Social: Instagram | Facebook | GitHub | Twitter | Pinterest | Medium",
];

function Home() {
  const splitIndex = Math.floor(paragraphs.length / 3); // Adjust split dynamically for mirrored L shape
  const textRight = paragraphs.slice(0, splitIndex + 1);
  const textBelow = paragraphs.slice(splitIndex + 1);

  return (
    <div className="home-container">
      <div className="home-image">
        <img src="/images/dp.jpg" alt="Profile" className="profile-pic" />
      </div>
      <div className="home-content">
        <div className="text-wrapper">
          <div className="text-right">
            {textRight.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div className="text-below">
            {textBelow.map((text, index) => (
              <p key={index + splitIndex + 1}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
