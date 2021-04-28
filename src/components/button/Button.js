import React from "react";
import "./button.scss";

const Button = ({ buttonText, buttonClass, buttonType, icon }) => {
  return (
    <>
      {buttonType ? (
        <div className="form-submit">
          <button
            type={buttonType}
            className={buttonClass ? `button-${buttonClass}` : "button"}
          >
            <span className="button-text">{buttonText}</span>
            {icon && <span className="button-icon">{icon}</span>}
          </button>
        </div>
      ) : (
        <button className={buttonClass ? `button-${buttonClass}` : "button"}>
          <span className="button-text">{buttonText}</span>
          {icon && <span className="button-icon">{icon}</span>}
        </button>
      )}
    </>
  );
};

export default Button;
