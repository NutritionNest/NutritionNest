import React, { useState } from "react";
import { PrimaryButtonMedium } from "../UIElements/Button/Button.tsx";
import { PersonHappyFinishLine } from "../UIElements/Images/index.tsx";

const Questionnaire = ({ setCurrentPage }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const initialSteps = [
    {
      page: "gender",
      text: {
        header: "What is your gender identity?",
        subText: "Please indicate from the options below provided.",
      },
      step: 0,
      questionType: "choice",
      placeholder: null,
      questions: { male: null, female: null, nonbinary: null },
      completed: false,
    },
    {
      page: "goals",
      text: {
        header: "What are your goals?",
        subText: "Please choose from the options below.",
      },
      step: 1,
      questionType: "choice",
      placeholder: null,
      questions: { gainWeight: null, loseWeight: null, maintainWeight: null },
      completed: false,
    },
    {
      page: "age",
      text: {
        header: "What is your age?",
        subText: "Please verify your age below.",
      },
      step: 2,
      questionType: "number",
      placeholder: "Age",
      questions: { age: "" },
      completed: false,
    },
    {
      page: "weight",
      text: {
        header: "What is your current weight?",
        subText: "Please provide your weight (in pounds) below.",
      },
      step: 3,
      questionType: "number",
      placeholder: "0 lbs",
      questions: { currentWeight: "" },
      completed: false,
    },
    {
      page: "height",
      text: {
        header: "What is your current height?",
        subText:
          "Please verify your height by providing your information below.",
      },
      step: 4,
      questionType: "number",
      placeholder: "0ft 0in",
      questions: { currentHeight: "" },
      completed: false,
    },
    {
      page: "activeLevel",
      text: {
        header: "How active are you?",
        subText: "Please select your active level below.",
      },
      step: 5,
      questionType: "choice",
      placeholder: "",
      questions: { active: null, lightlyActive: null, notActive: null },
      completed: false,
    },
  ];
  const [onboardingModel, setOnboardingModel] = useState(initialSteps);
  const [showCompletedScreen, setShowCompletedScreen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;

    // TODO: set error state for invalid inputs LOL "0" age weight height etc
    setOnboardingModel((prev) => {
      const updated = [...prev];
      const step = { ...updated[currentStep] };
      const questions = { ...step.questions };

      // Only one can be true, exclusive choice MAY change in the future
      if (step.questionType === "choice") {
        Object.keys(questions).forEach((key) => {
          questions[key] = key === name ? checked : false;
        });
      } else {
        questions[name] = value;
      }

      step.questions = questions;
      updated[currentStep] = step;
      return updated;
    });
  };

  const isAllComplete = onboardingModel.every((step) => {
    const values = Object.values(step.questions);

    if (step.questionType === "choice") {
      // At least one checkbox is selected
      return values.some((val) => val === true);
    } else if (step.questionType === "number") {
      // All number inputs must be filled (non-empty)
      return values.every((val) => val !== null && val !== "");
    }

    // Default: assume not complete
    return false;
  });

  const isLastPage = currentStep === onboardingModel.length - 1;

  const handleQuestionnaireNext = () => {
    // show completed screen
    if (isAllComplete && isLastPage && !showCompletedScreen) {
      const updated = [...onboardingModel];
      updated[currentStep].completed = true;
      setShowCompletedScreen(true);
      // take page to next screen
    } else if (showCompletedScreen && isAllComplete) {
      setCurrentPage("placeholder");
      // user made a choice, update and go to next page
    } else if (isComplete && !isLastPage) {
      const updated = [...onboardingModel];
      updated[currentStep].completed = true;
      // update state variable
      setOnboardingModel(updated);
      // go to next page
      setCurrentStep((prev) => prev + 1);
      // no choice was selected
    } else {
      console.log("Please make a choice");
    }
  };

  const current = onboardingModel[currentStep];
  const currentQuestions = current.questions;
  const { questions } = onboardingModel[currentStep];

  const isComplete =
    current.questionType === "choice"
      ? Object.values(questions).some((val) => val === true) // at least one checked
      : Object.values(questions).every((val) => val !== null && val !== "");

  const QuestionnaireComplete = () => (
    <div className="onboarding_question_header-container">
      <span className="onboarding_question_header">
        {showCompletedScreen ? "Congratulations!" : current.text.header}
      </span>
      <span className="onboarding_question_header-subtext">
        {showCompletedScreen
          ? "Your custom profile is ready to go!"
          : current.text.subText}
      </span>
      <div className="onboarding_question_completed-image-wrapper">
        <PersonHappyFinishLine />
      </div>
    </div>
  );

  return (
    <div className="onboarding_module_container">
      <ul className="onboarding_module_progress_container">
        {onboardingModel.map((step, i) => (
          <li key={i}>
            <div
              className={`onboarding-progress-bar ${
                step.completed ? "onboarding-progress-bar-completed" : ""
              }`}
              onClick={() => setCurrentStep(step.step)}
            ></div>
          </li>
        ))}
      </ul>

      <img
        className="left_chevron_back_arrow"
        src={process.env.PUBLIC_URL + "/left-chevron.svg"}
        onClick={() =>
          currentStep === 0
            ? setCurrentPage("signup2")
            : setCurrentStep(currentStep - 1)
        }
      />

      {!showCompletedScreen && (
        <div className="onboarding_question_header-container">
          <span className="onboarding_question_header">
            {current.text.header}
          </span>
          <span className="onboarding_question_header-subtext">
            {current.text.subText}
          </span>
        </div>
      )}

      {showCompletedScreen ? (
        <QuestionnaireComplete />
      ) : (
        <ul className="onboarding_module_question-container">
          {Object.keys(currentQuestions).map((key) => (
            <li
              key={key}
              className={`${
                current.questionType === "choice"
                  ? "onboarding_module_question"
                  : ""
              } ${!!currentQuestions[key] ? "question-checked" : ""}`}
              onClick={() => {
                if (current.questionType === "choice") {
                  handleInputChange({
                    target: {
                      name: key,
                      type: "checkbox",
                      checked: true,
                    },
                  });
                }
              }}
            >
              {current.questionType === "choice" && (
                <label className="questionnaire-label" htmlFor={key}>
                  {key.replace(/([a-z])([A-Z])/g, "$1 $2")}
                </label>
              )}
              <input
                className={`${
                  current.questionType === "number" ? "number-input-box" : ""
                }`}
                id={key}
                type={current.questionType === "choice" ? "checkbox" : "number"}
                name={key}
                placeholder={current.placeholder?.length && current.placeholder}
                checked={
                  current.questionType === "choice"
                    ? currentQuestions[key] || false
                    : undefined
                }
                value={
                  current.questionType !== "choice"
                    ? currentQuestions[key]
                    : undefined
                }
                onChange={handleInputChange}
                onClick={(e) => e.stopPropagation()} // prevent bubbling to <li>
              />
            </li>
          ))}
        </ul>
      )}

      <PrimaryButtonMedium text="Next" handleClick={handleQuestionnaireNext} />
    </div>
  );
};

export default Questionnaire;
