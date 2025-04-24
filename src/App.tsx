import React, { useState, useEffect } from "react";
import WelcomePage from "./component/Welcome/WelcomePage.tsx";
import {
  BackChevronButton,
  PrimaryButtonMedium,
} from "./component/UIElements/Button/Button.tsx";
import handleNav from "./utils/handleNav.ts";
import SignUpAndLogIn from "./component/Signup-LogIn/Signup-Login.tsx";
import "./App.scss";
import Questionnaire from "./component/Questionnaire/Questionnaire.tsx";

const App = () => {
  const [currentPage, setCurrentPage] = useState("questionnaire");

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
    if (route === "welcome") {
      return <WelcomePage setCurrentPage={setCurrentPage} />;
    } else if (route.includes("signup") || route === "login") {
      return <SignUpAndLogIn route={route} setCurrentPage={setCurrentPage} />;
    } else if (route === "questionnaire") {
      return <Questionnaire setCurrentPage={setCurrentPage} />;
    } else if (route === "placeholder") {
      return (
        <PrimaryButtonMedium
          handleClick={handleNav(setCurrentPage, "welcome")}
          text="back to welcome"
        />
      );
    } else {
      return <WelcomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app_mobile_background">
      {document.location.pathname.includes("demo") && (
        <img
          src={process.env.PUBLIC_URL + `/iphone-mock-status-bar.svg`}
          style={{ background: "white" }}
        />
      )}
      <div className="app_mobile_main_container">
        <PageRenderer route={currentPage} />
      </div>
    </div>
  );
};

export default App;
