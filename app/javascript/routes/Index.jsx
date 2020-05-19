import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "../components/List";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={List} />
    </Switch>
  </Router>
);
