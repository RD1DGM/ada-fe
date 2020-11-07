import React, { Fragment } from "react";
import { mapDataByID } from "../../utils";

function TitleConnections({ connections, isSelected, nodes, isLoading }) {
  return (
    <>
      {connections.map((connection, idx) => {
        return (
          <Fragment key={idx}>
            {isSelected && !isLoading && (
              <div className="title_connection">
                <span>{mapDataByID(nodes)[connection]}</span>
              </div>
            )}
          </Fragment>
        );
      })}
    </>
  );
}

export default TitleConnections;
