import { SET_CURRENT_USER_SUCCESS } from '../../constants/actionTypes';
import isEmpty from '../../validation/isEmpty';

const initialState = {
    isAuthenticated: false,
    user: {},
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload,
            };

        default:
            return state;
    }
}
