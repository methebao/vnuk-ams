import { actionTypes } from "../constants";

export const locationChange = () => dispatch => {
  dispatch({
    type: actionTypes.LOCATION_CHANGE
  });
};
