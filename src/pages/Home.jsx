import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  // Sample blog post data
  const blogPosts = [
    { id: 1, title: "Understanding Quantitative Trading", date: "March 10, 2025" },
    { id: 2, title: "Building Scalable Analytical Systems", date: "March 5, 2025" },
    { id: 3, title: "Music and Technology: An Intersection", date: "February 28, 2025" },
    { id: 4, title: "Cooking as a Creative Process", date: "February 20, 2025" },
    { id: 5, title: "Exploring Art Through Sketching", date: "February 15, 2025" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <div className="home-container">
      <div className="home-content">
        {/* Profile Image */}
        <div className="image-container">
          <img
            src="/images/dp.jpg" // Direct reference from public folder
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
        <h3>Recent Blog Posts</h3>
        <table className="blog-table">
        <colgroup>
          <col style={{ width: "85%" }} />
          <col style={{ width: "15%" }} />
        </colgroup>
          <tbody>
            {blogPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage).map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination Controls */}
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span> Page {currentPage} of {totalPages} </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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
