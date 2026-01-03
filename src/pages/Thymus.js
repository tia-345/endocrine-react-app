import thymusImg from "../assets/thymus.png";

function Thymus({ goBack }) {
  return (
    <div className="page">
      <h1>Thymus Gland</h1>

      <div className="image-card">
        <img src={thymusImg} alt="Thymus gland" width="200" />
      </div>

      <h3>Location</h3>
      <p>Located in the upper chest behind the sternum.</p>

      <h3>Hormone Secreted</h3>
      <ul>
        <li>Thymosin</li>
      </ul>

      <h3>Functions</h3>
      <ul>
        <li>Development of immune system</li>
        <li>Maturation of T-lymphocytes</li>
      </ul>

      <h3>Developmental Importance</h3>
      <p>
        Most active in childhood. Shrinks after puberty.
      </p>

      <button onClick={goBack}>Back</button>
    </div>
  );
}

export default Thymus;
