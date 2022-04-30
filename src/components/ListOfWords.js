import React from "react";
import "../style/listOfWords.css";
export const ListOfWords = ({ listOfRhyme, inputValue }) => {
  return (
    <div className="rhymeWords">
      {listOfRhyme.length
        ? listOfRhyme.map((word) => (
            <div className="rhymeWords__word" key={word.word}>
              {word.word}
            </div>
          ))
        : `The word ${inputValue} has no rhyme`}
    </div>
  );
};
