import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Reports from "./pages/reports/Reports";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/reports">
          <Reports />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
