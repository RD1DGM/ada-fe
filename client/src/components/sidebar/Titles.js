import React, { Fragment } from "react";
import TitleConnections from "./TitleConnections";

function Titles({
  nodes,
  getContentByID,
  connections,
  selectNode,
  selectedID,
  isLoading,
}) {
  return (
    <div className="titles_section">
      {nodes &&
        nodes.map((node) => {
          const isSelected = node.id === selectedID;
          return (
            <Fragment key={node.id}>
              <button
                onClick={() => {
                  getContentByID(node.id);
                  selectNode(node.id);
                }}
                className={isSelected ? "title_cell bordered" : "title_cell"}
              >
                <span style={isSelected ? { fontWeight: 600 } : {}}>
                  {node.title}
                </span>
              </button>
              {connections && (
                <Fragment>
                  <TitleConnections
                    connections={connections}
                    isSelected={isSelected}
                    nodes={nodes}
                    isLoading={isLoading}
                  />
                </Fragment>
              )}
            </Fragment>
          );
        })}
    </div>
  );
}

export default Titles;
