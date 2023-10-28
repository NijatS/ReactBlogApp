import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <h1>Blog App</h1>
      <NavLink to="/" exact activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/blogs" exact activeClassName="active">
        Blogs
      </NavLink>
      <NavLink to="/blogs/create" activeClassName="active">
        New
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>
    </header>
  );
};

export default Header;
