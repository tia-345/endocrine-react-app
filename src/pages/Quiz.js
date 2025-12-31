import { useState } from "react";

const questions = [
  {
    question: "Which gland is known as the master gland?",
    options: ["Thyroid", "Pituitary", "Adrenal", "Pineal"],
    answer: "Pituitary"
  },
  {
    question: "Which hormone regulates sleep?",
    options: ["Melatonin", "Insulin", "Cortisol", "Thyroxine"],
    answer: "Melatonin"
  },
  {
    question: "Which gland controls metabolism?",
    options: ["Adrenal", "Pituitary", "Thyroid", "Pancreas"],
    answer: "Thyroid"
  },
  {
    question: "Which gland is located on top of the kidneys?",
    options: ["Pancreas", "Adrenal", "Parathyroid", "Pineal"],
    answer: "Adrenal"
  },
  {
    question: "Which hormone lowers blood sugar?",
    options: ["Glucagon", "Insulin", "Cortisol", "Adrenaline"],
    answer: "Insulin"
  },
  {
    question: "Which gland regulates calcium levels?",
    options: ["Thyroid", "Parathyroid", "Pituitary", "Gonads"],
    answer: "Parathyroid"
  },
  {
    question: "Which gland has both endocrine and digestive functions?",
    options: ["Pancreas", "Adrenal", "Thyroid", "Pineal"],
    answer: "Pancreas"
  },
  {
    question: "Which hormone is responsible for fight-or-flight?",
    options: ["Cortisol", "Adrenaline", "Melatonin", "Estrogen"],
    answer: "Adrenaline"
  },
  {
    question: "Which gland connects the nervous and endocrine systems?",
    options: ["Thyroid", "Pituitary", "Pineal", "Adrenal"],
    answer: "Pituitary"
  },
  {
    question: "Which gland helps regulate the body’s biological clock?",
    options: ["Thyroid", "Pituitary", "Pineal", "Adrenal"],
    answer: "Pineal"
  }
];

function Quiz({ goBack }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[current];

  const handleOptionClick = (option) => {
    setAnswers({
      ...answers,
      [current]: option
    });
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const handleBack = () => {
    if (current === 0) {
      goBack(); // go to Home
    } else {
      setCurrent(current - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        score++;
      }
    });
    return score;
  };

  if (finished) {
    return (
      <div className="page">
        <h1>Endocrine System Quiz</h1>
        <h3>Your Score</h3>
        <p>
          You scored <strong>{calculateScore()}</strong> out of{" "}
          <strong>{questions.length}</strong>
        </p>
        <button onClick={goBack}>Back to Home</button>
      </div>
    );
  }

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

      {currentQuestion.options.map((option, index) => {
        const label = ["A", "B", "C", "D"][index];
        const isSelected = answers[current] === option;

        return (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            style={{
              display: "block",
              margin: "8px auto",
              backgroundColor: isSelected ? "#9F8CFF" : "#B8A6FF"
            }}
          >
            {label}. {option}
          </button>
        );
      })}

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleBack} style={{ marginRight: "10px" }}>
          Back
        </button>

        <button
          onClick={handleNext}
          disabled={answers[current] == null}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
