import React, { Component } from "react";

export default class BlogForm extends Component {
  state = {
    title: "",
    text: "",
  };
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
  render() {
    return (
      <form>
        <div>
          <input
            type="text"
            placeholder="Enter title"
            onChange={this.refreshTitle}
          />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Enter text"
            onChange={this.refreshText}
          ></textarea>
        </div>
        <div>
          <button>Save Button</button>
        </div>
      </form>
    );
  }
}
