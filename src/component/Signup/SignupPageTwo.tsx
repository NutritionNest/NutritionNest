import React, { useState, useEffect } from "react";
import handleNav from "../../utils/handleNav.ts";
import { TextInput } from "../UIElements/Input/TextInput.tsx";
import {
  BackChevronButton,
  PrimaryButtonMedium,
} from "../UIElements/Button/Button.tsx";

const SignUpPageTwo = (props) => {
  const { setCurrentPage } = props;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        margin: "60px auto 0 auto",
        maxWidth: "340px",
        textAlign: "center",
      }}
    >
      <BackChevronButton setCurrentPage={setCurrentPage} route="signup1" />
      <div className="primary-heading-text-large">Create Personal Account</div>
      <div className="inter-text-light" style={{ marginTop: "10px" }}>
        Create your individual account by completing the details provided below.
      </div>
      <form className="sign-up-form-container">
        <TextInput
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          name="firstName"
        />
        <TextInput
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          name="lastName"
        />
        <TextInput
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
        <TextInput
          type="tel"
          placeholder="Phone number"
          value={formData.phoneNumber}
          onChange={handleChange}
          name="phoneNumber"
        />
        <TextInput
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          name="password"
        />
        <TextInput
          type="password"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        />
        <p className="password-criteria-text">
          Password must be 7-60 characters and contain at least one letter,
          number, and symbol.
        </p>
        <PrimaryButtonMedium
          handleClick={handleNav(setCurrentPage, "placeholder")}
          text="Sign Up"
        />
      </form>
    </div>
  );
};

export default SignUpPageTwo;
