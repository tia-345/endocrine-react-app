import { useState } from "react";

const qa = [
  {
    question: "Explain the endocrine system.",
    answer:
      "The endocrine system is a network of glands that secrete hormones directly into the bloodstream. These hormones act as chemical messengers that regulate physiological and psychological processes. The endocrine system controls growth, metabolism, reproduction, mood, and stress responses. Unlike the nervous system, endocrine actions are slower but long-lasting. Major glands include the hypothalamus, pituitary, thyroid, adrenal glands, pancreas, and gonads. Hormones help maintain internal balance or homeostasis. Any hormonal imbalance can cause physical and psychological disorders. The endocrine system works closely with the nervous system. Together they coordinate body functions efficiently. Therefore, the endocrine system is essential for overall health and behavior."
  },
  {
    question: "Describe the role of hormones in behavior.",
    answer:
      "Hormones influence behavior by acting on the brain and nervous system. They regulate emotions such as fear, happiness, anger, and stress. Cortisol plays a major role in stress responses. Sex hormones influence aggression, motivation, and emotional regulation. Hormonal changes during puberty cause behavioral changes. Imbalances can result in mood disorders. Hormones also affect sleep and appetite. Neurotransmitters interact with hormones to shape behavior. Feedback mechanisms maintain balance. Thus, hormones play a crucial role in behavior."
  },
  {
    question: "Explain the role of the thyroid gland.",
    answer:
      "The thyroid gland regulates metabolism by secreting thyroxine and triiodothyronine. These hormones control energy usage in the body. Thyroid hormones influence growth and brain development. They affect heart rate and body temperature. Thyroid function is linked to mood regulation. Hypothyroidism causes fatigue and depression. Hyperthyroidism causes anxiety and restlessness. Proper thyroid function is essential for mental health. The gland maintains physical and psychological balance. Therefore, the thyroid gland is vital."
  },
  {
    question: "Describe the role of adrenal glands in stress.",
    answer:
      "Adrenal glands are central to stress management. They secrete adrenaline, noradrenaline, and cortisol. Adrenaline prepares the body for fight-or-flight responses. Cortisol helps the body handle prolonged stress. These hormones increase alertness and energy. Chronic stress causes excessive cortisol release. This leads to anxiety and depression. Adrenal hormones influence emotional regulation. They also affect immunity. Hence, adrenal glands are crucial for survival."
  },
  {
    question: "Explain the relationship between the endocrine system and psychology.",
    answer:
      "The endocrine system is closely linked to psychology. Hormones affect brain activity and behavior. Emotional responses are influenced by hormonal changes. Stress hormones contribute to anxiety disorders. Hormones regulate sleep patterns that affect mental health. Reproductive hormones influence emotional stability. Hormonal imbalance can cause psychological disorders. The endocrine and nervous systems interact continuously. Psychological stress alters hormone secretion. Thus, the endocrine system plays a key role in psychological functioning."
  }
];

function ShortAnswers({ goBack }) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent(current + 1);
  };

  const handleBack = () => {
    if (current === 0) {
      goBack();
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="page">
      <h1>Short Answer Questions & Answers</h1>

      <h3>
        Question {current + 1} of {qa.length}
      </h3>

      <h2>{qa[current].question}</h2>

      <p>{qa[current].answer}</p>

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleBack} style={{ marginRight: "10px" }}>
          Back
        </button>

        {/* Show NEXT only if not last question */}
        {current < qa.length - 1 && (
          <button onClick={handleNext} style={{ marginRight: "10px" }}>
            Next
          </button>
        )}

        {/* ONLY on 5th question (index 4) */}
        {current === 4 && (
          <button onClick={goBack}>
            Go to Home
          </button>
        )}
      </div>
    </div>
  );
}

export default ShortAnswers;
