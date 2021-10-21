// packages
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, path, admin }) => {
  const isConnected = useSelector((state) => state.user.isConnected);
  const role = useSelector((state) => state.user.role);
  
  /**
   * 
   * This Private route is to make a double protection for admin pannel. 
   * On navigation if you are not employee, you don't see dashboard page. 
   * But to prevent the direct link, we protect the path too.
   * 
   */
  if(admin){
    return (
      <Route
        path={path}
        render={
          ({ location }) => (
            (isConnected && role === "employee")
              ? children
              : (
                <Redirect
                  to={{
                    pathname: '/',
                    state: { from: location },
                  }}
                />
              )
          )
        }
      />
    );
  }

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
