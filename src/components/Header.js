import React from "react";
import axios from "axios";
import "../style/header.css";
export const Header = ({ inputValue, setInputValue, setListOfRhyme }) => {
  const searchRhymeWords = async () => {
    const response = await axios.get(
      `https://api.datamuse.com/words?rel_rhy=${inputValue}`
    );
    // console.log(response.data);
    setListOfRhyme(response.data);
  };

  return (
    <div className="header">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && searchRhymeWords()}
      />
      <button className="header__search" onClick={searchRhymeWords}>
        Click
      </button>
    </div>
  );
};
