import React from "react";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import BlogListPage from "../components/BlogListPage";
import BlogDetailPage from "../components/BlogDetailPage";
import ContactPage from "../components/ContactPage";
import NotFoundPage from "../components/NotFoundPage";
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
        <Route component={BlogListPage} path="/blogs" exact />
        <Route component={BlogDetailPage} path="/blogs/:id" />
        <Route component={ContactPage} path="/contact" />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
