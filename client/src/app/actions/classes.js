import axios from 'axios';
import { FETCH_CLASSES } from '../constants/actionTypes';

export const fetchClasses = () => {
    return async dispatch => {
        const res = await axios.get('/api/classes');
        dispatch({ type: FETCH_CLASSES, payload: res.data });
    };
};
