import React, { Component } from "react";

export default class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.blog ? props.blog.title : "",
      text: props.blog ? props.blog.text : "",
      error: "",
    };
  }

  refreshTitle = (e) => {
    const title = e.target.value;
    this.setState(() => ({
      title,
    }));
  };
  refreshText = (e) => {
    const text = e.target.value;
    this.setState(() => ({
      text,
    }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text || !this.state.text) {
      this.setState({ error: "Please fill the all gaps" });
    } else {
      this.setState({ error: "" });
      this.props.onSubmit({
        title: this.state.title,
        text: this.state.text,
        createdDate: Date.now(),
      });
    }
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.state.error && <p className="error">{this.state.error}</p>}
        <div>
          <input
            type="text"
            placeholder="Enter title"
            value={this.state.title}
            onChange={this.refreshTitle}
          />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Enter text"
            value={this.state.text}
            onChange={this.refreshText}
          ></textarea>
        </div>
        <div>
          <button type="submit">Save Button</button>
        </div>
      </form>
    );
  }
}
