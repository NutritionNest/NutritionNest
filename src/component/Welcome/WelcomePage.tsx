import React from "react";
import { PrimaryButtonMedium } from "../UIElements/Button/Button.tsx";
import HaveAnAccountRedirect from "../UIElements/HaveAnAccountRedirect.tsx";
import handleNav from "../../utils/handleNav.ts";

const WelcomePage = (props) => {
  const { setCurrentPage } = props;
  return (
    <div
      className="welcome-splash-container"
      style={{
        margin: "100px auto 0 auto",
        width: "auto",
        maxWidth: "330px",
      }}
    >
      <div className="primary-heading-text-large">Welcome to NutritionNest</div>

      <img
        src={process.env.PUBLIC_URL + "/mainLogoIcon.png"}
        style={{ margin: "30px auto", display: "flex", width: "330px" }}
      />
      <div style={{ margin: "0 auto" }}>
        <div className="inter-text-large">
          Manage nutrition, track intake, achieve goals, free & fast!
        </div>

        <PrimaryButtonMedium
          handleClick={handleNav(setCurrentPage, "signup1")}
          text="Sign Up"
        />
        <HaveAnAccountRedirect setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default WelcomePage;
