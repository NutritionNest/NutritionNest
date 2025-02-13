import React, { useState, useEffect } from "react";
import handleNav from "../../utils/handleNav.ts";
import {
  BackChevronButton,
  DirectToSocialButton,
  PrimaryButtonMedium,
} from "../UIElements/Button/Button.tsx";
import HaveAnAccountRedirect from "../UIElements/HaveAnAccountRedirect.tsx";

const SignUpPageOne = (props) => {
  const { setCurrentPage } = props;

  return (
    <div style={{ margin: "60px auto 0 auto", maxWidth: "340px" }}>
      <BackChevronButton setCurrentPage={setCurrentPage} route="welcome" />
      <div className="primary-heading-text-large">Welcome to NutritionNest</div>
      <div style={{ marginTop: "10px" }} className="inter-text-light ">
        Create an account to get started
      </div>

      <div className="signup-button-container">
        <div className="socials-button-container">
          <DirectToSocialButton text="Sign up with Apple" icon="apple" />
          <DirectToSocialButton text="Sign up with Google" icon="google" />
          <DirectToSocialButton text="Sign up with Facebook" icon="facebook" />
          <PrimaryButtonMedium
            handleClick={handleNav(setCurrentPage, "signup2")}
            text="Sign up with email"
          />
          <HaveAnAccountRedirect setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </div>
  );
};

export default SignUpPageOne;
