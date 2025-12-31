import parathyroidImg from "../assets/parathyroid.png";

function Parathyroid({ goBack }) {
  return (
    <div className="page">
      <h1>Parathyroid Glands</h1>

     <div className="image-card">
      >
        <img
  src={parathyroidImg}
  alt="Parathyroid glands"
  width="200"
/>

      </div>

     <p>
  The parathyroid glands are small glands located behind the thyroid gland.
  They regulate calcium and phosphorus levels in the body.
</p>

<h3>Hormones Secreted</h3>
<ul>
  <li>Parathyroid Hormone (PTH)</li>
</ul>

<h3>Functions</h3>
<p>
  Maintains calcium balance, supports healthy bones and teeth,
  and helps regulate muscle and nerve function.
</p>
<h3>Location</h3>
<p>
  The parathyroid glands are small glands located behind
  the thyroid gland in the neck.
</p>
<h3>Additional Details</h3>
<p>
  They are essential for maintaining healthy calcium
  and phosphorus levels in the body.
</p>


      <button onClick={goBack}>
        Back
      </button>
    </div>
  );
}

export default Parathyroid;
