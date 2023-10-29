import React from "react";
import BlogFrom from "./BlogForm";
import { connect } from "react-redux";
import { editBlog, removeBlog } from "../actions/blogs";

const EditBlogPage = (props) => {
  return (
    <div>
      Edit Blog
      <BlogFrom
        blog={props.blog}
        onSubmit={(blog) => {
          props.dispatch(editBlog(props.blog.id, blog));
          props.history.push("/blogs");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeBlog(props.blog.id));
          props.history.push("/blogs");
        }}
      >
        Delete
      </button>
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    blog: state.blogs.find((blog) => {
      return blog.id === props.match.params.id;
    }),
  };
};

export default connect(mapStateToProps)(EditBlogPage);
