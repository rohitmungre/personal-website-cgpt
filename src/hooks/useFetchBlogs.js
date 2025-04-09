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
    const baseUrl = import.meta.env.BASE_URL || './';

    const fetchBlogs = async () => {
      try {
        // Fetch the manifest file to get the list of .md files
        const manifestRes = await fetch(`${baseUrl}content/blog/manifest.json`);
        const files = await manifestRes.json();

        const blogData = await Promise.all(
          files.map(async (file) => {
            const res = await fetch(`${baseUrl}content/blog/${file}`);
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
