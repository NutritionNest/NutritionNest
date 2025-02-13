import React, { useState } from "react";
import handleNav from "../../../utils/handleNav.ts";
import { TextInput } from "../../UIElements/Input/TextInput.tsx";
import { PrimaryButtonMedium } from "../../UIElements/Button/Button.tsx";

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
  );
};

export default SignUpPageTwo;
