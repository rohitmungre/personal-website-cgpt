import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // GitHub-Flavored Markdown (Tables, Strikethrough, etc.)
import matter from 'gray-matter';
import './BlogPost.css';

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const res = await fetch(`/content/blog/${slug}.md`);
        if (!res.ok) throw new Error(`Failed to load ${slug}.md`);

        const text = await res.text();
        const { data, content } = matter(text);
        setPost({ ...data, content });
      } catch (error) {
        console.error("Error loading blog post:", error);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (!post) return <p className="loading-text">Loading...</p>;

  return (
    <div className="blog-post-container">
      <h1 className="blog-title">{post.title}</h1>
      <p className="blog-meta">
        {post.date ? new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : "No Date"} |  
        <span className="blog-tags">
          {(post.tags || []).map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </span>
      </p>
      <div className="blog-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default BlogPost;
