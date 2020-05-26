import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ManageCategories from "../components/categories/ManageCategories";
import ManageUrls from "../components/urls/ManageUrls";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={ManageUrls} />
      <Route path="/categories" exact component={ManageCategories} />
    </Switch>
  </Router>
);
