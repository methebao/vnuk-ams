import { actionTypes } from '../constants';
import { APIClient } from 'services/APIClient';

export const fetchEvents = () => async dispatch => {
    dispatch({
        type: actionTypes.GET_EVENTS_BEGIN,
    });
    try {
        const { data } = await APIClient.getEvents();
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
export const fetchEventById = eventId => async dispatch => {
    dispatch({
        type: actionTypes.GET_EVENTS_BEGIN,
    });
    try {
        const { data } = await APIClient.getEventById(eventId);
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
