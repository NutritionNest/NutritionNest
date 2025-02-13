import React from "react";
import { TextInput } from "../../UIElements/Input/TextInput.tsx";
import {
  DirectToSocialButton,
  PrimaryButtonMedium,
} from "../../UIElements/Button/Button.tsx";
import handleNav from "../../../utils/handleNav.ts";

const LogInPage = (props) => {
  const { setCurrentPage } = props;

  return (
    <div className="login-form-container">
      <form className="login-form">
        <TextInput name="email" type="email" placeholder="Email" />
        <TextInput name="password" type="password" placeholder="Password" />
      </form>
      <PrimaryButtonMedium
        handleClick={handleNav(setCurrentPage, "placeholder")}
        text="Log in"
      />

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
