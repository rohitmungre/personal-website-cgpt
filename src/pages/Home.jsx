import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetchBlogs from "../hooks/useFetchBlogs";
import { Buffer } from "buffer";
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
        </div>

        {/* Text Content */}
        <div className="text-content">
          <h3 className="welcome-title">Welcome!</h3>
          <p>
            I’m a <strong>quantitative software developer</strong> based in <strong>London, United Kingdom</strong>. 
            This space is where I share my thoughts and insights through blog posts, covering a mix of topics—including 
            <strong>technology, trading strategies, music, art, and cooking</strong>.
          </p>
          <p>
            I have designed and built <strong>quantitative/analytical systems</strong> across various industries, including 
            investment banking, hedge funds, commodity trading, and gaming.
          </p>
        </div>
      </div>

      {/* Blog Post Table */}
      <div className="blog-section">
        <h3>Recent Blogs</h3>
        <table className="blog-table">
          <colgroup>
            <col style={{ width: "85%" }} />
            <col style={{ width: "15%" }} />
          </colgroup>
          <tbody>
            {displayedBlogs.map((post, index) => (
              <tr key={index}>
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
