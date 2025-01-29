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

  const handleNav = (route) => {
    return () => setCurrentPage(route)
  }

  const PageRenderer = ({ route }) => {
    switch (route) {
      case "welcome":
        return <SplashPage />;
      case "signup":
        return <SignUpPage />;
        case "placeholder":
          return           <PrimaryButtonMedium
          handleClick={handleNav("welcome")}
          text="back to welcome"
        />;
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
    <div
    style={{
      display: "flex",
      width: "fit-content",
      margin: "20px auto 0 auto",
      fontSize: "14px",
    }}
  >
    <span style={{ marginRight: "8px" }}>Have an account?</span>
    <span className="primary-text-highlight" onClick={()=>setCurrentPage("login")}>Log in</span>
  </div>
  )

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
          src={process.env.PUBLIC_URL + "/mainLogoIcon.png"}
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
            handleClick={handleNav("signup")}
            text="Sign Up"
          />
       <HaveAnAccountRedirect/>
        </div>
      </div>
    );
  };

  
  const LoginPage = () => {
    return (
      <div style={{ margin: "60px auto 0 auto", maxWidth: "350px" }}>
        <img
          className="left_chevron_back_arrow"
          src={process.env.PUBLIC_URL + "/leftChevron.svg"}
          onClick={handleNav("welcome")}
        />
        <div
          style={{
            fontSize: "25px",
            marginTop: "20px",
            color: "#3D9245",
            fontWeight: 600,
          }}
        >
          Welcome Back
        </div>
        <div style={{ marginTop: "10px" }}>
       Log in with the email and password of your NutritionNest account.
        </div>

<div className="login-forms">
         <form style={{display: "flex", flexDirection: "column"}}>
          {/* <label for="email">Email</label> */}
          <input className="input-box-primary" name="email" type="email" placeholder="Email"/>

          {/* <label for="password">Password</label> */}
          <input className="input-box-primary" name="password" type="password" placeholder="Password"/>
         </form>
         <PrimaryButtonMedium
            handleClick={handleNav("placeholder")}
            text="Log in"
          />

      <div style={{display: "flex"}}>
          <hr/>
          <div>or</div>
          <hr/>
      </div>
         
      <div className="socials-button-container">
          <DirectToSocialButton text="Continue with Apple" icon="apple"/>
          <DirectToSocialButton text="Continue with Google" icon="google"/>
          <DirectToSocialButton text="Continue with Facebook" icon="facebook"/>
      </div>
         </div>
      </div>
    );
  };

  const DirectToSocialButton = ({text, icon}) => {
    
    const lastWordInLabelText = text.split(' ')[text.split(' ').length-1]
    return(
      <button id={`${lastWordInLabelText.toLowerCase()}-button`} className="socials-button" onClick={()=>console.log("socials button clicked")}>
    <div className="socials-button-content-container">
    {icon ? <img src={process.env.PUBLIC_URL + `/${icon}-social-icon.svg`}/> : null}
    <span className="socials-button-label-text">{text}</span>
    </div>
        </button>
  )}

  const SignUpPage = () => {
    return (
      <div style={{ margin: "60px auto 0 auto", maxWidth: "350px" }}>
        <img
          className="left_chevron_back_arrow"
          src={process.env.PUBLIC_URL + "/leftChevron.svg"}
          onClick={handleNav("welcome")}
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


  <div className="signup-button-container">
    <div className="socials-button-container">
          <DirectToSocialButton text="Sign up with Apple" icon="apple"/>
          <DirectToSocialButton text="Sign up with Google" icon="google"/>
          <DirectToSocialButton text="Sign up with Facebook" icon="facebook"/>
          <PrimaryButtonMedium
            handleClick={handleNav("placeholder")}
            text="Sign up with email"
          />
           <HaveAnAccountRedirect/>
      </div>
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
