import React, { useState, useEffect } from "react";
import WelcomePage from "./component/Welcome/WelcomePage.tsx";
import { PrimaryButtonMedium } from "./component/UIElements/Button/Button.tsx";
import LoginPage from "./component/Login/LoginPage.tsx";
import handleNav from "./utils/handleNav.ts";
import SignUpPageOne from "./component/Signup/SignupPageOne.tsx";
import SignUpPageTwo from "./component/Signup/SignupPageTwo.tsx";
import "./App.scss";

function App() {
  const [currentPage, setCurrentPage] = useState("welcome");

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

  const PageRenderer = ({ route }) => {
    switch (route) {
      case "welcome":
        return <WelcomePage setCurrentPage={setCurrentPage} />;
      case "signup1":
        return <SignUpPageOne setCurrentPage={setCurrentPage} />;
      case "signup2":
        return <SignUpPageTwo setCurrentPage={setCurrentPage} />;
      case "placeholder":
        return (
          <PrimaryButtonMedium
            handleClick={handleNav(setCurrentPage, "welcome")}
            text="back to welcome"
          />
        );
      case "login":
        return <LoginPage setCurrentPage={setCurrentPage} />;
      default:
        return <WelcomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app_mobile_background">
      <div className="app_mobile_main_container">
        <PageRenderer route={currentPage} />
      </div>
    </div>
  );
}

export default App;
