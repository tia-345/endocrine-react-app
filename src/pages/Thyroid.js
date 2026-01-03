import thyroidImg from "../assets/thyroid.png";

function Thyroid({ goBack }) {
  return (
    <div className="page">
      <h1>Thyroid Gland</h1>

      <div className="image-card">
        <img src={thyroidImg} alt="Thyroid gland" width="200" />
      </div>

      <h3>Location</h3>
      <p>Located in the front of the neck, below the larynx.</p>

      <h3>Hormones Secreted</h3>
      <ul>
        <li>Thyroxine (T4)</li>
        <li>Triiodothyronine (T3)</li>
      </ul>

      <h3>Functions</h3>
      <ul>
        <li>Regulates metabolism and energy levels</li>
        <li>Affects growth and brain development</li>
      </ul>

      <h3>Psychological Effects</h3>
      <ul>
        <li>Hypothyroidism → depression, fatigue, slow thinking</li>
        <li>Hyperthyroidism → anxiety, irritability, restlessness</li>
      </ul>

      <button onClick={goBack}>Back</button>
    </div>
  );
}

export default Thyroid;
