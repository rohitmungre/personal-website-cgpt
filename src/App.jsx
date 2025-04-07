import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import BlogPost from './pages/BlogPost.jsx';
import About from './pages/About.jsx';
import { MantineProvider } from '@mantine/core';
import Travel from './pages/Travel.jsx';
import Photos from './pages/Photos.jsx';
import Art from './pages/Art.jsx';
import ArtPage from './pages/ArtPage.jsx';
import Labs from './pages/Labs.jsx';
import PhotoPage from './pages/PhotoPage.jsx';
import Projects from './pages/Projects.jsx';
import Fitness from './pages/Fitness.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ThemeProvider>
        <Router>
          <div className="app">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/travel" element={<Travel />} />
                <Route path="/art" element={<Art />} />
                <Route path="/art/:filename" element={<ArtPage />} />
                <Route path="/photos" element={<Photos />} />
                <Route path="/photo/:filename" element={<PhotoPage />} />
                <Route path="/blog" element={<Blogs />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/fitness" element={<Fitness />} />
                <Route path="/labs" element={<Labs />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </MantineProvider>
  );
}

export default App;
