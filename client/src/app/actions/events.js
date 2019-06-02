import { actionTypes } from '../constants';
import { APIClient } from 'services/APIClient';

export const fetchEvents = () => async dispatch => {
    dispatch({
        type: actionTypes.GET_EVENTS_BEGIN,
    });
    try {
        debugger;
        const { data } = await APIClient.getEvents();
        debugger;
        dispatch({
            type: actionTypes.GET_EVENTS_SUCCESS,
            payload: {
                data,
            },
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_EVENTS_FAILURE,
            payload: {
                error,
            },
        });
    }
};
