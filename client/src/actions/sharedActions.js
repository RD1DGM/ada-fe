import { IS_LOADING, HAS_ERRORS } from "./types";

// ACTION CREATORS
const _isLoading = (isLoading) => {
  return {
    type: IS_LOADING,
    payload: {
      isLoading,
    },
  };
};

const _hasErrors = (err) => {
  return {
    type: HAS_ERRORS,
    payload: {
      hasErrors: err,
    },
  };
};

// ASYNC THUNKS
export const _fetch = (url, _action, options = {}) => async (dispatch) => {
  dispatch(_isLoading(true));
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    dispatch(_action(data));
    dispatch(_isLoading(false));
  } catch (err) {
    dispatch(_hasErrors(err));
    dispatch(_isLoading(false));
  }
};
