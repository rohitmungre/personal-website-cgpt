import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    // Simulating fetching markdown files metadata
    setPosts([
      { slug: "react-hooks", title: "Exploring React Hooks", date: "2025-03-10", tags: ["React", "Hooks"] },
      { slug: "js-closures", title: "Understanding JavaScript Closures", date: "2025-03-05", tags: ["JavaScript", "Closures"] }
    ]);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {currentPosts.map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link> - {post.date} ({post.tags.join(", ")})
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div>
        {currentPage > 1 && <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>}
        {indexOfLastPost < posts.length && <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>}
      </div>
    </div>
  );
}

export default Blog;
