import React from "react";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import BlogPage from "../components/BlogPage";
import BlogDetailPage from "../components/BlogDetailPage";
import ContactPage from "../components/ContactPage";
import NotFoundPage from "../components/NotFoundPage";
import AddBlogPage from "../components/AddBlogPage";

import {
  Route,
  BrowserRouter,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={BlogPage} path="/blogs" exact />
        <Route component={AddBlogPage} path="/blogs/create" exact />
        <Route component={BlogDetailPage} path="/blogs/:id" exact />
        <Route component={ContactPage} path="/contact" />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
