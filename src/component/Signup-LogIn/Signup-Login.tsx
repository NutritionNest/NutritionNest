import React from "react";
import SignUpPageOne from "./SignUp/SignupPageOne.tsx";
import SignUpPageTwo from "./SignUp/SignupPageTwo.tsx";
import { BackChevronButton } from "../UIElements/Button/Button.tsx";
import LogInPage from "./LogIn/LogInPage.tsx";

const SignUpAndLogIn = ({ route, setCurrentPage }) => {
  const textMappings = {
    signup1: {
      heading: "Welcome to NutritionNest",
      subheading: "Create an account to get started",
    },
    signup2: {
      heading: "Create Personal Account",
      subheading:
        "Create your individual account by completing the details provided below.",
    },
    login: {
      heading: "Welcome Back",
      subheading:
        "Log in with the email and password of your NutritionNest account.",
    },
  };
  const renderSubSignupPages = () => {
    switch (route) {
      case "signup1":
        return <SignUpPageOne setCurrentPage={setCurrentPage} />;
      case "signup2":
        return <SignUpPageTwo setCurrentPage={setCurrentPage} />;
      case "login":
        return <LogInPage setCurrentPage={setCurrentPage} />;
    }
  };
  return (
    <div className="signup-login-page-wrapper">
      <BackChevronButton setCurrentPage={setCurrentPage} route="welcome" />
      <div className="signup-login-page-container">
        <div className="primary-heading-text-large">
          {textMappings[route].heading}
        </div>
        <div style={{ marginTop: "10px" }} className="inter-text-light ">
          {textMappings[route].subheading}
        </div>
        <div className="signup-login-subpages-container-wrapper">
          {renderSubSignupPages()}
        </div>
      </div>
    </div>
  );
};

export default SignUpAndLogIn;
