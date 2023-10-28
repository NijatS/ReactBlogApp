import React from "react";

const BlogDetailPage = ({ match }) => {
  return <div>Blog Detail Page :{match.params.id}</div>;
};

export default BlogDetailPage;
