import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

export const PrivateRouter = ({
  isAuthenticated,
  component: Component,
  //el resto de argumentos
  ...rest
}) => {
  localStorage.setItem("lastPath", rest.location.pathname);

  return (
    <Route
      {...rest}
      //El componente se puede llamar con este callback
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

PrivateRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
