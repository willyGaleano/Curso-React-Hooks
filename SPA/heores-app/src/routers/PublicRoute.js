import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  //el resto de argumentos
  ...rest
}) => {
  return (
    <Route
      {...rest}
      //El componente se puede llamar con este callback
      component={(props) =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  );
};

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
