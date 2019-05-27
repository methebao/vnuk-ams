import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import jwt_decode from 'jwt-decode';
import './styles/main.scss';
import '@fortawesome/fontawesome-free/js/all';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';

import Layout from './app/layout/Layout';
import setAuthToken from './app/setAuthToken';
import { logoutUser, setCurrentUser } from './app/actions/authentication';

// FETCH CURRENT USER & TOKEN TIMEOUT
if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = '/login';
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Layout />
        </Router>
    </Provider>,
    document.getElementById('root'),
);
