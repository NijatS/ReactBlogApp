import React from "react";

const BlogDetailItem = ({ id, title, text }) => {
  return (
    <div>
      <p>Blog Id :{id}</p>
      <p>Blog Title :{title}</p>
      <p>Blog Text :{text}</p>
    </div>
  );
};

export default BlogDetailItem;
