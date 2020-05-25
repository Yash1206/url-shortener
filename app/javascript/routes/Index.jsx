import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ManageCategories from "../components/categories/ManageCategories";
import List from "../components/urls/List";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={List} />
      <Route path="/manage-categories" exact component={ManageCategories} />
    </Switch>
  </Router>
);
