import pituitaryImg from "../assets/pituitary.png";

function Pituitary({ goBack }) {
  return (
    <div className="page">
      <h1>Pituitary Gland</h1>

      <div className="image-card">
        <img
          src={pituitaryImg}
          alt="Pituitary gland"
          width="200"
        />
      </div>

      <p>
        The pituitary gland is known as the master gland of the endocrine system.
        It controls other glands and regulates growth, metabolism, and reproduction.
      </p>

      <h3>Hormones Secreted</h3>
      <ul>
        <li>Growth Hormone (GH)</li>
        <li>Thyroid-Stimulating Hormone (TSH)</li>
        <li>Adrenocorticotropic Hormone (ACTH)</li>
        <li>Prolactin</li>
      </ul>

      <h3>Functions</h3>
      <p>
        Regulates growth, controls other endocrine glands, and helps maintain
        balance in the body.
      </p>
<h3>Location</h3>
<p>
  The pituitary gland is located at the base of the brain,
  just below the hypothalamus.
</p>
<h3>Additional Details</h3>
<p>
  It is known as the “master gland” because it controls
  the activity of other endocrine glands.
</p>

      <button onClick={goBack}>
        Back
      </button>
    </div>
  );
}

export default Pituitary;
