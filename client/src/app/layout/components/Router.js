import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../routes/home/Home';
import Login from '../../routes/login/Login';
import Register from '../../routes/register/Register';
const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
    </Switch>
);
export default Router;
