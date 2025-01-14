import React, { useState } from "react";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("welcome");

  const surveySteps = {
    welcome: {
      redirect: "",
      subSteps: [],
    },
    logIn: {
      redirect: "home",
      subSteps: [],
    },
    signUp: {
      redirect: "createAccount",
      subSteps: [],
    },
    createAccount: {
      redirect: "",
      subSteps: [],
    },
    gender: {
      redirect: "",
      subSteps: [],
    },
    goals: {
      redirect: "",
      subSteps: [],
    },
    age: {
      redirect: "",
      subSteps: [],
    },
    currentWeight: {
      redirect: "",
      subSteps: [],
    },
    currentHeight: {
      redirect: "",
      subSteps: [],
    },
    activeLevel: {
      redirect: "",
      subSteps: [],
    },
    personalizeLoading: {
      redirect: "",
      subSteps: [],
    },
    complete: {
      redirect: "",
      subSteps: [],
    },
  };

  const PageRenderer = (route) => {
    switch (route) {
      case "welcome":
        return <SplashPage />;
      case "signUp":
        return <SignUpPage />;
      default:
        return <SplashPage />;
    }
  };

  const PrimaryButtonMedium = ({ handleClick, text }) => (
    <button className="primary-button-medium" onClick={handleClick}>
      {text}
    </button>
  );

  const SplashPage = () => {
    return (
      <div
        className="welcome-splash-container"
        style={{ margin: "110px auto 0 auto" }}
      >
        <div style={{ fontSize: "44px", color: "#3D9245", fontWeight: 600 }}>
          Welcome to NutritionNest
        </div>
        <img
          src="/mainLogoIcon.png"
          style={{ margin: "30px auto", display: "flex", width: "auto" }}
        />
        <div style={{ maxWidth: "353px", margin: "0 auto" }}>
          <div
            style={{
              margin: "30px auto",
              textAlign: "center",
              maxWidth: "318px",
            }}
          >
            Manage nutrition, track intake, achieve goals, free & fast!
          </div>

          <PrimaryButtonMedium
            handleClick={() => setCurrentPage("signUp")}
            text="Sign Up"
          />
          <div
            style={{
              display: "flex",
              width: "fit-content",
              margin: "20px auto 0 auto",
              fontSize: "14px",
            }}
          >
            <span style={{ marginRight: "8px" }}>Have an account?</span>
            <span className="primary-text-highlight">Log in</span>
          </div>
        </div>
      </div>
    );
  };

  const SignUpPage = () => {
    return (
      <div style={{ fontSize: "28px", color: "#3D9245", fontWeight: 600 }}>
        Welcome to NutritionNest
      </div>
    );
  };
  return (
    <div className="app_mobile_background" style={{ color: "#101010" }}>
      <div className="app_mobile_main_container">
        <PageRenderer route={currentPage} />
      </div>
    </div>
  );
}

export default App;
