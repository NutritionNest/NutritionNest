import React, { useState } from "react";
import handleNav from "../../../utils/handleNav.ts";
import { TextInput } from "../../UIElements/Input/TextInput.tsx";
import { PrimaryButtonMedium } from "../../UIElements/Button/Button.tsx";

const SignUpPageTwo = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const validateForm = () => {
    const errorObj: any = {};

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPhone = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone); // E.164 format

    if (!formData.firstName.trim())
      errorObj.firstName = "One or more characters are required";
    if (!formData.lastName.trim())
      errorObj.lastName = "One or more characters are required";
    if (!isValidEmail(formData.email))
      errorObj.email = "Valid email address is required";
    if (
      !isValidPhone(formData.phoneNumber) ||
      formData.phoneNumber.toString().length < 6
    )
      errorObj.phoneNumber = "Valid phone number is required";
    if (formData.password.length === 0) {
      errorObj.password = "At least one symbol (!,+,=,$,#,@)";
    } else if (formData.password.length < 7)
      errorObj.password = "Password must be longer than 6 characters";
    if (formData.confirmPassword.length === 0)
      errorObj.confirmPassword = "Password must be longer than 6 characters";
    if (formData.password !== formData.confirmPassword)
      errorObj.confirmPassword = "Passwords must match";

    setErrors(errorObj);

    return Object.keys(errorObj).length === 0; // Returns true if no errors
  };

  const handleAccountCreation = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      handleNav(setCurrentPage, "placeholder")();
    } else {
      setErrors((prev) => ({ ...prev }));
    }
  };

  return (
    <form className="sign-up-form-container">
      <TextInput
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        handleChange={handleChange}
        name="firstName"
        error={errors.firstName && { errorText: errors.firstName }}
      />
      <TextInput
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        handleChange={handleChange}
        name="lastName"
        error={errors.lastName && { errorText: errors.lastName }}
      />
      <TextInput
        type="email"
        placeholder="Email"
        value={formData.email}
        handleChange={handleChange}
        name="email"
        error={errors.email && { errorText: errors.email }}
      />
      <TextInput
        type="tel"
        placeholder="Phone number"
        value={formData.phoneNumber}
        handleChange={handleChange}
        name="phoneNumber"
        error={errors.phoneNumber && { errorText: errors.phoneNumber }}
      />
      <TextInput
        type="password"
        placeholder="Password"
        value={formData.password}
        handleChange={handleChange}
        name="password"
        error={errors.password && { errorText: errors.password }}
      />
      <TextInput
        type="password"
        placeholder="Confirm password"
        value={formData.confirmPassword}
        handleChange={handleChange}
        name="confirmPassword"
        error={errors.confirmPassword && { errorText: errors.confirmPassword }}
      />

      <p className="password-criteria-text">
        Password must be 7-60 characters and contain at least one letter,
        number, and symbol.
      </p>
      <PrimaryButtonMedium
        handleClick={(e) => handleAccountCreation(e)}
        text="Sign Up"
      />
    </form>
  );
};

export default SignUpPageTwo;
