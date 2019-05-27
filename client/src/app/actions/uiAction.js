import { actionTypes } from '../constants';

export const changePage = page => dispatch => {
    dispatch({
        type: actionTypes.CHANGE_PAGE,
        page,
    });
};

export const setHeaderTitle = title => dispatch => {
    dispatch({
        type: actionTypes.SET_HEADER_TITLE,
        payload: {
            title,
        },
    });
};
