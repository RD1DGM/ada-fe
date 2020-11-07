import { FETCH_VARIABLES, HAS_ERRORS, IS_LOADING } from "../actions/types";

const initialState = {
  variables: [],
  isLoading: true,
  hasErrors: "",
};

const variablesReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: action.payload.loading };
    case HAS_ERRORS:
      return { ...state, hasErrors: action.payload.hasErrors };
    case FETCH_VARIABLES: {
      return { ...state, variables: action.payload.variables };
    }
    default:
      return state;
  }
};

export default variablesReducer;
