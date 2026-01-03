function EndocrineDisorders({ goBack }) {
  return (
    <div className="page">
      <h1>Major Endocrine Disorders</h1>

      <h3>Diabetes Mellitus</h3>
      <p>
        Caused by insulin deficiency or resistance, leading to high blood sugar.
      </p>

      <h3>Hypothyroidism</h3>
      <p>
        Reduced thyroid hormone secretion causing low metabolic rate.
      </p>

      <h3>Hyperthyroidism</h3>
      <p>
        Excess thyroid hormones causing increased metabolism.
      </p>

      <h3>Cushing’s Syndrome</h3>
      <p>
        Caused by excess cortisol secretion from adrenal cortex.
      </p>

      <h3>Addison’s Disease</h3>
      <p>
        Caused by deficiency of cortisol leading to weakness and fatigue.
      </p>

      <h3>Acromegaly</h3>
      <p>
        Excess growth hormone secretion in adults.
      </p>

      <button onClick={goBack}>Back</button>
    </div>
  );
}

export default EndocrineDisorders;
