import parathyroidImg from "../assets/parathyroid.png";

function Parathyroid({ goBack }) {
  return (
    <div className="page">
      <h1>Parathyroid Glands</h1>

      <div className="image-card">
        <img src={parathyroidImg} alt="Parathyroid glands" width="200" />
      </div>

      <h3>Location</h3>
      <p>Four small glands on the posterior surface of the thyroid.</p>

      <h3>Hormone Secreted</h3>
      <ul>
        <li>Parathyroid Hormone (PTH)</li>
      </ul>

      <h3>Functions</h3>
      <ul>
        <li>Regulates calcium levels in blood</li>
        <li>Maintains nerve and muscle function</li>
      </ul>

      <h3>Clinical Relevance</h3>
      <p>
        Low calcium can cause muscle spasms and nervous system irritability.
      </p>

      <button onClick={goBack}>Back</button>
    </div>
  );
}

export default Parathyroid;
