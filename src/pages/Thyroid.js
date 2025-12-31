import thyroidImg from "../assets/thyroid.png";

function Thyroid({ goBack }) {
  return (
    <div className="page">
      <h1>Thyroid Gland</h1>

      <div className="image-card">
        <img
          src={thyroidImg}
          alt="Thyroid gland"
          width="200"
        />
      </div>

      <p>
        The thyroid gland regulates metabolism, energy levels, and body temperature
        by releasing thyroid hormones.
      </p>

      <h3>Hormones Secreted</h3>
      <ul>
        <li>Thyroxine (T4)</li>
        <li>Triiodothyronine (T3)</li>
        <li>Calcitonin</li>
      </ul>

      <h3>Functions</h3>
      <p>
        Regulates metabolism, controls energy usage, helps in growth and
        development, and maintains body temperature.
      </p>
<h3>Location</h3>
<p>
  The thyroid gland is located in the front of the neck,
  just below the Adam’s apple and in front of the trachea.
</p>
<h3>Additional Details</h3>
<p>
  Thyroid disorders can affect weight, energy levels,
  and overall metabolism.
</p>

      <button onClick={goBack}>
        Back
      </button>
    </div>
  );
}

export default Thyroid;
