import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import classesReducer from './classesReducer';
import studentsReducer from './studentsReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    classes: classesReducer,
    students: studentsReducer,
});
