import { FETCH_CLASSES } from '../constants/actionTypes';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_CLASSES:
            return action.payload || [];
        default:
            return state;
    }
}
