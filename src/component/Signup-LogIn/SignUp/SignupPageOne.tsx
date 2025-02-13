import React from "react";
import handleNav from "../../../utils/handleNav.ts";
import {
  DirectToSocialButton,
  PrimaryButtonMedium,
} from "../../UIElements/Button/Button.tsx";
import HaveAnAccountRedirect from "../../UIElements/HaveAnAccountRedirect.tsx";

const SignUpPageOne = (props) => {
  const { setCurrentPage } = props;

  return (
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
  );
};

export default SignUpPageOne;
