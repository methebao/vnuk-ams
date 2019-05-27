import { CHANGE_PAGE } from 'app/constants/actionTypes';

export default (state = 1, action) => {
    switch (action.type) {
        case CHANGE_PAGE:
            debugger;
            return action.page;
        default:
            return state;
    }
};
