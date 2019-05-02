import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from 'app/constants/actionTypes';
import setAuthToken from 'app/setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUser = (user, history) => dispatch => {
    axios
        .post('/api/users/register', user)
        .then(res => {
            history.push('/login');
        })
        .catch(err => {
            debugger;
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            });
        });
};

export const loginUser = (user, history) => dispatch => {
    axios
        .post('/api/users/login', user)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
            history.push('/');
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            });
        });
};
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
    };
};
export const logoutUser = history => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/login');
};
