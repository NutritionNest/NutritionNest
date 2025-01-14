import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("welcome");

  // Check the current hostname
  const hostname = window.location.hostname;

  useEffect(() => {
    // Check the current hostname
    const hostname = window.location.hostname;

    // If the app is running on localhost or 127.0.0.1, prepend "DEV" to the title
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      document.title = `DEV - NutritionNest`;
    } else {
      document.title = `NutritionNest`;
    }
  }, []);

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

  const PageRenderer = ({ route }) => {
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
        style={{
          margin: "100px auto 0 auto",
          width: "auto",
          maxWidth: "330px",
        }}
      >
        <div style={{ fontSize: "44px", color: "#3D9245", fontWeight: 600 }}>
          Welcome to NutritionNest
        </div>

        <img
          src="/mainLogoIcon.png"
          style={{ margin: "30px auto", display: "flex", width: "330px" }}
        />
        <div style={{ margin: "0 auto" }}>
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
      <div style={{ margin: "60px auto 0 auto", maxWidth: "350px" }}>
        <img
          className="left_chevron_back_arrow"
          src="/leftChevron.svg"
          onClick={() => setCurrentPage("welcome")}
        />
        <div
          style={{
            fontSize: "25px",
            marginTop: "20px",
            color: "#3D9245",
            fontWeight: 600,
          }}
        >
          Welcome to NutritionNest
        </div>
        <div style={{ marginTop: "10px" }}>
          Create an account to get started
        </div>
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
