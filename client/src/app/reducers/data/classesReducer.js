import { actionTypes } from 'app/constants';

const initialState = {
    isFetching: false,
    data: null,
    pages: null,
    fetchError: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CLASSES_BEGIN: {
            return {
                ...state,
                isFetching: true,
            };
        }
        case actionTypes.GET_CLASSES_SUCCESS: {
            const { data, pages } = action.payload;
            return {
                ...state,
                data,
                pages,
                fetchError: null,
                isFetching: false,
            };
        }
        case actionTypes.GET_CLASSES_FAILURE: {
            const { error: fetchError } = action.payload;

            return {
                ...state,
                fetchError,
                isFetching: false,
            };
        }
        default: {
            return state;
        }
    }
};
