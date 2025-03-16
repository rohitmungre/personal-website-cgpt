import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Buffer } from 'buffer';
import matter from 'gray-matter';

// Ensure Buffer is available in the browser
if (!window.Buffer) {
  window.Buffer = Buffer;
}

function Blogs() {
  const [blogs, setBlogs] = useState([]);

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
            console.log("Blog Metadata:", data);
            console.log("Blog Metadata text:", text);            
            return { ...data, slug: file.replace('.md', '') };
          })
        );

        setBlogs(blogData.sort((a, b) => new Date(b.date) - new Date(a.date)));
      } catch (error) {
        console.error("Error fetching blog files:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blogs-container">
      <h1>Blog Posts</h1>
      <table className="blog-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr key={index}>
              <td>{new Date(blog.date).toLocaleDateString()}</td>
              <td>
                <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
              </td>
              <td>{(blog.tags || []).join(', ')}</td> {/* Fix: Ensures tags is always an array */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Blogs;
