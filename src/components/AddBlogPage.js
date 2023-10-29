import React from "react";
import BlogFrom from "./BlogForm";
import { connect } from "react-redux";
import { addBlog } from "../actions/blogs";

const AddBlogPage = (props) => {
  return (
    <div>
      Add Blog
      <BlogFrom
        onSubmit={(blog) => {
          props.dispatch(addBlog(blog));
          props.history.push("/blogs");
        }}
      />
    </div>
  );
};

export default connect()(AddBlogPage);
