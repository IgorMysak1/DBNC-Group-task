import React from "react";
import "../style/rhymeWords.scss";
export const ListOfWords = ({ listOfRhyme, inputValue }) => {
  return (
    <div className="rhymeWords">
      {listOfRhyme.length ? (
        listOfRhyme.map((word) => (
          <div className="rhymeWords__word" key={word.word}>
            {word.word}
          </div>
        ))
      ) : (
        <span>`The word ${inputValue} has no rhyme`</span>
      )}
    </div>
  );
};
