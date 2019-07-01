const withTargetDispatch = (dispatchAction, target) => async dispatch => {
  const targetedDispatch = action => {
    const updatedAction = action;
    updatedAction.target = target;

    return dispatch(updatedAction);
  };

  return dispatchAction(targetedDispatch);
};

export const withTarget = (actionCreator, target) => (...args) => {
  const result = actionCreator.apply(this, args);

  if (typeof result === "object") {
    result.target = target;

    return result;
  } else if (typeof result === "function") {
    return withTargetDispatch(result, target);
  }

  return result;
};

export default withTarget;
