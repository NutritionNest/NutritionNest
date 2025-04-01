import React, { useState } from "react";
import { TextInput } from "../../UIElements/Input/TextInput.tsx";
import {
  DirectToSocialButton,
  PrimaryButtonMedium,
} from "../../UIElements/Button/Button.tsx";
import handleNav from "../../../utils/handleNav.ts";

const LogInPage = (props) => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [loginErrors, setlLoginErrors] = useState({});
  const [hasCredentialError, setHasCredentialError] = useState(false);
  const { setCurrentPage } = props;
  const handleChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  // TODO: clean up error logic, there is redundancy in the code

  const validateLogin = () => {
    const errorObj: any = {};
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail(loginFormData.email)) {
      errorObj.email = "Please enter a valid email address";
    }
    if (loginFormData.password.length === 0) {
      errorObj.password = "Please enter a valid password";
    }
    setlLoginErrors(errorObj);
    return Object.keys(errorObj).length === 0; // Returns true if no errors
  };

  const loginProvider = () => {
    const isValidCredentials =
      loginFormData.email === "admin@admin.com" &&
      loginFormData.password === "admin";
    if (!isValidCredentials) {
      setHasCredentialError(isValidCredentials); // Set error state based on credentials
      setlLoginErrors({ password: "Incorrect email or password" });
    }
    return isValidCredentials; // Return whether credentials are valid
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission

    const isValid = validateLogin(); // Validate the form inputs

    if (isValid) {
      const correctCredentials = loginProvider(); // Check if credentials are correct
      if (correctCredentials) {
        // If credentials are valid, navigate to the placeholder page
        handleNav(setCurrentPage, "placeholder")();
      } else {
        // If credentials are invalid, show an error
        setlLoginErrors((prev) => ({
          ...prev,
          general: "Incorrect email or password",
        }));
      }
    } else if (!isValid) {
      setlLoginErrors((prev) => ({
        ...prev,
        general: "Incorrect email or password",
      }));
    } else {
      setlLoginErrors((prev) => ({
        ...prev,
        general: "Something went wrong, please try again later",
      }));
    }
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleLogin}>
        <TextInput
          name="email"
          type="email"
          placeholder="Email"
          value={loginFormData.email}
          handleChange={handleChange}
          error={loginErrors.email && { errorText: loginErrors.email }}
        />
        <TextInput
          name="password"
          type="password"
          placeholder="Password"
          value={loginFormData.password}
          handleChange={handleChange}
          error={loginErrors.password && { errorText: loginErrors.password }}
        />
        <PrimaryButtonMedium handleClick={handleLogin} text="Log in" />
      </form>

      <div className="or-divider-container">
        <hr className="divider-line" />
        <div className="or-text">or</div>
        <hr className="divider-line" />
      </div>

      <div className="socials-button-container">
        <DirectToSocialButton text="Continue with Apple" icon="apple" />
        <DirectToSocialButton text="Continue with Google" icon="google" />
        <DirectToSocialButton text="Continue with Facebook" icon="facebook" />
      </div>
    </div>
  );
};

export default LogInPage;
