import { actionTypes } from "app/constants";

const initialState = {
  isFetching: false,
  data: null,
  fetchError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOCATION_CHANGE: {
      return initialState;
    }
    case actionTypes.GET_EVENTS_BEGIN: {
      return {
        ...state,
        isFetching: true
      };
    }
    case actionTypes.GET_EVENTS_SUCCESS: {
      const { data } = action.payload;

      return {
        ...state,
        data: data,
        fetchError: null,
        isFetching: false
      };
    }
    case actionTypes.GET_EVENTS_FAILURE: {
      const { error: fetchError } = action.payload;

      return {
        ...state,
        fetchError,
        isFetching: false
      };
    }

    case actionTypes.UPDATE_EVENT_BEGIN: {
      return {
        ...state,
        isFetching: true
      };
    }
    case actionTypes.UPDATE_EVENT_SUCCESS: {
      const { data: newEvent } = action.payload;

      return {
        ...state,
        data: state.data.map(item => {
          if (item._id === newEvent.id) {
            item = newEvent;
          }
          return item;
        }),
        fetchError: null,
        isFetching: false
      };
    }
    case actionTypes.UPDATE_EVENT_FAILURE: {
      const { error: fetchError } = action.payload;

      return {
        ...state,
        fetchError,
        isFetching: false
      };
    }
    case actionTypes.STUDENT_CHECK_TOOGLE_SUCCESS: {
      const { data: userId } = action.payload;
      debugger;
      return {
        data: {
          ...state.data,
          students: state.data.students.map(student => {
            if (student.user._id === userId) {
              return { ...student, isChecked: !student.isChecked };
            }
            return student;
          })
        },
        fetchError: null,
        isFetching: false
      };
    }
    default: {
      return state;
    }
  }
};
