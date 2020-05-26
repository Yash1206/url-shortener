import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ManageCategories from "../components/categories/ManageCategories";
import ManageUrls from "../components/urls/ManageUrls";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={ManageUrls} />
      <Route path="/categories" exact component={ManageCategories} />
    </Switch>
  </Router>
);
