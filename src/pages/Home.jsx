import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetchBlogs from "../hooks/useFetchBlogs";
import { Buffer } from "buffer";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaPinterest } from 'react-icons/fa';
import matter from "gray-matter";
import "./Home.css";

// Ensure Buffer is available in the browser
if (!window.Buffer) {
  window.Buffer = Buffer;
}

const Home = () => {
  const { blogs, loading, error } = useFetchBlogs();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const totalPages = Math.ceil(blogs.length / postsPerPage);

  // Slice blogs based on currentPage and postsPerPage
  const displayedBlogs = blogs.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="home-container">
      <div className="home-content">
        {/* Profile Image */}
        <div className="image-container">
          <img
            src="/images/dp.jpg"
            alt="Profile"
            className="profile-image"
          />

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://twitter.com/rohitmungre" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} color="#1DA1F2" style={{ margin: '15px 5px' }} /></a>
            <a href="https://linkedin.com/in/rohitmungre" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} color="#0A66C2" style={{ margin: '15px 5px' }} /></a>
            <a href="https://github.com/rohitmungre" target="_blank" rel="noopener noreferrer"><FaGithub size={30} 
            color={document.body.getAttribute('data-theme') === 'dark' ? '#f0f0f0' : '#333'} 
            style={{ margin: '15px 5px' }} /></a>
            <a href="https://pinterest.com/rohitmungre" target="_blank" rel="noopener noreferrer"><FaPinterest size={30} color="#E60023" style={{ margin: '15px 5px' }} /></a>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-content">
          <h3 className="welcome-title">Hi, there!</h3>
          <p>
            I’m a quantitative software developer based in London, United Kingdom. 
            <br />
            This space is where I share my thoughts, insights and work through blog posts covering a range of topics that interest me — including 
            technology, business, investing, art, and life.
          </p>
          <p>
            Over the past 13 years, I have designed and built quantitative/analytical systems across various industries, including 
            investment banking, hedge funds, commodity trading, and gaming. I also like to keep upto date with latest technological, business and economical developments.
          </p>
          <p>
            Outside of work, I’m passionate about fitness, cooking, sports, music, and art. 
            I started taking my health seriously in late 2023 and have lost 31 kilograms so far. 
            I’m also trained in Indian classical music — I don’t sing as much these days, 
            but I still love exploring different genres of music. 
            </p>
        </div>
      </div>

      {/* Blog Post Table */}
      <div className="blog-section">
        <h3>Articles</h3>
        <table className="blog-table">
          <colgroup>
            <col style={{ width: "85%" }} />
            <col style={{ width: "15%" }} />
          </colgroup>
          <tbody>
            {displayedBlogs.map((post, index) => (
              <tr key={index} style={{ marginBottom: '50px' }}>
                <td>
                  <Link to={`/blog/${post.slug}`} className="blog-link">
                    {post.title}
                  </Link>
                </td>
                <td>
                  {post.date ? new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : "No Date"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Pagination Controls */}
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span> Page {currentPage} of {totalPages} </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
