import React, { useState, useEffect } from "react";
import "./App.scss";

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

  const handleNav = (route) => {
    return () => setCurrentPage(route);
  };

  const PageRenderer = ({ route }) => {
    switch (route) {
      case "welcome":
        return <SplashPage />;
      case "signup1":
        return <SignUpPageOne />;
      case "signup2":
        return <SignUpPageTwo />;
      case "placeholder":
        return (
          <PrimaryButtonMedium
            handleClick={handleNav("welcome")}
            text="back to welcome"
          />
        );
      case "login":
        return <LoginPage />;
      default:
        return <SplashPage />;
    }
  };

  const PrimaryButtonMedium = ({ handleClick, text }) => (
    <button className="primary-button-medium" onClick={handleClick}>
      {text}
    </button>
  );

  const HaveAnAccountRedirect = () => (
    <div className="have-account-text-container">
      <span style={{ marginRight: "5px" }} className="inter-text-medium">
        Have an account?
      </span>
      <span
        className="primary-text-highlight inter-text-bold"
        onClick={() => setCurrentPage("login")}
      >
        Log in
      </span>
    </div>
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
        <div className="primary-heading-text-large">
          Welcome to NutritionNest
        </div>

        <img
          src={process.env.PUBLIC_URL + "/mainLogoIcon.png"}
          style={{ margin: "30px auto", display: "flex", width: "330px" }}
        />
        <div style={{ margin: "0 auto" }}>
          <div className="inter-text-large">
            Manage nutrition, track intake, achieve goals, free & fast!
          </div>

          <PrimaryButtonMedium
            handleClick={handleNav("signup1")}
            text="Sign Up"
          />
          <HaveAnAccountRedirect />
        </div>
      </div>
    );
  };

  const TextInput = (props) => {
    const { name, type, placeholder, label } = props;
    return (
      <>
        {label && <label for={label} />}
        <input
          className="input-primary"
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </>
    );
  };

  const LoginPage = () => {
    return (
      <div style={{ margin: "60px auto 0 auto", maxWidth: "340px" }}>
        <img
          className="left_chevron_back_arrow"
          src={process.env.PUBLIC_URL + "/left-chevron.svg"}
          onClick={handleNav("welcome")}
        />
        <div className="primary-heading-text-large">Welcome Back</div>
        <div className="inter-text-light" style={{ marginTop: "10px" }}>
          Log in with the email and password of your NutritionNest account.
        </div>

        <div className="login-form-container">
          <form className="login-form">
            <TextInput name="email" type="email" placeholder="Email" />
            <TextInput name="password" type="password" placeholder="Password" />
          </form>
          <PrimaryButtonMedium
            handleClick={handleNav("placeholder")}
            text="Log in"
          />

          <div className="or-divider-container">
            <hr className="divider-line" />
            <div className="or-text">or</div>
            <hr className="divider-line" />
          </div>

          <div className="socials-button-container">
            <DirectToSocialButton text="Continue with Apple" icon="apple" />
            <DirectToSocialButton text="Continue with Google" icon="google" />
            <DirectToSocialButton
              text="Continue with Facebook"
              icon="facebook"
            />
          </div>
        </div>
      </div>
    );
  };

  const DirectToSocialButton = ({ text, icon }) => {
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

  const SignUpPageTwo = () => {
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

    const handleSignUp = () => {
      console.log("Signing up with", formData);
    };

    return (
      <div
        style={{
          margin: "60px auto 0 auto",
          maxWidth: "340px",
          textAlign: "center",
        }}
      >
        <img
          className="left_chevron_back_arrow"
          src={process.env.PUBLIC_URL + "/left-chevron.svg"}
          alt="Back"
          onClick={handleNav("signup1")}
          style={{ cursor: "pointer" }}
        />
        <div className="primary-heading-text-large">
          Create Personal Account
        </div>
        <div className="inter-text-light" style={{ marginTop: "10px" }}>
          Create your individual account by completing the details provided
          below.
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
            handleClick={handleNav("placeholder")}
            text="Sign Up"
          />
        </form>
      </div>
    );
  };

  const SignUpPageOne = () => {
    return (
      <div style={{ margin: "60px auto 0 auto", maxWidth: "340px" }}>
        <img
          className="left_chevron_back_arrow"
          src={process.env.PUBLIC_URL + "/left-chevron.svg"}
          onClick={handleNav("welcome")}
        />
        <div className="primary-heading-text-large">
          Welcome to NutritionNest
        </div>
        <div style={{ marginTop: "10px" }} className="inter-text-light ">
          Create an account to get started
        </div>

        <div className="signup-button-container">
          <div className="socials-button-container">
            <DirectToSocialButton text="Sign up with Apple" icon="apple" />
            <DirectToSocialButton text="Sign up with Google" icon="google" />
            <DirectToSocialButton
              text="Sign up with Facebook"
              icon="facebook"
            />
            <PrimaryButtonMedium
              handleClick={handleNav("signup2")}
              text="Sign up with email"
            />
            <HaveAnAccountRedirect />
          </div>
        </div>
      </div>
    );
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
