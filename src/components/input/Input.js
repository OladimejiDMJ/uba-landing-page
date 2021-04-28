import React from "react";
import "./input.scss";

const Input = ({
  inputLabel,
  placeholder,
  name,
  id,
  inputText,
  subClass,
  type,
  inputError,
}) => {
  return (
    <>
      <div className="form-group">
        {inputLabel && <label htmlFor={id}>{inputLabel}</label>}
        <input
          type={type ? type : "text"}
          className={subClass ? `input-${subClass}` : "input"}
          placeholder={placeholder}
          name={name}
          id={id}
        >
          {inputText}
        </input>
        <span className="input-errorMsg">{inputError}</span>
      </div>
    </>
  );
};

export default Input;
