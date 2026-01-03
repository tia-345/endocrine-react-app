import pituitaryImg from "../assets/pituitary.png";

function Pituitary({ goBack }) {
  return (
    <div className="page">
      <h1>Pituitary Gland</h1>

      <div className="image-card">
        <img src={pituitaryImg} alt="Pituitary" width="200" />
      </div>

      <h3>Location</h3>
      <p>
        Located at the base of the brain, just below the hypothalamus.
      </p>

      <h3>Anterior Pituitary (Adenohypophysis)</h3>
      <ul>
        <li>Growth Hormone (GH)</li>
        <li>Thyroid Stimulating Hormone (TSH)</li>
        <li>Adrenocorticotropic Hormone (ACTH)</li>
        <li>Follicle Stimulating Hormone (FSH)</li>
        <li>Luteinizing Hormone (LH)</li>
        <li>Prolactin</li>
      </ul>

      <h4>Functions</h4>
      <ul>
        <li>Controls growth and metabolism</li>
        <li>Regulates stress and reproduction</li>
      </ul>

      <h3>Posterior Pituitary (Neurohypophysis)</h3>
      <ul>
        <li>Antidiuretic Hormone (ADH)</li>
        <li>Oxytocin</li>
      </ul>

      <h4>Functions</h4>
      <ul>
        <li>Regulates water balance</li>
        <li>Involved in childbirth and bonding behavior</li>
      </ul>

      <h3>Disorders</h3>
      <ul>
        <li>Gigantism / Acromegaly</li>
        <li>Diabetes Insipidus</li>
      </ul>

      <button onClick={goBack}>Back</button>
    </div>
  );
}

export default Pituitary;
