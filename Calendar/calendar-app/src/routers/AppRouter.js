import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { startChecking } from "../actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  return (
    <div>
      <Router>
        <div>
          <Switch>
            <PublicRouter
              exact
              path="/login"
              component={LoginScreen}
              // supongamos que uid llega vacio, entonces si lo negamos !uid nos resulta false
              // pero si no es vacio al negarlo dos veces !!uid no restornara true
              isAuthenticated={!!uid}
            />
            <PrivateRouter
              exact
              path="/"
              component={CalendarScreen}
              isAuthenticated={!!uid}
            />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
