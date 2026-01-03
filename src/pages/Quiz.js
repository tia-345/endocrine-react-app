import { useState } from "react";

const questions = [
  {
    question: "Which gland is known as the master gland of the endocrine system?",
    options: ["Thyroid", "Pituitary", "Adrenal", "Pineal"],
    answer: "Pituitary",
    explanation:
      "The pituitary gland is called the master gland because it controls most other endocrine glands."
  },
  {
    question: "Which hormone regulates the sleep–wake cycle?",
    options: ["Cortisol", "Melatonin", "Insulin", "Thyroxine"],
    answer: "Melatonin",
    explanation:
      "Melatonin is secreted by the pineal gland and regulates circadian rhythm and sleep."
  },
  {
    question: "Which gland plays a major role in stress response?",
    options: ["Thyroid", "Adrenal", "Pancreas", "Parathyroid"],
    answer: "Adrenal",
    explanation:
      "Adrenal glands secrete adrenaline and cortisol which help the body respond to stress."
  },
  {
    question: "Which hormone lowers blood glucose levels?",
    options: ["Glucagon", "Cortisol", "Insulin", "Adrenaline"],
    answer: "Insulin",
    explanation:
      "Insulin allows glucose to enter cells, lowering blood sugar levels."
  },
  {
    question: "Which gland is located in the front of the neck?",
    options: ["Pituitary", "Thyroid", "Pineal", "Thymus"],
    answer: "Thyroid",
    explanation:
      "The thyroid gland is located in the anterior part of the neck."
  },
  {
    question: "Which hormone is associated with the fight-or-flight response?",
    options: ["Insulin", "Melatonin", "Adrenaline", "Estrogen"],
    answer: "Adrenaline",
    explanation:
      "Adrenaline prepares the body for emergencies by increasing alertness."
  },
  {
    question: "Which gland regulates calcium levels in the body?",
    options: ["Thyroid", "Parathyroid", "Pancreas", "Adrenal"],
    answer: "Parathyroid",
    explanation:
      "Parathyroid hormone controls calcium balance in the body."
  },
  {
    question: "Which gland is important for immune system development?",
    options: ["Adrenal", "Thyroid", "Thymus", "Pineal"],
    answer: "Thymus",
    explanation:
      "The thymus gland helps in maturation of T-lymphocytes."
  },
  {
    question: "Excess thyroid hormone is linked to which condition?",
    options: ["Depression", "Anxiety", "Fatigue", "Sleepiness"],
    answer: "Anxiety",
    explanation:
      "Hyperthyroidism increases metabolism and causes nervousness and anxiety."
  },
  {
    question: "Which gland directly influences reproductive behavior?",
    options: ["Pancreas", "Gonads", "Thymus", "Pineal"],
    answer: "Gonads",
    explanation:
      "Gonads secrete sex hormones like estrogen and testosterone that influence behavior."
  }
];

function Quiz({ goBack }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = questions[current];

  const handleOptionClick = (option) => {
    setSelected(option);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setSelected(null);
    setShowExplanation(false);
    setCurrent(current + 1);
  };

  const handleBack = () => {
    if (current === 0) {
      // FIRST QUESTION → GO HOME
      goBack();
    } else {
      // GO TO PREVIOUS QUESTION
      setSelected(null);
      setShowExplanation(false);
      setCurrent(current - 1);
    }
  };

  return (
    <div className="page">
      <h1>Endocrine System Quiz</h1>

      <h3>
        Question {current + 1} of {questions.length}
      </h3>

      <p>
        <strong>{current + 1}. </strong>
        {currentQuestion.question}
      </p>

      {currentQuestion.options.map((option) => {
        let bgColor = "#B8A6FF";

        if (showExplanation) {
          if (option === currentQuestion.answer) {
            bgColor = "#7CFF7C";
          } else if (option === selected) {
            bgColor = "#FF7C7C";
          }
        }

        return (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            disabled={showExplanation}
            style={{
              display: "block",
              margin: "8px auto",
              backgroundColor: bgColor
            }}
          >
            {option}
          </button>
        );
      })}

      {showExplanation && (
        <div style={{ marginTop: "20px" }}>
          {selected === currentQuestion.answer ? (
            <p style={{ color: "green" }}>✅ Correct</p>
          ) : (
            <p style={{ color: "red" }}>❌ Incorrect</p>
          )}
          <p>
            <strong>Explanation:</strong> {currentQuestion.explanation}
          </p>
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleBack} style={{ marginRight: "10px" }}>
          Back
        </button>

        {current < questions.length - 1 ? (
          <button onClick={handleNext} disabled={!showExplanation}>
            Next
          </button>
        ) : (
          <button onClick={goBack}>
            Finish
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
