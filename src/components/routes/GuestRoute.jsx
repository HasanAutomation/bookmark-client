import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

function GuestRoute({ children, ...rest }) {
  const { isLoggedIn } = useSelector(state => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isLoggedIn ? (
          <Redirect
            to={{
              pathname: '/bookmarks',
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
}

export default GuestRoute;
