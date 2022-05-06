import React, { useState } from "react";
import { SearchRhyme } from "../components/SearchRhyme";
import { ListOfWords } from "../components/ListOfWords";
import "../style/task.scss";
export const Task5 = () => {
  const [inputValue, setInputValue] = useState("");
  const [listOfRhyme, setListOfRhyme] = useState([
    { word: "Start search and look on words with rhyme" },
  ]);
  return (
    <div className="task">
      <h1>Task 5</h1>
      <SearchRhyme
        inputValue={inputValue}
        setInputValue={setInputValue}
        setListOfRhyme={setListOfRhyme}
      />
      <ListOfWords listOfRhyme={listOfRhyme} inputValue={inputValue} />
    </div>
  );
};
