import React from "react";
import "../style/form.scss";
import { EnterData } from "./EnterData";
export const Form = () => {
  return (
    <div className="form">
      <div className="form__items">
        <EnterData
          width="100%"
          title="Your given name:"
          type="text"
          placeholder="John Doe"
        />
      </div>
      <div className="form__items">
        <EnterData
          width="40%"
          title="Date of Birth"
          type="date"
          // value="2018-07-22"
        />
        <EnterData
          width="60%"
          margin="0 0 0 20px"
          title="Country of residence or citizenship:"
          type="text"
          placeholder="Canada"
        />
      </div>
      <div className="form__items">
        <EnterData
          width="100%"
          title="What school do you plan to attend?"
          type="text"
          placeholder="University of British Columbia"
        />
      </div>
      <div className="form__items form__textarea">
        <textarea placeholder="Enter details here"></textarea>
      </div>
    </div>
  );
};
