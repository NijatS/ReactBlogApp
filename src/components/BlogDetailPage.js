import React from "react";
import { connect } from "react-redux";
import BlogDetailItem from "./BlogDetailtem";

const BlogDetailPage = ({ blog }) => {
  return <BlogDetailItem {...blog} />;
};

const mapStateToProps = (state, props) => {
  return {
    blog: state.blogs.find((blog) => {
      return blog.id === props.match.params.id;
    }),
  };
};

export default connect(mapStateToProps)(BlogDetailPage);
