import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Buffer } from 'buffer';
import matter from 'gray-matter';
import './Blogs.css'; // Import the CSS file

// Ensure Buffer is available in the browser
if (!window.Buffer) {
  window.Buffer = Buffer;
}

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(null); // null = All Tags

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Manually listing markdown files (Since browser cannot list files in public/)
        const files = [
          'blog1.md', 'blog2.md', 'blog3.md', 'blog4.md', 'blog5.md',
          'blog6.md', 'blog7.md', 'blog8.md', 'blog9.md', 'blog10.md'
        ];

        const blogData = await Promise.all(
          files.map(async (file) => {
            const res = await fetch(`/content/blog/${file}`);
            const text = await res.text();
            const { data } = matter(text);
            return { ...data, slug: file.replace('.md', '') };
          })
        );

        const sortedBlogs = blogData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlogs(sortedBlogs);
        setFilteredBlogs(sortedBlogs);
      } catch (error) {
        console.error("Error fetching blog files:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Get unique tags from blogs
  const allTags = [...new Set(blogs.flatMap(blog => blog.tags || []))];

  // Filter blogs when tag or search query changes
  useEffect(() => {
    let filtered = blogs.filter(blog => 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (selectedTag) {
      filtered = filtered.filter(blog => blog.tags.includes(selectedTag));
    }

    setFilteredBlogs(filtered);
  }, [searchQuery, selectedTag, blogs]);

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
