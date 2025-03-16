import React from 'react';

function Home() {
  return (
    <div>
      <h1>Software Developer / Tinkerer</h1>
      <p>Introduction section...</p>
      <div className="brands">{/* Brand logos here */}</div>
      <div className="recent-blogs">
        <h2>Recent Blogs</h2>
        <p><a href="/blog">See all blogs</a></p>
      </div>
    </div>
  );
}

export default Home;