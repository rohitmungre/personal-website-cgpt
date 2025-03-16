import React from 'react';
import { Link } from 'react-router-dom';

const blogs = [
  { slug: "react-hooks", title: "Exploring React Hooks", date: "2025-03-10", tags: ["React", "Hooks"] },
  { slug: "js-closures", title: "Understanding JavaScript Closures", date: "2025-03-05", tags: ["JavaScript", "Closures"] }
];

function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.slug}>
            <Link to={`/blog/${blog.slug}`}>{blog.title}</Link> - {blog.date} ({blog.tags.join(', ')})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;