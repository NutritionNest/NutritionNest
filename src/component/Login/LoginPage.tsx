import React from "react";
import { TextInput } from "../UIElements/Input/TextInput.tsx";
import {
  BackChevronButton,
  DirectToSocialButton,
  PrimaryButtonMedium,
} from "../UIElements/Button/Button.tsx";
import handleNav from "../../utils/handleNav.ts";

const LoginPage = (props) => {
  const { setCurrentPage } = props;

  return (
    <div style={{ margin: "60px auto 0 auto", maxWidth: "340px" }}>
      <BackChevronButton setCurrentPage={setCurrentPage} route="welcome" />
      <div className="primary-heading-text-large">Welcome Back</div>
      <div className="inter-text-light" style={{ marginTop: "10px" }}>
        Log in with the email and password of your NutritionNest account.
      </div>

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
    </div>
  );
};
export default LoginPage;
