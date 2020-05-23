import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "../components/List";
import CategoryForm from "../components/CategoryForm";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={List} />
      <Route path="/manage-categories" exact component={CategoryForm} />
    </Switch>
  </Router>
);
