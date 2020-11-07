import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNodes,
  fetchNodesById,
  _selectNode,
  _searchInput,
  searchAnswers,
  _prevSearchedInput,
} from "../../actions/nodesActions";
import Titles from "./Titles";
import SearchInput from "./SearchInput";

function SideBar() {
  const {
    nodes,
    nodesByID: [node],
    nodeID,
    searchInput,
    answers,
    prevSearchedInput,
    isLoading,
  } = useSelector(({ nodesReducer }) => nodesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!nodes.length) {
      dispatch(fetchNodes("http://localhost:5000/nodes"));
    }
  }, [dispatch, nodes]);

  const getContentByID = (id) => {
    dispatch(fetchNodesById("http://localhost:5000/nodes", id));
  };

  const getSearchedAnswers = (input) => {
    dispatch(searchAnswers("http://localhost:5000/nodes/search", input));
  };

  const selectNode = (id) => {
    dispatch(_selectNode(id));
  };

  const setSearchInput = (input) => {
    dispatch(_searchInput(input));
  };

  const setPrevSearchedInput = (input) => {
    dispatch(_prevSearchedInput(input));
  };

  return (
    <div className="sidebar_container">
      <SearchInput
        getSearchedAnswers={getSearchedAnswers}
        setSearchInput={setSearchInput}
        searchInput={searchInput}
        setPrevSearchedInput={setPrevSearchedInput}
        answers={answers}
        node={node}
        prevSearchedInput={prevSearchedInput}
      />
      <Titles
        nodes={nodes}
        getContentByID={getContentByID}
        selectNode={selectNode}
        selectedID={nodeID}
        connections={node ? node.connections : null}
        isLoading={isLoading}
      />
    </div>
  );
}

export default SideBar;
