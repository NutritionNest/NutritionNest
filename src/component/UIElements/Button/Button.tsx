import React from "react";
import handleNav from "../../../utils/handleNav.ts";

export const PrimaryButtonMedium = ({
  handleClick,
  text,
  disabled = false,
}) => (
  <button
    type="button"
    className={`primary-button-medium ${disabled ? "--is-disabled" : ""}`}
    onClick={handleClick}
    disabled={disabled}
  >
    {text}
  </button>
);

export const DirectToSocialButton = ({ text, icon }) => {
  const lastWordInLabelText = text.split(" ")[text.split(" ").length - 1];
  return (
    <button
      id={`${lastWordInLabelText.toLowerCase()}-button`}
      className="socials-button"
      onClick={() => console.log("socials button clicked")}
    >
      <div className="socials-button-content-container">
        {icon ? (
          <img src={process.env.PUBLIC_URL + `/${icon}-social-icon.svg`} />
        ) : null}
        <span className="socials-button-label-text">{text}</span>
      </div>
    </button>
  );
};

export const BackChevronButton = (props) => {
  const { setCurrentPage, route } = props;
  return (
    <img
      className="left_chevron_back_arrow"
      src={process.env.PUBLIC_URL + "/left-chevron.svg"}
      onClick={handleNav(setCurrentPage, route)}
    />
  );
};
