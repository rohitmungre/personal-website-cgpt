import { useState, useEffect } from "react";
import { Buffer } from "buffer";
import matter from "gray-matter";

// Ensure Buffer is available in the browser
if (!window.Buffer) {
  window.Buffer = Buffer;
}

const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const files = [
          "blog1.md", "blog2.md", "blog3.md", "blog4.md", "blog5.md",
          "blog6.md", "blog7.md", "blog8.md", "blog9.md", "blog10.md"
        ];

        const blogData = await Promise.all(
          files.map(async (file) => {
            const res = await fetch(`/content/blog/${file}`);
            const text = await res.text();
            const { data } = matter(text);
            return { ...data, slug: file.replace(".md", "") };
          })
        );

        const sortedBlogs = blogData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlogs(sortedBlogs);
        setLoading(false);
      } catch (err) {
        setError("Failed to load blogs.");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs, loading, error };
};

export default useFetchBlogs;
