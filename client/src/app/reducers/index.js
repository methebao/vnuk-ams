import { combineReducers } from "redux";
import authReducer from "./data/authReducer";
import classesReducer from "./data/classesReducer";
import studentsReducer from "./data/studentsReducer";
import pageReducer from "./ui/pageReducer";
import headerReducer from "./ui/headerReducer";
import eventsReducer from "./data/eventsReducer";
export default combineReducers({
  common: combineReducers({
    auth: authReducer
  }),
  commonUI: combineReducers({
    page: pageReducer,
    header: headerReducer
  }),
  homePage: combineReducers({
    data: combineReducers({
      classes: classesReducer,
      events: eventsReducer
    })
  }),
  eventPage: combineReducers({
    data: combineReducers({
      events: eventsReducer
      // TODO: Create more studentsReducer for solve problem of nested state realtional.
    })
  }),
  classPage: combineReducers({
    data: combineReducers({
      class: classesReducer,
      students: studentsReducer,
      events: eventsReducer
    })
  })
});
