import React from "react";
import "../style/enterData.scss";
export const EnterData = ({
  width = "auto",
  margin = "0 0 0 0",
  title,
  type,
  placeholder,
}) => {
  return (
    <div style={{ width: width, margin: margin }} className="enterData">
      <h2 className="enterData__title">{title}</h2>
      <input
        className="enterData__input"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
