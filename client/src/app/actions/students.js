import axios from 'axios';
import { FETCH_STUDENTS } from '../constants/actionTypes';

export const fetchStudents = classId => {
    return async dispatch => {
        const res = await axios.get(`/api/classes/${classId}`);
        dispatch({ type: FETCH_STUDENTS, payload: res.data });
    };
};
