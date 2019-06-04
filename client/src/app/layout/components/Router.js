import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'app/routes/home';
import Login from 'app/routes/login';
import Register from 'app/routes/register';
import Class from 'app/routes/class';
import Event from 'app/routes/event';
import { ROUTES } from 'app/constants';
import Dashboard from 'app/routes/dashboard';
const Router = () => (
    <Switch>
        <Route exact path={ROUTES.HOMEPAGE} component={Home} />
        <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <Route exact path={ROUTES.REGISTER} component={Register} />
        <Route exact path={ROUTES.CLASS_BY_ID} component={Class} />
        <Route exact path={ROUTES.EVENT_BY_ID} component={Event} />
    </Switch>
);
export default Router;
