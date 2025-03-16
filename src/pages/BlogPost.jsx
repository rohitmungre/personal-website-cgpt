import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { slug } = useParams();
  return (
    <div>
      <h1>{slug.replace('-', ' ')}</h1>
      <p>Date: Some Date</p>
      <p>Tags: Some Tags</p>
      <p>Blog content...</p>
    </div>
  );
}

export default BlogPost;