// packages
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, path }) => {
  const isConnected = useSelector((state) => state.user.isConnected);  

  return (
    <Route
      path={path}
      render={
        ({ location }) => (
          isConnected
            ? children
            : (
              <Redirect
                to={{
                  pathname: '/connexion',
                  state: { from: location },
                }}
              />
            )
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;
