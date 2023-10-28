import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogListItem = ({ id, title }) => {
  return (
    <>
      <li>
        {title}-<Link to={`/blogs/${id}`}>Detail Page</Link>
      </li>
    </>
  );
};

export default BlogListItem;
