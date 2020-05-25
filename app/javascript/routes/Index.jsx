import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "../components/List";
import ManageCategories from "../components/ManageCategories";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={List} />
      <Route path="/manage-categories" exact component={ManageCategories} />
    </Switch>
  </Router>
);
