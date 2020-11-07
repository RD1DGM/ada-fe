import {
  FETCH_NODES,
  FETCH_NODES_BY_ID,
  HAS_ERRORS,
  IS_LOADING,
  SELECT_NODE,
  SEARCH_ANSWERS,
  SEARCH_INPUT,
  PREV_SEARCHED_INPUT,
} from "../actions/types";

const initialState = {
  nodes: [],
  nodesByID: [],
  answers: [],
  isLoading: true,
  nodeID: null,
  searchInput: "",
  prevSearchedInput: "",
  hasErrors: "",
};

const nodesReducers = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: action.payload.isLoading };
    case FETCH_NODES:
      return { ...state, nodes: action.payload.nodes };
    case FETCH_NODES_BY_ID:
      return { ...state, nodesByID: action.payload.nodesByID };
    case HAS_ERRORS:
      return { ...state, hasErrors: action.payload.hasErrors };
    case SELECT_NODE:
      return { ...state, nodeID: action.payload.nodeID };
    case SEARCH_ANSWERS:
      return { ...state, answers: action.payload.answers };
    case SEARCH_INPUT:
      return { ...state, searchInput: action.payload.searchInput };
    case PREV_SEARCHED_INPUT:
      return { ...state, prevSearchedInput: action.payload.prevSearchedInput };
    default:
      return state;
  }
};

export default nodesReducers;
