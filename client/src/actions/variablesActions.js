import { FETCH_VARIABLES } from "./types";
import { _fetch } from "./sharedActions";

const _fetchVariables = (variables) => {
  return {
    type: FETCH_VARIABLES,
    payload: {
      variables,
    },
  };
};

export const fetchVariables = (url) => {
  return _fetch(url, _fetchVariables);
};
