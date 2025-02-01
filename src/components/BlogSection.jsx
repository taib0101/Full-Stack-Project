import React from 'react';

export const BlogSection = ({ blogs }) => {
  return (
    <div className="blog-section">
      <h2>Blogs</h2>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};
