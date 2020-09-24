import React from "react";
import "./InputBox.css";

export function InputBox({ children, ...otherProps }) {
  console.log("props", otherProps);
  return (
    <div className="input-container">
      {children}
      <input {...otherProps} value="Hey ho" />
    </div>
  );
}
