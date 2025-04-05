import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetchBlogs from "../hooks/useFetchBlogs";
import { Buffer } from 'buffer';
import './Blogs.css'; // Import the CSS file

// Ensure Buffer is available in the browser
if (!window.Buffer) {
  window.Buffer = Buffer;
}

function Blogs() {
  const { blogs, loading, error } = useFetchBlogs();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(null); // null = All Tags
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Apply tag filtering as well
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === null || (blog.tags && blog.tags.includes(selectedTag));
    return matchesSearch && matchesTag;
  });

   // Get unique tags from blogs
   const allTags = [...new Set(blogs.flatMap(blog => blog.tags || []))];

   // Group Blogs by Year
   const blogsByYear = filteredBlogs.reduce((acc, blog) => {
     const year = new Date(blog.date).getFullYear();
     if (!acc[year]) acc[year] = [];
     acc[year].push(blog);
     return acc;
   }, {});

  return (
    <div className="blogs-container">
      
      {/* Tag Filter as Pills */}
      <div className="tag-list">
        <span 
          className={`tag-pill ${selectedTag === null ? "active" : ""}`} 
          onClick={() => setSelectedTag(null)}
        >
          All Tags
        </span>
        {allTags.map(tag => (
          <span 
            key={tag} 
            className={`tag-pill ${selectedTag === tag ? "active" : ""}`} 
            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Search Input */}
      <input 
        type="text" 
        placeholder="Search by title..." 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      {/* Blogs Display */}
      {Object.keys(blogsByYear).sort((a, b) => b - a).map(year => (
        <div key={year}>
          <h2 className="year-heading">{year}</h2>
          <table className="blog-table uniform-table">
            <tbody>
              {blogsByYear[year].map((blog, index) => (
                <tr key={index}>
                  <td className="left-align">{blog.date ? 
                    new Date(blog.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) 
                    : "No Date"}
                  </td>
                  <td className="left-align">
                    <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </td>
                  <td className="left-align">
                    <div className="tags-container">
                      {(blog.tags || []).map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
