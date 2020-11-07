import React, { Fragment } from "react";
import { textHighlighter } from "../../utils";

function TextHighlight({ text, searchedInput }) {
  return (
    <>
      {textHighlighter(text, searchedInput).map((word, idx) => {
        return (
          <Fragment key={idx}>
            <span
              style={
                word.toLowerCase() === searchedInput.toLowerCase()
                  ? {
                      backgroundColor: "pink",
                    }
                  : {}
              }
            >
              {word}
            </span>
          </Fragment>
        );
      })}
    </>
  );
}

export default TextHighlight;
