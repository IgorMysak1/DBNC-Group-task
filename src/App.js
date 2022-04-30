import React, { useState } from "react";
import { Header } from "./components/Header";
import { ListOfWords } from "./components/ListOfWords";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [listOfRhyme, setListOfRhyme] = useState([{ word: "Start search" }]);
  return (
    <div className="App">
      <Header
        inputValue={inputValue}
        setInputValue={setInputValue}
        setListOfRhyme={setListOfRhyme}
      />
      <ListOfWords listOfRhyme={listOfRhyme} inputValue={inputValue} />
    </div>
  );
}

export default App;
