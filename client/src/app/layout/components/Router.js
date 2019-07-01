import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { locationChange } from "app/actions/helperAction";

import Landing from "app/routes/landing";
import Home from "app/routes/home";
import Login from "app/routes/login";
import Register from "app/routes/register";
import Class from "app/routes/class";
import Event from "app/routes/event";
import { ROUTES } from "app/constants";
import Dashboard from "app/routes/dashboard";
import withAuthorization from "app/hoc/withAuthorization";

const Router = ({ locationChange }) => (
  <Switch>
    <Route
      exact
      path={ROUTES.LANDING}
      render={props => {
        locationChange();

        return <Landing {...props} />;
      }}
    />
    <Route
      exact
      path={ROUTES.HOMEPAGE}
      render={props => {
        locationChange();
        const AuthHome = withAuthorization(Home);
        return <AuthHome {...props} />;
      }}
    />
    <Route
      exact
      path={ROUTES.DASHBOARD}
      render={props => {
        locationChange();
        const AuthDashboard = withAuthorization(Dashboard);
        return <AuthDashboard {...props} />;
      }}
    />
    <Route
      exact
      path={ROUTES.LOGIN}
      render={props => {
        locationChange();

        return <Login {...props} />;
      }}
    />
    <Route
      exact
      path={ROUTES.REGISTER}
      render={props => {
        locationChange();

        return <Register {...props} />;
      }}
    />
    <Route
      exact
      path={ROUTES.CLASS_BY_ID}
      render={props => {
        locationChange();
        const AuthClass = withAuthorization(Class);
        return <AuthClass {...props} />;
      }}
    />
    <Route
      exact
      path={ROUTES.EVENT_BY_ID}
      render={props => {
        locationChange();
        const AuthEvent = withAuthorization(Event);
        return <AuthEvent {...props} />;
      }}
    />
  </Switch>
);
export default connect(
  null,
  { locationChange }
)(Router);
