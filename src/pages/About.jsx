import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="experience-container">
      <div className="experience-section">
        <p>
          Over the past 13 years, I have developed expertise in building quantitative and analytical systems across industries including investment banking, hedge funds, commodity trading, and gaming. My work has involved designing pricing models, creating high-performance trading systems, integrating real-time data, and building scalable microservices-based platforms. I have deployed and managed applications on Kubernetes and enhanced observability using Grafana, Prometheus, and Loki.
        </p>
        <p>
          At Onyx Capital Group, I designed pricing models, built trading & risk management systems, and architected scalable microservices for an OTC trading platform. Additionally, I implemented statistical outlier detection frameworks and enhanced observability systems.
        </p>
        <p>
          During my tenure at Squarepoint Capital, I led the development of a quantitative analytical library for fixed income instruments,
          generating various kinds of yield curves and pricing fixed income instruments like bonds, swaps etc.
        </p>
        <p>
          While working with Deutsche Bank, I spearheaded quantitative development for Corporate Bank solutions managing over 100 Billion EUR worth of current accounts, implemented analytics for liquidity stress methodology, and built tools for efficient risk management.
        </p>
        <p>
          My early experience at Bwin.Party Digital Entertainment involved developing backend systems for real-time multiplayer gaming, enhancing bonus systems, and ensuring seamless data processing.
        </p>
        <h2>Education</h2>
        <p>
          Master of Technology (Information & Communication Technology) - Indian Institute of Technology, Delhi (2008 – 2013)
          <br />
          Bachelor of Technology (Electrical Engineering) - Indian Institute of Technology, Delhi (2008 – 2013)
        </p>
        <h2>Achievements</h2>
        <ul>
          <li>Published U.S. patent titled "Visual Descriptors Based Video Quality Assessment Using Outlier Model" (USPTO Publication No. US20150078654 A1, March 19, 2015)</li>
          <li>Received Gold Medal at Indian National Physics Olympiad 2008, awarded to top 25 students in India</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
