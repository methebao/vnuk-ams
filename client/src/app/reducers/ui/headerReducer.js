import { SET_HEADER_TITLE } from 'app/constants/actionTypes';

const initialState = {
    title: 'Title',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_HEADER_TITLE:
            const { title } = action.payload;
            return {
                ...state,
                title,
            };
        default:
            return state;
    }
};
