import React, { Fragment } from "react";
import {
  hasVariable,
  mapDataByID,
  getFallback,
  getVariable,
} from "../../utils";
import TextHighlight from "../shared/TextHighlight";

function ContentCards({ node, variables, prevSearchedInput }) {
  return (
    <>
      <div className="content_title">
        <TextHighlight text={node.title} searchedInput={prevSearchedInput} />
      </div>
      {node.content.map((content, idx) => {
        return (
          <div className="card_body" key={idx}>
            <div className="card_type">
              <TextHighlight
                text={content.type}
                searchedInput={prevSearchedInput}
              />
            </div>
            {content.type === "image" ? (
              <img src={content.url} alt="wiki-img" className="card_img" />
            ) : (
              <div className="card_text_field">
                {content.body.split(" ").map((word, idx) => {
                  return (
                    <Fragment key={idx}>
                      {hasVariable(word) ? (
                        <span className="card_text variable">
                          <TextHighlight
                            text={
                              mapDataByID(variables)[getVariable(word)] ||
                              getFallback(word)
                            }
                            searchedInput={prevSearchedInput}
                          />
                        </span>
                      ) : (
                        <span className="card_text">
                          <TextHighlight
                            text={word}
                            searchedInput={prevSearchedInput}
                          />
                        </span>
                      )}
                    </Fragment>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

export default ContentCards;
