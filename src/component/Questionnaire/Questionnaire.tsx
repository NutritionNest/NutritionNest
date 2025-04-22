import React, { useState } from "react";
import {
  BackChevronButton,
  PrimaryButtonMedium,
} from "../UIElements/Button/Button.tsx";

const Questionnaire = ({ setCurrentPage }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const initialSteps = [
    {
      page: "gender",
      step: 0,
      questionType: "choice", // checkboxes
      placeholder: null,
      questions: { male: null, female: null, nonbinary: null },
      completed: false,
    },
    {
      page: "goals",
      step: 1,
      questionType: "choice", // checkboxes
      placeholder: null,
      questions: { gainWeight: null, loseWeight: null, maintainWeight: null },
      completed: false,
    },
    {
      page: "age",
      step: 2,
      questionType: "number", // free text input
      placeholder: "MM/DD/YY",
      questions: { age: "" },
      completed: false,
    },
    {
      page: "weight",
      step: 3,
      questionType: "number", // free text input
      placeholder: "0 lbs",
      questions: { currentWeight: "" },
      completed: false,
    },
    {
      page: "height",
      step: 4,
      questionType: "number", // free text input
      placeholder: "0ft 0in",
      questions: { currentHeight: "" },
      completed: false,
    },
    {
      page: "activeLevel",
      step: 5,
      questionType: "number",
      placeholder: "",
      questions: { activeLevel: "" },
      completed: false,
    },
  ];
  const [onboardingModel, setOnboardingModel] = useState(initialSteps);
  const [showCompletedScreen, setShowCompletedScreen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;

    setOnboardingModel((prev) => {
      const updated = [...prev];
      const step = { ...updated[currentStep] };
      const questions = { ...step.questions };

      if (step.questionType === "choice") {
        // Make it exclusive — only one can be true
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

  const handleQuestionnaireNext = () => {
    const { questions } = onboardingModel[currentStep];
    const isComplete =
      current.questionType === "choice"
        ? Object.values(questions).some((val) => val === true) // at least one checked
        : Object.values(questions).every((val) => val !== null && val !== "");

    if (
      isComplete &&
      currentStep === onboardingModel.length - 1 &&
      !showCompletedScreen
    ) {
      // set show completed screen
      const updated = [...onboardingModel];
      updated[currentStep].completed = true;
      setShowCompletedScreen(true);
    } else if (showCompletedScreen && isComplete) {
      // todo: convert this to use handleNav util function
      setCurrentPage("placeholder");
    } else if (isComplete) {
      const updated = [...onboardingModel];
      updated[currentStep].completed = true;
      setOnboardingModel(updated);
      setCurrentStep((prev) => prev + 1);
    } else {
      console.log("Please make a choice");
    }
  };

  const current = onboardingModel[currentStep];
  const currentQuestions = current.questions;

  return (
    <div className="onboarding_module_container">
      <ul className="onboarding_module_progress_container">
        {onboardingModel.map((step, i) => (
          <li
            key={i}
            className={`onboarding-progress-step ${
              step.completed ? "onboarding-progress-step-completed" : ""
            }`}
            onClick={() => setCurrentStep(step.step)}
          />
        ))}
      </ul>

      <img
        className="left_chevron_back_arrow"
        src={process.env.PUBLIC_URL + "/left-chevron.svg"}
        onClick={() =>
          currentStep === 0
            ? setCurrentPage("signup2")
            : setCurrentStep((prev) => prev - 1)
        }
      />

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

// TODO: this is a placeholder component when loading state is implemented, currently do not need
const SettingUpHealthPlans = () => {
  return (
    <>
      <h1>Setting up your health plans</h1>
      <p>This should only take a moment.</p>
    </>
  );
};
const QuestionnaireComplete = () => {
  return (
    <>
      <h1>Congratulations!</h1>
      <p>Your custom profile is ready to go!</p>
    </>
  );
};
export default Questionnaire;
