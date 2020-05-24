import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "../components/List";
// import CategoryForm from "../components/CategoryForm";
import SingleCategory from "../components/SingleCategory";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={List} />
      <Route path="/manage-categories" exact component={SingleCategory} />
    </Switch>
  </Router>
);
