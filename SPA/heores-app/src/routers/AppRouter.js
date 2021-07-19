import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoute } from "./DashboardRoute";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={user.logged}
          />
          {/* Si protejo esta ruta protejo lo demas */}
          <PrivateRouter
            path="/"
            component={DashboardRoute}
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  );
};
