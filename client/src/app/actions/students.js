import { actionTypes } from '../constants';
import { APIClient } from 'services/APIClient';

export const fetchStudents = classId => async dispatch => {
    dispatch({
        type: actionTypes.GET_STUDENTS_BEGIN,
    });
    try {
        const res = await APIClient.getStudentsByClassId(classId);

        dispatch({
            type: actionTypes.GET_STUDENTS_SUCCESS,
            payload: {
                data: res.data,
            },
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_STUDENTS_FAILURE,
            payload: {
                error,
            },
        });
    }
};
