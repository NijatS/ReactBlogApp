import React from "react";
import { connect } from "react-redux";
import BlogListItem from "./BlogListItem";

const BlogList = (props) => {
  return (
    <div>
      {props.blogs.map((blog) => {
        return <BlogListItem {...blog} key={blog.id} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};

export default connect(mapStateToProps)(BlogList);
