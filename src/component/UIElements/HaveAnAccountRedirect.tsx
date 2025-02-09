import React from "react";
import handleNav from "../../utils/handleNav.ts";

const HaveAnAccountRedirect = (props) => {
  const { setCurrentPage } = props;
  return (
    <div className="have-account-text-container">
      <span style={{ marginRight: "5px" }} className="inter-text-medium">
        Have an account?
      </span>
      <span
        className="primary-text-highlight inter-text-bold"
        onClick={handleNav(setCurrentPage, "login")}
      >
        Log in
      </span>
    </div>
  );
};
export default HaveAnAccountRedirect;
