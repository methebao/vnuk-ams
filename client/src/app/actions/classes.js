import { actionTypes } from "../constants";
import { APIClient } from "services/APIClient";

export const fetchClassesPerPage = (pageNo, pageSize) => async dispatch => {
  dispatch({
    type: actionTypes.GET_CLASSES_BEGIN
  });
  try {
    const res = await APIClient.getClassesPerPage(pageNo, pageSize);
    const { classes, pages } = res.data;
    dispatch({
      type: actionTypes.GET_CLASSES_SUCCESS,
      payload: {
        data: classes,
        pages
      }
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CLASSES_FAILURE,
      payload: {
        error
      }
    });
  }
};
export const fetchClassById = classId => async dispatch => {
  dispatch({
    type: actionTypes.GET_CLASSES_BEGIN
  });
  try {
    const { data } = await APIClient.getClassById(classId);
    debugger;
    dispatch({
      type: actionTypes.GET_CLASSES_SUCCESS,
      payload: {
        data
      }
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CLASSES_FAILURE,
      payload: {
        error
      }
    });
  }
};
