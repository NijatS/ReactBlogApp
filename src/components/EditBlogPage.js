import React from "react";
import BlogFrom from "./BlogForm";
import { connect } from "react-redux";
import { editBlog } from "../actions/blogs";

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
