import React from "react";
import { CrossIcon } from "../Icons/index.tsx";

export const TextInput = ({
  value,
  handleChange,
  name,
  type,
  placeholder,
  label = "",
  error = { condition: null, errorText: "" },
}) => {
  const showError = !error.condition && error.condition !== null;
  return (
    <div>
      {label && <label for={label} />}
      <input
        className={`input-primary ${showError ? "input-error-border" : ""}`}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      {showError && (
        <div className="input-error-container">
          <CrossIcon />
          <span className="input-error-text">
            {showError ? error.errorText : ""}
          </span>
        </div>
      )}
    </div>
  );
};
