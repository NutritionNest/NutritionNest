import React, { useState } from "react";
import {
  CrossIcon,
  PasswordHiddenIcon,
  PasswordVisibleIcon,
} from "../Icons/index.tsx";

export const TextInput = ({
  value,
  handleChange,
  name,
  type,
  placeholder,
  label = "",
  error = { condition: null, errorText: "" },
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const showError = !error.condition && error.condition !== null;
  const isPasswordTypeInput = name.toLowerCase().includes("password");

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {label && <label htmlFor={label} />}
      <div className="input-bar-wrapper">
        <input
          className={`input-primary ${showError ? "input-error-border" : ""}`}
          value={value}
          name={name}
          type={
            isPasswordTypeInput ? (showPassword ? "password" : "text") : type
          }
          placeholder={placeholder}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {isPasswordTypeInput && (
          <div className="show-password-input-container">
            <label
              htmlFor="password-visibile"
              style={{ cursor: "pointer" }}
              onClick={handleShowPassword}
            >
              {showPassword ? <PasswordHiddenIcon /> : <PasswordVisibleIcon />}
            </label>
            <input
              className="password-visible-input"
              name="password-visibile"
              type="checkbox"
              onClick={handleShowPassword}
            />
          </div>
        )}
      </div>
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
