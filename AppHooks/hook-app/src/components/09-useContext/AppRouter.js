import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <div className="container">
          <Switch>
            <Route path="/" component={HomeScreen} exact={true} />
            <Route path="/about" component={AboutScreen} exact />
            <Route path="/login" component={LoginScreen} exact />
            <Route component={HomeScreen} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
