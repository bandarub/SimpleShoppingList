// Reusable component
import React from "react";

const Button = (props) => {
  const { title, name, className, type, disabled, buttonType } = props;

  let buttonClass = ["button"];

  if (className) {
    buttonClass.push(className);
  }
 const  _onClick = (e) => {
    const { onClick } = props;
    if (onClick && typeof onClick === "function") {
		onClick();
    }
  };
  if (buttonType) {
    buttonClass.push(buttonType);
  }

  return (
    <button
      className={buttonClass.join(" ")}
      onClick={_onClick}
      type={type}
      disabled={disabled}
      name={name}
    >
      {title}
    </button>
  );
};

export default Button;
