import {
  FETCH_NODES,
  FETCH_NODES_BY_ID,
  SELECT_NODE,
  SEARCH_ANSWERS,
  SEARCH_INPUT,
  PREV_SEARCHED_INPUT,
} from "./types";
import { _fetch } from "./sharedActions";

// ACTION CREATORS
const _fetchNodes = (nodes) => {
  return {
    type: FETCH_NODES,
    payload: {
      nodes,
    },
  };
};

const _fetchNodesById = (nodesByID) => {
  return {
    type: FETCH_NODES_BY_ID,
    payload: {
      nodesByID,
    },
  };
};

const _searchAnswers = (answers) => {
  return {
    type: SEARCH_ANSWERS,
    payload: {
      answers,
    },
  };
};

export const _prevSearchedInput = (input) => {
  return {
    type: PREV_SEARCHED_INPUT,
    payload: {
      prevSearchedInput: input,
    },
  };
};

export const _searchInput = (searchInput) => {
  return {
    type: SEARCH_INPUT,
    payload: {
      searchInput,
    },
  };
};

export const _selectNode = (nodeID) => {
  return {
    type: SELECT_NODE,
    payload: {
      nodeID,
    },
  };
};

export const fetchNodes = (url) => {
  return _fetch(url, _fetchNodes);
};

export const fetchNodesById = (url, id) => {
  return _fetch(`${url}/${id}`, _fetchNodesById);
};

export const searchAnswers = (url, query) => {
  return _fetch(url, _searchAnswers, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
};
