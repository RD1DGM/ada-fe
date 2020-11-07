import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContentCards from "./ContentCards";
import { fetchVariables } from "../../actions/variablesActions";

function MainContent() {
  const {
    nodesByID: [node],
    prevSearchedInput,
    hasErrors,
  } = useSelector(({ nodesReducer }) => nodesReducer);
  const { variables } = useSelector(({ variablesReducer }) => variablesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!variables.length) {
      dispatch(fetchVariables("http://localhost:5000/variables"));
    }
  }, [dispatch, variables]);

  return (
    <div className="main_content_container">
      {!node ? (
        <>
          {hasErrors ? (
            <span className="error_section">500 Internal Server Error</span>
          ) : (
            <span className="no_data_section">No data to show</span>
          )}
        </>
      ) : (
        <ContentCards
          node={node}
          variables={variables}
          prevSearchedInput={prevSearchedInput}
        />
      )}
    </div>
  );
}

export default MainContent;
