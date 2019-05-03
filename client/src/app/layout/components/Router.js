import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'app/routes/home/Home';
import Login from 'app/routes/login/Login';
import Register from 'app/routes/register/Register';
import Class from 'app/routes/class/Class';
const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/class/:classId" component={Class} />
    </Switch>
);
export default Router;
